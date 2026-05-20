import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Blog | Business Setup Tips & UAE Business News | HawkBiz',
  description: 'Expert articles and guides on company formation in Dubai, UAE visa requirements, business setup tips, and the latest UAE business news from HawkBiz Global Services.',
}

const POSTS = [
  {
    slug: 'how-to-start-business-dubai-freezone',
    category: 'Company Formation',
    title: 'How to Start a Business in a Dubai Freezone in 2025: Complete Guide',
    excerpt: 'Everything you need to know about setting up a company in a Dubai Freezone — from choosing the right zone to getting your trade license in 3–5 days.',
    date: 'May 10, 2025',
    readTime: '8 min read',
    emoji: '🏢',
  },
  {
    slug: 'dubai-freezone-vs-mainland-comparison',
    category: 'Company Formation',
    title: 'Dubai Freezone vs Mainland: Which is Right for Your Business in 2025?',
    excerpt: 'A detailed comparison of Freezone and Mainland company setup in Dubai — ownership, costs, visa quotas, and which structure suits your business goals.',
    date: 'April 28, 2025',
    readTime: '6 min read',
    emoji: '⚖️',
  },
  {
    slug: 'uae-visa-types-explained',
    category: 'Visa Services',
    title: 'UAE Visa Types Explained: Residence, Tourist, and Employment Visas in 2025',
    excerpt: 'A comprehensive guide to all UAE visa categories — who qualifies, how to apply, processing times, and what documents you need.',
    date: 'April 15, 2025',
    readTime: '7 min read',
    emoji: '🌍',
  },
  {
    slug: 'umrah-visa-requirements-dubai-2025',
    category: 'Hajj & Umrah',
    title: 'Umrah Visa Requirements for UAE Residents in 2025: Full Checklist',
    excerpt: 'Planning Umrah from Dubai? Here is the complete updated list of documents, health requirements, and processing steps for UAE residents.',
    date: 'March 30, 2025',
    readTime: '5 min read',
    emoji: '🕌',
  },
  {
    slug: 'certificate-attestation-uae-process',
    category: 'Attestation',
    title: 'Certificate Attestation in UAE 2025: Step-by-Step Process for All Documents',
    excerpt: 'From notary to MOFA — a clear, step-by-step guide to getting your educational and personal documents attested for use in the UAE.',
    date: 'March 18, 2025',
    readTime: '6 min read',
    emoji: '🎓',
  },
  {
    slug: 'best-uae-freezone-for-it-company',
    category: 'IT & Business',
    title: 'Best UAE Freezone for an IT Company in 2025: Top 5 Compared',
    excerpt: 'Which UAE freezone is best for a tech startup or IT company? We compare DIFC, IFZA, DMCC, Meydan, and RAKEZ on cost, flexibility, and visa quotas.',
    date: 'March 5, 2025',
    readTime: '9 min read',
    emoji: '💻',
  },
]

const CATEGORIES = ['All', 'Company Formation', 'Visa Services', 'Hajj & Umrah', 'Attestation', 'IT & Business']

export default function BlogPage() {
  return (
    <>
      <PageHero
        tag="Blog"
        title={<>Business Insights &<br className="hidden md:block" /> UAE Business Guides</>}
        subtitle="Expert articles on company formation, visa services, UAE regulations, and business tips — updated regularly by our team."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {CATEGORIES.map(cat => (
              <button key={cat} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${cat === 'All' ? 'bg-navy text-white border-navy' : 'bg-white text-slate-500 border-slate-200 hover:border-gold hover:text-gold-dark'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-gold hover:shadow-xl hover:shadow-navy/10 transition-all hover:-translate-y-1">
                <div className="h-40 bg-[#F8F6F0] flex items-center justify-center text-6xl">
                  {post.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gold/10 text-gold-dark text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-slate-300 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-playfair font-bold text-navy text-base leading-tight mb-2 group-hover:text-gold-dark transition-colors">{post.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-slate-300 text-xs">{post.date}</span>
                    <span className="text-gold-dark text-xs font-semibold group-hover:text-gold transition-colors">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#F8F6F0]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Stay Updated</h2>
          <p className="text-slate-500 text-sm mb-6">Get the latest UAE business news and setup guides delivered to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
            <button className="bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
