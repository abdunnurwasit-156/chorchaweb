import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/ui/PageLayout";
import { BatchTabNav } from "@/components/sections/BatchTabNav";
import {
  getBatch, SSC_SUBJECTS, HSC_SUBJECTS, DIVISION_LABELS,
  STATUS_LABEL, STATUS_COLOR, BATCHES, PRICING_TIERS,
  type Division, type BatchMeta,
} from "@/lib/batches";
import { getChapters, totalVideos } from "@/lib/syllabus";

const HSC_DIVISIONS: Division[] = ["science", "humanities", "commerce"];

const INSTRUCTORS = [
  { name: "[ শিক্ষকের নাম ]", subject: "পদার্থবিজ্ঞান", qualification: "M.Sc, ঢাকা বিশ্ববিদ্যালয়", exp: "১২ বছরের অভিজ্ঞতা" },
  { name: "[ শিক্ষকের নাম ]", subject: "রসায়ন",         qualification: "M.Sc, রাজশাহী বিশ্ববিদ্যালয়", exp: "৮ বছরের অভিজ্ঞতা" },
  { name: "[ শিক্ষকের নাম ]", subject: "জীববিজ্ঞান",    qualification: "M.Sc, চট্টগ্রাম বিশ্ববিদ্যালয়", exp: "১০ বছরের অভিজ্ঞতা" },
  { name: "[ শিক্ষকের নাম ]", subject: "গণিত",          qualification: "M.Sc, বুয়েট", exp: "১৫ বছরের অভিজ্ঞতা" },
  { name: "[ শিক্ষকের নাম ]", subject: "বাংলা",         qualification: "M.A, ঢাকা বিশ্ববিদ্যালয়", exp: "৯ বছরের অভিজ্ঞতা" },
  { name: "[ শিক্ষকের নাম ]", subject: "ইংরেজি",        qualification: "M.A, রাজশাহী বিশ্ববিদ্যালয়", exp: "১১ বছরের অভিজ্ঞতা" },
];

const METHOD_STEPS = [
  { num: "১", title: "প্র্যাকটিস করো", desc: "প্রশ্ন ব্যাংক, দ্রুত প্র্যাকটিস বা মক টেস্ট — যেটা চাও সেটাই।" },
  { num: "২", title: "প্রোগ্রেস দেখো", desc: "কোন অধ্যায়ে দুর্বল, কোথায় ভুল করছ — গ্রাফে স্পষ্ট দেখা যায়।" },
  { num: "৩", title: "ভিডিও দেখো", desc: "যেই অধ্যায়ে দুর্বল, সেই অধ্যায়ের ভিডিও সরাসরি সাজেস্ট হয়।" },
  { num: "৪", title: "চর্চা কোচ যাচাই করে", desc: "ভিডিও শেষে কোচ প্রশ্ন করে — সত্যি বুঝেছ কিনা যাচাই হয়।" },
  { num: "৫", title: "লাইভ মডেল টেস্ট দাও", desc: "দিনের শেষে সবার সাথে লাইভ পরীক্ষা — লিডারবোর্ডে নিজেকে দেখো।" },
];

const FEATURES = [
  { title: "প্রশ্ন ব্যাংক",       desc: "বিগত বছরের সব প্রশ্ন, অধ্যায় অনুযায়ী সাজানো।",                 access: "free" },
  { title: "মক টেস্ট",           desc: "অধ্যায়ভিত্তিক ও পূর্ণ সিলেবাসের মক। সীমাহীন প্র্যাকটিস।",         access: "paid",  freeNote: "ফ্রিতে আজীবন ৮টি" },
  { title: "দ্রুত প্র্যাকটিস",     desc: "অল্প সময়ে স্পট চেক — ৫ মিনিটের কুইক রাউন্ড।",                  access: "paid",  freeNote: "ফ্রিতে দৈনিক ৭ বার" },
  { title: "লাইভ মডেল টেস্ট",   desc: "প্রতিদিন একটা, প্রতি শুক্রবার বড় সাপ্তাহিক পরীক্ষা।",            access: "free" },
  { title: "লাইভ লিডারবোর্ড",   desc: "জাতীয় ও ব্যাচ-ভিত্তিক — প্রতিটা পরীক্ষার পর তোমার র‌্যাংক।",     access: "free" },
  { title: "ভিডিও ক্লাস",        desc: "প্রতিটা অধ্যায়ের রেকর্ডেড ক্লাস। অ্যাপ ও ওয়েবে যেকোনো সময়।", access: "paid",  freeNote: "ফ্রি প্লেলিস্ট আছে" },
  { title: "চর্চা কোচ",          desc: "ভিডিও শেষে interactive Q&A। তোমার উত্তর দেখে adapt করে।",    access: "free", freeNote: "ফ্রি ভিডিওর সাথে ফ্রি" },
  { title: "প্রোগ্রেস ট্র্যাকিং",  desc: "Accuracy, অধ্যায়ভিত্তিক রিপোর্ট, ভুল প্রশ্ন তালিকা।",              access: "free" },
  { title: "AI টিউটর",            desc: "যেকোনো প্রশ্নের ব্যাখ্যা চাও — বাংলায় উত্তর দেবে।",              access: "free" },
];

