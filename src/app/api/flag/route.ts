import { db } from '@/db'
import { openai } from '@/lib/openai'
import { getPineconeClient } from '@/lib/pinecone'
import { SendFileValidator } from '@/lib/validators/SendFileValidator'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { NextRequest } from 'next/server'

import { OpenAIStream, StreamingTextResponse } from 'ai'

export const POST = async (req: NextRequest) => {
  // endpoint for asking a question to a pdf file

  const body = await req.json()

  const { getUser } = getKindeServerSession()
  const user = getUser()

  const { id: userId } = user

  if (!userId)
    return new Response('Unauthorized', { status: 401 })

  const { fileId, type : ftype, language : flanguage, country : fcountry } =
    SendFileValidator.parse(body)

  const file = await db.file.findFirst({
    where: {
      id: fileId,
      userId,
    },
  })

  const message = `Document's Type: ${ftype} + Document's Language: ${flanguage} + Document's Country`; 

  if (!file)
    return new Response('Not found', { status: 404 })

  await db.file.update({
    where: {
        id: fileId
    },
    data: {
      type: ftype,
      language: flanguage,
      country: fcountry
    },
  })

  // 1: vectorize message
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  })

  const pinecone = await getPineconeClient()
  const pineconeIndex = pinecone.Index('attorneysace')

  const vectorStore = await PineconeStore.fromExistingIndex(
    embeddings,
    {
      pineconeIndex,
      namespace: file.id,
    }
  )

  const results = await vectorStore.similaritySearch(
    message,
    4
  )

  const red_flags = `Ambiguous Language: Vague or unclear terms, phrases, or provisions that could lead to different interpretations or disputes.

  Inconsistent Terms: Inconsistencies in language, definitions, or provisions across different parts of the document or with other related documents.
  
  Omitted Clauses: Important clauses that are missing, such as termination, dispute resolution, or indemnification provisions.
  
  Unreasonable Obligations: Terms that impose unreasonable or one-sided obligations, which could be overly burdensome or unfair to one party.
  
  Lack of Termination Provisions: Missing or inadequate clauses addressing how and when the agreement can be terminated.
  
  Unclear Payment Terms: Vague or missing details regarding payment amounts, schedules, and methods, which can lead to disputes.
  
  Confidentiality Breaches: Provisions that do not adequately protect sensitive or proprietary information.
  
  Excessive Liabilities: Clauses that expose one party to excessive liabilities or risks beyond what is reasonable.
  
  Unbalanced Indemnification Clauses: Provisions that place an unfair burden of indemnification on one party without a clear or fair balance.
  
  Unilateral Amendments: Provisions allowing one party to unilaterally modify terms without the consent of the other party.
  
  Jurisdiction and Venue Issues: Clauses that designate unfavorable or inconvenient legal jurisdictions or venues for dispute resolution.
  
  Inadequate Representations and Warranties: Missing or incomplete representations and warranties that provide assurance regarding key aspects of the agreement.
  
  Non-Compliance with Legal Standards: Provisions that do not comply with applicable laws or regulations.
  
  Improper Execution: Errors in signing, witnessing, or notarizing the document that may affect its validity.
  
  Missing Attachments or Exhibits: References to attachments or exhibits that are missing from the document.
  
  Conflicts of Interest: Provisions or relationships that suggest potential conflicts of interest that have not been disclosed or addressed.
  
  Intellectual Property Rights Issues: Provisions that do not adequately address intellectual property rights, ownership, or licensing.
  
  Non-Disclosure of Risks: Failure to disclose known risks or material information relevant to the agreement.
  
  Restrictive Covenants: Overly broad non-compete, non-solicitation, or non-disclosure clauses that may be unenforceable.
  
  Lack of Force Majeure Clause: Missing or inadequate clauses addressing unforeseen events that could prevent performance.
  
  Unreasonable Timeframes: Unfair or unrealistic deadlines or timeframes for fulfilling obligations.
  
  Inadequate Dispute Resolution: Missing or one-sided clauses regarding dispute resolution methods, such as arbitration or mediation.
  
  Unclear Scope of Work: Vagueness about the services or deliverables, leading to potential disputes over expectations.
  
  Termination Fees: Excessive fees or penalties for termination that may be seen as punitive.
  
  Undefined Key Terms: Lack of clarity or definition for important terms that could lead to misunderstandings.
  
  Fiduciary Duties: Provisions that do not adequately address fiduciary responsibilities, particularly in agreements involving financial management.
  
  Compliance with Standards: Missing provisions regarding adherence to industry standards or certifications.
  
  Assignment and Delegation: Unclear or unfair terms regarding the assignment of rights or delegation of duties under the agreement.
  
  Unreasonable Insurance Requirements: Imposing excessive or unclear insurance requirements that may be difficult for one party to meet.
  
  Warranty Limitations: Provisions that limit or disclaim warranties in ways that may be unfair to one party.
  
  Governing Law: Unfavorable or unclear choice of governing law that could impact the interpretation of the agreement.
  
  Prohibited Practices: Provisions that allow for or do not address potential prohibited practices under applicable laws.`

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          `You are a Legal Assistant for a professional lawyer, always respond in a precise and professional tone. The Question is identify the various legal red flags in the context provided which is this type of document : ${ftype}, written in this language : ${flanguage}, and originates from this country : ${fcountry}. Use this list of legal red flags : ${red_flags} as a base and you can expand on it. RESPOND BY PROVIDING THE LEGAL RED FLAG YOU HAVE NOTICED IN THE CONTEXT PROVIDED, WITH THE SUMMARY DESCRIBING HOW THE LEGAL RED FLAG IS IN THE CONTEXT PROVIDED AND FINALLY PROVIDE PROPOSED CHANGES TO THE RED FLAGS. Use the following pieces of context to answer the Question in markdown format and follow the structure when responding to the Question.`,
      },
      {
        role: 'user',
        content: `You are a Legal Assistant for a professional lawyer, always respond in a precise and professional tone. The Question is identify the various legal red flags in the context provided which is this type of document : ${ftype}, written in this language : ${flanguage}, and originates from this country : ${fcountry}. Use this list of legal red flags : ${red_flags} as a base and you can expand on it. RESPOND BY PROVIDING THE LEGAL RED FLAG YOU HAVE NOTICED IN THE CONTEXT PROVIDED, WITH THE SUMMARY DESCRIBING HOW THE LEGAL RED FLAG IS IN THE CONTEXT PROVIDED AND FINALLY PROVIDE PROPOSED CHANGES TO THE RED FLAGS. Use the following pieces of context to answer the Question in markdown format and follow the structure when responding to the Question. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.

        \n----------------\n

        STRUCTURE:
        [[LEGAL RED FLAG]]
        [[SUMMARY OF LEGAL RED FLAG]]
        [[PROPOSED CHANGES TO LEGAL RED FLAG]]

        \n----------------\n

        CONTEXT:
        ${results.map((r) => r.pageContent).join('\n\n')}
        `
      },
    ],
  })

  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      await db.flag.create({
        data: {
          text: completion,
          fileId,
          userId,
        },
      })
    },
  })

  return new StreamingTextResponse(stream)
}
