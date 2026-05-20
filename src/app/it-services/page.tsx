import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, SectionHeader, ITCard } from '@/components/shared'
import { IT_SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'IT Services Dubai | Web Development, Mobile Apps, SEO | HawkBiz',
  description: 'End-to-end IT services in Dubai — web development, mobile apps, UI/UX design, SEO, digital marketing, cloud solutions, and e-commerce development.',
}

const TECH_STACK = [
  { label: 'Frontend', items: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS', 'TypeScript'] },
  { label: 'Backend', items: ['Node.js', 'Laravel', 'Python', 'REST APIs', 'GraphQL'] },
  { label: 'Mobile', items: ['Flutter', 'React Native', 'iOS (Swift)', 'Android (Kotlin)'] },
  { label: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'CI/CD'] },
  { label: 'Design', items: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Canva Pro'] },
  { label: 'Marketing', items: ['Google Ads', 'Meta Ads', 'SEMrush', 'GA4', 'Ahrefs'] },
]

export default function ITServicesPage() {
  return (
    <>
      <PageHero
        tag="IT Services"
        title={<>Digital Solutions for<br className="hidden md:block" /> Modern Businesses</>}
        subtitle="Full-stack technology services to build, grow, and scale your digital presence — from website to cloud infrastructure."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IT Services' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="What We Build" title="Our IT Service Offerings" subtitle="Every digital service your business needs, delivered by experienced professionals in Dubai." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IT_SERVICES.map(s => (
              <ITCard key={s.title} icon={s.icon} title={s.title} description={s.short} tags={s.tags} href={`/it-services/${s.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Tech Stack" title="Technologies We Use" subtitle="We use modern, proven technologies to build fast, secure, and scalable solutions." light center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {TECH_STACK.map(t => (
              <div key={t.label} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
                <h3 className="text-gold text-xs font-bold uppercase tracking-wider mb-3">{t.label}</h3>
                <ul className="space-y-1.5">
                  {t.items.map(i => <li key={i} className="text-slate-400 text-xs">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Have a Project in Mind?</h2>
          <p className="text-slate-500 mb-8">Let&lsquo;s discuss your requirements. Our tech team will provide a detailed proposal within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link href="/book-appointment" className="inline-block border-2 border-gold text-gold-dark hover:bg-gold hover:text-navy font-semibold px-8 py-4 rounded-xl transition-all">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
