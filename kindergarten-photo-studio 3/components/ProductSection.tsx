import { Container } from '@/components/Container';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export function ProductSection() {
  return (
    <section className="content-section product-section">
      <Container>
        <SectionHeader
          eyebrow="Ürünler"
          title="Paket içerikleri"
          description="Satış sırasında müşterinin eline geçecek ürünleri sade ve net bir vitrinle sunun."
          align="center"
        />

        <div className="product-grid">
          {siteConfig.products.map((product) => (
            <article key={product.title} className="product-card">
              <div className="product-image-wrap">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="product-content">
                <span className="product-icon" aria-hidden="true">
                  {product.icon}
                </span>
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
