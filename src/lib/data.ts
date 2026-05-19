// ─── Site Config ─────────────────────────────────────────────
export const SITE = {
  name: 'HawkBiz Global Services',
  tagline: 'Business Setup Consultants in Dubai, UAE',
  phone: '+971 58 625 4354',
  phoneRaw: '+971586254354',
  whatsapp: 'https://wa.me/971586254354',
  email: 'contact@hawkbizglobalservices.com',
  address: 'Dubai, United Arab Emirates',
  hours: 'Mon – Fri, 8:00 AM – 6:00 PM (GST)',
  url: 'https://hawkbizglobalservices.com',
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
}

// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Company Formation', href: '/services/company-formation' },
      { label: 'Visa Services', href: '/services/visa-services' },
      { label: 'Hajj & Umrah', href: '/services/hajj-umrah' },
      { label: 'Certificate Attestation', href: '/services/certificate-attestation' },
      { label: 'Health Insurance', href: '/services/health-insurance' },
      { label: 'Documents Clearing', href: '/services' },
      { label: 'HR Consultancy', href: '/services' },
      { label: 'License Renewal', href: '/services' },
    ],
  },
  {
    label: 'IT Services',
    href: '/it-services',
    children: [
      { label: 'Web Development', href: '/it-services/web-development' },
      { label: 'Mobile Apps', href: '/it-services/mobile-apps' },
      { label: 'UI/UX Design', href: '/it-services/design' },
      { label: 'SEO & Marketing', href: '/it-services/seo-marketing' },
      { label: 'Cloud & E-Commerce', href: '/it-services/cloud-ecommerce' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// ─── Business Services ────────────────────────────────────────
export const BUSINESS_SERVICES = [
  {
    icon: '🏢',
    title: 'Company Formation',
    slug: 'company-formation',
    short: 'Freezone, Mainland & Offshore company setup with full licensing and investor visa.',
    description: 'Expert company formation services across all UAE jurisdictions. We handle everything from trade license to establishment card and investor visa — quickly and compliantly.',
    keywords: ['business setup dubai', 'company formation uae', 'freezone company dubai'],
  },
  {
    icon: '📄',
    title: 'Documents Clearing',
    slug: 'services',
    short: 'Professional PRO services for all UAE government departments — fast and accurate.',
    description: 'We manage approvals, attestations, renewals, and submissions across all government departments in the UAE with speed and accuracy.',
    keywords: ['pro services dubai', 'documents clearing uae'],
  },
  {
    icon: '🌍',
    title: 'Worldwide Visa Services',
    slug: 'visa-services',
    short: 'Tourist, business, study and work visas for 50+ countries with high approval rates.',
    description: 'Complete visa assistance for UK, USA, Schengen, Thailand, and 50+ countries — from documentation to embassy submission.',
    keywords: ['worldwide visa services dubai', 'visit visa dubai', 'uk visa uae'],
  },
  {
    icon: '🕌',
    title: 'Hajj & Umrah Services',
    slug: 'hajj-umrah',
    short: 'Complete pilgrimage packages with visa, travel, and accommodation coordination.',
    description: 'Dedicated Hajj and Umrah services including visa processing, travel documentation, accommodation coordination, and full pilgrimage support.',
    keywords: ['hajj packages dubai', 'umrah services uae', 'umrah visa dubai'],
  },
  {
    icon: '🎓',
    title: 'Certificate Attestation',
    slug: 'certificate-attestation',
    short: 'Educational, personal and commercial document attestation for UAE and abroad.',
    description: 'Full attestation services including notary, embassy, and ministry approvals for employment, education, and business purposes.',
    keywords: ['certificate attestation dubai', 'document attestation uae'],
  },
  {
    icon: '🏥',
    title: 'Health Insurance',
    slug: 'health-insurance',
    short: 'Flexible individual, family and corporate health coverage from trusted UAE insurers.',
    description: 'We help individuals, families, and businesses select the right insurance plan that matches their needs, budget, and UAE regulatory requirements.',
    keywords: ['health insurance dubai', 'medical insurance uae', 'employee health insurance'],
  },
  {
    icon: '👥',
    title: 'HR Consultancy',
    slug: 'services',
    short: 'Talent acquisition, HR policies, and UAE labor law compliance for your business.',
    description: 'End-to-end HR support including recruitment strategies, employee management, payroll guidance, and full UAE labor law compliance.',
    keywords: ['hr consultancy dubai', 'human resources uae'],
  },
  {
    icon: '🔄',
    title: 'License Renewal',
    slug: 'services',
    short: 'Hassle-free trade license renewal with exclusive voucher discounts.',
    description: 'We handle all renewal procedures including documentation, government approvals, and timely submissions — saving you time and avoiding penalties.',
    keywords: ['license renewal dubai', 'trade license renewal uae'],
  },
]

// ─── IT Services ──────────────────────────────────────────────
export const IT_SERVICES = [
  {
    icon: '💻',
    title: 'Web Development',
    slug: 'web-development',
    short: 'Custom websites, business portals, and web apps built with modern frameworks.',
    tags: ['Next.js', 'React', 'Laravel', 'Node.js', 'WordPress'],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    slug: 'mobile-apps',
    short: 'Cross-platform iOS and Android apps built with Flutter and React Native.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
  },
  {
    icon: '🎨',
    title: 'UI/UX & Graphic Design',
    slug: 'design',
    short: 'Brand identity, UI systems, social media creatives, and print materials.',
    tags: ['Figma', 'Branding', 'Print', 'Social Media'],
  },
  {
    icon: '📈',
    title: 'SEO & Digital Marketing',
    slug: 'seo-marketing',
    short: 'Search engine optimization, Google Ads, and social media growth strategies.',
    tags: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
  },
  {
    icon: '☁️',
    title: 'Cloud & SaaS Solutions',
    slug: 'cloud-ecommerce',
    short: 'Cloud infrastructure, SaaS products, APIs, and managed hosting.',
    tags: ['AWS', 'Azure', 'SaaS', 'DevOps'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Development',
    slug: 'cloud-ecommerce',
    short: 'Online stores with payment gateways, inventory, and admin dashboards.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'Custom'],
  },
]

// ─── Packages ─────────────────────────────────────────────────
export const PACKAGES = [
  {
    type: 'UAE Freezone',
    name: 'Starter Package',
    price: 'AED 6,000',
    priceNote: 'upfront',
    featured: false,
    features: [
      'Trade License',
      'Immigration Card',
      '1 Investor Visa',
      '100% Foreign Ownership',
      'UAE Card Payment Ready',
    ],
  },
  {
    type: 'Dubai Freezone',
    name: 'Professional Package',
    price: 'AED 12,900',
    priceNote: 'all-inclusive',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Professional Trade License',
      'Multiple Business Activities',
      'Establishment Card',
      '1 Investor Visa',
      'Multiple Shareholders',
      '100% Ownership',
    ],
  },
  {
    type: 'Dubai Mainland',
    name: 'Premium Package',
    price: 'AED 18,900',
    priceNote: 'all-inclusive',
    featured: false,
    features: [
      'Professional Trade License',
      'Multiple Business Activities',
      'Establishment Card',
      '1 Investor Visa',
      'Multiple Shareholders',
      '100% Ownership',
    ],
  },
]

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Ali Khan',
    role: 'Founder, Trading Company',
    location: 'Dubai, UAE',
    initials: 'AK',
    rating: 5,
    text: 'HawkBiz made our company formation incredibly smooth. From trade license to visa processing, everything was handled professionally and on time. I highly recommend them to anyone setting up a business in Dubai.',
  },
  {
    name: 'Usman Ahmed',
    role: 'Business Owner',
    location: 'Sharjah, UAE',
    initials: 'UA',
    rating: 5,
    text: 'Outstanding Umrah service. They handled our entire group\'s visa and travel documentation without a single issue. Very professional team with genuine care for their clients.',
  },
  {
    name: 'Ahmad Raza',
    role: 'HR Manager',
    location: 'Abu Dhabi, UAE',
    initials: 'AR',
    rating: 5,
    text: 'I needed my certificates attested urgently for an employment visa. HawkBiz completed the full attestation in record time. Their knowledge of the process is genuinely exceptional.',
  },
  {
    name: 'Bilal Hassan',
    role: 'Entrepreneur',
    location: 'Dubai, UAE',
    initials: 'BH',
    rating: 5,
    text: 'Excellent customer service and modern approach to business setup. They guided me through every step of the freezone registration. Worth every dirham and more.',
  },
  {
    name: 'Hamza Ali',
    role: 'Investor',
    location: 'RAK, UAE',
    initials: 'HA',
    rating: 5,
    text: 'Used HawkBiz for both my company formation and health insurance. Their one-stop approach saved me weeks of running around. Reliable, fast, and genuinely helpful.',
  },
]

// ─── Partners ─────────────────────────────────────────────────
export const PARTNERS = [
  'Sharjah Media City',
  'Meydan Freezone',
  'IFZA UAE',
  'Dubai Economy',
  'RAK ICC',
  'ADGM',
]

// ─── FAQ ──────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'How long does company formation take in Dubai?',
    a: 'Most freezone company setups are completed within 3–7 business days. Mainland setups typically take 7–14 business days depending on the activity and approvals required. We keep you informed at every step.',
  },
  {
    q: 'What is the difference between Freezone and Mainland?',
    a: 'Freezone companies offer 100% foreign ownership and are ideal for international trade, but are restricted from trading directly in the UAE local market. Mainland companies can trade anywhere in the UAE and participate in government contracts.',
  },
  {
    q: 'Can I get a UAE residency visa through company formation?',
    a: 'Yes. All our business setup packages include at least 1 investor visa. You can also sponsor additional employee and family visas depending on your company\'s visa quota.',
  },
  {
    q: 'Do you handle visa applications for all countries?',
    a: 'We provide worldwide visa assistance including UK, USA, Schengen, Thailand, Baku, and 50+ other countries. Our team guides you through documentation, appointment booking, and submission.',
  },
  {
    q: 'How much does Umrah visa processing cost?',
    a: 'Umrah visa costs vary by season and package. Please contact us directly for the latest pricing and package options for individuals and groups.',
  },
  {
    q: 'Can you help with certificate attestation from Pakistan?',
    a: 'Yes. We handle attestation of educational, personal, and commercial documents from Pakistan and other countries for use in the UAE — including HEC, MOFA, and UAE embassy attestation.',
  },
]

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  { num: '500+', label: 'Companies Formed' },
  { num: '20+', label: 'Years Experience' },
  { num: '50+', label: 'Countries Served' },
  { num: '98%', label: 'Client Satisfaction' },
]
