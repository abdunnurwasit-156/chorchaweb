"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const teachers = [
  { name: "[ শিক্ষকের নাম ]", subject: "গণিত", streams: "SSC · HSC", classes: "৮৫টি ক্লাস", students: "৫০,০০০+", rating: "৪.৯", img: "/teacher%20image/1.png" },
  { name: "[ শিক্ষকের নাম ]", subject: "পদার্থবিজ্ঞান", streams: "HSC বিজ্ঞান", classes: "৬২টি ক্লাস", students: "৩২,০০০+", rating: "৪.৮", img: "/teacher%20image/2.png" },
  { name: "[ শিক্ষকের নাম ]", subject: "ইংরেজি", streams: "SSC · HSC · BCS", classes: "৯৮টি ক্লাস", students: "৮৮,০০০+", rating: "৪.৯", img: "/teacher%20image/3.png" },
  { name: "[ শিক্ষকের নাম ]", subject: "BCS সাধারণ জ্ঞান", streams: "BCS", classes: "১১০টি ক্লাস", students: "৬৫,০০০+", rating: "৫.০", img: "/teacher%20image/4.png" },
];

export function TeachersOverview() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"
        >
          <div>
            <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">আমাদের শিক্ষকরা</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">দেশের সেরা শিক্ষকদের কাছে পড়ো</h2>
            <p className="text-[#71717a] mt-3 text-sm leading-relaxed max-w-lg">
              চর্চার প্রতিটি শিক্ষক যাচাইকৃত এবং বিষয়ে অভিজ্ঞ। তাদের রেকর্ডেড ক্লাস দেখো নিজের সময়মতো।
            </p>
          </div>
          <Link
            href="/teacher-panel"
            className="shrink-0 text-sm text-[#016a3e] border border-[#016a3e30] px-4 py-2 rounded-lg hover:bg-[#016a3e10] transition-colors"
          >
            সব শিক্ষক দেখো →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachers.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-[#ffffff10] rounded-xl p-5 flex flex-col gap-4 hover:border-[#ffffff20] hover:bg-[#ffffff05] transition-all"
            >
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-[#ffffff10] shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white leading-snug">{t.name}</div>
                  <div className="text-xs text-[#d4d4d8] mt-0.5">{t.subject}</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-xs text-[#71717a]">
                <div>{t.streams}</div>
                <div>{t.classes} · {t.students} শিক্ষার্থী</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#a1a1aa] border-t border-[#ffffff08] pt-3">
                <span className="text-yellow-400">★</span>
                <span>{t.rating} রেটিং</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 border border-[#ffffff10] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-medium text-white">তুমিও চর্চার শিক্ষক হতে পারো</p>
            <p className="text-xs text-[#71717a] mt-1">লাখো শিক্ষার্থীর কাছে পৌঁছাও এবং নিজের গতিতে আয় করো।</p>
          </div>
          <Link
            href="/teach"
            className="shrink-0 text-sm border border-[#016a3e30] text-[#016a3e] px-5 py-2 rounded-lg hover:bg-[#016a3e10] transition-colors font-medium"
          >
            শিক্ষক হিসেবে আবেদন করো
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
