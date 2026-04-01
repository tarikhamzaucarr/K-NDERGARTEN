import { AnimationSection } from '@/components/AnimationSection';
import { CampaignSection } from '@/components/CampaignSection';
import { ContactSection } from '@/components/ContactSection';
import { FeatureGrid } from '@/components/FeatureGrid';
import { GallerySection } from '@/components/GallerySection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PackagesSection } from '@/components/PackagesSection';
import { ProductSection } from '@/components/ProductSection';
import { StickyContactBar } from '@/components/StickyContactBar';
import { Container } from '@/components/Container';
import { siteConfig } from '@/data/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.companyName,
  description: siteConfig.description,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  priceRange: siteConfig.startingPriceText,
  sameAs: [siteConfig.instagramHref],
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: 'İstanbul',
    addressCountry: 'TR'
  },
  areaServed: 'İstanbul',
  url: `https://${siteConfig.domain}`
};

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <CampaignSection />
        <FeatureGrid />
        <PackagesSection />
        <AnimationSection />
        <GallerySection />
        <ProductSection />
        <ContactSection />
      </main>
      <StickyContactBar />
      <footer className="site-footer">
        <Container className="site-footer-inner">
          <p>© {currentYear} {siteConfig.companyName}. Tüm hakları saklıdır.</p>
          <p>{siteConfig.location}</p>
        </Container>
      </footer>
    </>
  );
}
