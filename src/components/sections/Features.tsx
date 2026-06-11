"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    tag: "নতুন",
    title: "ভিডিও ক্লাস",
    desc: "দেশের সেরা শিক্ষকদের রেকর্ডেড ক্লাস দেখো। বিষয়ভিত্তিক প্লেলিস্ট, অধ্যায় অনুযায়ী সাজানো। যেকোনো সময়, যেকোনো জায়গা থেকে।",
    href: "/#video-classes",
    icon: "/brand/Videos.svg",
  },
  {
    tag: "",
    title: "মক টেস্ট",
    desc: "বিষয়, অধ্যায়, সময় ও প্রশ্নের ধরন নিজে বেছে নাও। আসল পরীক্ষার পরিবেশে প্র্যাকটিস করো। পরীক্ষার পর বিস্তারিত বিশ্লেষণ পাও।",
    href: "/#mock-exam",
    icon: "/brand/Mock.svg",
  },
  {
    tag: "",
    title: "প্রশ্ন ব্যাংক",
    desc: "১০ লাখেরও বেশি বিগত বছরের প্রশ্ন। SSC, HSC, ভর্তি পরীক্ষা, BCS — সব কভার করা আছে। বিষয় ও অধ্যায় অনুযায়ী ফিল্টার করো।",
    href: "/#question-bank",
    icon: "/brand/Question%20Bank%20Icon%20Container.svg",
  },
  {
    tag: "",
    title: "AI টিউটর",
    desc: "যেকোনো প্রশ্নের উত্তর না বুঝলে AI টিউটরকে জিজ্ঞেস করো। তোমার ক্লাস ও সিলেবাস অনুযায়ী সহজ ভাষায় বুঝিয়ে দেবে।",
    href: "/#ai-tutor",
    icon: "/brand/Chorcha%20AI.svg",
  },
  {
    tag: "",
    title: "প্রগ্রেস ট্র্যাকিং",
    desc: "কোন বিষয়ে কতটা ভালো করছ, কোথায় দুর্বলতা — সব দেখতে পাবে। সময় অনুযায়ী স্মার্টভাবে পড়াশোনার পরিকল্পনা করো।",
    href: "/#progress",
    icon: "/brand/Quick%20Practice%20Icon%20Container.svg",
  },
  {
    tag: "",
    title: "জাতীয় লিডারবোর্ড",
    desc: "সারাদেশের শিক্ষার্থীদের সাথে নিজেকে তুলনা করো। স্ট্রিক রাখো, পয়েন্ট কামাও, র‌্যাংক উন্নত করো।",
    href: "/#leaderboard",
    icon: "/brand/Point_icon.svg",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">ফিচারসমূহ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">পড়াশোনার সব কিছু এক জায়গায়</h2>
          <p className="text-[#71717a] mt-3 max-w-lg text-sm leading-relaxed">
            চর্চায় পড়াশোনার প্রতিটি ধাপের জন্য আলাদা টুল আছে — ভিডিও দেখো, প্র্যাকটিস করো, বিশ্লেষণ করো।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ffffff10] border border-[#ffffff10] rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-[#0a0a0a] p-6 flex flex-col gap-3 hover:bg-[#181818] transition-colors"
            >
              {f.icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={f.icon} alt="" className="w-8 h-8" />
              )}
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-base">{f.title}</h3>
                {f.tag && (
                  <span className="text-[10px] font-medium text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">
                    {f.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#71717a] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
