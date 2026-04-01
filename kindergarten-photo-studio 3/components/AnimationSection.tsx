import Link from 'next/link';

import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function AnimationSection() {
  return (
    <section className="content-section animation-section">
      <Container className="animation-layout">
        <div>
          <SectionHeader
            eyebrow="Ek Hizmet"
            title="Hayalindeki meslek animasyonu"
            description="Çocukların gelecek hayallerini etkileyici bir dijital hatıraya dönüştürmek isteyen aileler ve kurumlar için opsiyonel animasyon hizmeti sunuyoruz."
          />

          <div className="role-grid">
            {siteConfig.animationRoles.map((role) => (
              <span key={role} className="role-chip">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="animation-card">
          <ul className="animation-feature-list">
            {siteConfig.animationFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="animation-price-box animation-consult-box">
            <span>Bu hizmet için</span>
            <strong>Özel teklif alın</strong>
          </div>

          <Link href="#contact" className="button button-primary button-full-width">
            Animasyon Hizmetini Sor
          </Link>
        </div>
      </Container>
    </section>
  );
}
