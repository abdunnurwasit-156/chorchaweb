"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "০১", title: "স্ট্রিম বেছে নাও", desc: "ক্লাস ৬–১০, HSC, চাকরি বা ইংরেজি মাধ্যম — তোমার পরীক্ষা অনুযায়ী স্ট্রিমে যাও।" },
  { n: "০২", title: "ভিডিও ক্লাস দেখো বা মক টেস্ট দাও", desc: "বিষয়ভিত্তিক ভিডিও ক্লাস দেখো অথবা সরাসরি মক টেস্ট দিয়ে নিজেকে যাচাই করো।" },
  { n: "০৩", title: "AI দিয়ে বুঝে নাও", desc: "কোনো উত্তর না বুঝলে AI টিউটরকে জিজ্ঞেস করো। সিলেবাস অনুযায়ী সহজ ব্যাখ্যা পাবে।" },
  { n: "০৪", title: "প্রগ্রেস দেখো ও র‌্যাংক বাড়াও", desc: "নিজের দুর্বল জায়গা চিনে নাও। প্রতিদিন পড়ো, স্ট্রিক ধরে রাখো, জাতীয় লিডারবোর্ডে উপরে উঠো।" },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-5 bg-[#121212]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">কীভাবে কাজ করে</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">মাত্র ৪ ধাপে শুরু করো</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="flex gap-5 items-start"
            >
              <div className="w-10 h-10 rounded-lg border border-[#10b98130] bg-[#10b98110] flex items-center justify-center text-[#10b981] font-bold text-sm shrink-0 mt-0.5">
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">{s.title}</h3>
                <p className="text-sm text-[#71717a] mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
