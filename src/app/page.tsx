import { SITE_NAME } from "@/lib/constants"
import { getStudiesApiVersion } from "@/lib/studies"
import { StudiesOptions } from "@/components/studies-options"
import { StudiesTable } from "@/components/studies-table"
import { StudiesTableProvider } from "@/components/studies-table-provider"
import { ToggleThemeButton } from "@/components/toggle-theme-button"

export default async function Page() {
  const { dataTimestamp } = await getStudiesApiVersion()

  const studiesApiLastUpdatedAt = dataTimestamp
    ? new Date(dataTimestamp).toUTCString()
    : "unknown"

  return (
    <StudiesTableProvider>
      <header className="flex items-center gap-2 border-b p-2">
        <h1 className="flex-1 truncate text-sm font-medium">
          {SITE_NAME} (last updated: {studiesApiLastUpdatedAt})
        </h1>
        <ToggleThemeButton />
        <StudiesOptions />
      </header>
      <StudiesTable />
    </StudiesTableProvider>
  )
}
