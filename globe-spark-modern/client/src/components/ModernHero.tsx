import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Search, Zap, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface LogoItem {
  name: string;
  category: string;
  src: string;
  gradient: string;
}

const marketingPlatforms: LogoItem[] = [
  {
    name: "Google Ads / SEO",
    category: "Search & Intent",
    src: "https://svgl.app/library/google.svg",
    gradient: "from-blue-600 to-green-600",
  },
  {
    name: "Meta Ads",
    category: "Paid Social",
    src: "https://svgl.app/library/meta.svg",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Analytics 4",
    category: "Tracking & CRO",
    src: "https://svgl.app/library/google-cloud.svg",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Shopify Growth",
    category: "E-Commerce",
    src: "https://svgl.app/library/shopify.svg",
    gradient: "from-lime-400 to-emerald-500",
  },
  {
    name: "WordPress",
    category: "CMS & Technical",
    src: "https://svgl.app/library/wordpress.svg",
    gradient: "from-sky-500 to-blue-700",
  },
  {
    name: "Semrush / Ahrefs",
    category: "SEO Intelligence",
    src: "https://svgl.app/library/procure.svg",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    name: "LinkedIn Ads",
    category: "B2B Marketing",
    src: "https://svgl.app/library/linkedin.svg",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "WhatsApp API",
    category: "Direct Inquiries",
    src: "https://svgl.app/library/whatsapp.svg",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export const ModernHero: React.FC = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-8 px-4 md:px-8">
      {/* 2. Main Hero Container & Video Background */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[40px] bg-white border border-slate-200/80 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] overflow-hidden h-[620px] flex flex-col justify-between">
        
        {/* Underlying Ambient Video Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />
        </div>

        {/* 3. Hero Text Content & Marketing Messaging */}
        <div className="relative z-20 flex-1 px-6 md:px-14 py-16 flex flex-col justify-center items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Google Certified Growth Agency</span>
          </div>

          <h1 className="text-[36px] md:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-4">
            Drive Growth with <br />
            Data-Driven Digital Marketing
          </h1>

          <p className="text-[14.5px] md:text-[16px] text-slate-600 leading-relaxed max-w-xl mb-7">
            We scale ambitious brands through ROI-focused SEO, precision performance ads, high-converting web design, and tailored growth strategies.
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0a152d] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span>Get Your Free Strategy Call</span>
              <ChevronRight className="w-4 h-4" />
            </motion.a>

            <a
              href="#case-studies"
              className="px-5 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white/90 backdrop-blur-md border border-slate-200 hover:bg-white hover:border-slate-300 transition-colors flex items-center gap-2"
            >
              <span>View Proven Results</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust Proof Bar */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex -space-x-1.5">
              <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">GS</div>
              <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-amber-400 text-[10px] font-bold">★</div>
              <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">98%</div>
            </div>
            <div className="text-xs text-slate-600">
              <strong className="text-slate-900">4.9/5 Rating</strong> · 80+ Local & National Brands Scaled
            </div>
          </div>
        </div>

        {/* 4. Floating Bottom Navbar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-auto max-w-[90%]">
          <nav className="flex items-center bg-white/90 backdrop-blur-2xl px-2 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/80 gap-1 md:gap-2">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full text-white text-xs font-bold">
              ✦
            </div>
            <a href="#services" className="text-[12px] font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 transition-colors rounded-full">
              Services
            </a>
            <a href="#case-studies" className="text-[12px] font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 transition-colors rounded-full">
              Results
            </a>
            <a href="#process" className="text-[12px] font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 transition-colors rounded-full">
              Methodology
            </a>
            <a href="#contact" className="bg-slate-900 px-4 py-1.5 rounded-full text-[12px] font-semibold text-white hover:bg-blue-600 transition-all flex items-center gap-1">
              <span>Get in touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      </div>

      {/* 5. Seamless Marquee Logo Scroller Component */}
      <div className="mt-8 w-full max-w-[1400px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="text-center mb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Platforms & Technologies We Master</span>
        </div>
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {[...marketingPlatforms, ...marketingPlatforms].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group relative h-14 px-5 shrink-0 flex items-center gap-3 rounded-full bg-white border border-slate-200 shadow-sm hover:border-slate-400 hover:-translate-y-0.5 transition-all overflow-hidden cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-5 h-5 object-contain relative z-10"
                loading="lazy"
              />
              <span className="text-xs font-semibold text-slate-700 relative z-10 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
