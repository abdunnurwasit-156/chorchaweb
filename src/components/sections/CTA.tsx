"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 px-5 bg-[#121212]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">আজই শুরু করো, বিনামূল্যে</h2>
        <p className="text-sm text-[#71717a] leading-relaxed max-w-md">
          কোনো ক্রেডিট কার্ড লাগবে না। এখনই অ্যাকাউন্ট খুলো এবং প্রথম মক টেস্ট বা ভিডিও ক্লাস শুরু করো।
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/auth/register" className="bg-[#016a3e] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#015532] transition-colors text-sm">
            বিনামূল্যে শুরু করো
          </Link>
          <Link href="/premium" className="border border-[#ffffff15] text-[#a1a1aa] px-6 py-3 rounded-xl font-medium hover:text-white hover:border-[#ffffff25] transition-colors text-sm">
            প্রিমিয়াম প্ল্যান দেখো
          </Link>
        </div>
        <p className="text-xs text-[#71717a]">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link href="/auth/login" className="text-[#d4d4d8] hover:underline">লগ ইন করো</Link>
        </p>
      </motion.div>
    </section>
  );
}
