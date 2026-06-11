import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const benefits = [
  { title: "নিজের সময়ে পড়াও", desc: "রেকর্ডেড ভিডিও বানাও নিজের গতিতে। কোনো লাইভ সিডিউলের বাধ্যবাধকতা নেই।" },
  { title: "লাখো শিক্ষার্থীর কাছে পৌঁছাও", desc: "চর্চার ৫ লাখ+ শিক্ষার্থীর কাছে তোমার ক্লাস পৌঁছে যাবে।" },
  { title: "প্রতি ভিউতে আয়", desc: "তোমার ভিডিওর ভিউ অনুযায়ী রয়্যালটি পাবে। যত বেশি শিক্ষার্থী দেখবে, তত বেশি আয়।" },
  { title: "কোনো প্রযুক্তিগত ঝামেলা নেই", desc: "ভিডিও আপলোড করো, বাকি সব চর্চা সামলাবে — এডিটিং, থাম্বনেইল, পাবলিশিং।" },
  { title: "ড্যাশবোর্ড ও অ্যানালিটিক্স", desc: "কতজন ভিডিও দেখছে, কোথায় আটকে যাচ্ছে, কী ফিডব্যাক দিচ্ছে — সব দেখতে পাবে।" },
  { title: "চর্চা সার্টিফিকেট", desc: "অনুমোদিত শিক্ষকদের বিশেষ 'চর্চা সার্টিফাইড টিচার' ব্যাজ দেওয়া হয়।" },
];

const eligibility = [
  "নির্দিষ্ট বিষয়ে কমপক্ষে স্নাতক ডিগ্রি বা সমমান",
  "পড়ানোর অভিজ্ঞতা (স্কুল, কোচিং, বা অনলাইন — যেকোনো)",
  "ক্যামেরার সামনে পরিষ্কার বাংলায় বোঝানোর দক্ষতা",
  "প্রাথমিকভাবে কমপক্ষে ৫টি ভিডিও ক্লাস জমা দেওয়ার প্রতিশ্রুতি",
];

const steps = [
  { n: "০১", title: "আবেদন করো", desc: "নিচের ফর্মে তোমার তথ্য দাও। কোন বিষয়ে পড়াতে চাও সেটা জানাও।" },
  { n: "০২", title: "রিভিউ", desc: "আমাদের টিম তোমার আবেদন ও একটি স্যাম্পল ভিডিও দেখবে। সাধারণত ৩–৫ কার্যদিবসে সিদ্ধান্ত।" },
  { n: "০৩", title: "অনবোর্ডিং", desc: "অনুমোদন পেলে ভিডিও গাইডলাইন ও শিক্ষক প্যানেল অ্যাক্সেস পাবে।" },
  { n: "০৪", title: "পড়ানো শুরু করো", desc: "ভিডিও বানাও, আপলোড করো, এবং লাখো শিক্ষার্থীর কাছে পৌঁছে যাও।" },
];

export default function TeachPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">শিক্ষক হিসেবে যোগ দাও</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            তোমার জ্ঞান দিয়ে <br />লাখো শিক্ষার্থীর জীবন বদলাও
          </h1>
          <p className="text-[#71717a] mt-4 max-w-xl text-sm leading-relaxed">
            চর্চায় শিক্ষক হওয়া মানে শুধু আয় করা না — এটা বাংলাদেশের শিক্ষা ব্যবস্থায় সরাসরি অবদান রাখা।
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#apply" className="bg-[#016a3e] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#015532] transition-colors">
              এখনই আবেদন করো
            </a>
            <Link href="/teacher-panel" className="border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg text-sm hover:text-white hover:border-[#ffffff25] transition-colors">
              শিক্ষক প্যানেল দেখো
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">কেন চর্চায় পড়াবে?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="border border-[#ffffff10] rounded-xl p-5">
                <h3 className="font-semibold text-white text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-[#71717a] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">কীভাবে যোগ দেবে</h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-lg border border-[#10b98130] bg-[#10b98110] flex items-center justify-center text-[#10b981] font-bold text-sm shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{s.title}</h3>
                  <p className="text-sm text-[#71717a] mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">যোগ্যতার মানদণ্ড</h2>
          <ul className="flex flex-col gap-3">
            {eligibility.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                <span className="text-[#d4d4d8] shrink-0 mt-0.5">✓</span>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-14 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">শিক্ষক হওয়ার আবেদন</h2>
          <p className="text-sm text-[#71717a] mb-8">তোমার তথ্য দাও, আমরা ৩–৫ কার্যদিবসের মধ্যে যোগাযোগ করব।</p>
          <form className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#71717a]">পুরো নাম</label>
                <input type="text" placeholder="তোমার নাম" className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#71717a]">ফোন নম্বর</label>
                <input type="tel" placeholder="+880 XXXX-XXXXXX" className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#71717a]">ইমেইল</label>
              <input type="email" placeholder="email@example.com" className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#71717a]">কোন বিষয়ে পড়াতে চাও?</label>
              <select className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-[#a1a1aa] focus:outline-none focus:border-white transition-colors">
                <option value="">বিষয় বেছে নাও</option>
                <option>গণিত</option>
                <option>পদার্থবিজ্ঞান</option>
                <option>রসায়ন</option>
                <option>জীববিজ্ঞান</option>
                <option>বাংলা</option>
                <option>ইংরেজি</option>
                <option>ICT</option>
                <option>BCS সাধারণ জ্ঞান</option>
                <option>অন্যান্য</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#71717a]">শিক্ষাগত যোগ্যতা ও অভিজ্ঞতা</label>
              <textarea rows={4} placeholder="সংক্ষেপে জানাও..." className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors resize-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#71717a]">ইউটিউব বা পোর্টফোলিও লিংক (ঐচ্ছিক)</label>
              <input type="url" placeholder="https://" className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors" />
            </div>
            <button type="submit" className="bg-[#016a3e] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#015532] transition-colors mt-2">
              আবেদন জমা দাও
            </button>
          </form>
          <p className="text-xs text-[#71717a] mt-4 text-center">
            প্রশ্ন আছে?{" "}
            <a href="mailto:teachers@chorcha.net" className="text-[#d4d4d8] hover:underline">teachers@chorcha.net</a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
