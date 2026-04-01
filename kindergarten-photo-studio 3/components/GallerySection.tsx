import { Container } from '@/components/Container';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function GallerySection() {
  return (
    <section className="content-section" id="gallery">
      <Container>
        <SectionHeader
          eyebrow="Portfolyo"
          title="Örnek çekimler"
          description="Görsellerinizi public/images klasörüne eklediğiniz anda galeri otomatik olarak gerçek portfolyonuzla çalışır."
          align="center"
        />

        <div className="gallery-grid">
          {siteConfig.gallery.map((item) => (
            <article key={item.title} className="gallery-card">
              <div className="gallery-image-wrap">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
