import Link from 'next/link';

import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function FeatureGrid() {
  return (
    <section className="content-section about-section" id="about">
      <Container>
        <div className="about-layout">
          <div>
            <SectionHeader
              eyebrow="Hakkımızda"
              title="Biz sadece çekim günü değil, tüm deneyimi yönetiyoruz"
              description={siteConfig.aboutDescription}
            />

            <div className="about-copy-stack">
              {siteConfig.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-inline-cta">
              <strong>{siteConfig.startingPriceText}</strong>
              <p>Okulunuza uygun çekim planı ve ürün yapısı için bizimle hemen iletişime geçin.</p>
              <div className="about-inline-actions">
                <Link href="#contact" className="button button-primary">
                  Teklif İste
                </Link>
                <Link href={siteConfig.phoneHref} className="button button-secondary">
                  Telefonla Ulaş
                </Link>
              </div>
            </div>
          </div>

          <div className="about-side-stack">
            <div className="feature-grid">
              {siteConfig.features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <span className="feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="process-card">
              <span className="section-eyebrow">Nasıl İlerliyoruz</span>
              <ol className="process-list">
                {siteConfig.processSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="process-index">0{index + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
