import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react'
import { SITE, BUSINESS_SERVICES, IT_SERVICES } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-navy font-playfair font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              >
                H
              </div>
              <span className="text-white font-playfair font-bold text-lg">
                HawkBiz Global
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Your trusted business setup consultants in Dubai, UAE. Helping entrepreneurs and
              corporations establish and grow their presence in the UAE since 2004.
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-gold text-sm transition-colors"
              >
                <Phone size={14} className="text-gold flex-shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-gold text-sm transition-colors"
              >
                <Mail size={14} className="text-gold flex-shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                {SITE.address}
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Clock size={14} className="text-gold flex-shrink-0" />
                {SITE.hours}
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-2 mt-5">
              {[
                { Icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
                { Icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
                { Icon: Twitter, href: SITE.social.twitter, label: 'Twitter' },
                { Icon: Youtube, href: SITE.social.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Business Services */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Business Services
            </h3>
            <ul className="space-y-2.5">
              {BUSINESS_SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate-500 hover:text-gold text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              IT Services
            </h3>
            <ul className="space-y-2.5">
              {IT_SERVICES.map((s) => (
                <li key={s.title}>
                  <Link
                    href={`/it-services/${s.slug}`}
                    className="text-slate-500 hover:text-gold text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Pricing & Packages', href: '/pricing' },
                { label: 'Book Appointment', href: '/book-appointment' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Blog', href: '/blog' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-500 hover:text-gold text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Block */}
            <div className="mt-8 p-4 border border-gold/20 rounded-xl bg-gold/5">
              <p className="text-slate-300 text-sm font-medium mb-1">Ready to start?</p>
              <p className="text-slate-500 text-xs mb-3">Free consultation, no obligations.</p>
              <Link
                href="/book-appointment"
                className="block text-center bg-gold text-navy text-xs font-bold py-2.5 rounded-lg hover:bg-gold-light transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-gold">HawkBiz Global Services LLC</span>. All rights reserved.
            Dubai, United Arab Emirates.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
