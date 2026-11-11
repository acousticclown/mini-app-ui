import * as React from "react";
import { cn } from "../lib/cn";

export type LoaderProps = {
  label?: string;
  className?: string;
};

/** Common loader for all mini-apps — use instead of bare “Loading…” text. */
export function Loader({ label = "Loading…", className }: LoaderProps) {
  return (
    <div
      className={cn("mau-loader", className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="mau-loader-orbit" aria-hidden />
      <span className="mau-loader-label">{label}</span>
    </div>
  );
}
