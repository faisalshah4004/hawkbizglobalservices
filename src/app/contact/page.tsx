'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, Clock, MapPin, MessageCircle, Send } from 'lucide-react'
import { PageHero } from '@/components/shared'
import { SITE } from '@/lib/data'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const SERVICES_LIST = [
  'Company Formation', 'Visa Services', 'Hajj & Umrah', 'Certificate Attestation',
  'Health Insurance', 'HR Consultancy', 'Web Development', 'Mobile App Development',
  'UI/UX Design', 'SEO & Marketing', 'Cloud Solutions', 'E-Commerce', 'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Replace with your API/email endpoint
    await new Promise(r => setTimeout(r, 1000))
    console.log(data)
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        tag="Contact Us"
        title={<>Get in Touch with<br className="hidden md:block" /> Our Expert Team</>}
        subtitle="Book a free consultation, ask a question, or request a quote. We respond within 2 hours."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_400px] gap-16">

          {/* Contact Form */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
            <p className="text-slate-400 text-sm mb-8">Fill in the form and our team will get back to you within 2 business hours.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">Message Received!</h3>
                <p className="text-slate-500 text-sm">Thank you for reaching out. Our team will contact you within 2 hours during business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Email Address *</label>
                    <input
                      {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Phone Number</label>
                    <input
                      {...register('phone')}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:border-gold transition-colors"
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Service Interested In</label>
                    <select
                      {...register('service')}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-1.5">Your Message *</label>
                  <textarea
                    {...register('message', { required: 'Please write a message' })}
                    rows={5}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-gold hover:bg-gold-light disabled:opacity-60 text-navy font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-navy rounded-2xl p-7">
              <h3 className="font-playfair font-bold text-white text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { Icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
                  { Icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: MapPin, label: 'Location', value: SITE.address },
                  { Icon: Clock, label: 'Hours', value: SITE.hours },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-gold transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border-2 border-green-400/30 bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-white fill-white" />
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">Chat on WhatsApp</p>
                <p className="text-slate-500 text-xs">Fastest way to get a response</p>
              </div>
            </a>

            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-5">
              <h4 className="font-semibold text-navy mb-1 text-sm">Free Consultation</h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">Book a 30-minute call with our expert — completely free, no obligation.</p>
              <a href="/book-appointment" className="block text-center bg-gold hover:bg-gold-light text-navy text-xs font-bold py-2.5 rounded-xl transition-colors">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
