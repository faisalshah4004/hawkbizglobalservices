import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero, SectionHeader, StatsStrip } from '@/components/shared'
import { PACKAGES, STATS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Company Formation Dubai | Freezone, Mainland & Offshore | HawkBiz',
  description:
    'Set up your company in Dubai with HawkBiz. Expert company formation services for Freezone, Mainland, and Offshore — fast, transparent, and fully compliant with UAE law.',
}

const ZONE_TYPES = [
  {
    title: 'Dubai Freezone',
    icon: '🏙️',
    color: 'from-navy to-navy-light',
    features: ['100% foreign ownership', 'Zero corporate & income tax', 'Full capital repatriation', 'No currency restrictions', 'Easy setup: 3–5 days', 'Ideal for international trade'],
    best: 'Best for: International trading, consulting, e-commerce, and professional services.',
  },
  {
    title: 'Dubai Mainland',
    icon: '🇦🇪',
    color: 'from-gold-dark to-gold',
    textDark: true,
    features: ['Trade across UAE local market', 'No restrictions on business activities', 'Participate in government contracts', 'Physical office anywhere in UAE', 'Multiple visa quota', 'Access to all UAE markets'],
    best: 'Best for: Retail, restaurants, construction, trading, and local service businesses.',
  },
  {
    title: 'Offshore Company',
    icon: '🌐',
    color: 'from-navy-mid to-navy',
    features: ['Asset protection structure', 'Holding company setup', 'International tax planning', 'High confidentiality', 'No physical presence required', 'Multiple jurisdictions available'],
    best: 'Best for: Asset holding, investment, international trade structuring.',
  },
]

const ACTIVITIES = [
  'General Trading', 'Consulting & Professional Services', 'E-Commerce & Online Retail',
  'IT & Technology', 'Real Estate & Property Management', 'Food & Beverage',
  'Healthcare & Medical', 'Education & Training', 'Construction & Contracting',
  'Media & Advertising', 'Import & Export', 'Logistics & Freight',
]

export default function CompanyFormationPage() {
  return (
    <>
      <PageHero
        tag="Company Formation"
        title={<>Set Up Your Company<br className="hidden md:block" /> in Dubai Today</>}
        subtitle="Expert company formation across Freezone, Mainland, and Offshore — fast, transparent, and fully compliant with UAE regulations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Company Formation' }]}
      />

      {/* Zone Types */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Setup Options"
            title="Choose the Right Structure for Your Business"
            subtitle="Each UAE jurisdiction has unique advantages. Our experts help you choose the best fit for your goals."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ZONE_TYPES.map((zone) => (
              <div key={zone.title} className="rounded-2xl overflow-hidden border border-slate-100 hover:-translate-y-1 transition-transform">
                <div className={`bg-gradient-to-br ${zone.color} p-7`}>
                  <div className="text-4xl mb-3">{zone.icon}</div>
                  <h3 className={`font-playfair text-xl font-bold mb-1 ${zone.textDark ? 'text-navy' : 'text-white'}`}>{zone.title}</h3>
                  <p className={`text-sm ${zone.textDark ? 'text-navy/70' : 'text-slate-400'}`}>{zone.best}</p>
                </div>
                <div className="bg-white p-7">
                  <ul className="space-y-2.5 mb-6">
                    {zone.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-navy text-sm">
                        <CheckCircle2 size={15} className="text-gold-dark flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block text-center bg-gold hover:bg-gold-light text-navy font-semibold py-3 rounded-xl text-sm transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Activities */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Business Activities" title="We Cover All Business Activities" center />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {ACTIVITIES.map((a) => (
              <span key={a} className="bg-white border border-slate-100 hover:border-gold hover:text-gold-dark text-navy text-sm px-5 py-2.5 rounded-full font-medium transition-colors cursor-default">
                {a}
              </span>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            Need an activity not listed?{' '}
            <Link href="/contact" className="text-gold-dark hover:text-gold underline">Contact us — we cover 2,000+ activities.</Link>
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Pricing" title="Transparent Setup Packages" subtitle="All-inclusive pricing. No hidden fees, no surprises." center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl overflow-hidden border-2 hover:-translate-y-1 transition-transform ${pkg.featured ? 'border-gold' : 'border-slate-100'}`}>
                <div className={`p-7 text-center ${pkg.featured ? 'bg-gradient-to-br from-gold-dark to-gold' : 'bg-navy'}`}>
                  {pkg.featured && pkg.badge && (
                    <span className="inline-block bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{pkg.badge}</span>
                  )}
                  <div className={`text-xs font-bold tracking-[2px] uppercase mb-1 ${pkg.featured ? 'text-navy' : 'text-gold'}`}>{pkg.type}</div>
                  <h3 className={`font-playfair text-xl font-bold mb-4 ${pkg.featured ? 'text-navy' : 'text-white'}`}>{pkg.name}</h3>
                  <div className={`font-playfair text-4xl font-bold ${pkg.featured ? 'text-navy' : 'text-white'}`}>{pkg.price}</div>
                  <div className={`text-sm mt-1 ${pkg.featured ? 'text-navy/70' : 'text-slate-400'}`}>{pkg.priceNote}</div>
                </div>
                <div className="p-7 bg-white">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-navy text-sm">
                        <CheckCircle2 size={15} className="text-gold-dark flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block w-full text-center py-3 rounded-xl text-sm font-semibold border-2 transition-all ${pkg.featured ? 'bg-gold border-gold text-navy hover:bg-gold-light' : 'border-gold/40 text-gold-dark hover:bg-gold hover:border-gold hover:text-navy'}`}>
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip stats={STATS} />

      {/* CTA */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Ready to Launch Your UAE Company?
          </h2>
          <p className="text-slate-400 mb-8">Book a free consultation — we&lsquo;ll identify the right structure and get you started within days.</p>
          <Link href="/book-appointment" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
