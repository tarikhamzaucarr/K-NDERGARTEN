import Link from 'next/link';

import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function CampaignSection() {
  return (
    <section className="content-section campaign-section" id="campaign">
      <Container className="campaign-layout">
        <div>
          <SectionHeader
            eyebrow="Açılış Kampanyası"
            title="Fotoğraf çekimini şimdi planlayın, okulunuzu daha güçlü gösterin"
            description="Öncelikli tarih planlaması, düzenli çekim akışı ve velilere sunulabilir premium ürün yapısıyla fotoğraf çekimini sadece bir etkinlik değil, okulunuz için değer üreten bir satış aracına dönüştürüyoruz."
          />

          <div className="campaign-offer-card">
            <span className="campaign-offer-label">Öne çıkan teklif</span>
            <strong>{siteConfig.startingPriceText}</strong>
            <p>
              Kampanya kapsamı, çekim günü planlaması ve teslim modeli okulunuzun yapısına göre özelleştirilir.
            </p>
          </div>

          <p className="campaign-note">
            Kurumlara özel tanıtım filmi seçeneği istenirse aynı projeye entegre edilebilir. Kampanya dönemi:
            {` `}
            {siteConfig.campaignDate}.
          </p>
        </div>

        <div className="campaign-panel">
          <ul className="perk-list">
            {siteConfig.campaignPerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>

          <div className="campaign-timing">
            <span>Hızlı iletişim kanalları</span>
            <strong>Telefon, WhatsApp ve teklif formu üzerinden aynı gün dönüş</strong>
          </div>

          <div className="campaign-actions">
            <Link href="#contact" className="button button-primary button-full-width">
              Kampanyaya Dahil Ol
            </Link>
            <Link href={siteConfig.phoneHref} className="button button-secondary button-full-width">
              Şimdi Ara
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
