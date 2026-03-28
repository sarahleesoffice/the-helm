import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'outline' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const variants: Record<Variant, string> = {
  default:
    'bg-[linear-gradient(135deg,rgba(201,168,76,0.98),rgba(240,217,154,0.88))] text-[#061018] shadow-[0_18px_50px_rgba(201,168,76,0.22)] hover:brightness-110',
  outline:
    'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  ghost:
    'bg-transparent text-white hover:bg-white/10',
};

export function Button({ className, variant = 'default', href, children, ...props }: ButtonProps & { children: React.ReactNode }) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,168,76,0.5)] focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
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
