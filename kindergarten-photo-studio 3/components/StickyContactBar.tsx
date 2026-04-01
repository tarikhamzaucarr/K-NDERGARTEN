import Link from 'next/link';

import { siteConfig } from '@/data/site';

export function StickyContactBar() {
  return (
    <div className="sticky-contact-bar" aria-label="Hızlı iletişim araçları">
      <Link href={siteConfig.phoneHref} className="sticky-contact-action secondary">
        Ara
      </Link>
      <Link href={siteConfig.whatsappHref} className="sticky-contact-action primary">
        WhatsApp ile Yaz
      </Link>
    </div>
  );
}
