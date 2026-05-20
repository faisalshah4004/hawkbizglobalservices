import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Web Development Dubai | Next.js, React, Laravel | HawkBiz IT',
  description: 'Professional web development services in Dubai — custom websites, business portals, and web applications built with Next.js, React, Laravel, and Node.js.',
}

const SERVICES = [
  { title: 'Business Websites', desc: 'Professional, SEO-optimised corporate websites that generate leads and build credibility.', icon: '🌐' },
  { title: 'Web Applications', desc: 'Custom web apps, portals, dashboards, and SaaS platforms built to your specifications.', icon: '⚙️' },
  { title: 'E-Commerce Stores', desc: 'Online stores with secure payments, inventory management, and conversion-optimised design.', icon: '🛒' },
  { title: 'Landing Pages', desc: 'High-converting landing pages for campaigns, product launches, and lead generation.', icon: '🎯' },
  { title: 'CMS Development', desc: 'Content-managed websites where you update content yourself — no developer needed.', icon: '📝' },
  { title: 'API Development', desc: 'RESTful and GraphQL APIs that power mobile apps, third-party integrations, and automation.', icon: '🔗' },
]

const FEATURES = ['Mobile-first responsive design', 'SEO-optimised from day one', 'Fast page speed (Core Web Vitals)', 'Secure HTTPS with SSL', 'Admin dashboard & CMS', 'Ongoing support & maintenance', 'Analytics & conversion tracking', '3-month post-launch warranty']

export default function WebDevPage() {
  return (
    <>
      <PageHero
        tag="Web Development"
        title={<>Custom Web Development<br className="hidden md:block" /> Built for Dubai Businesses</>}
        subtitle="Modern, fast, and SEO-friendly websites and web applications built with the latest technology stack."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IT Services', href: '/it-services' }, { label: 'Web Development' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Services" title="What We Build" center />
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

      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader tag="Why Choose Us" title={<>Everything Included<br /> in Every Project</>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map(f => (
                <div key={f} className="flex items-center gap-2.5 text-navy text-sm">
                  <CheckCircle2 size={15} className="text-gold-dark flex-shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-2xl p-8">
            <h3 className="font-playfair text-xl font-bold text-white mb-2">Our Tech Stack</h3>
            <p className="text-slate-400 text-sm mb-6">We use only modern, proven frameworks that deliver fast, secure, scalable results.</p>
            {[
              { label: 'Frontend', techs: ['Next.js 14', 'React 18', 'Vue.js 3', 'Tailwind CSS'] },
              { label: 'Backend', techs: ['Node.js', 'Laravel 11', 'Python / Django', 'PostgreSQL'] },
              { label: 'Hosting', techs: ['Vercel', 'AWS', 'DigitalOcean', 'cPanel'] },
            ].map(row => (
              <div key={row.label} className="mb-4">
                <div className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{row.label}</div>
                <div className="flex flex-wrap gap-2">
                  {row.techs.map(t => <span key={t} className="bg-white/10 text-slate-300 text-xs px-3 py-1 rounded-lg">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
          <p className="text-slate-400 mb-8">Share your requirements and we&lsquo;ll send a detailed proposal within 24 hours — no commitment required.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
