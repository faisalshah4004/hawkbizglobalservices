'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    badge: '#1 Business Setup Consultants in Dubai',
    title: ['Start Your ', 'Business', ' Journey in Dubai'],
    subtitle: 'Expert guidance and fast solutions for seamless company formation across Dubai Freezone, Mainland, and Offshore — with 20+ years of proven success.',
    cta: { label: 'Get Free Consultation', href: '/contact' },
    ctaSecondary: { label: 'View Our Services', href: '/services' },
    stats: [
      { num: '20+', label: 'Years of Experience' },
      { num: '500+', label: 'Companies Formed' },
      { num: '98%', label: 'Client Satisfaction' },
    ],
  },
  {
    badge: 'Worldwide Visa & PRO Services',
    title: ['Worldwide ', 'Visa', ' & Document Services'],
    subtitle: 'From UAE residence visas to worldwide visit visas, certificate attestation, and Police Clearance Reports — we handle it all, end to end, with precision.',
    cta: { label: 'Explore Visa Services', href: '/services/visa-services' },
    ctaSecondary: { label: 'Book Appointment', href: '/book-appointment' },
    stats: [
      { num: '50+', label: 'Countries Covered' },
      { num: '24hr', label: 'Fast Processing' },
      { num: '100%', label: 'Compliance Guaranteed' },
    ],
  },
  {
    badge: 'Hajj & Umrah 2025 / 2026',
    title: ['Sacred ', 'Pilgrimages', ' Made Effortless'],
    subtitle: 'Complete Hajj and Umrah packages with visa processing, travel documentation, accommodation, and full pilgrimage support — focus on your spiritual journey.',
    cta: { label: 'View Packages', href: '/services/hajj-umrah' },
    ctaSecondary: { label: 'Contact Us', href: '/contact' },
    stats: [
      { num: '2026', label: 'Season Available' },
      { num: 'VIP', label: 'Group & Private Packages' },
      { num: '✓', label: 'Hassle-Free Process' },
    ],
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[640px] flex items-center bg-navy">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern" />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.97) 0%, rgba(15,32,64,0.92) 50%, rgba(26,50,96,0.88) 100%)' }} />

      {/* Slide content */}
      <div
        key={current}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 grid lg:grid-cols-[1fr_auto] gap-12 items-center"
        style={{ animation: 'fadeSlideIn 0.6s ease forwards' }}
      >
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.4)] text-[#C9A84C] text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            {slide.badge}
          </div>

          {/* Title */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            {slide.title[0]}
            <em className="text-[#C9A84C] not-italic">{slide.title[1]}</em>
            {slide.title[2]}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {slide.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.cta.href}
              className="bg-[#C9A84C] hover:bg-[#E8C97A] text-[#0A1628] font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm"
            >
              {slide.cta.label}
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              className="bg-transparent border border-white/25 text-white hover:border-[#C9A84C] hover:text-[#C9A84C] font-medium px-7 py-3.5 rounded-xl transition-all text-sm"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="hidden lg:flex flex-col gap-3 min-w-[200px]">
          {slide.stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-[rgba(201,168,76,0.2)] rounded-2xl px-6 py-4 backdrop-blur-sm">
              <div className="font-playfair text-3xl font-bold text-[#C9A84C]">{stat.num}</div>
              <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/[0.08] border border-[rgba(201,168,76,0.3)] text-white hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all flex items-center justify-center text-lg font-bold"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/[0.08] border border-[rgba(201,168,76,0.3)] text-white hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all flex items-center justify-center text-lg font-bold"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
