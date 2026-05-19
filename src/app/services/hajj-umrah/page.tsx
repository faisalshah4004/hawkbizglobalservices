import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Hajj & Umrah Services Dubai 2026 | HawkBiz Global Services',
  description: 'Complete Hajj and Umrah packages from Dubai 2025/2026 — visa processing, travel documentation, group and private packages. Trusted by thousands of pilgrims.',
}

const PACKAGES = [
  {
    title: 'Umrah Economy',
    price: 'Contact for Price',
    features: ['Umrah Visa Processing', 'Return Ticket Coordination', 'Hotel Guidance (Makkah & Madinah)', 'Ihram & Ziyarat Guide', 'Group Departure'],
    icon: '🌙',
  },
  {
    title: 'Umrah Premium',
    price: 'Contact for Price',
    featured: true,
    features: ['Priority Umrah Visa', 'Premium Hotel (5-star)', 'Private or Group Transfer', 'Full Documentation Support', 'Dedicated Group Leader', 'Ziyarat in Makkah & Madinah'],
    icon: '⭐',
  },
  {
    title: 'Hajj Package',
    price: 'Contact for Price',
    features: ['Official Hajj Visa Processing', 'Full Documentation', 'Group Coordination', 'Accommodation Guidance', 'Pre-Hajj Orientation', 'Complete PRO Support'],
    icon: '🕌',
  },
]

const REQUIREMENTS = [
  'Valid passport (minimum 6 months validity)',
  'Completed Saudi visa application form',
  'Passport-size photographs (white background)',
  'Proof of relationship for female pilgrims (mahram)',
  'Meningitis vaccination certificate',
  'For Hajj: proof of not having performed Hajj in last 5 years',
]

export default function HajjUmrahPage() {
  return (
    <>
      <PageHero
        tag="Hajj & Umrah 2026"
        title={<>Sacred Pilgrimages<br className="hidden md:block" /> Made Effortless</>}
        subtitle="Complete Hajj and Umrah packages from Dubai — visa processing, documentation, and full pilgrimage support so you can focus on your spiritual journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hajj & Umrah' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Packages" title="Hajj & Umrah Packages 2026" subtitle="We offer flexible packages for individuals, couples, families, and groups." center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map(pkg => (
              <div key={pkg.title} className={`rounded-2xl overflow-hidden border-2 hover:-translate-y-1 transition-transform ${pkg.featured ? 'border-gold' : 'border-slate-100'}`}>
                <div className={`p-7 text-center ${pkg.featured ? 'bg-gradient-to-br from-gold-dark to-gold' : 'bg-navy'}`}>
                  <div className="text-4xl mb-3">{pkg.icon}</div>
                  <h3 className={`font-playfair text-xl font-bold mb-2 ${pkg.featured ? 'text-navy' : 'text-white'}`}>{pkg.title}</h3>
                  <p className={`text-sm font-medium ${pkg.featured ? 'text-navy/70' : 'text-slate-400'}`}>{pkg.price}</p>
                </div>
                <div className="bg-white p-7">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-navy text-sm">
                        <CheckCircle2 size={15} className="text-gold-dark flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center py-3 rounded-xl text-sm font-semibold border-2 transition-all ${pkg.featured ? 'bg-gold border-gold text-navy hover:bg-gold-light' : 'border-gold/40 text-gold-dark hover:bg-gold hover:border-gold hover:text-navy'}`}>
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="Requirements" title="What You Need to Apply" center />
          <div className="bg-white rounded-2xl p-8 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REQUIREMENTS.map(r => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-gold-dark flex-shrink-0 mt-0.5" />
                  <span className="text-navy text-sm">{r}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
              <p className="text-sm text-navy/80"><strong className="text-gold-dark">Note:</strong> Requirements may vary. Our team will provide you with a complete, personalised checklist based on your nationality and package.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Start Your Spiritual Journey</h2>
          <p className="text-slate-400 mb-8">Contact us today to book your Hajj or Umrah package. Limited slots available for 2026.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Book Your Package
          </Link>
        </div>
      </section>
    </>
  )
}
