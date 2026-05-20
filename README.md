# HawkBiz Global Services — Next.js 15 Website

A full Next.js 15 website for HawkBiz Global Services LLC, Dubai.

## ⚙️ Tech Stack

| Tool | Version |
|------|---------|
| **Next.js** | 15.3.x (App Router + Turbopack) |
| **React** | 19 |
| **TypeScript** | 5 |
| **Tailwind CSS** | 3.4 |
| **ESLint** | 9 (flat config) |
| **React Hook Form** | 7.54 |
| **Lucide React** | 0.469 |
| **Framer Motion** | 12 |

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (with Turbopack)
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                ← Homepage
│   ├── about/
│   ├── services/
│   │   ├── company-formation/
│   │   ├── visa-services/
│   │   ├── hajj-umrah/
│   │   ├── certificate-attestation/
│   │   └── health-insurance/
│   ├── it-services/
│   │   ├── web-development/
│   │   ├── mobile-apps/
│   │   ├── design/
│   │   ├── seo-marketing/
│   │   └── cloud-ecommerce/
│   ├── contact/
│   ├── book-appointment/
│   ├── pricing/
│   └── blog/
├── components/
│   ├── layout/Navbar.tsx
│   ├── layout/Footer.tsx
│   ├── home/HeroSlider.tsx
│   └── shared/
│       ├── index.tsx           ← Reusable components
│       └── WhatsAppButton.tsx
└── lib/
    ├── data.ts                 ← All site content
    └── utils.ts
```

## ✏️ Editing Content

All content lives in **`src/lib/data.ts`** — edit this file to update services, packages, testimonials, FAQs, stats, and contact info site-wide.

## 🎨 Theme Colors

| Name | Hex | Use |
|------|-----|-----|
| `gold` | `#C9A84C` | Primary accent |
| `gold-light` | `#E8C97A` | Hover states |
| `gold-dark` | `#8B6914` | Text on light bg |
| `navy` | `#0A1628` | Primary dark bg |
| `navy-mid` | `#0F2040` | Sections |
| `navy-light` | `#1A3260` | Gradients |

## 📧 Contact Form Setup

Replace the `onSubmit` stub in `src/app/contact/page.tsx` with a real email service:

```bash
# Option 1 — Resend (recommended)
npm install resend

# Option 2 — EmailJS (no backend)
npm install @emailjs/browser
```

## 🚢 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub → import on vercel.com for automatic CI/CD deploys.

## 🔑 Key Next.js 15 Changes Applied

- `Viewport` exported separately from `metadata` (required in v15)
- `dev` script uses `--turbopack` flag
- ESLint 9 flat config (`eslint.config.mjs`)
- React 19 compatible
- All `@types/*` updated to v19
