import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Certificate Attestation Dubai | Document Attestation UAE | HawkBiz',
  description: 'Professional certificate and document attestation services in Dubai — educational, personal, and commercial documents for UAE and international use.',
}

const DOC_TYPES = [
  { icon: '🎓', title: 'Educational Certificates', items: ['Degree & Diplomas', 'Transcripts', 'School Leaving Certificates', 'Professional Qualifications'] },
  { icon: '👤', title: 'Personal Documents', items: ['Birth Certificates', 'Marriage Certificates', 'Death Certificates', 'Police Clearance (PCC)'] },
  { icon: '🏢', title: 'Commercial Documents', items: ['Company Registration', 'MOA & AOA', 'Power of Attorney', 'Board Resolutions'] },
  { icon: '📋', title: 'Legal Documents', items: ['Affidavits', 'Court Documents', 'Sale Deeds', 'Agreements & Contracts'] },
]

const ATTESTATION_STEPS = [
  { step: '1', title: 'Notary Attestation', desc: 'Document verified by a licensed notary public in the country of origin.' },
  { step: '2', title: 'Home Country Auth.', desc: 'Attestation from relevant ministry (e.g. HEC, MOFA) in the issuing country.' },
  { step: '3', title: 'UAE Embassy', desc: 'UAE Embassy in the home country authenticates the document.' },
  { step: '4', title: 'UAE MOFA', desc: 'Final attestation by the UAE Ministry of Foreign Affairs — document is now valid.' },
]

export default function AttestationPage() {
  return (
    <>
      <PageHero
        tag="Certificate Attestation"
        title={<>Document Attestation<br className="hidden md:block" /> Services in Dubai</>}
        subtitle="Fast, reliable attestation for educational, personal, and commercial documents — for UAE use and international recognition."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Certificate Attestation' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Documents" title="Documents We Attest" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOC_TYPES.map(d => (
              <div key={d.title} className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-gold transition-colors">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-semibold text-navy mb-3">{d.title}</h3>
                <ul className="space-y-1.5">
                  {d.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle2 size={13} className="text-gold-dark flex-shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Process" title="4-Stage Attestation Process" light center />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ATTESTATION_STEPS.map((s, i) => (
              <div key={s.step} className="text-center relative">
                {i < ATTESTATION_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-full h-0.5 bg-gold/20" />
                )}
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-playfair font-bold text-gold text-lg mx-auto mb-4 relative z-10">{s.step}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Need a Document Attested?</h2>
          <p className="text-slate-500 mb-8">We handle the entire attestation chain — from notary to UAE MOFA. Contact us for turnaround time and pricing.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Get Attestation Quote
          </Link>
        </div>
      </section>
    </>
  )
}
