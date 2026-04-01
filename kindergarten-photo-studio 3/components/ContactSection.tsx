import Link from 'next/link';

import { Container } from '@/components/Container';
import { LeadForm } from '@/components/LeadForm';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact">
      <Container className="contact-layout">
        <div>
          <SectionHeader
            eyebrow="İletişim"
            title="Teklif almak için şimdi iletişime geçin"
            description="Tarih uygunluğu, paket yönlendirmesi ve okulunuza özel çekim planı için bize ulaşın. Süreci uzatmadan net teklif paylaşalım."
          />

          <div className="contact-list">
            {siteConfig.contactItems.map((item) => {
              const content = (
                <>
                  <span className="contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </>
              );

              return item.href ? (
                <Link key={item.label} href={item.href} className="contact-item">
                  {content}
                </Link>
              ) : (
                <div key={item.label} className="contact-item static">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="contact-cta-card">
          <span className="pill">Hemen Başlayalım</span>
          <h3>{siteConfig.startingPriceText}</h3>
          <p>
            Okul bilgilerinizi bırakın; size en uygun paket yönlendirmesi ve çekim planı için hızlıca geri dönüş
            sağlayalım.
          </p>

          <LeadForm whatsappNumber={siteConfig.whatsappNumber} email={siteConfig.email} />

          <div className="contact-cta-actions">
            <Link href={siteConfig.phoneHref} className="button button-secondary button-full-width">
              Telefonla Ulaş
            </Link>
            <Link href={`mailto:${siteConfig.email}`} className="button button-secondary button-full-width">
              E-Posta Gönder
            </Link>
          </div>
        </aside>
      </Container>
    </section>
  );
}
