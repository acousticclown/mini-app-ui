import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

export type TextLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

/** Underlined link affordance for secondary actions / mode toggles. */
export const TextLink = React.forwardRef<HTMLButtonElement, TextLinkProps>(
  ({ className, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn("mau-text-link", className)}
        {...props}
      />
    );
  },
);
TextLink.displayName = "TextLink";
