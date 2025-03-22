"use client"

import { useCallback, useMemo, useRef } from "react"
import { toast } from "sonner"

import { CLINICAL_TRIALS_API_MAXIMUM_PAGE_SIZE } from "@/lib/constants"
import { getStudiesPage } from "@/lib/studies"
import { columnDefs } from "@/components/columns"
import {
  ColDef,
  ColumnVisibleEvent,
  DataGrid,
  GetRowIdParams,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  SideBarDef,
  StatusBarDef,
} from "@/components/data-grid"
import { useStudiesTable } from "@/components/studies-table-provider"
import { Study } from "@/validators/study"

const getRowId = (params: GetRowIdParams<Study>) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  return params.data.protocolSection?.identificationModule?.nctId!
}

const defaultColDef: ColDef<Study> = {
  suppressMovable: false,
  resizable: true,
  sortable: false,
  columnChooserParams: {
    contractColumnSelection: true,
  },
  initialFlex: 1,
  flex: 1,
  minWidth: 100,
} as const

const statusBar: StatusBarDef = {
  statusPanels: [
    {
      statusPanel: "agSelectedRowCountComponent",
      align: "left",
    },
  ],
} as const

const sideBar: SideBarDef = {
  position: "right",
  toolPanels: [
    {
      id: "columns",
      labelDefault: "Columns",
      labelKey: "columns",
      iconKey: "columns",
      toolPanel: "agColumnsToolPanel",
      toolPanelParams: {
        contractColumnSelection: true,
        suppressPivotMode: true,
        suppressRowGroups: true,
        suppressValues: true,
        suppressPivots: true,
      },
    },
    "filters",
  ],
} as const

const onColumnVisible = (event: ColumnVisibleEvent<Study>) => {
  event.api.refreshServerSide({ purge: true })
}

export function StudiesTable() {
  const { gridRef, isPaginationEnabled } = useStudiesTable()
  const pageTokensRef = useRef<Map<number, string>>(new Map())

  const getRows = useCallback(
    async (params: IServerSideGetRowsParams<Study>) => {
      const { startRow, endRow } = params.request

      if (startRow === undefined || endRow === undefined) {
        params.fail()
        return
      }

      try {
        let pageToken: string | undefined

        if (startRow > 0) {
          pageToken = pageTokensRef.current.get(startRow)

          if (!pageToken) {
            throw new Error("Page token not found")
          }
        }

        // Fields
        const columnState = params.api.getColumnState()
        const visibleColumnIds = columnState.reduce((acc, col) => {
          if (col.hide && col.colId !== "NCTId") {
            return acc
          }
          acc.push(col.colId)
          return acc
        }, [] as string[])
        const fields =
          columnState.length === visibleColumnIds.length
            ? undefined
            : visibleColumnIds

        const { studies, totalCount, nextPageToken } = await getStudiesPage({
          fields,
          pageToken,
          pageSize: CLINICAL_TRIALS_API_MAXIMUM_PAGE_SIZE,
          countTotal: true,
        })

        if (nextPageToken) {
          pageTokensRef.current.set(endRow, nextPageToken)
        }
        params.success({ rowData: studies, rowCount: totalCount })
      } catch (error) {
        console.error(error)
        toast.error(
          `Unable to load rows ${(startRow + 1).toLocaleString()} to ${endRow.toLocaleString()}.`
        )
        params.fail()
      }
    },
    []
  )

  const serverSideDatasource: IServerSideDatasource<Study> = useMemo(
    () => ({ getRows }),
    [getRows]
  )

  return (
    <DataGrid<Study>
      ref={gridRef}
      defaultColDef={defaultColDef}
      columnDefs={columnDefs}
      rowModelType="serverSide"
      serverSideDatasource={serverSideDatasource}
      suppressServerSideFullWidthLoadingRow={true}
      getRowId={getRowId}
      statusBar={statusBar}
      suppressDragLeaveHidesColumns={true}
      pagination={isPaginationEnabled}
      paginationPageSize={100}
      paginationPageSizeSelector={[20, 50, 100, 200, 500, 1000]}
      maxBlocksInCache={10}
      cacheBlockSize={CLINICAL_TRIALS_API_MAXIMUM_PAGE_SIZE}
      sideBar={sideBar}
      onColumnVisible={onColumnVisible}
    />
  )
}
