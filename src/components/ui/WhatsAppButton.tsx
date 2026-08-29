'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function WhatsAppButton({
  phoneNumber = '1234567890',
  defaultMessage = 'Hi ZynTech Labs! I would like to discuss an enterprise software / AI project.',
}: {
  phoneNumber?: string;
  defaultMessage?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start font-sans select-none">
      {/* Quick Chat Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-80 max-w-sm bg-[#0c1424] border border-emerald-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0c1424] rounded-full" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">ZynTech WhatsApp Support</h4>
                  <span className="text-[10px] text-emerald-400 font-mono">Typically replies in 5 mins</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Chat Bubble */}
            <div className="my-3 p-3 rounded-2xl bg-gray-900/90 border border-gray-800 text-xs text-gray-200 leading-relaxed">
              👋 Hello! How can our enterprise engineering team help you today?
            </div>

            {/* Direct Connect Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-colors shadow-lg shadow-emerald-500/25"
            >
              <span>Start WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-xl shadow-emerald-500/30 transition-colors group"
        aria-label="Toggle WhatsApp Support"
      >
        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300" />
        </span>

        <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.89.897 2.796.897 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.784-5.768-5.784zm9.969 5.766c0 5.514-4.486 10-10 10-1.808 0-3.504-.482-4.966-1.325l-7.034 1.842 1.879-6.862c-.931-1.517-1.479-3.308-1.479-5.221 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
        </svg>

        <span className="hidden sm:inline-block font-extrabold text-[11px]">WhatsApp</span>
      </motion.button>
    </div>
  );
}
