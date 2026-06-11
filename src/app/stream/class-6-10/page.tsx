import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const subjects = [
  { name: "বাংলা", classes: "ক্লাস ৬–১০" },
  { name: "ইংরেজি", classes: "ক্লাস ৬–১০" },
  { name: "গণিত", classes: "ক্লাস ৬–১০" },
  { name: "সাধারণ বিজ্ঞান", classes: "ক্লাস ৬–৮" },
  { name: "পদার্থবিজ্ঞান", classes: "ক্লাস ৯–১০" },
  { name: "রসায়ন", classes: "ক্লাস ৯–১০" },
  { name: "জীববিজ্ঞান", classes: "ক্লাস ৯–১০" },
  { name: "উচ্চতর গণিত", classes: "ক্লাস ৯–১০" },
  { name: "বাংলাদেশ ও বিশ্বপরিচয়", classes: "ক্লাস ৬–১০" },
  { name: "ইতিহাস ও সামাজিক বিজ্ঞান", classes: "ক্লাস ৬–৮" },
  { name: "ইসলাম ধর্ম ও নৈতিক শিক্ষা", classes: "ক্লাস ৬–১০" },
  { name: "তথ্য ও যোগাযোগ প্রযুক্তি", classes: "ক্লাস ৬–১০" },
];

export default function Class610Page() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">স্ট্রিম</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">ক্লাস ৬–১০</h1>
          <p className="text-[#71717a] mt-4 max-w-xl text-sm leading-relaxed">
            জেএসসি ও এসএসসি পরীক্ষার পূর্ণ প্রস্তুতি। বিশেষজ্ঞ শিক্ষকদের ভিডিও ক্লাস, বিগত বছরের প্রশ্ন ব্যাংক এবং AI টিউটর — সব একসাথে।
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/auth/register" className="bg-[#016a3e] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#015532] transition-colors">
              বিনামূল্যে শুরু করো
            </Link>
            <Link href="/premium" className="border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg text-sm hover:text-white hover:border-[#ffffff25] transition-colors">
              প্রিমিয়াম দেখো
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">এই স্ট্রিমে কী কী আছে</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "ভিডিও ক্লাস",
                desc: "বিষয়ভিত্তিক অধ্যায় অনুযায়ী সাজানো রেকর্ডেড ক্লাস। দেশের সেরা শিক্ষকদের পড়ানো।",
                tag: "নতুন",
              },
              {
                title: "মক টেস্ট",
                desc: "জেএসসি ও এসএসসি মডেল পেপার, সৃজনশীল ও বহুনির্বাচনী — আলাদা আলাদা প্র্যাকটিস।",
                tag: "",
              },
              {
                title: "প্রশ্ন ব্যাংক",
                desc: "বিগত ১০ বছরের বোর্ড প্রশ্ন। অধ্যায় ও বিষয় অনুযায়ী ফিল্টার করো।",
                tag: "",
              },
              {
                title: "AI টিউটর",
                desc: "কঠিন অধ্যায় বুঝতে না পারলে AI কে জিজ্ঞেস করো। বাংলায় ব্যাখ্যা পাবে।",
                tag: "",
              },
              {
                title: "প্রগ্রেস ট্র্যাকিং",
                desc: "কোন বিষয়ে কতটা ভালো করছ, কোথায় আরও মনোযোগ দিতে হবে — গ্রাফে দেখো।",
                tag: "",
              },
              {
                title: "লিডারবোর্ড",
                desc: "ক্লাস ও বিষয় অনুযায়ী আলাদা লিডারবোর্ড। বন্ধুদের সাথে প্রতিযোগিতা করো।",
                tag: "",
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#ffffff10] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  {item.tag && (
                    <span className="text-[10px] text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">{item.tag}</span>
                  )}
                </div>
                <p className="text-xs text-[#71717a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">বিষয়সমূহ</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {subjects.map((s) => (
              <div key={s.name} className="border border-[#ffffff10] rounded-lg p-3.5">
                <div className="text-sm font-medium text-white">{s.name}</div>
                <div className="text-xs text-[#71717a] mt-0.5">{s.classes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam info */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">পরীক্ষার তথ্য</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-[#ffffff10] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">জেএসসি / জেডিসি</h3>
              <ul className="flex flex-col gap-2 text-sm text-[#71717a]">
                <li>— ক্লাস ৮ শেষে অনুষ্ঠিত হয়</li>
                <li>— বাংলা, ইংরেজি, গণিত, বিজ্ঞান সহ ৭টি বিষয়</li>
                <li>— সৃজনশীল ও বহুনির্বাচনী দুটি অংশ</li>
                <li>— পূর্ণমান: ১,০০০</li>
              </ul>
            </div>
            <div className="border border-[#ffffff10] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">এসএসসি / দাখিল</h3>
              <ul className="flex flex-col gap-2 text-sm text-[#71717a]">
                <li>— ক্লাস ১০ শেষে অনুষ্ঠিত হয়</li>
                <li>— বিজ্ঞান, মানবিক ও ব্যবসায় তিনটি বিভাগ</li>
                <li>— সৃজনশীল, বহুনির্বাচনী ও ব্যবহারিক</li>
                <li>— গ্রেড পয়েন্ট: ৫.০০ স্কেলে</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
