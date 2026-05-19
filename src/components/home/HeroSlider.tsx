'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const slides = [
  {
    badge: '#1 Business Setup Consultants in Dubai',
    title: <>Start Your <em className="text-gold not-italic">Business</em><br className="hidden md:block" /> Journey in Dubai</>,
    subtitle:
      'Expert guidance and fast solutions for seamless company formation across Dubai Freezone, Mainland, and Offshore — with 20+ years of proven success.',
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
    title: <>Worldwide <em className="text-gold not-italic">Visa</em> &<br className="hidden md:block" /> Document Services</>,
    subtitle:
      'From UAE residence visas to worldwide visit visas, certificate attestation, and Police Clearance Reports — we handle it all, end to end, with precision.',
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
    title: <>Sacred <em className="text-gold not-italic">Pilgrimages</em><br className="hidden md:block" /> Made Effortless</>,
    subtitle:
      'Complete Hajj and Umrah packages with visa processing, travel documentation, accommodation, and full pilgrimage support — focus on your spiritual journey.',
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
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import Swiper to avoid SSR issues
    let swiper: unknown
    const initSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { Navigation, Pagination, Autoplay } = await import('swiper/modules')
      await import('swiper/css')

      if (!swiperRef.current) return

      swiper = new Swiper(swiperRef.current as HTMLElement, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        speed: 700,
        autoplay: { delay: 5500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      })
    }
    initSwiper()
    return () => {
      if (swiper && typeof (swiper as { destroy?: () => void }).destroy === 'function') {
        (swiper as { destroy: () => void }).destroy()
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {slides.map((slide, idx) => (
            <div key={idx} className="swiper-slide">
              <div className="relative min-h-[600px] md:min-h-[640px] flex items-center bg-navy">
                {/* Grid pattern background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-100" />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(15,32,64,0.9) 50%, rgba(26,50,96,0.85) 100%)`,
                  }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
                  {/* Content */}
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
                      {slide.badge}
                    </div>

                    {/* Title */}
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                      {slide.subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={slide.cta.href}
                        className="bg-gold hover:bg-gold-light text-navy font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm"
                      >
                        {slide.cta.label}
                      </Link>
                      <Link
                        href={slide.ctaSecondary.href}
                        className="bg-transparent border border-white/25 text-white hover:border-gold hover:text-gold font-medium px-7 py-3.5 rounded-xl transition-all text-sm"
                      >
                        {slide.ctaSecondary.label}
                      </Link>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="hidden lg:flex flex-col gap-3 min-w-[200px]">
                    {slide.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 border border-gold/20 rounded-2xl px-6 py-4 backdrop-blur-sm"
                      >
                        <div className="font-playfair text-3xl font-bold text-gold">{stat.num}</div>
                        <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="swiper-pagination !bottom-6" />
        <div className="swiper-button-prev !left-4" />
        <div className="swiper-button-next !right-4" />
      </div>
    </section>
  )
}
