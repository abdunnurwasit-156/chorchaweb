import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const categories = [
  {
    name: "বিসিএস (BCS)",
    desc: "বাংলাদেশ সিভিল সার্ভিস পরীক্ষার পূর্ণ প্রস্তুতি। প্রিলি, লিখিত ও ভাইভা।",
    subjects: ["বাংলা ভাষা ও সাহিত্য", "ইংরেজি ভাষা ও সাহিত্য", "বাংলাদেশ বিষয়াবলি", "আন্তর্জাতিক বিষয়াবলি", "গাণিতিক যুক্তি", "মানসিক দক্ষতা", "সাধারণ বিজ্ঞান", "কম্পিউটার ও তথ্যপ্রযুক্তি"],
  },
  {
    name: "ব্যাংক জব",
    desc: "সরকারি ও বেসরকারি ব্যাংকের প্রবেশিকা পরীক্ষার প্রস্তুতি।",
    subjects: ["গণিত", "ইংরেজি", "সাধারণ জ্ঞান", "ব্যাংকিং ও ফিন্যান্স", "কম্পিউটার"],
  },
  {
    name: "সরকারি চাকরি",
    desc: "বিভিন্ন মন্ত্রণালয় ও বিভাগের নন-ক্যাডার পদের প্রস্তুতি।",
    subjects: ["সাধারণ জ্ঞান", "বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান ও প্রযুক্তি"],
  },
];

export default function JobsPage() {
  return (
    <PageLayout>
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">স্ট্রিম</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">চাকরির প্রস্তুতি</h1>
          <p className="text-[#71717a] mt-4 max-w-xl text-sm leading-relaxed">
            BCS, ব্যাংক জব ও সরকারি চাকরির জন্য বিষয়ভিত্তিক মক টেস্ট, প্রশ্ন ব্যাংক এবং ভিডিও ক্লাস।
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

      {/* Categories */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-xl font-bold text-white">পরীক্ষার ধরন অনুযায়ী</h2>
          {categories.map((cat) => (
            <div key={cat.name} className="border border-[#ffffff10] rounded-xl p-6">
              <h3 className="font-bold text-white text-base mb-1">{cat.name}</h3>
              <p className="text-sm text-[#71717a] mb-5">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.subjects.map((s) => (
                  <span key={s} className="text-xs text-[#a1a1aa] border border-[#ffffff12] px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">এই স্ট্রিমে কী কী আছে</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "ভিডিও ক্লাস", desc: "BCS ও ব্যাংক জবের প্রতিটি বিষয়ের জন্য বিশেষজ্ঞ শিক্ষকদের ক্লাস।", tag: "নতুন" },
              { title: "প্রিলিমিনারি মক টেস্ট", desc: "BCS প্রিলিমিনারির আদলে ২০০ নম্বরের পূর্ণাঙ্গ মক টেস্ট।", tag: "" },
              { title: "বিগত সালের প্রশ্ন", desc: "বিসিএস, ব্যাংক ও সরকারি পরীক্ষার বিগত বছরের সব প্রশ্ন।", tag: "" },
              { title: "দৈনিক কুইজ", desc: "প্রতিদিন নতুন ১০টি প্রশ্নের কুইজ। জ্ঞান ঝালাই করো প্রতিদিন।", tag: "" },
            ].map((item) => (
              <div key={item.title} className="border border-[#ffffff10] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  {item.tag && <span className="text-[10px] text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">{item.tag}</span>}
                </div>
                <p className="text-xs text-[#71717a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
