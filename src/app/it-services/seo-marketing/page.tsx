import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'SEO & Digital Marketing Dubai | Google Ads, Social Media | HawkBiz IT',
  description: 'Data-driven SEO and digital marketing services in Dubai — Google Ads, social media marketing, content strategy, and analytics for UAE businesses.',
}

const SERVICES = [
  { icon: '🔍', title: 'Search Engine Optimisation (SEO)', desc: 'Technical SEO, keyword research, on-page optimisation, and link building to rank your site on Google UAE.', items: ['Keyword strategy', 'On-page & technical SEO', 'Local UAE SEO', 'Monthly ranking reports'] },
  { icon: '📢', title: 'Google Ads (PPC)', desc: 'Targeted pay-per-click campaigns that drive immediate, qualified traffic to your website.', items: ['Search & Display Ads', 'Shopping Ads', 'Remarketing campaigns', 'Conversion tracking'] },
  { icon: '📲', title: 'Social Media Marketing', desc: 'Content creation, community management, and paid social campaigns for Instagram, Facebook, LinkedIn, and TikTok.', items: ['Content calendar', 'Post creation & scheduling', 'Paid social ads', 'Monthly analytics'] },
  { icon: '✍️', title: 'Content Marketing', desc: 'SEO-optimised blog content, articles, and copywriting that attracts and converts your ideal audience.', items: ['Blog posts & articles', 'Website copywriting', 'Email newsletters', 'Lead magnets'] },
]

export default function SEOMarketingPage() {
  return (
    <>
      <PageHero
        tag="SEO & Marketing"
        title={<>Digital Marketing That<br className="hidden md:block" /> Drives Real Results</>}
        subtitle="Data-driven SEO and digital marketing strategies built for the UAE market — more traffic, more leads, more revenue."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IT Services', href: '/it-services' }, { label: 'SEO & Marketing' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Services" title="Digital Marketing Services" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-gold hover:shadow-xl transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-playfair font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-navy text-xs">
                      <CheckCircle2 size={13} className="text-gold-dark flex-shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Grow Your Business Online</h2>
          <p className="text-slate-400 mb-8">Book a free digital marketing audit — we'll review your current presence and show you the exact opportunities to grow.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">Get Free Audit</Link>
        </div>
      </section>
    </>
  )
}
