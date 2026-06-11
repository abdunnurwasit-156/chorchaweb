import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const openings = [
  {
    title: "সিনিয়র ফ্রন্টেন্ড ইঞ্জিনিয়ার",
    type: "ফুল-টাইম",
    location: "রাজশাহী / রিমোট",
    desc: "React, Next.js এবং TypeScript দিয়ে চর্চার ওয়েব অ্যাপ তৈরি ও উন্নত করবে।",
  },
  {
    title: "মোবাইল অ্যাপ ডেভেলপার (React Native)",
    type: "ফুল-টাইম",
    location: "রাজশাহী / রিমোট",
    desc: "iOS ও Android অ্যাপের নতুন ফিচার তৈরি এবং পারফরম্যান্স অপ্টিমাইজ করবে।",
  },
  {
    title: "কন্টেন্ট ডেভেলপার — বিজ্ঞান",
    type: "ফুল-টাইম",
    location: "রাজশাহী",
    desc: "SSC ও HSC বিজ্ঞানের জন্য প্রশ্ন তৈরি, ভিডিও স্ক্রিপ্ট লেখা এবং কারিকুলাম ম্যাপিং।",
  },
  {
    title: "ভিডিও প্রোডাকশন স্পেশালিস্ট",
    type: "ফুল-টাইম",
    location: "রাজশাহী",
    desc: "শিক্ষামূলক ভিডিও ধারণ, এডিটিং এবং প্রকাশনার সম্পূর্ণ প্রক্রিয়া পরিচালনা।",
  },
  {
    title: "ডিজিটাল মার্কেটিং ম্যানেজার",
    type: "ফুল-টাইম",
    location: "রাজশাহী / রিমোট",
    desc: "সামাজিক মাধ্যম, কন্টেন্ট মার্কেটিং এবং পেইড বিজ্ঞাপন পরিচালনা।",
  },
  {
    title: "শিক্ষক (পার্টটাইম) — গণিত / পদার্থ / রসায়ন",
    type: "পার্টটাইম",
    location: "রিমোট",
    desc: "ভিডিও ক্লাস রেকর্ড করবে। নিজের সময়মতো কাজ করার সুবিধা।",
  },
];

const perks = [
  "প্রতিযোগিতামূলক বেতন",
  "নমনীয় কর্মঘণ্টা ও রিমোট কাজের সুবিধা",
  "শিক্ষামূলক ভাতা — কোর্স ও কনফারেন্সের জন্য",
  "চর্চা প্রিমিয়াম — পরিবারসহ বিনামূল্যে",
  "স্বাস্থ্য বিমা",
  "কর্মক্ষম ও বৈচিত্র্যময় কর্মপরিবেশ",
];

export default function CareersPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">ক্যারিয়ার</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">আমাদের দলে যোগ দাও</h1>
          <p className="text-[#71717a] mt-4 text-sm leading-relaxed max-w-xl">
            চর্চায় কাজ করা মানে বাংলাদেশের লাখো শিক্ষার্থীর জীবন পরিবর্তনে সরাসরি ভূমিকা রাখা। আমরা এমন মানুষ খুঁজছি যারা শিক্ষাকে ভালোবাসে এবং প্রযুক্তি দিয়ে পার্থক্য তৈরি করতে চায়।
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">কেন চর্চায় কাজ করবে?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {perks.map((p) => (
              <div key={p} className="border border-[#ffffff10] rounded-lg px-4 py-3.5 text-sm text-[#a1a1aa] flex items-start gap-2">
                <span className="text-[#d4d4d8] mt-0.5 shrink-0">✓</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">খোলা পদসমূহ</h2>
          <div className="flex flex-col gap-4">
            {openings.map((job) => (
              <div key={job.title} className="border border-[#ffffff10] rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white text-sm">{job.title}</h3>
                    <span className="text-[10px] text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">{job.type}</span>
                  </div>
                  <p className="text-xs text-[#71717a] mb-2">{job.location}</p>
                  <p className="text-xs text-[#8080a0] leading-relaxed">{job.desc}</p>
                </div>
                <Link
                  href={`/contact?subject=${encodeURIComponent(job.title)}`}
                  className="text-xs font-medium text-[#016a3e] border border-[#016a3e30] px-4 py-2 rounded-lg hover:bg-[#016a3e10] transition-colors shrink-0"
                >
                  আবেদন করো
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General application */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-3">পদ না দেখলেও আবেদন করতে পারো</h2>
          <p className="text-sm text-[#71717a] mb-5 leading-relaxed">
            যদি মনে করো তুমি চর্চায় ভালো কিছু যোগ করতে পারবে, তাহলে সরাসরি আমাদের ইমেইল করো। পোর্টফোলিও বা GitHub লিংক দিলে ভালো হয়।
          </p>
          <a href="mailto:careers@chorcha.net" className="inline-flex text-sm text-[#d4d4d8] hover:underline">
            careers@chorcha.net →
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
