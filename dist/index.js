// src/lib/cn.ts
import { clsx } from "clsx";
function cn(...inputs) {
  return clsx(inputs);
}

// src/components/Loader.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Loader({ label = "Loading\u2026", className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("mau-loader", className),
      role: "status",
      "aria-live": "polite",
      "aria-busy": "true",
      children: [
        /* @__PURE__ */ jsx("span", { className: "mau-loader-orbit", "aria-hidden": true }),
        /* @__PURE__ */ jsx("span", { className: "mau-loader-label", children: label })
      ]
    }
  );
}

// src/components/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva("mau-btn", {
  variants: {
    variant: {
      primary: "mau-btn-primary",
      ink: "mau-btn-ink",
      ghost: "mau-btn-ghost"
    }
  },
  defaultVariants: { variant: "primary" }
});
var Button = React.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx2(
      Comp,
      {
        className: cn(buttonVariants({ variant }), className),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/TextLink.tsx
import * as React2 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { jsx as jsx3 } from "react/jsx-runtime";
var TextLink = React2.forwardRef(
  ({ className, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot2 : "button";
    return /* @__PURE__ */ jsx3(
      Comp,
      {
        ref,
        type: asChild ? void 0 : type,
        className: cn("mau-text-link", className),
        ...props
      }
    );
  }
);
TextLink.displayName = "TextLink";

// src/components/Select.tsx
import * as React3 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function Select({
  label,
  value,
  options,
  onChange,
  placeholder = "Choose\u2026",
  required,
  id,
  className
}) {
  const autoId = React3.useId();
  const fieldId = id || autoId;
  return /* @__PURE__ */ jsxs2("div", { className: cn("mau-select", className), children: [
    /* @__PURE__ */ jsxs2("label", { className: "mau-label", htmlFor: fieldId, children: [
      label,
      required ? " *" : ""
    ] }),
    /* @__PURE__ */ jsxs2(SelectPrimitive.Root, { value, onValueChange: onChange, children: [
      /* @__PURE__ */ jsxs2(SelectPrimitive.Trigger, { id: fieldId, className: "mau-select-trigger", children: [
        /* @__PURE__ */ jsx4(SelectPrimitive.Value, { placeholder }),
        /* @__PURE__ */ jsx4(SelectPrimitive.Icon, { "aria-hidden": true, children: /* @__PURE__ */ jsx4("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M3.5 6l4.5 4.5L12.5 6",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsx4(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx4(
        SelectPrimitive.Content,
        {
          className: "mau-select-content",
          position: "popper",
          sideOffset: 6,
          children: /* @__PURE__ */ jsx4(SelectPrimitive.Viewport, { children: options.map((o) => /* @__PURE__ */ jsx4(
            SelectPrimitive.Item,
            {
              value: o.value,
              className: "mau-select-item",
              children: /* @__PURE__ */ jsx4(SelectPrimitive.ItemText, { children: o.label })
            },
            o.value
          )) })
        }
      ) })
    ] })
  ] });
}

// src/components/Sheet.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Sheet({ open, title, onClose, children, className }) {
  return /* @__PURE__ */ jsx5(Dialog.Root, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxs3(Dialog.Portal, { children: [
    /* @__PURE__ */ jsx5(Dialog.Overlay, { className: "mau-sheet-overlay" }),
    /* @__PURE__ */ jsxs3(Dialog.Content, { className: cn("mau-sheet-content", className), children: [
      /* @__PURE__ */ jsxs3(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.75rem",
            marginBottom: "1rem"
          },
          children: [
            /* @__PURE__ */ jsx5(Dialog.Title, { style: { margin: 0, fontSize: "1.35rem", fontWeight: 700 }, children: title }),
            /* @__PURE__ */ jsx5(Dialog.Close, { asChild: true, children: /* @__PURE__ */ jsx5(Button, { type: "button", variant: "ghost", style: { padding: "0.5rem 0.75rem" }, children: "Close" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx5("div", { style: { minHeight: 0, overflowY: "auto" }, children })
    ] })
  ] }) });
}

// src/components/EmptyStage.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function EmptyStage({ title, body, action, className }) {
  return /* @__PURE__ */ jsx6("div", { className: cn("mau-empty", className), role: "status", children: /* @__PURE__ */ jsxs4("div", { className: "mau-empty-frame", children: [
    /* @__PURE__ */ jsx6("p", { className: "mau-empty-title", children: title }),
    body ? /* @__PURE__ */ jsx6("p", { className: "mau-empty-body", children: body }) : null,
    action ? /* @__PURE__ */ jsx6("div", { className: "mau-empty-action", children: action }) : null
  ] }) });
}
export {
  Button,
  EmptyStage,
  Loader,
  Select,
  Sheet,
  TextLink
};
