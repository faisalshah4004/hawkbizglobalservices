import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'
import { PACKAGES, FAQS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Business Setup Pricing Dubai | Company Formation Packages | HawkBiz',
  description: 'Transparent company formation pricing in Dubai. All-inclusive Freezone and Mainland packages with no hidden fees. See full breakdown and compare options.',
}

const WHAT_INCLUDED = [
  { icon: '📄', title: 'Trade License', desc: 'Full trade license from the relevant UAE authority — including all government fees.' },
  { icon: '🪪', title: 'Establishment Card', desc: 'Immigration file establishment card required to process employee and investor visas.' },
  { icon: '✈️', title: 'Investor Visa', desc: '3-year UAE residence investor visa including medical and Emirates ID processing.' },
  { icon: '🏦', title: 'Bank Account Guidance', desc: 'We guide you through opening a UAE corporate bank account — introductions available.' },
  { icon: '📋', title: 'Document Drafting', desc: 'MOA, shareholder agreements, and all company formation documents prepared by us.' },
  { icon: '🤝', title: 'Dedicated Manager', desc: 'A single point of contact who manages your entire setup from start to finish.' },
]

const ADD_ONS = [
  { title: 'Additional Investor Visa', price: 'AED 3,500' },
  { title: 'Employee Visa (per person)', price: 'AED 2,800' },
  { title: 'Virtual Office Address (1 year)', price: 'AED 1,500' },
  { title: 'Corporate Bank Account Opening', price: 'AED 1,000' },
  { title: 'Accounting & Bookkeeping (monthly)', price: 'AED 500' },
  { title: 'VAT Registration', price: 'AED 800' },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        tag="Pricing"
        title={<>Transparent, All-Inclusive<br className="hidden md:block" /> Pricing. No Surprises.</>}
        subtitle="Every package includes all government fees, professional fees, and our full support — quoted upfront with nothing hidden."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      {/* Packages */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Packages" title="Company Formation Packages" subtitle="Compare our three main setup packages — all fully inclusive." center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map(pkg => (
              <div key={pkg.name} className={`rounded-2xl overflow-hidden border-2 hover:-translate-y-1 transition-transform ${pkg.featured ? 'border-gold' : 'border-slate-100'}`}>
                <div className={`p-7 text-center ${pkg.featured ? 'bg-gradient-to-br from-gold-dark to-gold' : 'bg-navy'}`}>
                  {pkg.featured && pkg.badge && (
                    <span className="inline-block bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{pkg.badge}</span>
                  )}
                  <div className={`text-xs font-bold tracking-[2px] uppercase mb-1 ${pkg.featured ? 'text-navy' : 'text-gold'}`}>{pkg.type}</div>
                  <h3 className={`font-playfair text-xl font-bold mb-4 ${pkg.featured ? 'text-navy' : 'text-white'}`}>{pkg.name}</h3>
                  <div className={`font-playfair text-4xl font-bold leading-none ${pkg.featured ? 'text-navy' : 'text-white'}`}>{pkg.price}</div>
                  <div className={`text-sm mt-1 ${pkg.featured ? 'text-navy/70' : 'text-slate-400'}`}>{pkg.priceNote}</div>
                </div>
                <div className="p-7 bg-white">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map(f => (
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
          <p className="text-center text-slate-400 text-sm mt-6">
            All prices are subject to current UAE government fees. Contact us for a personalised quote.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Included" title="Everything in Every Package" subtitle="Every package includes these key components — no extra charges." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 flex gap-4">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="Add-Ons" title="Optional Add-On Services" subtitle="Enhance your package with these optional extras." center />
          <div className="bg-[#F8F6F0] rounded-2xl overflow-hidden border border-slate-100">
            {ADD_ONS.map((item, i) => (
              <div key={item.title} className={`flex items-center justify-between px-6 py-4 ${i !== ADD_ONS.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-gold-dark flex-shrink-0" />
                  <span className="text-navy text-sm font-medium">{item.title}</span>
                </div>
                <span className="text-gold-dark font-bold text-sm">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="FAQ" title="Pricing Questions" center />
          <div className="space-y-4">
            {FAQS.slice(0, 3).map((faq, i) => (
              <details key={i} className="group border border-slate-100 bg-white rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-navy text-sm hover:bg-slate-50 transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-gold text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Not Sure Which Package?</h2>
          <p className="text-slate-400 mb-8">Our experts will recommend the best package for your needs — free of charge.</p>
          <Link href="/book-appointment" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">Book Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
