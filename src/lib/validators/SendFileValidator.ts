import {z} from "zod"

export const SendFileValidator = z.object({
    fileId: z.string(),
    type: z.string(),
    language: z.string(),
    country: z.string()
})