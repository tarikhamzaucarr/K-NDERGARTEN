import Link from 'next/link';

import { Container } from '@/components/Container';
import { siteConfig } from '@/data/site';

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link href="#top" className="brand-mark" aria-label={siteConfig.companyName}>
          <span className="brand-dot" />
          <span>{siteConfig.companyName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana navigasyon">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href={siteConfig.whatsappHref} className="button button-secondary">
            WhatsApp
          </Link>
          <Link href="#contact" className="button button-primary">
            Hemen Teklif Al
          </Link>
        </div>
      </Container>
    </header>
  );
}
