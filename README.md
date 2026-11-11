# `@shivansh/mini-app-ui`

Shared UI kit for [Shivansh's Mini Apps](https://shivanshs-mini-apps.vercel.app) — portal, Expense Splitter, and future apps.

## Base

- **Radix UI** primitives (Select, Dialog/Sheet) for accessibility
- **CSS variables** for theme customization (`--mau-*`)
- House components: `Loader`, `Button`, `TextLink`, `Select`, `Sheet`

## Install

```bash
# Git dependency (no npm publish required)
npm install github:acousticclown/mini-app-ui#main
```

Or from a local checkout / monorepo workspace:

```bash
npm install file:../mini-app-ui
```

## Use

```tsx
import "@shivansh/mini-app-ui/styles.css";
import { Loader, Button, TextLink, Select, Sheet } from "@shivansh/mini-app-ui";

export function Example() {
  return (
    <>
      <Loader label="Loading groups…" />
      <Button variant="primary">Create group</Button>
      <TextLink onClick={() => {}}>Use password instead</TextLink>
    </>
  );
}
```

## Customize theme

Override CSS variables in the host app:

```css
:root {
  --mau-accent: #c8f542;
  --mau-ink: #10140f;
  --mau-paper: #f2f6ef;
  --mau-font: var(--font-figtree), sans-serif;
}
```

Map host tokens to kit tokens (Expense Splitter example):

```css
:root {
  --mau-ink: var(--ink);
  --mau-accent: var(--accent);
  --mau-accent-deep: var(--accent-deep);
}
```

## Loader rule

Use `<Loader />` everywhere instead of bare “Loading…” text so auth boots, group loads, and future apps share one motion language.

## Build

```bash
npm install
npm run build
```
