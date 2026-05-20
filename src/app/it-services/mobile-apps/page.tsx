import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Mobile App Development Dubai | Flutter, React Native | HawkBiz IT',
  description: 'Cross-platform iOS and Android mobile app development in Dubai. Flutter and React Native specialists delivering beautiful, high-performance mobile apps.',
}

const FEATURES = ['iOS & Android from one codebase', 'Native-like performance', 'Offline functionality', 'Push notifications', 'App Store & Google Play submission', 'Ongoing updates & maintenance']

export default function MobileAppsPage() {
  return (
    <>
      <PageHero
        tag="Mobile Apps"
        title={<>Mobile App Development<br className="hidden md:block" /> for iOS & Android</>}
        subtitle="Cross-platform apps built with Flutter and React Native — one codebase, two platforms, native performance."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IT Services', href: '/it-services' }, { label: 'Mobile Apps' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader tag="Mobile Development" title={<>Apps That Delight<br /> Your Users</>} />
            <p className="text-slate-500 leading-relaxed mb-6">We design and build mobile applications that are fast, intuitive, and beautiful — from MVP to fully-featured enterprise apps. Our Flutter and React Native team delivers native-quality experiences for both iOS and Android from a single codebase, saving you time and cost.</p>
            <ul className="space-y-3 mb-8">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-navy text-sm">
                  <CheckCircle2 size={15} className="text-gold-dark flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-6 py-3 rounded-xl text-sm transition-colors">
              Discuss Your App Idea
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '📱', title: 'Flutter Apps', desc: 'Beautiful cross-platform apps with smooth 60fps animations.' },
              { icon: '⚛️', title: 'React Native', desc: 'JavaScript-powered native apps with shared web codebase.' },
              { icon: '🍎', title: 'iOS Native', desc: 'Swift-built apps optimised for iPhone and iPad.' },
              { icon: '🤖', title: 'Android Native', desc: 'Kotlin-built apps for the full Android ecosystem.' },
            ].map(card => (
              <div key={card.title} className="bg-[#F8F6F0] rounded-2xl p-5 border border-slate-100">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h4 className="font-semibold text-navy text-sm mb-1">{card.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Got an App Idea?</h2>
          <p className="text-slate-400 mb-8">We turn app ideas into launched products. Share your concept and we&lsquo;ll map out the full build plan.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl transition-colors">Get a Free Proposal</Link>
        </div>
      </section>
    </>
  )
}
