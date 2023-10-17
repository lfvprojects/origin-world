'use client'
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      // ONLY ALLOW ENGLISH ALPHABET (CAPS AND NO CAPS) AND SPACE
      event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z ]/g, "");
    };

    return (
      <input
        type={type}
        spellCheck='false'
        className={cn(
          "flex h-10 w-full rounded-lg bg-offwhite px-4 font-medium text-lightgray outline-none focus:text-gray",
          className
        )}
        ref={ref}
        onInput={handleInput}
        {...props}
      />        
    )
  }
)
Input.displayName = "Input"

export { Input }
