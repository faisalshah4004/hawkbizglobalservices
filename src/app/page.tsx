import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import HeroSlider from '@/components/home/HeroSlider'
import {
  SectionHeader,
  ServiceCard,
  ITCard,
  StatsStrip,
  Stars,
} from '@/components/shared'
import {
  BUSINESS_SERVICES,
  IT_SERVICES,
  PACKAGES,
  TESTIMONIALS,
  PARTNERS,
  FAQS,
  STATS,
  SITE,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Business Setup Consultants in Dubai, UAE | HawkBiz Global Services',
  description:
    'HawkBiz Global Services LLC — top-rated business setup consultants in Dubai with 20+ years experience. Company formation, visa services, Hajj & Umrah, attestation, and IT services.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About */}
      <AboutSection />

      {/* 4. Business Services */}
      <BusinessServicesSection />

      {/* 5. Stats */}
      <StatsStrip stats={STATS} />

      {/* 6. IT Services */}
      <ITServicesSection />

      {/* 7. Packages */}
      <PackagesSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Partners */}
      <PartnersStrip />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. CTA */}
      <CTASection />
    </>
  )
}

// ─── Trust Strip ───────────────────────────────────────────────
function TrustStrip() {
  const items = [
    { icon: '🏆', title: '20+ Years Experience', sub: 'In Dubai & UAE Markets' },
    { icon: '🏢', title: 'All Zones Covered', sub: 'Freezone · Mainland · Offshore' },
    { icon: '⚡', title: 'Fast Processing', sub: 'Company Setup in 24–72 Hours' },
    { icon: '🌍', title: 'Global Reach', sub: 'Serving 50+ Countries' },
    { icon: '🔒', title: '100% Compliant', sub: 'UAE Government Approved' },
  ]
  return (
    <div className="bg-[#F8F6F0] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center lg:justify-between gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-base">
              {item.icon}
            </div>
            <div>
              <div className="text-navy text-sm font-semibold leading-tight">{item.title}</div>
              <div className="text-slate-400 text-xs">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────
function AboutSection() {
  const highlights = [
    'Licensed and UAE government-approved consultancy',
    'Expert team with hands-on local regulatory knowledge',
    'Transparent, fixed-price packages — no hidden fees',
    'Dedicated relationship manager for every client',
    '500+ businesses successfully formed across all UAE zones',
  ]
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative">
          <div
            className="w-full h-[420px] rounded-3xl flex items-center justify-center text-8xl"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1A3260 100%)' }}
          >
            🦅
          </div>
          {/* Experience badge */}
          <div
            className="absolute -bottom-5 -right-5 text-navy p-5 rounded-2xl text-center shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
          >
            <div className="font-playfair text-4xl font-bold leading-none">20+</div>
            <div className="text-xs font-medium mt-1 opacity-80">Years Serving<br />UAE Businesses</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionHeader
            tag="Who We Are"
            title={<>Your Strategic Partner<br className="hidden md:block" /> for Success in Dubai</>}
          />
          <p className="text-slate-500 leading-relaxed mb-4">
            HawkBiz Global Services LLC is a team of expert business setup consultants with a proven
            track record of empowering entrepreneurs and corporations to establish a thriving presence
            in Dubai and across the UAE.
          </p>
          <p className="text-slate-500 leading-relaxed mb-6">
            With deep expertise in UAE laws, free zone regulations, and government procedures, we
            deliver end-to-end solutions — from company formation to ongoing PRO services — for
            startups, SMEs, and multinationals alike.
          </p>
          <ul className="space-y-2.5 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-navy text-sm">
                <CheckCircle2 size={16} className="text-gold-dark flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Meet Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Business Services ────────────────────────────────────────
function BusinessServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Our Services"
          title={<>Comprehensive Business Solutions<br className="hidden md:block" /> Under One Roof</>}
          subtitle="From company formation and visa processing to Hajj packages and document attestation — HawkBiz covers every need for individuals and businesses in the UAE."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUSINESS_SERVICES.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.short}
              href={`/services/${s.slug}`}
              dark
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-gold/30 text-gold hover:bg-gold/10 px-6 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── IT Services ──────────────────────────────────────────────
function ITServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="IT Services"
          title={<>Digital Solutions for<br className="hidden md:block" /> Modern Businesses</>}
          subtitle="Beyond business setup, HawkBiz delivers end-to-end technology services to help your company grow, scale, and compete in the digital economy."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IT_SERVICES.map((s) => (
            <ITCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.short}
              tags={s.tags}
              href={`/it-services/${s.slug}`}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/it-services"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            Explore All IT Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Packages ─────────────────────────────────────────────────
function PackagesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Pricing"
          title={<>Transparent Business Setup<br className="hidden md:block" /> Packages</>}
          subtitle="Clear, all-inclusive pricing with no hidden fees. Choose the package that fits your business goals and budget."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl overflow-hidden border-2 transition-transform hover:-translate-y-1 ${
                pkg.featured ? 'border-gold' : 'border-slate-100'
              }`}
            >
              {/* Header */}
              <div
                className={`p-7 text-center ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-gold-dark to-gold'
                    : 'bg-navy'
                }`}
              >
                {pkg.featured && pkg.badge && (
                  <span className="inline-block bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                )}
                <div
                  className={`text-xs font-bold tracking-[2px] uppercase mb-1 ${
                    pkg.featured ? 'text-navy' : 'text-gold'
                  }`}
                >
                  {pkg.type}
                </div>
                <h3
                  className={`font-playfair text-xl font-bold mb-4 ${
                    pkg.featured ? 'text-navy' : 'text-white'
                  }`}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`font-playfair text-4xl font-bold leading-none ${
                    pkg.featured ? 'text-navy' : 'text-white'
                  }`}
                >
                  {pkg.price}
                </div>
                <div
                  className={`text-sm mt-1 ${
                    pkg.featured ? 'text-navy/70' : 'text-slate-400'
                  }`}
                >
                  {pkg.priceNote}
                </div>
              </div>
              {/* Body */}
              <div className="p-7 bg-white">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-navy text-sm">
                      <CheckCircle2 size={16} className="text-gold-dark flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                    pkg.featured
                      ? 'bg-gold border-gold text-navy hover:bg-gold-light'
                      : 'bg-transparent border-gold/40 text-gold-dark hover:bg-gold hover:border-gold hover:text-navy'
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-8">
          All packages include free consultation.{' '}
          <Link href="/pricing" className="text-gold-dark hover:text-gold underline">
            See full pricing breakdown →
          </Link>
        </p>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by hundreds of entrepreneurs and businesses across Dubai and the UAE."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-gold/30 transition-colors"
            >
              <Stars />
              <p className="text-slate-500 text-sm leading-relaxed italic mt-4 mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Partners ─────────────────────────────────────────────────
function PartnersStrip() {
  return (
    <div className="border-y border-slate-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase whitespace-nowrap">
          Associated Partners
        </span>
        <div className="flex flex-wrap gap-4 justify-center">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="bg-slate-50 border border-slate-100 text-slate-500 text-xs font-semibold px-5 py-2.5 rounded-lg"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────
function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to the most common questions about our services."
          center
        />
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group border border-slate-100 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-navy text-sm hover:bg-slate-50 transition-colors list-none">
                {faq.q}
                <span className="ml-4 text-gold text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy-light opacity-90" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Start Your Business<br className="hidden md:block" /> in{' '}
          <em className="text-gold not-italic">Dubai</em>?
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Get a free consultation with our experts today. No obligations, no pressure — just real
          answers to get your business moving.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/book-appointment"
            className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 text-base"
          >
            Book Free Consultation
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 bg-transparent border border-white/25 text-white hover:border-gold hover:text-gold font-medium px-8 py-4 rounded-xl transition-all text-base"
          >
            <Phone size={18} /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
