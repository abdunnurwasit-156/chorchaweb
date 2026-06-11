"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "১০ লাখ+", label: "প্র্যাকটিস প্রশ্ন" },
  { value: "৫ লাখ+", label: "সক্রিয় শিক্ষার্থী" },
  { value: "২০০+", label: "ভিডিও ক্লাস" },
  { value: "৫০+", label: "বিষয় কভার" },
];

export function Stats() {
  return (
    <section className="border-y border-[#ffffff10] py-12 px-5">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
            <div className="text-sm text-[#71717a] mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
