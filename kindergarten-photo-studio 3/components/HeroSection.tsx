import Link from 'next/link';

import { Container } from '@/components/Container';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { siteConfig } from '@/data/site';

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <Container className="hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">{siteConfig.heroCampaignLabel}</span>
          <h1>{siteConfig.title}</h1>
          <p className="hero-description">
            Okulunuz için düzenli, güven veren ve satışa dönüşebilen bir fotoğraf çekimi süreci kuruyoruz.
            {` `}
            {siteConfig.heroSubline}
          </p>

          <div className="hero-offer-box" aria-label="Başlangıç fiyatı vurgusu">
            <span className="hero-offer-label">Fotoğraf çekimi teklifleri</span>
            <strong>{siteConfig.startingPriceText}</strong>
            <p>Paket detayları, okul yapınıza ve talep edilen ürün setine göre netleştirilir.</p>
          </div>

          <div className="hero-cta-row">
            <Link href="#contact" className="button button-primary">
              Hemen Teklif Al
            </Link>
            <Link href={siteConfig.whatsappHref} className="button button-secondary">
              WhatsApp ile Hızlı Ulaş
            </Link>
          </div>

          <ul className="hero-badge-list" aria-label="Hizmetler">
            {siteConfig.heroBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-card-media">
            <ImageWithFallback
              src="/images/logo.jpg"
              alt="Kindergarten Photo Studio logosu"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="hero-card-content">
            <div>
              <span className="pill">Öncelikli rezervasyon · İstanbul</span>
              <h2>Fotoğraf çekimini, okulunuz için daha güçlü bir tanıtım aracına dönüştürün</h2>
            </div>
            <p>
              Velilerin güvenini artıran kareler, düzenli çekim operasyonu ve baskı ürünleriyle tek noktadan
              yönetilen profesyonel bir süreç sunuyoruz.
            </p>
            <div className="hero-card-stats">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="hero-stat-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <Link href="#campaign" className="button button-primary button-full-width hero-inline-cta">
              Kampanyayı İncele
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