const REQUIREMENTS = [
  "ইন্টারনেট সংযোগ (WiFi বা মোবাইল ডাটা)",
  "একটি স্মার্টফোন অথবা কম্পিউটার",
  "প্রতিদিন কমপক্ষে ৩০ মিনিট সময়",
];

const FAQS = [
  {
    q: "এই ব্যাচ আসলে কী?",
    a: "একটা প্যাকেজ। সাবস্ক্রিপশন নিলে এই ব্যাচের সব ভিডিও, লাইভ মডেল টেস্ট, কোচ — সব পাবে। পরীক্ষা পর্যন্ত।",
  },
  {
    q: "দেরিতে যোগ দিলে কী মিস করব?",
    a: "কিছুই না। আগের সব রেকর্ডেড ক্লাস, পুরনো প্রশ্ন, ভিডিও — সব অ্যাক্সেস পাবে। আজকেই শুরু করতে পারবে।",
  },
  {
    q: "সাবস্ক্রিপশন কত দিনের?",
    a: "১ মাস (২৪৯), ৩ মাস (৪৯৯), ৬ মাস (৭৯৯) বা ১২ মাস (১৩৯৯) — যেটা চাও। ব্যাচ অনুযায়ী আলাদা ছাড় থাকতে পারে।",
  },
  {
    q: "ফ্রি-তে কী কী পাব?",
    a: "আজীবন ৮টি মক টেস্ট, দৈনিক ৭ বার দ্রুত প্র্যাকটিস, সব লিডারবোর্ড, ফ্রি মডেল টেস্ট, কিছু ফ্রি ভিডিও প্লেলিস্ট ও চর্চা কোচ।",
  },
  {
    q: "লাইভ মডেল টেস্ট মিস করলে?",
    a: "পরে যেকোনো সময় সেই টেস্ট দিতে পারবে। তবে লাইভ লিডারবোর্ড শুধু লাইভ সময়েই কাজ করে।",
  },
  {
    q: "ভুল প্রশ্ন পরে দেখতে পারব?",
    a: "হ্যাঁ। প্রোগ্রেস ট্যাবে \"ভুল প্রশ্ন\" সেকশন আছে — সব ভুল উত্তর এক জায়গায় জমা থাকে।",
  },
  {
    q: "পেমেন্ট কীভাবে?",
    a: "bKash, Nagad, Rocket বা ভিসা/মাস্টারকার্ড দিয়ে। পেমেন্ট সেকশনে বিস্তারিত আছে।",
  },
  {
    q: "ভর্তি হওয়ার পর বাতিল করা যাবে?",
    a: "৭ দিনের মধ্যে অনুরোধ করলে রিফান্ড পাবে। বিস্তারিত আমাদের রিফান্ড নীতিতে।",
  },
];

export async function generateStaticParams() {
  return BATCHES.map((b) => ({ batch: b.slug }));
}

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

function priceWithDiscount(price: number, discount?: number) {
  if (!discount) return { final: price, original: null as number | null };
  const final = Math.round(price * (1 - discount / 100));
  return { final, original: price };
}

