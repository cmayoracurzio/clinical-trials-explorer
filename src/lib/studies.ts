import { CLINICAL_TRIALS_API_BASE_URL } from "@/lib/constants"
import { StudiesPage, studiesPageSchema } from "@/validators/studies"
import { Study, studySchema } from "@/validators/study"
import { ApiVersion, versionSchema } from "@/validators/version"

export async function getStudiesApiVersion(): Promise<ApiVersion> {
  const response = await fetch(`${CLINICAL_TRIALS_API_BASE_URL}/version`, {
    method: "GET",
    next: {
      revalidate: 0,
    },
  })

  const data = await response.json()
  return versionSchema.parse(data)
}

export async function getStudy(nctId: string): Promise<Study> {
  const response = await fetch(
    `${CLINICAL_TRIALS_API_BASE_URL}/studies/${nctId}`,
    {
      method: "GET",
      next: {
        revalidate: 0,
      },
    }
  )

  const data = await response.json()
  return studySchema.parse(data)
}

export type GetStudiesPageFilter = {
  overallStatus?: string[]
  geo?: string
  ids?: string[]
  advanced?: string
  synonyms?: string[]
}

export type GetStudiesPageQuery = {
  cond?: string
  term?: string
  locn?: string
  titles?: string
  intr?: string
  outc?: string
  spons?: string
  lead?: string
  id?: string
  patient?: string
}

type GetStudiesPageParams = {
  format?: "csv" | "json"
  markupFormat?: "markdown" | "legacy"
  query?: GetStudiesPageQuery
  filter?: GetStudiesPageFilter
  aggFilters?: string
  geoDecay?: string
  fields?: string[] // E.g., ["protocolSection.identificationModule", "derivedSection"], different nomenclature when requesting CSV format (e.g., ["NCT Number"])
  sort?: string[] // Maximum 2 items
  pageToken?: string
  pageSize?: number
  countTotal?: boolean
}

// Function overloads
export async function getStudiesPage(
  params: GetStudiesPageParams & { format: "csv" }
): Promise<string>

export async function getStudiesPage(
  params: GetStudiesPageParams & { format?: "json" }
): Promise<StudiesPage>

export async function getStudiesPage({
  format = "json",
  markupFormat = "markdown",
  query,
  filter,
  aggFilters,
  geoDecay,
  fields,
  sort,
  pageToken,
  pageSize = 10,
  countTotal = false,
}: GetStudiesPageParams): Promise<string | StudiesPage> {
  const queryParams = new URLSearchParams()

  if (format) {
    queryParams.set("format", format)
  }

  if (markupFormat) {
    queryParams.set("markupFormat", markupFormat)
  }

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      queryParams.set(`query.${key}`, value)
    })
  }

  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      if (typeof value === "string") {
        queryParams.set(`filter.${key}`, value)
      } else {
        queryParams.set(`filter.${key}`, value.join(","))
      }
    })
  }

  if (aggFilters) {
    queryParams.set("aggFilters", aggFilters)
  }

  if (geoDecay) {
    queryParams.set("geoDecay", geoDecay)
  }

  if (fields) {
    queryParams.set("fields", fields.join(","))
  }

  if (sort) {
    queryParams.set("sort", sort.join(","))
  }

  if (pageToken) {
    queryParams.set("pageToken", pageToken)
  }

  if (pageSize) {
    queryParams.set("pageSize", pageSize.toString())
  }

  if (countTotal) {
    queryParams.set("countTotal", countTotal.toString())
  }

  const url = `${CLINICAL_TRIALS_API_BASE_URL}/studies?${queryParams.toString()}`
  const response = await fetch(url, {
    method: "GET",
    next: {
      revalidate: 0,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch studies")
  }

  if (format === "csv") {
    return response.text()
  }

  const data = await response.json()
  const parseResult = studiesPageSchema.safeParse(data)

  if (!parseResult.success) {
    throw new Error("Failed to parse studies")
  }

  return parseResult.data
}
