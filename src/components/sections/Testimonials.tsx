"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "রাফি আহমেদ",
    tag: "BUET ভর্তি পরীক্ষায় উত্তীর্ণ",
    text: "চর্চার মক টেস্ট আর AI ব্যাখ্যা ছাড়া BUET প্রস্তুতি এত সহজ হতো না। প্রতিদিন রাতে ৩০ মিনিট চর্চায় কাটাতাম।",
  },
  {
    name: "তাসনিম জাহান",
    tag: "HSC পরীক্ষার্থী, ঢাকা",
    text: "প্রশ্ন ব্যাংকে বিগত বছরের সব প্রশ্ন পাওয়া যায়। AI খুব সহজে ব্যাখ্যা করে। লিডারবোর্ডে নিজের রাঙ্ক দেখতে ভালো লাগে।",
  },
  {
    name: "মাহমুদ হাসান",
    tag: "BCS প্রস্তুতিরত",
    text: "BCS-এর জন্য এত গুছানো প্ল্যাটফর্ম আগে পাইনি। স্ট্রিক সিস্টেমটা আমাকে প্রতিদিন পড়তে অনুপ্রাণিত করে।",
  },
  {
    name: "নাফিসা করিম",
    tag: "SSC পরীক্ষার্থী, রাজশাহী",
    text: "বিজ্ঞাপন নেই, লোডিং দ্রুত। আমার ফোনেও ভালো চলে। সব বান্ধবীদের রেকমেন্ড করেছি।",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">সাফল্যের গল্প</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">ওরা পেরেছে, তুমিও পারবে</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-[#ffffff10] rounded-xl p-6 flex flex-col gap-4"
            >
              <p className="text-sm text-[#8080a0] leading-relaxed">"{t.text}"</p>
              <div>
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-[#d4d4d8] mt-0.5">{t.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
