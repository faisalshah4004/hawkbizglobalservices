'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react'
import { SITE, NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-mid border-b border-[rgba(201,168,76,0.15)] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2">
          <div className="flex gap-6">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 text-slate-400 hover:text-gold text-xs transition-colors"
            >
              <Phone size={12} />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-gold text-xs transition-colors"
            >
              <Mail size={12} />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Clock size={12} />
            {SITE.hours}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navy shadow-2xl shadow-black/20'
            : 'bg-navy border-b border-[rgba(201,168,76,0.2)]'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-navy font-playfair font-bold text-xl"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}>
              H
            </div>
            <div className="leading-tight">
              <div className="text-white font-playfair font-bold text-base leading-none">
                HawkBiz Global
              </div>
              <div className="text-gold text-[10px] tracking-[2px] uppercase font-dm mt-0.5">
                Business Setup · Dubai
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname.startsWith(link.href)
                        ? 'text-gold'
                        : 'text-slate-300 hover:text-gold'
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn('transition-transform', activeDropdown === link.label && 'rotate-180')}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === link.href ? 'text-gold' : 'text-slate-300 hover:text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'absolute top-full left-0 mt-1 w-56 bg-navy-mid border border-[rgba(201,168,76,0.2)] rounded-xl shadow-2xl shadow-black/40 py-2 transition-all duration-200',
                      activeDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-300 hover:text-gold hover:bg-[rgba(201,168,76,0.05)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-300 hover:text-gold transition-colors"
            >
              Get Quote
            </Link>
            <Link
              href="/book-appointment"
              className="bg-gold hover:bg-gold-light text-navy text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-mid border-t border-[rgba(201,168,76,0.15)] max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-3 py-3 text-slate-200 hover:text-gold font-medium border-b border-[rgba(255,255,255,0.05)]"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-0.5 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-slate-400 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  href="/book-appointment"
                  className="block w-full text-center bg-gold text-navy font-semibold py-3 rounded-lg"
                >
                  Book Appointment
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="block w-full text-center border border-gold/30 text-gold py-3 rounded-lg text-sm"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
