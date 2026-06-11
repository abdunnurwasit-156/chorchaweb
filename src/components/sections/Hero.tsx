"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col items-center justify-center px-5 text-center pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl flex flex-col items-center gap-6"
      >
        <div className="text-xs font-medium text-[#016a3e] tracking-widest uppercase border border-[#016a3e20] bg-[#016a3e10] px-3 py-1 rounded-full">
          নতুন: ভিডিও ক্লাস এখন পাওয়া যাচ্ছে
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          চর্চা করো নিজের গতিতে
        </h1>

        <p className="text-base md:text-lg text-[#71717a] max-w-xl leading-relaxed">
          SSC, HSC, চাকরি ও ইংরেজি মাধ্যমের জন্য ভিডিও ক্লাস, মক টেস্ট এবং AI টিউটর — সব এক জায়গায়।
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Link
            href="/auth/register"
            className="bg-[#016a3e] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#015532] transition-colors text-sm"
          >
            বিনামূল্যে শুরু করো
          </Link>
          <Link
            href="/premium"
            className="border border-[#ffffff15] text-[#a1a1aa] px-6 py-3 rounded-xl font-medium hover:text-white hover:border-[#ffffff30] transition-colors text-sm"
          >
            প্রিমিয়াম দেখো
          </Link>
        </div>

        <p className="text-xs text-[#71717a] mt-2">
          ইতিমধ্যে ৫ লাখ+ শিক্ষার্থী চর্চা ব্যবহার করছে · বিজ্ঞাপন-মুক্ত · iOS ও Android-এ পাওয়া যায়
        </p>
      </motion.div>
    </section>
  );
}
