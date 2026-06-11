"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function AppDownload() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-5xl mx-auto border border-[#ffffff10] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-5"
        >
          <div>
            <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">মোবাইল অ্যাপ</p>
            <h2 className="text-3xl font-bold text-white leading-snug">পকেটে নিয়ে চলো তোমার পড়াশোনা</h2>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-[#71717a]">
            <li>— অফলাইনেও ভিডিও ক্লাস দেখা যায়</li>
            <li>— ডেইলি রিমাইন্ডার নোটিফিকেশন</li>
            <li>— কম ডেটায় চলে, কম জায়গা নেয়</li>
            <li>— বিজ্ঞাপন-মুক্ত অভিজ্ঞতা</li>
          </ul>
          <div className="flex gap-3 flex-wrap">
            <Link href="#" className="text-sm border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg hover:text-white hover:border-[#ffffff25] transition-colors">
              App Store
            </Link>
            <Link href="#" className="text-sm border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg hover:text-white hover:border-[#ffffff25] transition-colors">
              Google Play
            </Link>
          </div>
        </motion.div>

        {/* App mockup screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex items-end justify-center gap-4 w-full"
        >
          {/* Back phone (smaller, offset down) */}
          <div className="hidden sm:flex w-36 aspect-[9/19] border border-dashed border-[#ffffff15] rounded-[2rem] bg-[#121212] items-center justify-center text-[10px] text-[#71717a] tracking-wider translate-y-6">
            [ app screen ]
          </div>

          {/* Center phone (main, larger) */}
          <div className="w-44 sm:w-48 aspect-[9/19] border border-dashed border-[#ffffff20] rounded-[2rem] bg-[#121212] flex items-center justify-center text-[10px] text-[#71717a] tracking-wider">
            [ app screen ]
          </div>

          {/* Front phone (smaller, offset down) */}
          <div className="hidden sm:flex w-36 aspect-[9/19] border border-dashed border-[#ffffff15] rounded-[2rem] bg-[#121212] items-center justify-center text-[10px] text-[#71717a] tracking-wider translate-y-6">
            [ app screen ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
