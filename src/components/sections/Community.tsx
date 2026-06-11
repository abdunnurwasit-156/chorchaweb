"use client";
import { motion } from "framer-motion";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

const groups = [
  {
    name: "SSC-26 ব্যাচ গ্রুপ",
    members: "১২,৪৮০ জন",
    desc: "SSC-26 পরীক্ষার্থীদের আলোচনা, প্রশ্ন ও উৎসাহ।",
    tag: "SSC",
    href: "#",
  },
  {
    name: "HSC-26 বিজ্ঞান গ্রুপ",
    members: "৯,৭৩০ জন",
    desc: "পদার্থ, রসায়ন, জীব, গণিত — সব প্রশ্ন এখানে।",
    tag: "HSC",
    href: "#",
  },
  {
    name: "BCS প্রিপ কমিউনিটি",
    members: "২৮,৫৫০ জন",
    desc: "BCS প্রার্থীদের সবচেয়ে বড় ফেসবুক গ্রুপ।",
    tag: "BCS",
    href: "#",
  },
  {
    name: "দৈনিক কুইজ চ্যালেঞ্জ",
    members: "৪৫,২০০ জন",
    desc: "প্রতিদিন নতুন কুইজ, সবার সাথে প্রতিযোগিতা।",
    tag: "সবার জন্য",
    href: "#",
  },
];

const steps = [
  {
    title: "গ্রুপে যোগ দাও",
    desc: "নিজের ব্যাচ বা স্ট্রিমের ফেসবুক গ্রুপে এক ক্লিকে যোগ দাও — সম্পূর্ণ ফ্রি।",
  },
  {
    title: "প্রশ্ন করো, উত্তর পাও",
    desc: "পড়তে গিয়ে আটকে গেলে গ্রুপে পোস্ট করো। সহপাঠী বা শিক্ষক সাহায্য করবে।",
  },
  {
    title: "আপডেট মিস কোরো না",
    desc: "নতুন ক্লাস, লাইভ মডেল টেস্ট ও গুরুত্বপূর্ণ নোটিশ সবার আগে গ্রুপেই পাবে।",
  },
];

export function Community() {
  return (
    <section className="py-20 px-5 bg-[#121212]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">কমিউনিটি</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">একা পড়ো না, একসাথে পড়ো</h2>
          <p className="text-[#71717a] mt-3 text-sm leading-relaxed max-w-lg">
            লাখো শিক্ষার্থীর সাথে চর্চার ফেসবুক গ্রুপে যুক্ত হও। প্রশ্ন করো, উত্তর পাও, একে অপরকে অনুপ্রাণিত করো।
          </p>
        </motion.div>

        {/* Official page banner */}
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border border-[#1877F230] bg-gradient-to-r from-[#1877F215] to-transparent rounded-2xl p-6 mb-10 hover:border-[#1877F250] transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
              <FacebookIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">চর্চা অফিসিয়াল ফেসবুক পেজ</h3>
              <p className="text-xs text-[#71717a] mt-1">নতুন আপডেট, অফার ও ঘোষণা সবার আগে পেতে পেজ ফলো করো।</p>
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-white bg-[#1877F2] px-5 py-2.5 rounded-lg group-hover:bg-[#1565d8] transition-colors">
            <FacebookIcon className="w-4 h-4" />
            পেজ ফলো করো
          </span>
        </motion.a>

        {/* Group cards grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {groups.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-[#ffffff10] rounded-xl p-5 flex flex-col gap-3 hover:border-[#1877F230] hover:bg-[#1877F205] transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2]/15 border border-[#1877F230] flex items-center justify-center shrink-0">
                    <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{c.name}</h3>
                    <p className="text-xs text-[#71717a] mt-1 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
                <span className="shrink-0 text-[10px] text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-[#ffffff08] pt-3">
                <span className="text-xs text-[#71717a]">{c.members} সদস্য</span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1877F2] hover:underline"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  গ্রুপে যোগ দাও
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#ffffff10] rounded-2xl p-6 md:p-8 grid md:grid-cols-3 gap-6"
        >
          {steps.map((item, i) => (
            <div key={item.title} className="flex flex-col gap-2">
              <div className="w-7 h-7 rounded-full bg-[#1877F2]/15 border border-[#1877F230] flex items-center justify-center text-[#1877F2] text-xs font-semibold mb-1">
                {i + 1}
              </div>
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-[#71717a] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
