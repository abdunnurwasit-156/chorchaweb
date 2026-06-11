"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const streams = [
  {
    label: "ক্লাস ৬–১০",
    href: "/stream/class-6-10",
    desc: "জেএসসি ও এসএসসি পরীক্ষার পূর্ণ প্রস্তুতি। বাংলা, ইংরেজি, গণিত, বিজ্ঞান, সামাজিক বিজ্ঞান সহ সব বিষয়।",
    tags: ["ভিডিও ক্লাস", "মক টেস্ট", "প্রশ্ন ব্যাংক"],
  },
  {
    label: "এইচএসসি",
    href: "/stream/hsc",
    desc: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা তিনটি বিভাগের জন্য আলাদা কন্টেন্ট। বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতিও পাবে।",
    tags: ["বিজ্ঞান", "মানবিক", "ব্যবসায়", "ভর্তি পরীক্ষা"],
  },
  {
    label: "চাকরির প্রস্তুতি",
    href: "/stream/jobs",
    desc: "BCS, ব্যাংক জব ও অন্যান্য সরকারি চাকরির জন্য বিষয়ভিত্তিক মক টেস্ট ও প্রশ্ন ব্যাংক।",
    tags: ["BCS", "ব্যাংক জব", "সরকারি চাকরি"],
  },
  {
    label: "ইংরেজি মাধ্যম",
    href: "/stream/english-medium",
    desc: "O Level ও A Level পরীক্ষার জন্য বিষয়ভিত্তিক গাইড, মক টেস্ট এবং ভিডিও ক্লাস।",
    tags: ["O Level", "A Level"],
  },
];

export function Streams() {
  return (
    <section className="py-20 px-5 bg-[#121212]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">স্ট্রিম</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">তোমার পথ বেছে নাও</h2>
          <p className="text-[#71717a] mt-3 text-sm leading-relaxed max-w-lg">
            প্রতিটি স্ট্রিমে আলাদা কন্টেন্ট, আলাদা মক টেস্ট — তোমার পরীক্ষার জন্য নির্দিষ্টভাবে তৈরি।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {streams.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={s.href}
                className="flex flex-col gap-4 p-6 border border-[#ffffff10] rounded-xl hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">{s.label}</h3>
                  <ArrowRight size={16} className="text-[#71717a] group-hover:text-[#d4d4d8] transition-colors mt-0.5" />
                </div>
                <p className="text-sm text-[#71717a] leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs text-[#a1a1aa] border border-[#ffffff12] px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
