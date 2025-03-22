import { z } from "zod"

export const versionSchema = z.object({
  apiVersion: z.string(),
  dataTimestamp: z.string().optional(),
})

export type ApiVersion = z.infer<typeof versionSchema>
