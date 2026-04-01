export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type PackageItem = {
  badge: string;
  name: string;
  note?: string;
  highlight?: string;
  image: string;
  features: string[];
};

export type GalleryItem = {
  title: string;
  image: string;
};

export type ProductItem = {
  icon: string;
  title: string;
  detail: string;
  image: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const siteConfig = {
  companyName: 'Kindergarten Photo Studio',
  title: 'Anaokulu ve kreş fotoğraf çekiminde güçlü ilk izlenim üretin',
  description:
    'Anaokulları, kreşler ve aileler için premium çocuk fotoğrafçılığı, baskı ürünleri ve tanıtım filmi çözümleri.',
  domain: 'kindergartenphotostudio.com',
  location: 'Ümraniye, İstanbul',
  phoneDisplay: '+90 536 974 14 05',
  phoneHref: 'tel:+905369741405',
  whatsappNumber: '905369741405',
  email: 'kindergartenphotostudio@gmail.com',
  whatsappHref: 'https://wa.me/905369741405',
  instagramHandle: '@KindergartenPhotoStudio',
  instagramHref: 'https://instagram.com/KindergartenPhotoStudio',
  address: 'Alemdağ Cad. No:378, Ümraniye / İstanbul',
  campaignDate: '1 Şubat 2026 — 31 Temmuz 2026',
  originalPrice: '49.000₺',
  campaignPrice: '32.000₺',
  animationPrice: '750₺ / çocuk başı',
  startingPriceText: '890₺’DEN BAŞLAYAN FİYATLARLA',
  heroCampaignLabel: 'Sınırlı kontenjan · Anaokulu fotoğraf çekimi kampanyası',
  heroSubline: 'Velilerin ilk baktığı şey güven veren, kaliteli ve sıcak karelerdir.',
  heroBadges: ['Fotoğraf Çekimi', 'Albüm Tasarımı', 'Kanvas & Baskı', 'Kurumsal Çekim'],
  seoKeywords: [
    'anaokulu fotoğrafçılığı',
    'çocuk fotoğraf stüdyosu',
    'kurumsal okul tanıtım filmi',
    'okul fotoğraf çekimi',
    'istanbul çocuk fotoğrafçısı'
  ],
  navItems: [
    { label: 'Kampanya', href: '#campaign' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Paketler', href: '#packages' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'İletişim', href: '#contact' }
  ] satisfies NavItem[],
  stats: [
    { value: '200+', label: 'Mutlu Aile' },
    { value: '20+', label: 'Kurumsal Okul' },
    { value: '5K+', label: 'Teslim Edilen Kare' }
  ] satisfies Stat[],
  aboutDescription:
    'Kindergarten Photo Studio, sadece fotoğraf çeken bir ekip değil; okulunuzu daha profesyonel gösteren, veli memnuniyetini artıran ve çocukların doğal enerjisini doğru yöneterek güçlü bir deneyim tasarlayan yaratıcı bir prodüksiyon partneridir.',
  aboutParagraphs: [
    'Çocuklarla çalışırken hız kadar yaklaşımın da önemli olduğunu biliyoruz. Bu yüzden ekibimiz çekim akışını çocuk psikolojisini ve okul düzenini bozmayacak şekilde planlar; her sınıfa, yaş grubuna ve okulun temposuna uyum sağlar.',
    'Amacımız yalnızca güzel kareler üretmek değil; çekim gününü okul yönetimi için stressiz, veliler için güven verici ve çocuklar için keyifli hale getirmektir. Kurumların bizi tercih etme nedeni tam olarak budur: düzenli operasyon, estetik çıktı ve hızlı iletişim.',
    'Kurumsal tanıtım filmi, baskı ürünleri, albüm tasarımı ve dijital teslim süreçlerini tek merkezden yönettiğimiz için okul tarafında karar verme süreci kısalır, teslim kalitesi standartlaşır ve iletişim kopukluğu yaşanmaz.'
  ],
  features: [
    {
      icon: '📷',
      title: 'Çocuk Deneyimi Olan Ekip',
      description: 'Miniklerin ritmine uyum sağlayan, doğal ifadeyi yakalamayı bilen uzman fotoğrafçılar.'
    },
    {
      icon: '🧠',
      title: 'Planlı Çekim Operasyonu',
      description: 'Sınıf akışını bozmayan, okul yönetimini yormayan net çekim organizasyonu.'
    },
    {
      icon: '✨',
      title: 'Premium Teslim Standardı',
      description: 'Dijital dosyalardan baskı ürünlerine kadar yüksek kalite ve tutarlı sonuç.'
    },
    {
      icon: '🤝',
      title: 'Hızlı ve Net İletişim',
      description: 'Tekliften teslimata kadar hızlı geri dönüş, sade süreç ve güven veren koordinasyon.'
    }
  ] satisfies Feature[],
  processSteps: [
    {
      title: 'Çekim planını birlikte netleştiriyoruz',
      description: 'Okul yapınıza, sınıf sayınıza ve hedef kitlenize göre doğru paket ve akışı belirliyoruz.'
    },
    {
      title: 'Çekim gününü sorunsuz yürütüyoruz',
      description: 'Çocukların enerjisini düşürmeden, okul düzenini aksatmadan tüm operasyonu yönetiyoruz.'
    },
    {
      title: 'Satışı destekleyen teslimler sunuyoruz',
      description: 'Velilerin ilgisini artıran seçilmiş kareleri, baskı ürünlerini ve dijital içerikleri zamanında teslim ediyoruz.'
    }
  ] satisfies ProcessStep[],
  campaignPerks: [
    'Fotoğraf çekimi için öncelikli tarih planlaması',
    'Kuruma özel çekim akışı ve set düzeni',
    'Velilere sunulabilir premium albüm ve baskı seçenekleri',
    'İhtiyaca göre kurumsal tanıtım filmi ile güçlendirilebilir yapı'
  ],
  packages: [
    {
      badge: 'Dijital',
      name: 'Dijital Paket',
      note: 'Hızlı teslim ve sade ihtiyaçlar için ideal başlangıç paketi.',
      image: '/images/paket_dijital.jpg',
      features: ['Konseptli seçilmiş fotoğraflar', 'Yüksek çözünürlüklü dijital teslimat']
    },
    {
      badge: 'Essential',
      name: 'Tek Albüm Paketi',
      note: 'Velilere baskı ürünü sunmak isteyen okullar için dengeli yapı.',
      image: '/images/paket_album.jpg',
      features: ['Albüm odaklı teslim', 'Dijital destekli temel ürün seti']
    },
    {
      badge: 'Premium',
      name: 'Standart Paket',
      highlight: 'En Çok Tercih Edilen',
      note: 'Okulların en çok tercih ettiği, sunumu güçlü paket yapısı.',
      image: '/images/paket_standart.jpg',
      features: ['Albüm + çerçeve kombinasyonu', 'Velilere sunum için güçlü içerik']
    },
    {
      badge: 'Exclusive',
      name: 'Full Paket',
      note: 'Görsel etkiyi ve ürün çeşitliliğini maksimuma taşımak isteyen kurumlar için.',
      image: '/images/paket_full.jpg',
      features: ['Kanvas ve özel baskı ürünleri', 'Daha zengin ürün deneyimi']
    }
  ] satisfies PackageItem[],
  animationRoles: ['Doktor', 'Pilot', 'Bilim İnsanı', 'Öğretmen', 'Astronot', 'Sporcu', 'Sanatçı', 'Şef'],
  animationFeatures: [
    'Profesyonel animasyon ve karakter tasarımı',
    'Özel müzik ve ses efektleri',
    'Full HD dijital teslimat (MP4)'
  ],
  gallery: [
    { title: 'Çekim 01', image: '/images/galeri_01.jpg' },
    { title: 'Çekim 02', image: '/images/galeri_02.jpg' },
    { title: 'Çekim 03', image: '/images/galeri_03.jpg' },
    { title: 'Çekim 04', image: '/images/galeri_04.jpg' },
    { title: 'Çekim 05', image: '/images/galeri_05.jpg' },
    { title: 'Çekim 06', image: '/images/galeri_06.jpg' }
  ] satisfies GalleryItem[],
  products: [
    {
      icon: '📖',
      title: 'Akordion Albüm',
      detail: '15×21 cm · 8 Sayfa',
      image: '/images/urun_akordiyon.jpg'
    },
    {
      icon: '🪪',
      title: 'Vesikalık Fotoğraf',
      detail: '4 Adet · Profesyonel',
      image: '/images/urun_vesikalik.jpg'
    },
    {
      icon: '🖼️',
      title: 'Kanvas Tablo',
      detail: 'Premium Baskı',
      image: '/images/urun_kanvas.jpg'
    },
    {
      icon: '🌿',
      title: 'Ekolojik Çerçeve',
      detail: 'Doğa Dostu Malzeme',
      image: '/images/urun_cerceve.jpg'
    },
    {
      icon: '🧲',
      title: 'Fotoğraflı Magnet',
      detail: 'Özel Tasarım',
      image: '/images/urun_magnet.jpg'
    },
    {
      icon: '💾',
      title: 'Dijital Teslimat',
      detail: 'Yüksek Çözünürlük',
      image: '/images/urun_dijital.jpg'
    }
  ] satisfies ProductItem[],
  contactItems: [
    {
      label: 'Telefon',
      value: '+90 536 974 14 05',
      href: 'tel:+905369741405',
      icon: '📞'
    },
    {
      label: 'E-Posta',
      value: 'kindergartenphotostudio@gmail.com',
      href: 'mailto:kindergartenphotostudio@gmail.com',
      icon: '📧'
    },
    {
      label: 'Web Sitesi',
      value: 'www.kindergartenphotostudio.com',
      href: 'https://www.kindergartenphotostudio.com',
      icon: '🌐'
    },
    {
      label: 'Adres',
      value: 'Alemdağ Cad. No:378, Ümraniye / İstanbul',
      icon: '📍'
    },
    {
      label: 'Instagram',
      value: '@KindergartenPhotoStudio',
      href: 'https://instagram.com/KindergartenPhotoStudio',
      icon: '📱'
    }
  ] satisfies ContactItem[]
};
