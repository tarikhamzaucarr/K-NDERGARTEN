import Link from 'next/link';

import { Container } from '@/components/Container';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function PackagesSection() {
  return (
    <section className="content-section" id="packages">
      <Container>
        <SectionHeader
          eyebrow="Paketler"
          title="Karar vermesi kolay, sunumu güçlü paket yapısı"
          description="Paketleri sadeleştirdik. Fiyat listesini kartların içine gömmedik; önce doğru paketi bulalım, sonra okulunuza göre en net teklifi verelim."
          align="center"
        />

        <div className="package-starting-price" aria-label="Başlangıç fiyatı vurgusu">
          <span>Okullar ve aileler için</span>
          <strong>{siteConfig.startingPriceText}</strong>
        </div>

        <div className="package-grid">
          {siteConfig.packages.map((pkg) => (
            <article key={pkg.name} className="package-card">
              {pkg.highlight ? <span className="package-highlight">{pkg.highlight}</span> : null}
              <div className="package-image-wrap">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="package-content">
                <span className="package-badge">{pkg.badge}</span>
                <h3>{pkg.name}</h3>
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {pkg.note ? <p className="package-note">{pkg.note}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <div className="package-cta-band">
          <div>
            <span className="section-eyebrow">Hızlı Yönlendirme</span>
            <h3>Hangi paketin size uygun olduğunu birlikte netleştirelim</h3>
            <p>
              Sınıf sayısı, hedef ürünler ve teslim beklentinize göre doğru paketi birlikte belirleyelim.
            </p>
          </div>
          <div className="package-cta-actions">
            <Link href="#contact" className="button button-primary">
              Paket Danışmanlığı Al
            </Link>
            <Link href={siteConfig.whatsappHref} className="button button-secondary">
              WhatsApp ile Sor
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
