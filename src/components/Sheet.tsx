"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../lib/cn";
import { Button } from "./Button";

export type SheetProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Sheet({ open, title, onClose, children, className }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="mau-sheet-overlay" />
        <Dialog.Content className={cn("mau-sheet-content", className)}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <Dialog.Title style={{ margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button type="button" variant="ghost" style={{ padding: "0.5rem 0.75rem" }}>
                Close
              </Button>
            </Dialog.Close>
          </div>
          <div style={{ minHeight: 0, overflowY: "auto" }}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