function FreePaidPill({ access, note }: { access: "free" | "paid"; note?: string }) {
  if (access === "free") {
    return (
      <span className="text-[10px] font-medium text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full whitespace-nowrap">
        ফ্রি
      </span>
    );
  }
  return (
    <span
      className="text-[10px] font-medium text-[#a1a1aa] border border-[#ffffff15] bg-[#ffffff05] px-2 py-0.5 rounded-full whitespace-nowrap"
      title={note}
    >
      সাবস্ক্রিপশন
    </span>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */

export default async function BatchPage({
  params,
}: {
  params: Promise<{ batch: string }>;
}) {
  const { batch: slug } = await params;
  const batch = getBatch(slug);
  if (!batch) notFound();

  const isHSC = batch.type === "HSC";
  const isUpcoming = batch.status === "upcoming";
  const isCompleted = batch.status === "completed";
  const isActive = batch.status === "active";

  const cheapest = priceWithDiscount(PRICING_TIERS[0].price, batch.discountPercent);

  return (
    <PageLayout>

      {/* Completed batch banner (replaces hero CTA emphasis) */}
      {isCompleted && <CompletedBanner batch={batch} />}

      <BatchTabNav />

      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-3 gap-8 pt-10">

        {/* ───── LEFT — content column ───── */}
        <div className="lg:col-span-2 flex flex-col">

          {/* OVERVIEW */}
          <OverviewSection batch={batch} />

          {/* CHORCHA METHOD */}
          <section id="method" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
            <h2 className="text-xl font-bold text-white mb-2">চর্চা মেথড</h2>
            <p className="text-sm text-[#71717a] mb-8">কীভাবে এই ব্যাচ তোমার পড়াশোনা চালায় — দৈনিক একটা লুপ।</p>

            <div className="flex flex-col gap-3">
              {METHOD_STEPS.map((s, i) => (
                <div key={s.num} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl border border-[#10b98130] bg-[#10b98110] flex items-center justify-center text-[#10b981] font-bold text-sm shrink-0">
                    {s.num}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                    <p className="text-xs text-[#71717a] mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                  {i < METHOD_STEPS.length - 1 && (
                    <span className="text-[#71717a] text-lg mt-2 hidden md:inline">↓</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 border border-[#ffffff10] rounded-xl p-5 bg-[#10b98108]">
              <p className="text-xs font-semibold text-[#10b981] uppercase tracking-wider mb-2">প্যাকেজ, কোর্স না</p>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                একবার এনরোল করলে এই ব্যাচের অতীত, বর্তমান ও ভবিষ্যৎ সব কন্টেন্ট পাবে — পরীক্ষা পর্যন্ত। যেকোনো সময় শুরু করো।
              </p>
            </div>
          </section>

          {/* LIVE MODEL TEST */}
          <LiveTestSection batch={batch} />

          {/* PROGRESS */}
          <ProgressSection />

          {/* COACH */}
          <CoachSection />

          {/* SYLLABUS */}
          <SyllabusSection batch={batch} />

          {/* INSTRUCTORS */}
          <section id="instructors" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
            <h2 className="text-xl font-bold text-white mb-2">শিক্ষকগণ</h2>
            <p className="text-sm text-[#71717a] mb-8">এই ব্যাচের জন্য নির্ধারিত শিক্ষক।</p>
            <div className="grid md:grid-cols-2 gap-4">
              {INSTRUCTORS.map((ins) => (
                <div key={ins.name + ins.subject} className="border border-[#ffffff10] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#ffffff08] border border-[#ffffff12] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">{ins.name}</div>
                    <div className="text-xs text-[#10b981] mt-0.5 font-medium">{ins.subject}</div>
                    <div className="text-xs text-[#71717a] mt-2">{ins.qualification}</div>
                    <div className="text-xs text-[#71717a]">{ins.exp}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
            <h2 className="text-xl font-bold text-white mb-2">কী কী পাচ্ছ</h2>
            <p className="text-sm text-[#71717a] mb-8">ফ্রি ও সাবস্ক্রিপশন — দুটোতেই কী থাকে।</p>
            <div className="grid md:grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="border border-[#ffffff10] rounded-xl p-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-white text-sm">{f.title}</h3>
                    <FreePaidPill access={f.access as "free" | "paid"} note={f.freeNote} />
                  </div>
                  <p className="text-xs text-[#71717a] leading-relaxed mb-2">{f.desc}</p>
                  {f.freeNote && (
                    <p className="text-[10px] text-[#10b981]">{f.freeNote}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="py-14 border-b border-[#ffffff10]">
            <h2 className="text-xl font-bold text-white mb-2">প্রয়োজনীয়তা</h2>
            <p className="text-sm text-[#71717a] mb-6">শুরু করতে যা লাগবে।</p>
            <div className="border border-[#ffffff10] rounded-xl p-6">
              <ul className="flex flex-col gap-3">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                    <span className="text-[#10b981] shrink-0 mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* PAYMENT */}
          <PaymentSection batch={batch} />

          {/* FAQ */}
          <section id="faq" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
            <h2 className="text-xl font-bold text-white mb-2">সাধারণ প্রশ্ন</h2>
            <p className="text-sm text-[#71717a] mb-8">আরও প্রশ্ন থাকলে কল করো 16910 (২৪/৭)।</p>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <details key={faq.q} className="border border-[#ffffff10] rounded-xl px-5 group">
                  <summary className="py-4 text-sm font-medium text-white cursor-pointer list-none flex items-center justify-between gap-3">
                    {faq.q}
                    <span className="text-[#71717a] group-open:rotate-180 transition-transform shrink-0">▾</span>
                  </summary>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed pb-4 border-t border-[#ffffff08] pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* OTHER BATCHES */}
          <section className="py-14">
            <h2 className="text-xl font-bold text-white mb-6">অন্য ব্যাচগুলো</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {BATCHES.filter((b) => b.slug !== slug).map((b) => (
                <Link
                  key={b.slug}
                  href={`/batches/${b.slug}`}
                  className="border border-[#ffffff10] rounded-xl p-4 hover:border-[#10b98130] hover:bg-[#10b98108] transition-all group"
                >
                  <div className="text-sm font-semibold text-white group-hover:text-[#34d399] transition-colors">{b.label}</div>
                  <div className="text-xs text-[#71717a] mt-1">{b.examDate}</div>
                  <span className={`inline-flex text-[9px] font-medium px-2 py-0.5 rounded-full border mt-2 ${STATUS_COLOR[b.status]}`}>
                    {STATUS_LABEL[b.status]}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* ───── RIGHT — sticky buy-box ───── */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-32 border border-[#ffffff10] rounded-2xl flex flex-col bg-[#121212] overflow-hidden">
            {/* Thumb */}
            <div className="relative w-full aspect-video bg-[#181818] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="relative w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              </div>
              <div className="absolute top-2 left-2">
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${STATUS_COLOR[batch.status]}`}>
                  {STATUS_LABEL[batch.status]}
                </span>
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] text-white bg-black/60 px-2 py-0.5 rounded-md">
                প্রিভিউ ১:৩০
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3">
              {/* Pricing pill */}
              {!isCompleted && (
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-xs text-[#71717a]">শুরু</span>
                  <span className="text-2xl font-bold text-white">৳ {cheapest.final}</span>
                  {cheapest.original && (
                    <span className="text-xs text-[#71717a] line-through">৳ {cheapest.original}</span>
                  )}
                  <span className="text-xs text-[#71717a]">/ মাস থেকে</span>
                  {batch.discountPercent && (
                    <span className="text-[10px] font-semibold text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">
                      {batch.discountPercent}% ছাড়
                    </span>
                  )}
                </div>
              )}

              {/* CTA */}
              {isCompleted ? (
                <Link
                  href="/batches"
                  className="bg-[#ffffff10] text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-[#ffffff15] transition-colors"
                >
                  নতুন ব্যাচ দেখো
                </Link>
              ) : (
                <Link
                  href={`/auth/register?batch=${slug}${isUpcoming ? "&early=true" : ""}`}
                  className="bg-[#016a3e] text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-[#015532] transition-colors"
                >
                  {isUpcoming ? "আর্লি অ্যাক্সেস" : "এনরোল করো"}
                </Link>
              )}

              {/* Compact list */}
              <ul className="flex flex-col gap-1.5 text-xs text-[#a1a1aa] pt-1">
                {[
                  "সব subject-এর ভিডিও ক্লাস",
                  "সীমাহীন মক + দ্রুত প্র্যাকটিস",
                  "লাইভ মডেল টেস্ট + লিডারবোর্ড",
                  "চর্চা কোচ + প্রোগ্রেস ট্র্যাকিং",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#10b981] shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Help */}
              <div className="border-t border-[#ffffff08] pt-3 flex items-center justify-between text-xs">
                <span className="text-[#71717a]">সাহায্য?</span>
                <a href="tel:16910" className="text-[#10b981] hover:underline font-medium">16910 (২৪/৭)</a>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </PageLayout>
  );
}

/* ─────────────────────────────────────────
   SECTION COMPONENTS
───────────────────────────────────────── */

function OverviewSection({ batch }: { batch: BatchMeta }) {
  const isHSC = batch.type === "HSC";
  return (
    <section id="overview" className="pb-10 border-b border-[#ffffff10] flex flex-col gap-5 scroll-mt-28">
      <div className="flex items-center gap-2 text-xs text-[#71717a]">
        <Link href={isHSC ? "/stream/hsc" : "/stream/class-6-10"} className="hover:text-white transition-colors">
          {isHSC ? "এইচএসসি" : "ক্লাস ৬–১০"}
        </Link>
        <span>/</span>
        <Link href="/batches" className="hover:text-white transition-colors">ব্যাচ</Link>
        <span>/</span>
        <span className="text-[#10b981]">{batch.label}</span>
      </div>

      <span className={`inline-flex w-fit text-[10px] font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLOR[batch.status]}`}>
        {STATUS_LABEL[batch.status]}
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {batch.label} ব্যাচ
      </h1>

      <p className="text-sm text-[#a1a1aa] leading-relaxed">
        {batch.tagline}। পরীক্ষা পর্যন্ত সাবস্ক্রিপশনে সব কিছু পাবে — ভিডিও, মক টেস্ট, লাইভ পরীক্ষা, কোচ, প্রোগ্রেস।
      </p>

      {/* 3 honest highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
        <div className="border border-[#ffffff10] rounded-xl p-4">
          <div className="text-xs text-[#71717a] mb-1">প্র্যাকটিস</div>
          <div className="text-sm font-bold text-white leading-snug">সীমাহীন মক + দ্রুত</div>
          <div className="text-[10px] text-[#71717a] mt-1">প্রশ্ন ব্যাংক সহ</div>
        </div>
        <div className="border border-[#ffffff10] rounded-xl p-4">
          <div className="text-xs text-[#71717a] mb-1">লাইভ পরীক্ষা</div>
          <div className="text-sm font-bold text-white leading-snug">দৈনিক মডেল টেস্ট</div>
          <div className="text-[10px] text-[#71717a] mt-1">+ লাইভ লিডারবোর্ড</div>
        </div>
        <div className="border border-[#ffffff10] rounded-xl p-4">
          <div className="text-xs text-[#71717a] mb-1">শেখা যাচাই</div>
          <div className="text-sm font-bold text-white leading-snug">চর্চা কোচ</div>
          <div className="text-[10px] text-[#71717a] mt-1">প্রতিটা ভিডিওর পর</div>
        </div>
      </div>

      {/* Social proof */}
      <div className="flex flex-wrap items-center gap-5 mt-2 text-xs text-[#71717a]">
        <span><span className="text-white font-semibold">{batch.enrolledStudents}</span> জন এনরোলড</span>
        <span><span className="text-white font-semibold">{batch.totalMockTests}</span> পরীক্ষা দেওয়া হয়েছে</span>
        <span>পরীক্ষা: <span className="text-white font-semibold">{batch.examDate}</span></span>
      </div>
    </section>
  );
}

function LiveTestSection({ batch }: { batch: BatchMeta }) {
  const isActive = batch.status === "active";

  return (
    <section id="live-test" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
      <h2 className="text-xl font-bold text-white mb-2">লাইভ মডেল টেস্ট</h2>
      <p className="text-sm text-[#71717a] mb-8">প্রতিদিন একটা মডেল টেস্ট, প্রতি শুক্রবার বড় সাপ্তাহিক পরীক্ষা।</p>

      {isActive && batch.liveTest && (
        <div className="border border-[#10b98130] bg-[#10b98108] rounded-xl p-5 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest">আজকের লাইভ</span>
          </div>
          <h3 className="text-lg font-bold text-white">{batch.liveTest.todayTopic}</h3>
          <p className="text-sm text-[#a1a1aa] mt-1">{batch.liveTest.todaySubject}</p>
          <div className="flex flex-wrap gap-5 mt-4 text-xs">
            <div>
              <div className="text-[#71717a]">সময়</div>
              <div className="text-white font-semibold mt-0.5">{batch.liveTest.todayTime}</div>
            </div>
            <div>
              <div className="text-[#71717a]">অংশ নিচ্ছে</div>
              <div className="text-white font-semibold mt-0.5">{batch.liveTest.todayParticipating} জন</div>
            </div>
          </div>
        </div>
      )}

      {isActive && batch.liveTest && (
        <div className="border border-[#ffffff10] rounded-xl p-5 mb-5">
          <p className="text-[10px] font-semibold text-[#71717a] uppercase tracking-widest mb-2">সাপ্তাহিক পরীক্ষা</p>
          <h3 className="text-base font-semibold text-white">{batch.liveTest.weeklyTopic}</h3>
          <p className="text-xs text-[#71717a] mt-1">প্রতি {batch.liveTest.weeklyDay} · পূর্ণ সিলেবাস</p>
        </div>
      )}

      {!isActive && (
        <div className="border border-[#ffffff10] rounded-xl p-5 mb-5">
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            {batch.status === "upcoming"
              ? `এই ব্যাচ শুরু হবে ${batch.startDate ?? "শীঘ্রই"}। লাইভ মডেল টেস্ট সেদিন থেকে শুরু হবে।`
              : "এই ব্যাচ সম্পন্ন হয়েছে। নতুন ব্যাচের রুটিন দেখো।"}
          </p>
        </div>
      )}

      {/* Mock leaderboard preview */}
      <h3 className="text-sm font-semibold text-white mb-3">লাইভ লিডারবোর্ড (নমুনা)</h3>
      <div className="border border-[#ffffff10] rounded-xl overflow-hidden">
        {[
          { rank: 1, name: "তানভীর হাসান", school: "নটরডেম কলেজ", score: 98, change: "+২" },
          { rank: 2, name: "সাবা ইসলাম",   school: "ভিকারুননিসা নূন স্কুল", score: 96, change: "+৫" },
          { rank: 3, name: "ফাহিম রহমান",  school: "রাজশাহী কলেজ", score: 95, change: "-১" },
          { rank: 4, name: "নুসরাত জাহান", school: "হলিক্রস কলেজ", score: 93, change: "+৩" },
          { rank: 5, name: "আদিব আহমেদ",  school: "শাহিন কলেজ", score: 92, change: "—" },
        ].map((r, i) => (
          <div
            key={r.rank}
            className={`flex items-center gap-4 px-5 py-3 ${i !== 4 ? "border-b border-[#ffffff08]" : ""}`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
              r.rank === 1 ? "bg-[#10b981] text-black" :
              r.rank === 2 ? "bg-[#34d399] text-black" :
              r.rank === 3 ? "bg-[#016a3e] text-white" :
              "bg-[#ffffff10] text-[#a1a1aa]"
            }`}>
              {r.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white font-medium truncate">{r.name}</div>
              <div className="text-[10px] text-[#71717a] truncate">{r.school}</div>
            </div>
            <div className="text-sm font-bold text-white shrink-0">{r.score}</div>
            <div className={`text-[10px] shrink-0 w-8 text-right ${
              r.change.startsWith("+") ? "text-[#10b981]" :
              r.change.startsWith("-") ? "text-red-400" :
              "text-[#71717a]"
            }`}>
              {r.change}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#71717a] mt-3">প্রতিটা মডেল টেস্ট শেষে লিডারবোর্ড আপডেট হয়। ব্যাচের সব শিক্ষার্থী একসাথে দেখতে পায়।</p>
    </section>
  );
}

function ProgressSection() {
  return (
    <section id="progress" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
      <h2 className="text-xl font-bold text-white mb-2">প্রোগ্রেস সিস্টেম</h2>
      <p className="text-sm text-[#71717a] mb-8">প্র্যাকটিসের সবকিছু track হয়। কোথায় দুর্বল, কোন প্রশ্ন ভুল করেছিলে — সব এক জায়গায়।</p>

      <div className="grid md:grid-cols-2 gap-4 mb-5">
        {/* Accuracy donut card */}
        <div className="border border-[#ffffff10] rounded-xl p-5">
          <p className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">অ্যাকুরেসি</p>
          <div className="flex items-center gap-5">
            {/* Donut */}
            <div className="relative w-24 h-24 shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ffffff10" strokeWidth="3.5" />
                {/* correct ≈ 80% */}
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3.5"
                  strokeDasharray="80 100" />
                {/* wrong ≈ 4% */}
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ef4444" strokeWidth="3.5"
                  strokeDasharray="4 100" strokeDashoffset="-80" />
                {/* skipped ≈ 16% */}
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3.5"
                  strokeDasharray="16 100" strokeDashoffset="-84" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-base font-bold text-white">
                ৮০%
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col gap-1.5 text-xs flex-1">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[#a1a1aa]"><span className="w-2 h-2 rounded-full bg-[#10b981]" />সঠিক</span>
                <span className="text-white">৯২৯</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[#a1a1aa]"><span className="w-2 h-2 rounded-full bg-red-500" />ভুল</span>
                <span className="text-white">৪৮</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[#a1a1aa]"><span className="w-2 h-2 rounded-full bg-amber-500" />স্কিপড</span>
                <span className="text-white">১৮৭</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-[#71717a] mt-4">স্কিপড আলাদা — fail হওয়া না, এড়িয়ে যাওয়া। চাপ কম।</p>
        </div>

        {/* Chapter-wise bars */}
        <div className="border border-[#ffffff10] rounded-xl p-5">
          <p className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">অধ্যায়ভিত্তিক রিপোর্ট</p>
          <div className="flex flex-col gap-2.5">
            {[
              { name: "তড়িৎচৌম্বকীয় আবেশ", pct: 7 },
              { name: "জ্যামিতিক আলোকবিজ্ঞান", pct: 5 },
              { name: "চল তড়িৎ", pct: 10 },
              { name: "আধুনিক পদার্থবিজ্ঞান", pct: 1 },
              { name: "জ্যোতির্বিজ্ঞান", pct: 1 },
            ].map((row) => (
              <div key={row.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#a1a1aa] truncate pr-2">{row.name}</span>
                  <span className="text-[#71717a] shrink-0">{row.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#ffffff08] overflow-hidden">
                  <div className="h-full bg-[#10b981]" style={{ width: `${Math.max(row.pct, 3)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[#71717a] mt-3">দুর্বল অধ্যায় চিনে নাও — ভিডিও সাজেস্ট হবে।</p>
        </div>
      </div>

      {/* Wrong questions */}
      <div className="border border-[#ffffff10] rounded-xl p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-1">ভুল প্রশ্ন</p>
            <h3 className="text-sm font-semibold text-white">তোমার সব ভুল উত্তর এক জায়গায়</h3>
          </div>
          <span className="text-[10px] font-semibold text-amber-400 border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">
            ৪৮ টি
          </span>
        </div>
        <p className="text-xs text-[#71717a] leading-relaxed mb-4">
          যেগুলো ভুল করেছিলে, সেগুলো হারিয়ে যাবে না। যখন চাও তখন আবার চেষ্টা করো।
        </p>
        <div className="flex flex-col gap-2">
          {[
            "পদার্থবিজ্ঞান · তড়িৎচৌম্বকীয় আবেশ · প্রশ্ন #২১৪",
            "রসায়ন · জৈব রসায়ন · প্রশ্ন #৪৭",
            "গণিত · যোগজীকরণ · প্রশ্ন #৯৮",
          ].map((q) => (
            <div key={q} className="flex items-center gap-3 text-xs text-[#a1a1aa] border-l-2 border-amber-400/40 pl-3 py-1.5">
              {q}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoachSection() {
  return (
    <section id="coach" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-xl font-bold text-white">চর্চা কোচ</h2>
        <span className="text-[10px] font-medium text-[#10b981] border border-[#10b98130] bg-[#10b98110] px-2 py-0.5 rounded-full">ফ্রি</span>
      </div>
      <p className="text-sm text-[#71717a] mb-8">ভিডিও শেষে কোচ এসে প্রশ্ন করে — সত্যি বুঝেছ কিনা যাচাই করে।</p>

      <div className="grid md:grid-cols-2 gap-4 mb-5">
        {/* Mock chat */}
        <div className="border border-[#ffffff10] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-black text-xs font-bold">চ</div>
            <div className="text-xs">
              <div className="text-white font-medium">চর্চা কোচ</div>
              <div className="text-[#71717a]">সঙ্গে এখনই</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[#ffffff08] border border-[#ffffff10] rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%] text-xs text-[#e8efe9]">
              তুমি ২টা ভিডিও দেখে শেষ করলে — "ভেক্টরের প্রকারভেদ" আর "সূত্রাবলী"। কয়েকটা প্রশ্ন জিজ্ঞেস করি?
            </div>
            <div className="ml-auto bg-[#016a3e] rounded-lg rounded-tr-sm px-3 py-2 max-w-[70%] text-xs text-white">
              হ্যাঁ, করো
            </div>
            <div className="bg-[#ffffff08] border border-[#ffffff10] rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%] text-xs text-[#e8efe9]">
              <p className="font-medium mb-2">দুটি ভেক্টরের মধ্যে কোণ ৬০° হলে, তাদের লব্ধির মান কোনটা?</p>
              <div className="flex flex-col gap-1.5">
                <div className="border border-[#ffffff10] rounded px-2 py-1 text-[10px]">ক) √৩</div>
                <div className="border border-[#10b981] bg-[#10b98110] rounded px-2 py-1 text-[10px] text-[#10b981]">খ) √৭</div>
                <div className="border border-[#ffffff10] rounded px-2 py-1 text-[10px]">গ) ২</div>
              </div>
            </div>
          </div>
        </div>

        {/* What coach can do */}
        <div className="border border-[#ffffff10] rounded-xl p-5 flex flex-col gap-4">
          <p className="text-xs font-semibold text-[#71717a] uppercase tracking-wider">কোচ কী করতে পারে</p>
          {[
            { t: "প্রশ্ন adapt করে",        d: "তোমার উত্তর দেখে পরের প্রশ্ন কঠিন/সহজ করে।" },
            { t: "ভিডিও সাজেস্ট করে",      d: "যে topic-এ দুর্বল, সেটার ভিডিও সরাসরি দেয়।" },
            { t: "প্র্যাকটিস সাজেস্ট করে",   d: "প্রশ্ন ব্যাংক থেকে relevant প্রশ্ন বের করে।" },
            { t: "তুমিই প্রশ্ন করতে পারো",  d: "যেকোনো বিষয়ে জিজ্ঞেস করো — বাংলায় উত্তর দেবে।" },
          ].map((item) => (
            <div key={item.t} className="flex gap-3 items-start">
              <span className="text-[#10b981] shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-sm font-medium text-white">{item.t}</div>
                <div className="text-xs text-[#71717a] mt-0.5">{item.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[#ffffff10] rounded-xl p-5 bg-[#10b98108]">
        <p className="text-xs text-[#a1a1aa] leading-relaxed">
          <span className="text-[#10b981] font-semibold">ফ্রি ভিডিওর সাথে কোচ ফ্রি।</span> সাবস্ক্রিপশন নিলে সব ভিডিওর পর কোচ পাবে।
        </p>
      </div>
    </section>
  );
}

function SyllabusSection({ batch }: { batch: BatchMeta }) {
  const isHSC = batch.type === "HSC";

  return (
    <section id="syllabus" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
      <h2 className="text-xl font-bold text-white mb-2">সিলেবাস</h2>
      <p className="text-sm text-[#71717a] mb-8">
        {isHSC ? "বিভাগ অনুযায়ী বিষয়সমূহ। প্রতিটা বিষয় খুলে অধ্যায় ও ভিডিও সংখ্যা দেখো।" : "প্রতিটা বিষয় খুলে অধ্যায় ও ভিডিও সংখ্যা দেখো।"}
      </p>

      {isHSC ? (
        <div className="flex flex-col gap-6">
          {HSC_DIVISIONS.map((div) => (
            <div key={div}>
              <p className="text-[10px] font-semibold text-[#10b981] uppercase tracking-widest mb-3">{DIVISION_LABELS[div]}</p>
              <div className="flex flex-col gap-2">
                {HSC_SUBJECTS[div].map((subject) => (
                  <SubjectAccordion key={subject} subject={subject} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {SSC_SUBJECTS.map((subject) => (
            <SubjectAccordion key={subject} subject={subject} />
          ))}
        </div>
      )}
    </section>
  );
}

function SubjectAccordion({ subject }: { subject: string }) {
  const chapters = getChapters(subject);
  const total = totalVideos(subject);

  return (
    <details className="border border-[#ffffff10] rounded-xl px-4 group">
      <summary className="py-3.5 cursor-pointer list-none flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-sm font-medium text-white truncate">{subject}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-[#71717a]">{chapters.length} অধ্যায় · {total} ভিডিও</span>
          <span className="text-[#71717a] group-open:rotate-180 transition-transform">▾</span>
        </div>
      </summary>
      <div className="border-t border-[#ffffff08] py-3 flex flex-col gap-1.5">
        {chapters.map((ch, i) => (
          <div key={ch.name} className="flex items-center justify-between py-1.5 text-xs">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-[10px] text-[#71717a] shrink-0 w-5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[#a1a1aa] truncate">{ch.name}</span>
            </div>
            <span className="text-[#71717a] shrink-0">{ch.videos} ভিডিও</span>
          </div>
        ))}
      </div>
    </details>
  );
}

function PaymentSection({ batch }: { batch: BatchMeta }) {
  return (
    <section id="payment" className="py-14 border-b border-[#ffffff10] scroll-mt-28">
      <h2 className="text-xl font-bold text-white mb-2">পেমেন্ট ও সাবস্ক্রিপশন</h2>
      <p className="text-sm text-[#71717a] mb-8">যেকোনো মোবাইল ব্যাংকিং বা কার্ড দিয়ে পেমেন্ট করো।</p>

      {/* Pricing tiers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {PRICING_TIERS.map((tier) => {
          const p = priceWithDiscount(tier.price, batch.discountPercent);
          return (
            <div
              key={tier.months}
              className={`border rounded-xl p-4 relative ${
                tier.popular
                  ? "border-[#10b98130] bg-[#10b98108]"
                  : "border-[#ffffff10]"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-black bg-[#10b981] px-2 py-0.5 rounded-full whitespace-nowrap">
                  জনপ্রিয়
                </span>
              )}
              <div className="text-xs text-[#71717a] mb-2">{tier.label}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-white">৳{p.final}</span>
                {p.original && (
                  <span className="text-[10px] text-[#71717a] line-through">৳{p.original}</span>
                )}
              </div>
              <div className="text-[10px] text-[#71717a] mt-1">
                ৳{Math.round(p.final / tier.months)}/মাস
              </div>
            </div>
          );
        })}
      </div>

      {batch.discountPercent && (
        <div className="text-xs text-[#10b981] mb-6">
          এই ব্যাচে {batch.discountPercent}% ছাড় চলছে · সব প্যাকেজে প্রযোজ্য
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-[#ffffff10] rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4">পেমেন্ট পদ্ধতি</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "bKash",                 note: "মোবাইল ব্যাংকিং" },
              { name: "Nagad",                 note: "মোবাইল ব্যাংকিং" },
              { name: "Rocket",                note: "মোবাইল ব্যাংকিং" },
              { name: "ভিসা / মাস্টারকার্ড",   note: "ক্রেডিট / ডেবিট কার্ড" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between border-b border-[#ffffff08] pb-3 last:border-0 last:pb-0">
                <div>
                  <div className="text-sm text-white font-medium">{m.name}</div>
                  <div className="text-xs text-[#71717a]">{m.note}</div>
                </div>
                <span className="text-[#10b981] text-xs">✓</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#ffffff10] rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4">ফ্রি প্ল্যান কী দেয়?</h3>
          <ul className="flex flex-col gap-2.5 text-xs text-[#a1a1aa]">
            <li className="flex items-start gap-2"><span className="text-[#10b981] shrink-0 mt-0.5">✓</span> আজীবন ৮টি মক টেস্ট</li>
            <li className="flex items-start gap-2"><span className="text-[#10b981] shrink-0 mt-0.5">✓</span> দৈনিক ৭ বার দ্রুত প্র্যাকটিস</li>
            <li className="flex items-start gap-2"><span className="text-[#10b981] shrink-0 mt-0.5">✓</span> সব লাইভ মডেল টেস্ট</li>
            <li className="flex items-start gap-2"><span className="text-[#10b981] shrink-0 mt-0.5">✓</span> সব লিডারবোর্ড</li>
            <li className="flex items-start gap-2"><span className="text-[#10b981] shrink-0 mt-0.5">✓</span> ফ্রি ভিডিও প্লেলিস্ট + চর্চা কোচ</li>
          </ul>
          <p className="text-[10px] text-[#71717a] mt-4 leading-relaxed">
            ফ্রি প্ল্যানে কিছু ভিডিও দেখার পর playlist lock হয়ে যেতে পারে।
          </p>
        </div>
      </div>
    </section>
  );
}

function CompletedBanner({ batch }: { batch: BatchMeta }) {
  return (
    <div className="bg-[#ffffff08] border-b border-[#ffffff10] px-5 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">এই ব্যাচ ({batch.label}) সম্পন্ন হয়েছে</p>
          <p className="text-xs text-[#71717a] mt-1">পরীক্ষা: {batch.examDate} · {batch.enrolledStudents} জন উপকৃত হয়েছে</p>
        </div>
        <Link
          href="/batches"
          className="shrink-0 text-sm bg-[#016a3e] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#015532] transition-colors"
        >
          নতুন ব্যাচ দেখো →
        </Link>
      </div>
    </div>
  );
}
