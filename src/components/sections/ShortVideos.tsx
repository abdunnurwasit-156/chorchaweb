"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

const reels = [
  {
    title: "দ্বিঘাত সমীকরণ ৫ মিনিটে",
    subject: "গণিত",
    teacher: "[ শিক্ষকের নাম ]",
    duration: "৪:৫২",
    views: "১.২ লাখ",
    stream: "SSC",
    thumb: "/video_thumbnails/Artboard%201.jpg",
  },
  {
    title: "নিউটনের তৃতীয় সূত্র সহজে",
    subject: "পদার্থবিজ্ঞান",
    teacher: "[ শিক্ষকের নাম ]",
    duration: "৩:৩০",
    views: "৮৭,০০০",
    stream: "HSC",
    thumb: "/video_thumbnails/phy-ssc-suggestion.jpg",
  },
  {
    title: "Tense মনে রাখার সহজ টেকনিক",
    subject: "ইংরেজি",
    teacher: "[ শিক্ষকের নাম ]",
    duration: "৫:১৫",
    views: "২.৪ লাখ",
    stream: "SSC · HSC",
    thumb: "/video_thumbnails/Artboard%201-2.jpg",
  },
  {
    title: "বাংলাদেশের মুক্তিযুদ্ধ — পূর্ণ সারসংক্ষেপ",
    subject: "BCS সাধারণ জ্ঞান",
    teacher: "[ শিক্ষকের নাম ]",
    duration: "৬:০০",
    views: "৩.১ লাখ",
    stream: "BCS",
    thumb: "/video_thumbnails/Artboard%201%20copy.jpg",
  },
  {
    title: "অ্যাসিড-বেস বিক্রিয়া এক নজরে",
    subject: "রসায়ন",
    teacher: "[ শিক্ষকের নাম ]",
    duration: "৪:১০",
    views: "৬৫,০০০",
    stream: "HSC বিজ্ঞান",
    thumb: "/video_thumbnails/bio-ssc-suggestion.jpg",
  },
];

export function ShortVideos() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"
        >
          <div>
            <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">শর্ট ভিডিও</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">৫ মিনিটে একটা টপিক শেষ করো</h2>
            <p className="text-[#71717a] mt-3 text-sm leading-relaxed max-w-lg">
              অ্যানিমেশন দিয়ে তৈরি ছোট ভিডিও — কঠিন কনসেপ্ট সহজে বোঝার জন্য। যেকোনো জায়গা থেকে দেখো।
            </p>
          </div>
          <Link
            href="/auth/register"
            className="shrink-0 text-sm text-[#016a3e] border border-[#016a3e30] px-4 py-2 rounded-lg hover:bg-[#016a3e10] transition-colors"
          >
            সব রিলস দেখো →
          </Link>
        </motion.div>

        {/* Horizontal scroll reel strip */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="shrink-0 snap-start w-48 md:w-52 flex flex-col gap-0 group cursor-pointer"
            >
              {/* Thumbnail — vertical 9:16 card */}
              <div className="relative w-full aspect-[9/16] bg-[#181818] border border-[#ffffff10] rounded-2xl overflow-hidden flex items-center justify-center group-hover:border-[#ffffff20] transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={reel.thumb} alt={reel.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                {/* Play button */}
                <div className="relative w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                  <Play size={18} className="text-white ml-0.5" fill="white" />
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 text-[10px] text-white bg-black/60 px-2 py-0.5 rounded-md">
                  {reel.duration}
                </div>
                {/* Stream tag */}
                <div className="absolute top-3 left-3 text-[9px] font-medium text-[#016a3e] bg-[#016a3e20] border border-[#016a3e30] px-2 py-0.5 rounded-full">
                  {reel.stream}
                </div>
              </div>

              {/* Info */}
              <div className="mt-3 px-1 flex flex-col gap-1">
                <p className="text-xs font-medium text-white leading-snug line-clamp-2">{reel.title}</p>
                <p className="text-[10px] text-[#d4d4d8]">{reel.subject}</p>
                <p className="text-[10px] text-[#71717a]">{reel.teacher}</p>
                <p className="text-[10px] text-[#71717a]">{reel.views} ভিউ</p>
              </div>
            </motion.div>
          ))}

          {/* See more card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0 snap-start w-48 md:w-52"
          >
            <Link
              href="/auth/register"
              className="block w-full aspect-[9/16] border border-dashed border-[#ffffff15] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-[#ffffff20] hover:bg-[#ffffff05] transition-all text-center px-4"
            >
              <div className="w-10 h-10 rounded-full border border-[#016a3e30] flex items-center justify-center text-[#016a3e] text-lg">→</div>
              <p className="text-xs text-[#71717a] leading-relaxed">সব রিলস দেখতে লগ ইন করো</p>
            </Link>
          </motion.div>
        </div>

        {/* Bottom note */}
        <p className="text-xs text-[#71717a] mt-6 text-center">
          প্রতি সপ্তাহে নতুন রিলস যোগ হয় · অ্যাপে আরও ভালো অভিজ্ঞতা পাবে
        </p>
      </div>
    </section>
  );
}
