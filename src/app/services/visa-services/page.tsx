import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Worldwide Visa Services Dubai | UAE Visit Visa | HawkBiz',
  description: 'Complete worldwide visa services from Dubai — UAE residence visa, UK, USA, Schengen, tourist and business visas for 50+ countries. Fast, expert processing.',
}

const VISA_TYPES = [
  { icon: '🇦🇪', title: 'UAE Residence Visa', desc: 'Investor, employment, dependent and domestic worker residence visas — full processing and medical coordination.', tags: ['Investor Visa', 'Employment Visa', 'Family Visa', 'Domestic Worker'] },
  { icon: '🇬🇧', title: 'UK Visa', desc: 'Tourist, student, work, and business visas for the United Kingdom with expert documentation guidance.', tags: ['Tourist', 'Student', 'Work', 'Business'] },
  { icon: '🇺🇸', title: 'USA Visa', desc: 'B1/B2 tourist, F1 student, and business visas with interview coaching and document preparation.', tags: ['B1/B2 Tourist', 'F1 Student', 'Business'] },
  { icon: '🇪🇺', title: 'Schengen Visa', desc: 'Visit visa for all 27 Schengen zone countries — France, Germany, Italy, Spain, and more.', tags: ['France', 'Germany', 'Italy', 'Spain'] },
  { icon: '🇹🇭', title: 'Thailand Visa', desc: 'Tourist and business visas for Thailand with fast turnaround and full application support.', tags: ['Tourist', 'Business', 'Retirement'] },
  { icon: '🇦🇿', title: 'Azerbaijan Visa', desc: 'Tourist and business visas for Baku, Azerbaijan — individual and group applications.', tags: ['Tourist', 'Business', 'Group'] },
  { icon: '🌍', title: 'Other Countries', desc: 'We cover 50+ countries worldwide. Contact us for any destination not listed.', tags: ['Malaysia', 'Turkey', 'Canada', 'Australia'] },
  { icon: '🚀', title: 'Express Processing', desc: 'Urgent visa processing for time-sensitive travel — premium service with priority handling.', tags: ['24hr', '48hr', 'Emergency'] },
]

const PROCESS = [
  { step: '01', title: 'Free Assessment', desc: 'Tell us your destination and travel purpose. We advise on the right visa type and requirements.' },
  { step: '02', title: 'Document Checklist', desc: 'Receive a precise list of required documents. We guide you to avoid rejections.' },
  { step: '03', title: 'Application Submission', desc: 'We prepare and submit your complete application to the embassy or consulate.' },
  { step: '04', title: 'Visa Delivered', desc: 'Track your application. We notify you immediately when your visa is ready.' },
]

export default function VisaServicesPage() {
  return (
    <>
      <PageHero
        tag="Visa Services"
        title={<>Worldwide Visa Services<br className="hidden md:block" /> from Dubai</>}
        subtitle="Tourist, business, study, and residence visas for 50+ countries — handled by experts with high approval rates."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Visa Services' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Visa Types" title="Visas We Process" subtitle="From UAE residence to worldwide tourist and business visas — we handle every type." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VISA_TYPES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-gold hover:shadow-xl hover:shadow-navy/10 transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{v.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {v.tags.map(t => <span key={t} className="bg-slate-50 text-slate-500 text-xs px-2 py-0.5 rounded">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="How It Works" title="Simple 4-Step Process" light center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(p => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-playfair font-bold text-gold text-lg mx-auto mb-4">{p.step}</div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Need a Visa? Let&apos;s Talk.</h2>
          <p className="text-slate-500 mb-8">Book a free call — our visa experts will advise you on the exact requirements and fastest way to get approved.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Contact Us Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
