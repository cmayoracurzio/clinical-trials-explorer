"use client"

import { useCallback } from "react"

import { CLINICAL_TRIALS_API_ABOUT_URL } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import {
  BookOpenIcon,
  InfinityIcon,
  InfoIcon,
  ReloadIcon,
} from "@/components/ui/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useStudiesTable } from "@/components/studies-table-provider"

export function StudiesOptions() {
  const { gridRef, isPaginationEnabled, setIsPaginationEnabled } =
    useStudiesTable()

  const handleTogglePagination = useCallback(() => {
    setIsPaginationEnabled((prev) => !prev)
  }, [setIsPaginationEnabled])

  const handleRetryFailedPages = useCallback(() => {
    gridRef.current?.api.retryServerSideLoads()
  }, [gridRef])

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={handleTogglePagination}
            className="size-8"
          >
            {isPaginationEnabled ? <BookOpenIcon /> : <InfinityIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Toggle pagination mode</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={handleRetryFailedPages}
            className="size-8"
          >
            <ReloadIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Retry failed rows</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" className="size-8" asChild>
            <a href={CLINICAL_TRIALS_API_ABOUT_URL} target="_blank">
              <InfoIcon />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Visit API website</TooltipContent>
      </Tooltip>
    </>
  )
}
