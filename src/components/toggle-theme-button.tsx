"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DarkThemeIcon,
  LightThemeIcon,
  SystemThemeIcon,
} from "@/components/ui/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ToggleThemeButton() {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case "system":
          return "light"
        case "light":
          return "dark"
        default:
          return "system"
      }
    })
  }, [setTheme])

  const Icon =
    !isMounted || theme === "system"
      ? SystemThemeIcon
      : theme === "light"
        ? LightThemeIcon
        : DarkThemeIcon

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          onClick={toggleTheme}
          className="size-8"
        >
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">Toggle theme</TooltipContent>
    </Tooltip>
  )
}
