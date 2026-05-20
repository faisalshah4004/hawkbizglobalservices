import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Health Insurance Dubai | Medical Insurance UAE | HawkBiz',
  description: 'Individual, family, and corporate health insurance plans in Dubai. Compliant with UAE mandatory health insurance law. Compare and get the best coverage.',
}

const PLAN_TYPES = [
  { icon: '👤', title: 'Individual Plans', desc: 'Flexible health coverage for UAE residents — from basic essential to comprehensive premium plans.', features: ['GP & specialist visits', 'Hospitalization cover', 'Emergency care', 'Pharmacy benefits'] },
  { icon: '👨‍👩‍👧', title: 'Family Plans', desc: 'Comprehensive family health coverage for you, your spouse, and up to 4 dependants.', features: ['All family members covered', 'Maternity benefits', 'Pediatric care', 'Dental & optical add-ons'] },
  { icon: '🏢', title: 'Corporate Plans', desc: 'Group health insurance for companies of all sizes — mandatory for all UAE employers.', features: ['UAE DHA/HAAD compliant', 'Scalable for any team size', 'Employee wellness programs', 'HR admin support'] },
  { icon: '🌟', title: 'VIP / Executive', desc: 'Premium international coverage for executives and high-net-worth individuals.', features: ['Worldwide coverage', 'Private hospital rooms', 'No network restrictions', 'Medical concierge service'] },
]

export default function HealthInsurancePage() {
  return (
    <>
      <PageHero
        tag="Health Insurance"
        title={<>Health Insurance Plans<br className="hidden md:block" /> for UAE Residents</>}
        subtitle="Individual, family, and corporate health insurance — UAE-compliant, competitively priced, and managed end-to-end by HawkBiz."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Health Insurance' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Plans" title="Insurance Plans for Every Need" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLAN_TYPES.map(p => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-gold hover:shadow-xl transition-all">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-playfair font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-navy text-sm">
                      <CheckCircle2 size={14} className="text-gold-dark flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-gold-dark font-semibold text-sm hover:text-gold transition-colors">Get a quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Get a Free Insurance Quote</h2>
          <p className="text-slate-400 mb-8">Tell us your requirements and we&lsquo;ll compare plans from leading UAE insurers to find the best coverage at the right price.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Request Quote
          </Link>
        </div>
      </section>
    </>
  )
}
