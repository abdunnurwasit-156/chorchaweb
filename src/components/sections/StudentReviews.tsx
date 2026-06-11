"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videoReviews = [
  { name: "রাফি আহমেদ", school: "রাজশাহী কলেজিয়েট স্কুল", result: "BUET — ইইই বিভাগ", stream: "HSC-24" },
  { name: "সাবিহা ও হাবিবা", school: "জহুরুল ইসলাম স্কুল, সিরাজগঞ্জ", result: "মেডিকেল ভর্তি পরীক্ষায় উত্তীর্ণ", stream: "HSC-24" },
  { name: "আতকিয়া ও তাসফিয়া", school: "BAF শাহীন কলেজ", result: "ঢাকা বিশ্ববিদ্যালয় — ক ইউনিট", stream: "HSC-24" },
  { name: "জিসান", school: "গাজীপুর ক্যান্টনমেন্ট স্কুল", result: "ক্লাসে ৩২তম স্থান থেকে ১ম স্থান", stream: "SSC-24" },
  { name: "ইসরাত জাহান লামিয়া", school: "বেগম রোকেয়া কিশলয় বালিকা উচ্চ বিদ্যালয়", result: "SSC — GPA ৫.০০", stream: "SSC-24" },
];

const textReviews = [
  {
    name: "মেহজাবিন",
    tag: "শিক্ষার্থী, ক্লাস ১০",
    color: "bg-[#0f2620]",
    text: "নতুন কারিকুলামে সবাই হতাশ ছিলাম। চর্চার মক টেস্ট আর AI টিউটর না থাকলে পরীক্ষার আগে এত কনফিডেন্ট থাকতাম না। সত্যিই চর্চা আমার পড়াশোনাটা বদলে দিয়েছে।",
  },
  {
    name: "সাবিহা",
    tag: "Jhatibelal Sadek Ali High School, Sirajganj",
    color: "bg-[#1a2e1a]",
    text: "গত ৪ বছর ধরে ক্লাসে প্রথম হচ্ছি। চর্চার ক্লাসগুলো বিনামূল্যে পেয়েছি এবং সেগুলো আমাকে অনেক সাহায্য করেছে। চর্চাকে অনেক ধন্যবাদ।",
  },
  {
    name: "আতকিয়া",
    tag: "BAF Shaheen College",
    color: "bg-[#1a2a1a]",
    text: "চর্চা আমার পড়াশোনায় অনেক সাহায্য করেছে। অভিজ্ঞ শিক্ষকদের পড়ানোর স্টাইল এবং মডেল টেস্ট — এই দুটো জিনিস আমার বার্ষিক পরীক্ষায় অনেক কাজে এসেছে।",
  },
  {
    name: "জিসান",
    tag: "Gazipur Cantonment Public School and College",
    color: "bg-[#2a1a1a]",
    text: "এখন স্কুলের ৫টি সেকশনে আমি প্রথম। পরীক্ষার আগে মডেল টেস্ট আর ফাইনাল রিভিশন ক্লাসগুলো আমার জন্য খুব কাজে লেগেছে। চর্চাকে ধন্যবাদ।",
  },
  {
    name: "ইসরাত জাহান",
    tag: "Begum Rokeya Kishioy Girls High School",
    color: "bg-[#2a1a2a]",
    text: "পড়ানোর ধরন আর কঠিন বিষয় সহজে বোঝানোর পদ্ধতিটা আমার খুব পছন্দ। ভিডিওগুলো সত্যিই অনেক সহায়ক। চর্চার পুরো টিমকে ধন্যবাদ।",
  },
];

export function StudentReviews() {
  return (
    <section className="py-20 px-5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-1 mb-4 text-orange-400 text-lg">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            কেন আমরা শিক্ষার্থী ও{" "}
            <span className="text-[#d4d4d8]">অভিভাবকদের</span>{" "}
            <span className="text-[#d4d4d8]">প্রথম পছন্দ?</span>
          </h2>
        </motion.div>

        {/* Video reel strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar mb-5"
        >
          {videoReviews.map((v, i) => (
            <div
              key={v.name}
              className="shrink-0 snap-start w-56 md:w-64 flex flex-col gap-0 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[4/5] bg-[#181818] border border-[#ffffff12] rounded-2xl overflow-hidden flex items-center justify-center group-hover:border-[#ffffff20] transition-colors">
                {/* Dark overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Play size={20} className="text-white ml-0.5" fill="white" />
                </div>

                {/* Stream badge */}
                <div className="absolute top-3 right-3 text-[9px] font-semibold text-white bg-black/70 px-2 py-0.5 rounded-full">
                  {v.stream}
                </div>

                {/* Student info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#ffffff15] border border-white/20 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold leading-tight truncate">{v.name}</p>
                    <p className="text-white/60 text-[10px] leading-tight line-clamp-1">{v.school}</p>
                  </div>
                </div>
              </div>

              {/* Result tag below card */}
              <p className="text-[10px] text-[#d4d4d8] mt-2 px-1 leading-snug">{v.result}</p>
            </div>
          ))}
        </motion.div>

        {/* Text review strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar"
        >
          {textReviews.map((r) => (
            <div
              key={r.name}
              className={`shrink-0 snap-start w-64 md:w-72 ${r.color} border border-[#ffffff08] rounded-2xl p-5 flex flex-col gap-3`}
            >
              <p className="text-sm text-white/80 leading-relaxed line-clamp-5">
                {r.text.split(/(চর্চা)/g).map((part, i) =>
                  part === "চর্চা"
                    ? <strong key={i} className="text-white font-semibold">চর্চা</strong>
                    : part
                )}
              </p>
              <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-white">{r.name}</p>
                  <p className="text-[10px] text-white/40 leading-tight">{r.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
