import * as React from "react";
import { cn } from "../lib/cn";

export type EmptyStageProps = {
  title: string;
  body?: string;
  action?: React.ReactNode;
  className?: string;
};

/** Wry empty state — one line, optional CTA. Reuse across mini-apps. */
export function EmptyStage({ title, body, action, className }: EmptyStageProps) {
  return (
    <div className={cn("mau-empty", className)} role="status">
      <div className="mau-empty-frame">
        <p className="mau-empty-title">{title}</p>
        {body ? <p className="mau-empty-body">{body}</p> : null}
        {action ? <div className="mau-empty-action">{action}</div> : null}
      </div>
    </div>
  );
}
