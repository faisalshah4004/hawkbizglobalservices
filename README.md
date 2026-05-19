# HawkBiz Global Services — Next.js Website

A full Next.js 14 website for HawkBiz Global Services LLC, Dubai.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (Navbar + Footer)
│   ├── page.tsx                ← Homepage (all sections)
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            ← Services overview
│   │   ├── company-formation/
│   │   ├── visa-services/
│   │   ├── hajj-umrah/
│   │   ├── certificate-attestation/
│   │   └── health-insurance/
│   ├── it-services/
│   │   ├── page.tsx            ← IT Services overview
│   │   ├── web-development/
│   │   ├── mobile-apps/
│   │   ├── design/
│   │   ├── seo-marketing/
│   │   └── cloud-ecommerce/
│   ├── contact/page.tsx
│   ├── book-appointment/page.tsx
│   ├── pricing/page.tsx
│   └── blog/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   └── HeroSlider.tsx
│   └── shared/
│       └── index.tsx           ← All reusable components
└── lib/
    ├── data.ts                 ← All site content & data
    └── utils.ts
```

## ✏️ Editing Content

All content (services, packages, testimonials, FAQs, stats, etc.) lives in:
**`src/lib/data.ts`** — edit this file to update any content site-wide.

## 🎨 Theme Colors

| Variable    | Value      | Use               |
|-------------|------------|-------------------|
| gold        | `#C9A84C`  | Primary accent    |
| gold-light  | `#E8C97A`  | Hover states      |
| gold-dark   | `#8B6914`  | Text on light bg  |
| navy        | `#0A1628`  | Primary dark      |
| navy-mid    | `#0F2040`  | Sections          |
| navy-light  | `#1A3260`  | Gradients         |

## 📧 Contact Form

The contact form in `src/app/contact/page.tsx` currently logs to console.
To connect to a real email service, replace the `onSubmit` function with:
- **EmailJS** (no backend needed)
- **Resend** (recommended for Next.js)
- **Nodemailer** via a Route Handler

## 🚢 Deployment (Vercel — recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 📦 Dependencies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** (animations)
- **Swiper.js** (hero slider)
- **React Hook Form** (contact & booking forms)
- **Lucide React** (icons)
