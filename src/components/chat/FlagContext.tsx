import {
  ReactNode,
  createContext,
  useRef,
  useState,
} from 'react'
import { useToast } from '../ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import { trpc } from '@/app/_trpc/client'
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query'

type StreamResponse = {
  addFlag: () => void
  type: string
  language: string
  country: string
  isLoading: boolean
}

export const FlagContext = createContext<StreamResponse>({
  addFlag: () => {},
  type: '',
  language: '',
  country: '',
  isLoading: false,
})

interface Props {
  fileId: string
  children: ReactNode
}

export const FlagContextProvider = ({
  fileId,
  children,
}: Props) => {
  const [type, setType] = useState<string>('')
  const [language, setLanguage] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const utils = trpc.useContext()

  const { toast } = useToast()

  const { mutate: sendFlag } = useMutation({
    mutationFn: async ({
      type, language, country
    }: {
      type: string, language: string, country: string
    }) => {
      const response = await fetch('/api/flag', {
        method: 'POST',
        body: JSON.stringify({
          fileId,
          type,
          language,
          country
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      return response.body
    },
    onMutate: async ({ type, language, country }) => {
    },
    onSuccess: async (stream) => {
      setIsLoading(false)

      if (!stream) {
        return toast({
          title: 'There was a problem sending this message',
          description:
            'Please refresh this page and try again',
          variant: 'destructive',
        })
      }

      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let done = false

      // accumulated response
      let accResponse = ''

      while (!done) {
        const { value, done: doneReading } =
          await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)

        accResponse += chunkValue

        // append chunk to the actual message
        utils.getFileMessages.setInfiniteData(
          { fileId, limit: INFINITE_QUERY_LIMIT },
          (old) => {
            if (!old) return { pages: [], pageParams: [] }

            let isAiResponseCreated = old.pages.some(
              (page) =>
                page.messages.some(
                  (message) => message.id === 'ai-response'
                )
            )

            let updatedPages = old.pages.map((page) => {
              if (page === old.pages[0]) {
                let updatedMessages

                if (!isAiResponseCreated) {
                  updatedMessages = [
                    {
                      createdAt: new Date().toISOString(),
                      id: 'ai-response',
                      text: accResponse,
                      isUserMessage: false,
                    },
                    ...page.messages,
                  ]
                } else {
                  updatedMessages = page.messages.map(
                    (message) => {
                      if (message.id === 'ai-response') {
                        return {
                          ...message,
                          text: accResponse,
                        }
                      }
                      return message
                    }
                  )
                }

                return {
                  ...page,
                  messages: updatedMessages,
                }
              }

              return page
            })

            return { ...old, pages: updatedPages }
          }
        )
      }
    },

    onError: (_, __, context) => {
    },
    onSettled: async () => {
    },
  })

  const addFlag = () => sendFlag({ type, language, country })

  return (
    <FlagContext.Provider
      value={{
        addFlag,
        type,
        language,
        country,
        isLoading,
      }}>
      {children}
    </FlagContext.Provider>
  )
}
