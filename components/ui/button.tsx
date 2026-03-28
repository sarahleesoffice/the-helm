import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'outline' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const variants: Record<Variant, string> = {
  default:
    'bg-[linear-gradient(135deg,rgba(0,169,206,0.98),rgba(10,47,79,0.96))] text-white shadow-[0_18px_50px_rgba(0,169,206,0.18)] hover:brightness-110',
  outline:
    'border border-[rgba(0,169,206,0.22)] bg-white/82 text-[#0a2f4f] hover:bg-white',
  ghost:
    'bg-transparent text-[#0a2f4f] hover:bg-[rgba(0,169,206,0.08)]',
};

export function Button({ className, variant = 'default', href, children, ...props }: ButtonProps & { children: React.ReactNode }) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,169,206,0.45)] focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a className={classes} href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
