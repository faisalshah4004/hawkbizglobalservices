import Link from 'next/link'
import { cn } from '@/lib/utils'

// ─── Section Tag ──────────────────────────────────────────────
export function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        'inline-block text-[11px] font-semibold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-3',
        light
          ? 'bg-gold/15 text-gold border border-gold/30'
          : 'bg-gold/10 text-gold-dark border border-gold/20'
      )}
    >
      {children}
    </span>
  )
}

// ─── Section Header ───────────────────────────────────────────
export function SectionHeader({
  tag, title, subtitle, center = false, light = false,
}: {
  tag?: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={cn('mb-14', center && 'text-center')}>
      {tag && <SectionTag light={light}>{tag}</SectionTag>}
      <h2
        className={cn(
          'font-playfair text-3xl md:text-4xl font-bold leading-tight mb-3',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base leading-relaxed max-w-xl',
            center && 'mx-auto',
            light ? 'text-slate-400' : 'text-slate-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── Service Card ─────────────────────────────────────────────
export function ServiceCard({
  icon, title, description, href, dark = false,
}: {
  icon: string
  title: string
  description: string
  href: string
  dark?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col gap-3 p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1',
        dark
          ? 'bg-white/[0.03] border-white/[0.07] hover:border-gold/30 hover:bg-gold/5'
          : 'bg-white border-slate-100 hover:border-gold hover:shadow-xl hover:shadow-navy/10'
      )}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <h3 className={cn('font-semibold text-base', dark ? 'text-white' : 'text-navy')}>
        {title}
      </h3>
      <p className={cn('text-sm leading-relaxed', dark ? 'text-slate-500' : 'text-slate-400')}>
        {description}
      </p>
      <span className={cn(
        'text-sm font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity',
        dark ? 'text-gold' : 'text-gold-dark'
      )}>
        Learn more →
      </span>
    </Link>
  )
}

// ─── IT Card ──────────────────────────────────────────────────
export function ITCard({
  icon, title, description, tags, href,
}: {
  icon: string
  title: string
  description: string
  tags: string[]
  href: string
}) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-gold hover:shadow-2xl hover:shadow-navy/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-playfair font-bold text-navy text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-slate-50 text-navy/60 text-xs px-2.5 py-1 rounded-md font-medium">
            {tag}
          </span>
        ))}
      </div>
      <span className="text-gold-dark text-sm font-semibold flex items-center gap-2 transition-all group-hover:gap-3">
        Learn more →
      </span>
    </Link>
  )
}

// ─── Page Hero Banner ─────────────────────────────────────────
export function PageHero({
  tag, title, subtitle, breadcrumbs,
}: {
  tag?: string
  title: React.ReactNode
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
}) {
  return (
    <section className="bg-navy bg-grid-pattern relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy-light opacity-90" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-5">
            {breadcrumbs.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {b.href ? (
                  <Link href={b.href} className="hover:text-gold transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-slate-400">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {tag && <SectionTag light>{tag}</SectionTag>}
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

// ─── Stars ────────────────────────────────────────────────────
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-gold text-sm">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

// ─── Stats Strip ──────────────────────────────────────────────
export function StatsStrip({ stats }: { stats: { num: string; label: string }[] }) {
  return (
    <div className="bg-navy-mid">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-4 px-6">
            <div className="font-playfair text-4xl md:text-5xl font-bold text-gold mb-2">{s.num}</div>
            <div className="text-slate-400 text-sm tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
