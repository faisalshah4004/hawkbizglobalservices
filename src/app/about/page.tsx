import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero, SectionHeader, StatsStrip, Stars } from '@/components/shared'
import { STATS, TESTIMONIALS, SITE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us | HawkBiz Global Services Dubai',
  description:
    'Learn about HawkBiz Global Services LLC — 20+ years of expert business setup consulting in Dubai. Our team, story, values, and commitment to your success in the UAE.',
}

const TEAM = [
  { name: 'Muhammad Asif', role: 'Founder & CEO', initials: 'MA', bio: '20+ years in UAE business consultancy. Expert in company formation and regulatory compliance.' },
  { name: 'Khalid Rahman', role: 'Head of Visa Services', initials: 'KR', bio: 'Specialist in worldwide visa processing with 15+ years managing complex immigration cases.' },
  { name: 'Sara Ahmed', role: 'PRO Services Manager', initials: 'SA', bio: 'Certified PRO with deep relationships across all UAE government departments.' },
  { name: 'Hassan Ali', role: 'IT Services Lead', initials: 'HA', bio: 'Full-stack developer with expertise in web, mobile, and cloud solutions for UAE businesses.' },
]

const MILESTONES = [
  { year: '2004', title: 'Company Founded', desc: 'HawkBiz established in Dubai to serve the growing demand for professional business setup services.' },
  { year: '2008', title: 'Visa Services Launch', desc: 'Expanded to offer comprehensive worldwide visa services covering 30+ countries.' },
  { year: '2012', title: '250+ Companies Formed', desc: 'Reached a major milestone with 250 successful company formations across UAE free zones and mainland.' },
  { year: '2016', title: 'Hajj & Umrah Division', desc: 'Launched a dedicated Hajj and Umrah services division to serve pilgrimage needs.' },
  { year: '2020', title: 'IT Services Added', desc: 'Diversified into digital transformation with web development, mobile apps, and SEO services.' },
  { year: '2024', title: '500+ Companies Served', desc: 'Celebrated 500+ successful company formations and expanded partnerships with major UAE free zones.' },
]

const VALUES = [
  { icon: '🎯', title: 'Precision', desc: 'We handle every document, application, and procedure with meticulous attention to detail — because in UAE compliance, the details matter.' },
  { icon: '🤝', title: 'Partnership', desc: 'We treat every client as a long-term partner, not a transaction. Your success in the UAE is our ongoing commitment.' },
  { icon: '⚡', title: 'Speed', desc: 'We know time is money. Our streamlined processes and government relationships mean faster outcomes for your business.' },
  { icon: '🔒', title: 'Integrity', desc: 'Transparent pricing, honest advice, and no surprises. We tell you exactly what to expect — and then we deliver it.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title={<>20+ Years Building Businesses<br className="hidden md:block" /> in Dubai</>}
        subtitle="HawkBiz Global Services LLC is Dubai's trusted partner for company formation, visa services, Hajj & Umrah, and digital transformation."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              tag="Our Mission"
              title={<>Simplifying Business<br /> in the UAE for Everyone</>}
            />
            <p className="text-slate-500 leading-relaxed mb-5">
              We founded HawkBiz with a single purpose: to remove the complexity and confusion from
              doing business in the UAE. Whether you're an entrepreneur setting up your first company
              or a multinational expanding into the Middle East, the regulations, procedures, and
              paperwork can be overwhelming.
            </p>
            <p className="text-slate-500 leading-relaxed mb-5">
              Our team of 20+ specialists handles everything — from trade licenses and investor visas
              to document attestation and government approvals — so you can focus entirely on building
              your business while we handle the bureaucracy.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              With offices in Dubai and strong relationships across all UAE free zones and government
              departments, we deliver outcomes faster, more reliably, and at a better value than
              any alternative.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-[#F8F6F0] rounded-2xl p-6 border border-slate-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip stats={STATS} />

      {/* Team */}
      <section className="py-20 md:py-28 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Our Team"
            title="Meet the Experts Behind HawkBiz"
            subtitle="Our team brings decades of combined experience in UAE business law, government relations, and digital services."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-7 border border-slate-100 text-center hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-gold-dark text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="Our Journey" title="20 Years of Growth" center />
          <div className="relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-slate-100" />
            <div className="space-y-10">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-gold flex-shrink-0 flex items-center justify-center mt-1 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-navy" />
                  </div>
                  <div>
                    <span className="text-gold-dark text-xs font-bold tracking-widest uppercase">{m.year}</span>
                    <h3 className="font-semibold text-navy mt-1 mb-1">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Testimonials" title="What Our Clients Say" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-slate-100">
                <Stars />
                <p className="text-slate-500 text-sm leading-relaxed italic mt-4 mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something <em className="text-gold not-italic">Great</em> Together
          </h2>
          <p className="text-slate-400 mb-8">Schedule a free consultation and our team will show you the fastest path to launching in Dubai.</p>
          <Link href="/book-appointment" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
