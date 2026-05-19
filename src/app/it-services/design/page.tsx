import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'UI/UX Design & Branding Dubai | Graphic Design | HawkBiz IT',
  description: 'Professional UI/UX design, branding, logo design, and graphic design services in Dubai. We create identities and interfaces that convert and impress.',
}

const SERVICES = [
  { icon: '🎨', title: 'Brand Identity', desc: 'Logo, color palette, typography, brand guidelines — your complete visual identity system.' },
  { icon: '📱', title: 'UI/UX Design', desc: 'User research, wireframes, prototypes, and polished UI for web and mobile products.' },
  { icon: '📣', title: 'Social Media Creatives', desc: 'Scroll-stopping posts, stories, banners, and ad creatives for all platforms.' },
  { icon: '🖨️', title: 'Print Design', desc: 'Business cards, brochures, flyers, banners, and all corporate print materials.' },
  { icon: '🎬', title: 'Motion & Video', desc: 'Logo animations, explainer videos, social media reels, and presentation design.' },
  { icon: '📦', title: 'Packaging Design', desc: 'Product packaging, labels, and retail-ready artwork for physical products.' },
]

export default function DesignPage() {
  return (
    <>
      <PageHero
        tag="Design Services"
        title={<>Design That Makes<br className="hidden md:block" /> Your Brand Unforgettable</>}
        subtitle="Brand identity, UI/UX, graphic design, and digital creatives — crafted by designers who understand the UAE market."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IT Services', href: '/it-services' }, { label: 'Design' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Design Services" title="What We Design" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-gold hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Ready to Elevate Your Brand?</h2>
          <p className="text-slate-400 mb-8">Tell us about your brand and we'll put together a design package that fits your goals and budget.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">Start a Design Project</Link>
        </div>
      </section>
    </>
  )
}
