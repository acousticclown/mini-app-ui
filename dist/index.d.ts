import * as React from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

type LoaderProps = {
    label?: string;
    className?: string;
};
/** Common loader for all mini-apps — use instead of bare “Loading…” text. */
declare function Loader({ label, className }: LoaderProps): React.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "ink" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
};
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "primary" | "ink" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;

type TextLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
};
/** Underlined link affordance for secondary actions / mode toggles. */
declare const TextLink: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;

type SelectOption = {
    value: string;
    label: string;
};
type SelectProps = {
    label: string;
    value: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    id?: string;
    className?: string;
};
declare function Select({ label, value, options, onChange, placeholder, required, id, className, }: SelectProps): React.JSX.Element;

type SheetProps = {
    open: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
};
declare function Sheet({ open, title, onClose, children, className }: SheetProps): React.JSX.Element;

type EmptyStageProps = {
    title: string;
    body?: string;
    action?: React.ReactNode;
    className?: string;
};
/** Wry empty state — one line, optional CTA. Reuse across mini-apps. */
declare function EmptyStage({ title, body, action, className }: EmptyStageProps): React.JSX.Element;

export { Button, type ButtonProps, EmptyStage, type EmptyStageProps, Loader, type LoaderProps, Select, type SelectOption, type SelectProps, Sheet, type SheetProps, TextLink, type TextLinkProps };
