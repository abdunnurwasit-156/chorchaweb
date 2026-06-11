import Link from "next/link";
import { PageLayout } from "@/components/ui/PageLayout";
import { CLASSES, getClass, BANGLA_GRADE } from "@/lib/classes";

const FEATURES = [
  { title: "ভিডিও ক্লাস", desc: "প্রতিটি বিষয়ের প্রতিটি অধ্যায়ের রেকর্ডেড ক্লাস। বিশেষজ্ঞ শিক্ষকদের পড়ানো, সহজ ভাষায়।", tag: "নতুন", icon: "/brand/Videos.svg" },
  { title: "মক টেস্ট", desc: "অধ্যায়ভিত্তিক ও পূর্ণ সিলেবাসের মক টেস্ট। বার্ষিক পরীক্ষার আগে নিজেকে যাচাই করো।", tag: "", icon: "/brand/Mock.svg" },
  { title: "প্রশ্ন ব্যাংক", desc: "বিগত বছরের পরীক্ষার প্রশ্ন ও সমাধান, অধ্যায় অনুযায়ী সাজানো।", tag: "", icon: "/brand/Question%20Bank%20Icon%20Container.svg" },
  { title: "AI টিউটর", desc: "যেকোনো প্রশ্ন বুঝতে না পারলে AI-কে জিজ্ঞেস করো। তোমার ক্লাসের সিলেবাস অনুযায়ী বাংলায় ব্যাখ্যা পাবে।", tag: "", icon: "/brand/Chorcha%20AI.svg" },
  { title: "প্রগ্রেস ট্র্যাকিং", desc: "কোন বিষয়ে কতটা ভালো করছ, কোথায় আরও মনোযোগ দিতে হবে — গ্রাফে দেখো।", tag: "", icon: "/brand/Quick%20Practice%20Icon%20Container.svg" },
  { title: "লিডারবোর্ড", desc: "ক্লাস অনুযায়ী আলাদা লিডারবোর্ড। বন্ধুদের সাথে প্রতিযোগিতা করো।", tag: "", icon: "/brand/Point_icon.svg" },
];

