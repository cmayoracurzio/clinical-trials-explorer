"use client"

import { ComponentPropsWithRef } from "react"
import {
  CellStyleModule,
  ColumnApiModule,
  ColumnAutoSizeModule,
  DateFilterModule,
  ModuleRegistry,
  NumberFilterModule,
  PaginationModule,
  StatusPanelDef,
  TextFilterModule,
  themeQuartz,
  ValidationModule,
} from "ag-grid-community"
import {
  ColumnMenuModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  ServerSideRowModelApiModule,
  ServerSideRowModelModule,
  SetFilterModule,
  SideBarModule,
  StatusBarModule,
} from "ag-grid-enterprise"
import { AgGridReact } from "ag-grid-react"

ModuleRegistry.registerModules([
  CellStyleModule,
  ColumnApiModule,
  ColumnAutoSizeModule,
  ColumnMenuModule,
  ColumnsToolPanelModule,
  DateFilterModule,
  FiltersToolPanelModule,
  NumberFilterModule,
  PaginationModule,
  ServerSideRowModelApiModule,
  ServerSideRowModelModule,
  SetFilterModule,
  SideBarModule,
  StatusBarModule,
  TextFilterModule,
  ValidationModule,
])

const theme = themeQuartz.withParams({
  wrapperBorder: false,
  wrapperBorderRadius: "0px",
  browserColorScheme: "inherit",
  fontFamily: "var(--font-geist-sans)",
  backgroundColor: "hsl(var(--background))",
  foregroundColor: "hsl(var(--foreground))",
  borderColor: "hsl(var(--border))",
  accentColor: "hsl(var(--muted-foreground))",
  checkboxCheckedBackgroundColor: "hsl(var(--primary))",
  textColor: "hsl(var(--foreground))",
  subtleTextColor: "hsl(var(--muted-foreground))",
  cellEditingBorder: {
    style: "solid",
    width: "1px",
    color: "hsl(var(--primary))",
  },
  cellEditingShadow: false,
  valueChangeValueHighlightBackgroundColor: "hsl(var(--primary) / 0.4)",
})

export type {
  ColDef,
  ColGroupDef,
  ColumnVisibleEvent,
  GetRowIdParams,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  SideBarDef,
} from "ag-grid-community"

export type { AgGridReact } from "ag-grid-react"

export type StatusBarDef = {
  statusPanels: StatusPanelDef[]
}

type DataGridProps<T> = ComponentPropsWithRef<typeof AgGridReact<T>> & {
  statusBar?: StatusBarDef
}

export function DataGrid<T>({
  ref,
  rowData,
  loading,
  getRowId,
  statusBar,
  columnDefs,
  rowSelection,
  cellSelection,
  suppressDragLeaveHidesColumns,
  ...rest
}: DataGridProps<T>) {
  return (
    <div className="size-full">
      <AgGridReact<T>
        ref={ref}
        theme={theme}
        rowData={rowData}
        loading={loading}
        columnDefs={columnDefs}
        getRowId={getRowId}
        rowSelection={rowSelection}
        cellSelection={cellSelection}
        suppressDragLeaveHidesColumns={suppressDragLeaveHidesColumns}
        statusBar={statusBar}
        {...rest}
      />
    </div>
  )
}
