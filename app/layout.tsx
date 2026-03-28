import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Helm | Miami Boat Charter Concierge',
  description: 'Premium Miami boat charter concierge connecting clients with verified boats and captains across South Florida.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
