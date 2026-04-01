import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`
  },
  description: siteConfig.description,
  keywords: siteConfig.seoKeywords,
  openGraph: {
    title: siteConfig.companyName,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.companyName,
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.companyName,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
