import * as React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.1)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold',
        className,
      )}
      {...props}
    />
  );
}
