"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react"

import { AgGridReact } from "@/components/data-grid"
import { Study } from "@/validators/study"

type StudiesContextValue = {
  gridRef: RefObject<AgGridReact<Study> | null>
  isPaginationEnabled: boolean
  setIsPaginationEnabled: Dispatch<SetStateAction<boolean>>
}

const StudiesContext = createContext<StudiesContextValue | undefined>(undefined)

type StudiesTableProviderProps = {
  children: ReactNode
}

export function StudiesTableProvider({ children }: StudiesTableProviderProps) {
  const gridRef = useRef<AgGridReact<Study>>(null)
  const [isPaginationEnabled, setIsPaginationEnabled] = useState<boolean>(true)

  const contextValue = useMemo(
    () => ({ gridRef, isPaginationEnabled, setIsPaginationEnabled }),
    [gridRef, isPaginationEnabled, setIsPaginationEnabled]
  )

  return (
    <StudiesContext.Provider value={contextValue}>
      {children}
    </StudiesContext.Provider>
  )
}

export const useStudiesTable = () => {
  const context = useContext(StudiesContext)

  if (!context) {
    throw new Error(
      "useStudiesTable must be used within a StudiesTableProvider"
    )
  }

  return context
}
