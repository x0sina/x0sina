// Adapted from shadcn/ui's MIT-licensed Button. See THIRD_PARTY_NOTICES.md.
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva("ui-button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0", {
  variants: {
    variant: {default: "button-primary", outline: "button-outline", ghost: "button-ghost"},
    size: {default: "h-12 px-5", sm: "h-10 px-4", icon: "size-11 p-0"},
  }, defaultVariants: {variant: "default", size: "default"},
})
function Button({className, variant, size, asChild = false, ...props}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {asChild?: boolean}) {
  const Comp = asChild ? Slot : "button"
  return <Comp data-slot="button" className={cn(buttonVariants({variant, size, className}))} {...props} />
}
export { Button, buttonVariants }
