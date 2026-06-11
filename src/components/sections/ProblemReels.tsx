"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

const reels = [
  { title: "দ্বিঘাত সমীকরণ — ২ মিনিটে সমাধান", subject: "গণিত", duration: "২:১৫", views: "১.৪ লাখ", stream: "SSC", thumb: "/video_thumbnails/Artboard%201.jpg" },
  { title: "নিউটনের ২য় সূত্র দিয়ে বল বের করো", subject: "পদার্থবিজ্ঞান", duration: "১:৫৮", views: "৮৮,০০০", stream: "HSC", thumb: "/video_thumbnails/phy-ssc-suggestion.jpg" },
  { title: "Passive Voice — ৩০ সেকেন্ডের ট্রিক", subject: "ইংরেজি", duration: "০:৪৫", views: "২.১ লাখ", stream: "SSC · HSC", thumb: "/video_thumbnails/Artboard%201-2.jpg" },
  { title: "তেজস্ক্রিয়তার হাফ লাইফ প্রবলেম", subject: "পদার্থবিজ্ঞান", duration: "২:৩০", views: "৬২,০০০", stream: "HSC বিজ্ঞান", thumb: "/video_thumbnails/Artboard%201%20copy.jpg" },
  { title: "লসাগু-গসাগু শর্টকাট পদ্ধতি", subject: "গণিত", duration: "১:৪০", views: "৩.২ লাখ", stream: "SSC", thumb: "/video_thumbnails/Artboard%201.jpg" },
  { title: "আম্লিক-ক্ষারীয় বিক্রিয়া সমীকরণ", subject: "রসায়ন", duration: "২:০৫", views: "৫৫,০০০", stream: "HSC বিজ্ঞান", thumb: "/video_thumbnails/bio-ssc-suggestion.jpg" },
  { title: "BCS — সাল মনে রাখার কৌশল", subject: "সাধারণ জ্ঞান", duration: "১:২০", views: "৪.৫ লাখ", stream: "BCS", thumb: "/video_thumbnails/phy-ssc-suggestion.jpg" },
];

const subjectColors: Record<string, string> = {
  "গণিত": "text-blue-400",
  "পদার্থবিজ্ঞান": "text-purple-400",
  "ইংরেজি": "text-green-400",
  "রসায়ন": "text-yellow-400",
  "সাধারণ জ্ঞান": "text-orange-400",
};

export function ProblemReels() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"
        >
          <div>
            <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-3">প্রবলেম সলভিং রিলস</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">একটা সমস্যা, একটা সমাধান</h2>
            <p className="text-[#71717a] mt-3 text-sm leading-relaxed max-w-lg">
              পরীক্ষায় আসা কঠিন প্রশ্নগুলো ধাপে ধাপে সমাধান — ২ মিনিটের ছোট রিলসে। স্ক্রল করতে করতে শেখো।
            </p>
          </div>
          <Link
            href="/auth/register"
            className="shrink-0 text-sm text-[#016a3e] border border-[#016a3e30] px-4 py-2 rounded-lg hover:bg-[#016a3e10] transition-colors"
          >
            সব রিলস দেখো →
          </Link>
        </motion.div>

        {/* Reel strip — 9:16 cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="shrink-0 snap-start w-44 md:w-48 group cursor-pointer"
            >
              {/* 9:16 card */}
              <div className="relative w-full aspect-[9/16] bg-[#181818] border border-[#ffffff10] rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3 group-hover:border-[#ffffff20] transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={reel.thumb} alt={reel.title} className="absolute inset-0 w-full h-full object-cover" />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Stream badge */}
                <div className="absolute top-3 left-3 text-[9px] font-semibold text-white bg-black/60 px-2 py-0.5 rounded-full z-10">
                  {reel.stream}
                </div>

                {/* Play button */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/25 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <Play size={16} className="text-white ml-0.5" fill="white" />
                </div>

                {/* Title + subject at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                  <p className={`text-[10px] font-semibold mb-1 ${subjectColors[reel.subject] ?? "text-[#a1a1aa]"}`}>
                    {reel.subject}
                  </p>
                  <p className="text-white text-xs font-medium leading-snug line-clamp-2">
                    {reel.title}
                  </p>
                </div>

                {/* Duration */}
                <div className="absolute top-3 right-3 text-[9px] text-white bg-black/60 px-1.5 py-0.5 rounded-md z-10">
                  {reel.duration}
                </div>
              </div>

              {/* Views below card */}
              <p className="text-[10px] text-[#71717a] mt-2 px-1">{reel.views} ভিউ</p>
            </motion.div>
          ))}

          {/* See all card */}
          <div className="shrink-0 snap-start w-44 md:w-48">
            <Link
              href="/auth/register"
              className="flex w-full aspect-[9/16] border border-dashed border-[#ffffff12] rounded-2xl flex-col items-center justify-center gap-2 hover:border-[#ffffff20] hover:bg-[#ffffff05] transition-all text-center px-4"
            >
              <span className="text-2xl text-[#d4d4d8]">→</span>
              <p className="text-xs text-[#71717a] leading-relaxed">আরও রিলস দেখতে লগ ইন করো</p>
            </Link>
          </div>
        </motion.div>

        {/* Bottom tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "ইংরেজি", "জীববিজ্ঞান", "সাধারণ জ্ঞান", "BCS"].map((tag) => (
            <button
              key={tag}
              className="text-xs text-[#71717a] border border-[#ffffff10] px-3 py-1.5 rounded-full hover:text-white hover:border-[#ffffff25] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
