import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Cloud Solutions & E-Commerce Development Dubai | HawkBiz IT',
  description: 'Cloud infrastructure, SaaS development, and e-commerce solutions in Dubai. AWS, Azure, Shopify, WooCommerce specialists for UAE businesses.',
}

const CLOUD = [
  { icon: '☁️', title: 'Cloud Infrastructure', desc: 'AWS and Azure setup, migration, and management — scalable, secure, and cost-optimised.' },
  { icon: '🔧', title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines, containerisation with Docker, and Kubernetes orchestration.' },
  { icon: '🛡️', title: 'Cloud Security', desc: 'Security audits, encryption, access control, and compliance for UAE data regulations.' },
  { icon: '📊', title: 'SaaS Development', desc: 'Multi-tenant SaaS products built to scale — from MVP to enterprise-grade platforms.' },
]

const ECOMMERCE = [
  { icon: '🛒', title: 'Shopify Stores', desc: 'Professional Shopify setup, theme customisation, and app integration for UAE e-commerce.' },
  { icon: '🔌', title: 'WooCommerce', desc: 'WordPress-based online stores with full customisation and payment gateway integration.' },
  { icon: '💳', title: 'Payment Gateways', desc: 'Stripe, PayTabs, Telr, and local UAE payment gateway integration.' },
  { icon: '📦', title: 'Custom E-Commerce', desc: 'Fully custom-built online stores with unique features, inventory management, and B2B portals.' },
]

export default function CloudEcommercePage() {
  return (
    <>
      <PageHero
        tag="Cloud & E-Commerce"
        title={<>Cloud Solutions &<br className="hidden md:block" /> E-Commerce Development</>}
        subtitle="Scalable cloud infrastructure and powerful e-commerce platforms — built to grow with your UAE business."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IT Services', href: '/it-services' }, { label: 'Cloud & E-Commerce' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Cloud Services" title="Cloud & Infrastructure" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {CLOUD.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-gold hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeader tag="E-Commerce" title="Online Store Development" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOMMERCE.map(s => (
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
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Launch Your Online Store</h2>
          <p className="text-slate-400 mb-8">From cloud setup to a live e-commerce store — we handle everything. Get a proposal today.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">Get a Free Quote</Link>
        </div>
      </section>
    </>
  )
}
