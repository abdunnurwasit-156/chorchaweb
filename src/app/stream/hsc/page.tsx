import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const divisions = [
  {
    name: "বিজ্ঞান বিভাগ",
    subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "উচ্চতর গণিত", "বাংলা", "ইংরেজি", "ICT"],
  },
  {
    name: "মানবিক বিভাগ",
    subjects: ["বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা", "ইসলামের ইতিহাস", "পৌরনীতি", "সমাজবিজ্ঞান", "বাংলা", "ইংরেজি", "ICT"],
  },
  {
    name: "ব্যবসায় শিক্ষা বিভাগ",
    subjects: ["ব্যবসায় সংগঠন ও ব্যবস্থাপনা", "হিসাববিজ্ঞান", "ফিন্যান্স ও ব্যাংকিং", "উৎপাদন ব্যবস্থাপনা", "বাংলা", "ইংরেজি", "ICT"],
  },
];

export default function HSCPage() {
  return (
    <PageLayout>
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">স্ট্রিম</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">এইচএসসি</h1>
          <p className="text-[#71717a] mt-4 max-w-xl text-sm leading-relaxed">
            বিজ্ঞান, মানবিক ও ব্যবসায় — তিনটি বিভাগের জন্য আলাদা কন্টেন্ট। HSC পরীক্ষার পাশাপাশি বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতিও পাবে।
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

      {/* Divisions */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">বিভাগ অনুযায়ী বিষয়সমূহ</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {divisions.map((d) => (
              <div key={d.name} className="border border-[#ffffff10] rounded-xl p-5">
                <h3 className="font-semibold text-white text-sm mb-4">{d.name}</h3>
                <ul className="flex flex-col gap-2">
                  {d.subjects.map((s) => (
                    <li key={s} className="text-xs text-[#71717a] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#71717a] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission prep */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</h2>
          <p className="text-sm text-[#71717a] mb-8">HSC-এর পর ভর্তি পরীক্ষার জন্য আলাদা মক টেস্ট ও প্রশ্ন ব্যাংক।</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["ঢাকা বিশ্ববিদ্যালয়", "বুয়েট", "রাজশাহী বিশ্ববিদ্যালয়", "চট্টগ্রাম বিশ্ববিদ্যালয়", "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়", "মেডিকেল কলেজ ভর্তি", "কৃষি বিশ্ববিদ্যালয়", "প্রকৌশল বিশ্ববিদ্যালয় সমূহ"].map((u) => (
              <div key={u} className="border border-[#ffffff10] rounded-lg px-3 py-3 text-xs text-[#a1a1aa]">{u}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">এই স্ট্রিমে কী কী আছে</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "ভিডিও ক্লাস", desc: "প্রতিটি বিষয়ের প্রতিটি অধ্যায়ের জন্য আলাদা ভিডিও। বিশেষজ্ঞ শিক্ষকদের পড়ানো।", tag: "নতুন" },
              { title: "HSC মডেল টেস্ট", desc: "বোর্ডের প্রশ্নপদ্ধতি অনুসরণ করে তৈরি পূর্ণাঙ্গ মডেল পেপার।", tag: "" },
              { title: "ভর্তি পরীক্ষার মক টেস্ট", desc: "বিশ্ববিদ্যালয় অনুযায়ী আলাদা মক টেস্ট সেট।", tag: "" },
              { title: "AI টিউটর", desc: "কঠিন অধ্যায়ের যেকোনো অংশ বাংলায় বুঝে নাও।", tag: "" },
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
