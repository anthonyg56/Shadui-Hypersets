"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Small } from "../ui/typography"
import { Button } from "../ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { cn } from "@/lib/utils"
import { PresetCardListSort } from "../cards/preset-list"
import { useEffect } from "react"

type Props = {
  sort: PresetCardListSort;
  setSort: React.Dispatch<React.SetStateAction<PresetCardListSort>>;
}
export function SortPresetsDropdownMenu({ sort, setSort }: Props) {
  const [open, setOpen] = React.useState<boolean>(false)

  // useEffect(() => {}, [imageDirection])
  
  function handleImageDirection(e: any) {
    e.preventDefault()
    setOpen(!!open)
  }


  return (
    <div className="flex flex-row ml-auto items-center">
      <Small classNames="mr-2">Sort By</Small>
      <DropdownMenu defaultOpen={open} open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} onClick={handleImageDirection}>
            {sort} <FontAwesomeIcon icon={faChevronDown} className={cn([
              "ml-2 w-4 h-4",
              {
                "rotate-180": open === true,
              }
            ])} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={sort} onValueChange={(value: PresetCardListSort) => setSort}>
            <DropdownMenuRadioItem value="Most Popular">Most Popular</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Most Recent">Most Recent</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Most Downloads">Most Downloads</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
