import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const levels = [
  {
    name: "O Level",
    desc: "Cambridge IGCSE ও Edexcel বোর্ডের O Level পরীক্ষার প্রস্তুতি।",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English Language", "English Literature", "Bangladesh Studies", "Computer Science", "Accounting"],
  },
  {
    name: "A Level",
    desc: "Cambridge ও Edexcel A Level পরীক্ষার বিষয়ভিত্তিক প্রস্তুতি।",
    subjects: ["Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Accounting", "Business Studies", "English Language"],
  },
];

export default function EnglishMediumPage() {
  return (
    <PageLayout>
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">স্ট্রিম</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">ইংরেজি মাধ্যম</h1>
          <p className="text-[#71717a] mt-4 max-w-xl text-sm leading-relaxed">
            O Level ও A Level পরীক্ষার জন্য বিষয়ভিত্তিক ভিডিও ক্লাস, মক টেস্ট এবং গাইড। Cambridge ও Edexcel উভয় বোর্ড কভার।
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/auth/register" className="bg-[#016a3e] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#015532] transition-colors">
              Get Started Free
            </Link>
            <Link href="/premium" className="border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg text-sm hover:text-white hover:border-[#ffffff25] transition-colors">
              See Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {levels.map((level) => (
            <div key={level.name} className="border border-[#ffffff10] rounded-xl p-6">
              <h3 className="font-bold text-white text-base mb-1">{level.name}</h3>
              <p className="text-sm text-[#71717a] mb-5">{level.desc}</p>
              <div className="flex flex-wrap gap-2">
                {level.subjects.map((s) => (
                  <span key={s} className="text-xs text-[#a1a1aa] border border-[#ffffff12] px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Video Classes", desc: "Topic-wise recorded classes by expert teachers for both Cambridge and Edexcel boards.", tag: "New" },
              { title: "Past Papers", desc: "Organized past papers by year and subject. With mark schemes.", tag: "" },
              { title: "Mock Tests", desc: "Full paper simulations timed to match the real exam format.", tag: "" },
              { title: "AI Tutor", desc: "Ask anything about your syllabus and get instant explanations in English.", tag: "" },
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
