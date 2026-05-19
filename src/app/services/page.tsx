import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, SectionHeader, StatsStrip } from '@/components/shared'
import { BUSINESS_SERVICES, STATS, FAQS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Business Setup Services in Dubai | HawkBiz Global Services',
  description:
    'Complete business setup services in Dubai — company formation, visa services, PRO services, certificate attestation, Hajj & Umrah, health insurance, and more.',
}

const PROCESS_STEPS = [
  { num: '01', title: 'Free Consultation', desc: 'Book a free call with our expert. We assess your goals and recommend the best setup structure.' },
  { num: '02', title: 'Choose & Plan', desc: 'We present the right jurisdiction, package, and timeline. You review, approve, and we begin.' },
  { num: '03', title: 'Document Collection', desc: 'Our team guides you on exactly what documents are needed — no guesswork, no surprises.' },
  { num: '04', title: 'Government Processing', desc: 'We handle all submissions, approvals, and follow-ups with the relevant UAE authorities.' },
  { num: '05', title: 'License & Visa Issued', desc: 'Receive your trade license, establishment card, and investor visa. Your business is live.' },
  { num: '06', title: 'Ongoing Support', desc: 'License renewal, employee visas, compliance — we stay with you as your business grows.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Our Services"
        title={<>Everything Your Business Needs,<br className="hidden md:block" /> Under One Roof</>}
        subtitle="From company formation and visa processing to document attestation and Hajj packages — HawkBiz is your complete UAE business partner."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="All Services"
            title="Complete Business Solutions"
            subtitle="Every service your business needs to establish, operate, and grow in the UAE."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_SERVICES.map((s) => (
              <Link
                key={s.title}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-gold hover:shadow-xl hover:shadow-navy/10 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-navy text-base mb-2 group-hover:text-gold-dark transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.short}</p>
                <span className="text-gold-dark text-sm font-semibold flex items-center gap-1.5">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="How It Works"
            title={<>Our Proven 6-Step<br /> Process</>}
            subtitle="From initial consultation to your UAE trade license — we've perfected every step."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:border-gold/30 transition-colors">
                <div className="font-playfair text-4xl font-bold text-gold/30 mb-4">{step.num}</div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip stats={STATS} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="FAQ" title="Common Questions" center />
          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <details key={i} className="group border border-slate-100 rounded-2xl overflow-hidden">
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

      {/* CTA */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-400 mb-8">
            Our experts will assess your situation and guide you to the right solution — for free.
          </p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Get Free Advice
          </Link>
        </div>
      </section>
    </>
  )
}
