'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Calendar, Clock, User, Send } from 'lucide-react'
import { PageHero } from '@/components/shared'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes: string
}

const SERVICES_LIST = [
  'Company Formation — Freezone', 'Company Formation — Mainland', 'Company Formation — Offshore',
  'Visa Services', 'Hajj & Umrah Packages', 'Certificate Attestation', 'Health Insurance',
  'HR Consultancy', 'Web Development', 'Mobile App', 'SEO & Marketing', 'Other',
]

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
]

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log(data)
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        tag="Book Appointment"
        title={<>Schedule Your Free<br className="hidden md:block" /> Consultation</>}
        subtitle="Choose a convenient time and our expert will call you — completely free, no obligations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book Appointment' }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { icon: <User size={20} className="text-gold" />, title: 'Expert Consultant', desc: 'Speak directly with a specialist' },
              { icon: <Clock size={20} className="text-gold" />, title: '30 Minutes', desc: 'Focused, productive session' },
              { icon: <Calendar size={20} className="text-gold" />, title: '100% Free', desc: 'No charge, no commitment' },
            ].map(card => (
              <div key={card.title} className="bg-[#F8F6F0] rounded-2xl p-5 text-center border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">{card.icon}</div>
                <p className="font-semibold text-navy text-sm">{card.title}</p>
                <p className="text-slate-400 text-xs mt-0.5">{card.desc}</p>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-3">Appointment Requested!</h3>
              <p className="text-slate-500">Our team will confirm your appointment within 1 hour. Check your email for a confirmation.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
              <h2 className="font-playfair text-xl font-bold text-navy mb-6">Your Appointment Details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Full Name *</label>
                    <input {...register('name', { required: true })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Your full name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Email Address *</label>
                    <input {...register('email', { required: true })} type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Phone Number *</label>
                    <input {...register('phone', { required: true })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="+971 50 000 0000" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Service Required *</label>
                    <select {...register('service', { required: true })} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white">
                      <option value="">Select a service</option>
                      {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Preferred Date *</label>
                    <input {...register('date', { required: true })} type="date" min={new Date().toISOString().split('T')[0]} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                    {errors.date && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-1.5">Preferred Time</label>
                    <select {...register('time')} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white">
                      <option value="">Any time</option>
                      {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-1.5">Additional Notes</label>
                  <textarea {...register('notes')} rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Any specific questions or requirements..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-gold hover:bg-gold-light disabled:opacity-60 text-navy font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
                  <Send size={16} />
                  {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