export function ClassPage({ grade }: { grade: number }) {
  const cls = getClass(grade);
  if (!cls) return null;

  const bangla = BANGLA_GRADE[grade];
  const isClass9 = grade === 9;
  const isNewCurriculum = grade <= 8;

  return (
    <PageLayout>

      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-3 gap-8 pt-12 pb-14">

        {/* ── Left column: all content ── */}
        <div className="lg:col-span-2 flex flex-col gap-14">

          {/* Hero text */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[#71717a] mb-5">
              <Link href="/stream/class-6-10" className="hover:text-white transition-colors">ক্লাস ৬–১০</Link>
              <span>/</span>
              <span className="text-[#d4d4d8]">ক্লাস {bangla}</span>
            </div>

            {cls.note && (
              <span className="inline-flex text-[10px] font-semibold px-2.5 py-1 rounded-full border text-[#10b981] border-[#10b98130] bg-[#10b98110] mb-4">
                {cls.note}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">ক্লাস {bangla}</h1>
            <p className="text-[#71717a] mt-3 text-sm leading-relaxed max-w-lg">
              {cls.banglaLabel}-এর পূর্ণ সিলেবাস কভার করা ভিডিও ক্লাস, মক টেস্ট এবং AI টিউটর।
              {isClass9 && " ক্লাস ৯ থেকেই SSC-এর ভিত্তি মজবুত করো।"}
            </p>

            {isClass9 && (
              <div className="mt-4 border border-[#016a3e30] bg-[#016a3e08] rounded-xl px-4 py-3 text-sm text-[#34d399] max-w-lg">
                💡 ক্লাস ৯-এ পড়লে SSC ব্যাচে যোগ দেওয়ার কথা ভাবো।{" "}
                <Link href="/batches" className="underline hover:text-white transition-colors">ব্যাচ দেখো →</Link>
              </div>
            )}
          </div>

          {/* ── Subjects ── */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6">ক্লাস {bangla}-এর বিষয়সমূহ</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cls.subjects.map((s) => (
                <div key={s} className="border border-[#ffffff10] rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0 group-hover:bg-white transition-colors" />
                  <span className="text-sm text-[#a1a1aa] group-hover:text-white transition-colors">{s}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Features ── */}
          <section>
            <h2 className="text-xl font-bold text-white mb-8">ক্লাস {bangla}-এ কী কী পাবে</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="border border-[#ffffff10] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.icon} alt="" className="w-6 h-6 shrink-0" />
                    <h3 className="font-semibold text-white text-sm">{f.title}</h3>
                    {f.tag && <span className="text-[10px] text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">{f.tag}</span>}
                  </div>
                  <p className="text-xs text-[#71717a] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Other classes ── */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6">অন্য ক্লাস দেখো</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CLASSES.filter((c) => c.grade !== grade).map((c) => (
                <Link key={c.grade} href={`/stream/class-${c.grade}`} className="border border-[#ffffff10] rounded-xl p-4 text-center hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group">
                  <div className="text-lg font-bold text-white group-hover:text-[#d4d4d8] transition-colors">ক্লাস {BANGLA_GRADE[c.grade]}</div>
                  <div className="text-xs text-[#71717a] mt-1">{c.subjects.length}টি বিষয়</div>
                </Link>
              ))}
              <Link href="/stream/class-6-10" className="border border-[#ffffff10] rounded-xl p-4 text-center hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group">
                <div className="text-sm font-semibold text-white group-hover:text-[#d4d4d8] transition-colors">ক্লাস ৬–১০</div>
                <div className="text-xs text-[#71717a] mt-1">পূর্ণ ওভারভিউ</div>
              </Link>
              <Link href="/batches" className="border border-[#ffffff10] rounded-xl p-4 text-center hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group">
                <div className="text-sm font-semibold text-white group-hover:text-[#d4d4d8] transition-colors">SSC ব্যাচ</div>
                <div className="text-xs text-[#71717a] mt-1">SSC-26, 27, 28</div>
              </Link>
            </div>
          </section>

        </div>

        {/* ── Right column: STICKY enroll card ── */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 border border-[#ffffff10] rounded-2xl flex flex-col bg-[#121212] overflow-hidden">

            {/* Thumbnail */}
            <div className="relative w-full aspect-video bg-[#181818] flex items-center justify-center group cursor-pointer overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/video_thumbnails/Artboard%201.jpg" alt={`ক্লাস ${bangla} নমুনা ক্লাস`} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="relative w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] text-white bg-black/60 px-2 py-0.5 rounded-md">
                নমুনা ক্লাস
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3">

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">বিনামূল্যে</span>
                <span className="text-xs text-[#71717a]">শুরু করার জন্য</span>
              </div>

              {/* CTAs */}
              <Link href={`/auth/register?class=${grade}`} className="bg-[#016a3e] text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-[#015532] transition-colors">
                বিনামূল্যে শুরু করো
              </Link>
              <Link href="/premium" className="border border-[#ffffff15] text-[#a1a1aa] text-center py-2.5 rounded-lg text-sm hover:text-white hover:border-[#ffffff25] transition-colors">
                প্রিমিয়াম দেখো
              </Link>

              {/* Quick info */}
              <div className="flex flex-col gap-2 mt-1">
                <p className="text-xs font-semibold text-[#71717a] uppercase tracking-wider pt-3 border-t border-[#ffffff08]">দ্রুত তথ্য</p>
                {[
                  { k: "শ্রেণি", v: `ক্লাস ${bangla}` },
                  { k: "মোট বিষয়", v: `${cls.subjects.length}টি` },
                  { k: "পরীক্ষার ধরন", v: "বার্ষিক · অর্ধ-বার্ষিক" },
                  { k: "কারিকুলাম", v: isNewCurriculum ? "নতুন (২০২৩)" : "জাতীয় শিক্ষাক্রম" },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between border-t border-[#ffffff08] pt-2 text-sm">
                    <span className="text-[#71717a]">{r.k}</span>
                    <span className="text-white font-medium text-right">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

      </div>

      {/* ── CTA ── */}
      <section className="py-14 px-5 border-t border-[#ffffff10]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-white">ক্লাস {bangla}-এর পড়াশোনা শুরু করো</h2>
          <p className="text-sm text-[#71717a] max-w-md leading-relaxed">
            বিনামূল্যে অ্যাকাউন্ট খুলো এবং আজই ভিডিও ক্লাস ও মক টেস্ট শুরু করো।
          </p>
          <Link href={`/auth/register?class=${grade}`} className="bg-[#016a3e] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#015532] transition-colors">
            বিনামূল্যে শুরু করো
          </Link>
          {isClass9 && (
            <p className="text-xs text-[#71717a]">
              SSC ব্যাচে যোগ দিতে চাও?{" "}
              <Link href="/batches" className="text-[#d4d4d8] hover:underline">ব্যাচ দেখো →</Link>
            </p>
          )}
        </div>
      </section>

    </PageLayout>
  );
}
