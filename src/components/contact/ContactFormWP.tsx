'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  DollarSign,
  Phone,
  FileText,
  Paperclip,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const budgetRanges = [
  'Still Evaluating',
  'Less than $20K',
  '$20K to $50K',
  '$50K to $100K',
  '$100K to $200K',
  'More than $200K',
];

const inputClasses =
  'w-full bg-white/[0.04] border border-white/[0.07] rounded-md px-4 py-3 text-[15px] text-white placeholder-gray-500 outline-none focus:bg-white/[0.08] focus:border-teal-400/40 transition-colors';

export function ContactFormWP() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    phone: '',
    description: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [nda, setNda] = useState(false);
  const [sms, setSms] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('budget', form.budget);
      data.append('phone', form.phone);
      data.append('description', form.description);
      data.append('nda', String(nda));
      data.append('sms', String(sms));
      if (file) data.append('file', file);

      const res = await fetch('/api/contact-form', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();

      if (!res.ok || result.error) {
        throw new Error(result.error || 'Submission failed.');
      }
      setStatus('success');
      setForm({ name: '', email: '', budget: '', phone: '', description: '' });
      setFile(null);
      setNda(false);
      setSms(false);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="font-dm-sans bg-[#14141c] border border-white/[0.07] rounded-2xl shadow-2xl shadow-black/40 p-6 sm:p-8 md:p-10">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-teal-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Request Sent Successfully!</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Our experts have received your details and will get in touch with you shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 px-6 py-2.5 rounded-md border border-teal-500/40 text-teal-400 text-sm font-semibold hover:bg-teal-500/10 transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-white/90 mb-2">
                  <User className="w-3.5 h-3.5 text-teal-400" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-white/90 mb-2">
                  <Mail className="w-3.5 h-3.5 text-teal-400" /> Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="xyz@domain.com"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Budget + Contact Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-white/90 mb-2">
                  <DollarSign className="w-3.5 h-3.5 text-teal-400" /> Budget
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} cursor-pointer ${form.budget ? 'text-white' : 'text-gray-500'}`}
                >
                  <option value="" disabled>
                    Select a Budget Range
                  </option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b} className="text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-white/90 mb-2">
                  <Phone className="w-3.5 h-3.5 text-teal-400" /> Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-semibold text-white/90 mb-2">
                <FileText className="w-3.5 h-3.5 text-teal-400" /> Describe your project
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Enter description"
                className={`${inputClasses} resize-none min-h-[130px]`}
              />
            </div>

            {/* Attachment */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-semibold text-white/90 mb-2">
                <Paperclip className="w-3.5 h-3.5 text-teal-400" /> Attach Document (PDF/DOC file)
              </label>
              <div className="w-full border border-white/[0.07] rounded-md px-4 py-2.5">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-teal-500 file:text-black file:font-semibold file:text-sm file:cursor-pointer hover:file:bg-teal-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-1">
              <label className="flex items-start gap-2 cursor-pointer text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={nda}
                  onChange={(e) => setNda(e.target.checked)}
                  className="mt-0.5 w-[18px] h-[18px] accent-teal-400 cursor-pointer flex-shrink-0"
                />
                <span>I want to protect my business idea by signing an NDA</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={sms}
                  onChange={(e) => setSms(e.target.checked)}
                  className="mt-0.5 w-[18px] h-[18px] accent-teal-400 cursor-pointer flex-shrink-0"
                />
                <span>I agree to receive SMS and WhatsApp</span>
              </label>
            </div>

            {/* Error message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-md bg-red-950/40 border border-red-500/30 text-red-400 text-xs"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Submit */}
            <div className="text-center pt-2">
              <button type="submit" disabled={status === 'loading'} className="btn-teal-primary disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
