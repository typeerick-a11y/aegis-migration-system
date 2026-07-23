"use client";

/**
 * ==========================================================
 * AEGIS Migration System
 * File : HeroCombobox.tsx
 * Layer : Shared Component
 * Description : Searchable Hero Combobox
 * ==========================================================
 */

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import type { Hero } from "@/lib/types/hero";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeroComboboxProps {
  heroes: Hero[];
  value: string;
  onChange: (value: string) => void;
}

export function HeroCombobox({
  heroes,
  value,
  onChange,
}: HeroComboboxProps) {

  const [open, setOpen] =
    React.useState(false);

  const selectedHero =
    heroes.find(
      (hero) => hero.id === value
    );

  return (

    <Popover
      open={open}
      onOpenChange={setOpen}
    >

      <PopoverTrigger
        role="combobox"
        className="
          flex
          h-9
          w-full
          items-center
          justify-between
          rounded-4xl
          border
          border-border
          bg-background
          px-3
          text-sm
          transition-colors
          hover:bg-muted
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
        "
      >

        <span className="truncate">

          {selectedHero
            ? selectedHero.name
            : "Search hero..."}

        </span>

        <ChevronsUpDown
          className="h-4 w-4 shrink-0 opacity-50"
        />

      </PopoverTrigger>

      <PopoverContent
        className="w-[350px] p-0"
      >

        <Command>

          <CommandInput
            placeholder="Search hero..."
          />

          <CommandList>

            <CommandEmpty>
              Hero not found.
            </CommandEmpty>

            <CommandGroup>

              {heroes.map((hero) => (

                <CommandItem
                  key={hero.id}
                  value={hero.name}
                  onSelect={() => {

                    onChange(hero.id);

                    setOpen(false);

                  }}
                >

                  <Check
                    className={
                      value === hero.id
                        ? "mr-2 h-4 w-4 opacity-100"
                        : "mr-2 h-4 w-4 opacity-0"
                    }
                  />

                  {hero.name}

                </CommandItem>

              ))}

            </CommandGroup>

          </CommandList>

        </Command>

      </PopoverContent>

    </Popover>

  );

}