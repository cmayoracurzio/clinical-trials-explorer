import { z } from "zod"

import { studySchema } from "@/validators/study"

export const studiesPageSchema = z.object({
  nextPageToken: z.string().optional(),
  studies: z.array(studySchema),
  totalCount: z.number().int().optional(),
})

export type StudiesPage = z.infer<typeof studiesPageSchema>
