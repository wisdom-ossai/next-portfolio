"use client";

import { cn } from "@wiz/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none  disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        outline:
          "bg-slate-900 text-white hover:bg-slate-900 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 boder border-slate-200 hover:bg-slate-100 dark:border-slate-700",
        bordered:
          "h-14 text-sm font-titleFont border border-primary dark:border-textGreen rounded-md text-primary dark:text-textGreen tracking-wide hover:bg-primary-light dark:hover:bg-hoverColor duration-300",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:undeline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, variant, loading, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      disabled={loading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
