'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionUrl?: string;
  actionLabel?: string;
}

const initialMessages: Message[] = [
  {
    id: 'm-1',
    sender: 'bot',
    text: 'Hello! I am ZynTech AI Assistant. How can I help you accelerate your enterprise software, AI automation, or cloud roadmap today?',
  },
];

const quickPrompts = [
  'What services do you offer?',
  'Show case studies',
  'How do I book a discovery call?',
  'What is your tech stack?',
];

function getBotResponse(userQuery: string): Message {
  const query = userQuery.toLowerCase();

  if (query.includes('service') || query.includes('what do you do') || query.includes('offer')) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: 'We provide full-cycle custom enterprise software, mobile app development (iOS & Android), AI & ML pipelines, cloud & DevOps engineering (AWS/GCP), UI/UX product design, and zero-trust cybersecurity.',
      actionUrl: '/#services',
      actionLabel: 'Explore All Services',
    };
  }

  if (query.includes('case study') || query.includes('portfolio') || query.includes('client') || query.includes('gig') || query.includes('tarzan')) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: 'We engineered an automated fleet dispatch platform for GIG Logistics (150K+ parcels daily) and IoT CAN-bus telematics for Tarzan Transport (saved 34% in fuel costs).',
      actionUrl: '/case-studies',
      actionLabel: 'View Case Studies',
    };
  }

  if (query.includes('call') || query.includes('book') || query.includes('contact') || query.includes('talk') || query.includes('hire') || query.includes('quote') || query.includes('price')) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: 'You can book a 30-minute discovery session with our senior solutions architect. Our team typically responds within 24 hours with project scopes and cost estimates.',
      actionUrl: '/contact',
      actionLabel: 'Book A Discovery Call',
    };
  }

  if (query.includes('stack') || query.includes('tech') || query.includes('framework') || query.includes('language')) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: 'Our enterprise stack includes Next.js, React, Node.js, Go, Python (PyTorch/TensorFlow for AI), Kafka, Redis, PostgreSQL, Docker, and Kubernetes on AWS/GCP.',
      actionUrl: '/#enterprise',
      actionLabel: 'View Tech Pillars',
    };
  }

  return {
    id: `bot-${Date.now()}`,
    sender: 'bot',
    text: 'Thank you for your message! Would you like to schedule a discovery call with our solutions architects to discuss custom requirements?',
    actionUrl: '/contact',
    actionLabel: 'Schedule A Call',
  };
}

export function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 650);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end font-sans select-none">
      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-96 max-w-sm h-[480px] sm:h-[520px] max-h-[75vh] bg-[#0c1324] border border-cyan-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Window Header */}
            <div className="bg-gradient-to-r from-[#0d1b38] to-[#0c1324] p-3.5 sm:p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 p-[1.5px] shadow-lg shadow-teal-500/20">
                  <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center text-teal-300">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-white">ZynTech AI</h3>
                    <Sparkles className="w-3 h-3 text-teal-400" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-teal-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Enterprise Copilot
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages(initialMessages)}
                  title="Reset conversation"
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] ${
                      msg.sender === 'user'
                        ? 'bg-teal-500 text-black font-bold'
                        : 'bg-cyan-950 border border-cyan-500/40 text-cyan-300'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-teal-500 text-black font-medium rounded-tr-none'
                        : 'bg-[#111c33] text-gray-200 border border-gray-800 rounded-tl-none shadow-md'
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.actionUrl && msg.actionLabel && (
                      <div className="mt-2 pt-2 border-t border-gray-800/80">
                        <Link
                          href={msg.actionUrl}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-400 hover:underline"
                        >
                          <span>{msg.actionLabel}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-[#111c33] p-2.5 rounded-2xl border border-gray-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 border-t border-gray-800 bg-[#090f1d] flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#111c33] hover:bg-teal-500 hover:text-black text-gray-300 text-[10px] font-medium border border-gray-800 transition-colors flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-2.5 sm:p-3 bg-[#0c1324] border-t border-gray-800">
              <div className="flex items-center gap-2 bg-[#070b16] border border-gray-800 focus-within:border-cyan-500/60 rounded-xl px-3 py-2 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, case studies..."
                  className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="text-teal-400 hover:text-teal-300 disabled:text-gray-600 transition-colors p-1"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-xs shadow-xl shadow-teal-500/30 transition-all group"
        aria-label="Toggle AI Assistant"
      >
        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-200" />
        </span>

        <Bot className="w-5 h-5 text-black flex-shrink-0" />
        <span className="hidden sm:inline-block font-extrabold text-[11px]">AI Copilot</span>
      </motion.button>
    </div>
  );
}
