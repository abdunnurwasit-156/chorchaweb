import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const subjects = [
  "সব বিষয়",
  "গণিত",
  "পদার্থবিজ্ঞান",
  "রসায়ন",
  "জীববিজ্ঞান",
  "বাংলা",
  "ইংরেজি",
  "ICT",
  "BCS",
];

const teachers = [
  {
    name: "[ শিক্ষকের নাম ]",
    subject: "গণিত",
    qualification: "M.Sc, ঢাকা বিশ্ববিদ্যালয়",
    experience: "১২ বছরের অভিজ্ঞতা",
    streams: ["SSC", "HSC"],
    totalClasses: "৮৫টি ভিডিও ক্লাস",
    students: "৫০,০০০+ শিক্ষার্থী",
    rating: "৪.৯",
    href: "/teachers/1",
    img: "/teacher%20image/1.png",
  },
  {
    name: "[ শিক্ষকের নাম ]",
    subject: "পদার্থবিজ্ঞান",
    qualification: "M.Sc, রাজশাহী বিশ্ববিদ্যালয়",
    experience: "৮ বছরের অভিজ্ঞতা",
    streams: ["HSC বিজ্ঞান"],
    totalClasses: "৬২টি ভিডিও ক্লাস",
    students: "৩২,০০০+ শিক্ষার্থী",
    rating: "৪.৮",
    href: "/teachers/2",
    img: "/teacher%20image/2.png",
  },
  {
    name: "[ শিক্ষকের নাম ]",
    subject: "রসায়ন",
    qualification: "M.Sc, চট্টগ্রাম বিশ্ববিদ্যালয়",
    experience: "১০ বছরের অভিজ্ঞতা",
    streams: ["SSC", "HSC বিজ্ঞান"],
    totalClasses: "৭৪টি ভিডিও ক্লাস",
    students: "৪১,০০০+ শিক্ষার্থী",
    rating: "৪.৭",
    href: "/teachers/3",
    img: "/teacher%20image/3.png",
  },
  {
    name: "[ শিক্ষকের নাম ]",
    subject: "ইংরেজি",
    qualification: "M.A, ঢাকা বিশ্ববিদ্যালয়",
    experience: "১৫ বছরের অভিজ্ঞতা",
    streams: ["SSC", "HSC", "BCS"],
    totalClasses: "৯৮টি ভিডিও ক্লাস",
    students: "৮৮,০০০+ শিক্ষার্থী",
    rating: "৪.৯",
    href: "/teachers/4",
    img: "/teacher%20image/4.png",
  },
  {
    name: "[ শিক্ষকের নাম ]",
    subject: "বাংলা",
    qualification: "M.A, রাজশাহী বিশ্ববিদ্যালয়",
    experience: "৯ বছরের অভিজ্ঞতা",
    streams: ["SSC", "HSC", "BCS"],
    totalClasses: "৫৫টি ভিডিও ক্লাস",
    students: "২৮,০০০+ শিক্ষার্থী",
    rating: "৪.৮",
    href: "/teachers/5",
    img: "/teacher%20image/5.png",
  },
  {
    name: "[ শিক্ষকের নাম ]",
    subject: "BCS সাধারণ জ্ঞান",
    qualification: "BCS (সাধারণ শিক্ষা) ক্যাডার",
    experience: "৭ বছরের অভিজ্ঞতা",
    streams: ["BCS"],
    totalClasses: "১১০টি ভিডিও ক্লাস",
    students: "৬৫,০০০+ শিক্ষার্থী",
    rating: "৫.০",
    href: "/teachers/6",
    img: "/teacher%20image/6.png",
  },
];

export default function TeacherPanelPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end gap-5 justify-between">
          <div>
            <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">আমাদের শিক্ষকরা</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">দেশের সেরা শিক্ষকরা</h1>
            <p className="text-[#71717a] mt-4 max-w-xl text-sm leading-relaxed">
              চর্চার প্রতিটি শিক্ষক যাচাইকৃত এবং অভিজ্ঞ। তাদের রেকর্ডেড ভিডিও ক্লাস দিয়ে নিজের গতিতে পড়ো।
            </p>
          </div>
          <Link
            href="/teach"
            className="shrink-0 text-sm border border-[#016a3e] text-[#016a3e] px-5 py-2.5 rounded-lg font-medium hover:bg-[#016a3e10] transition-colors"
          >
            শিক্ষক হিসেবে যোগ দাও →
          </Link>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto flex gap-1 overflow-x-auto py-3 no-scrollbar">
          {subjects.map((s) => (
            <button
              key={s}
              className={`shrink-0 text-xs px-3.5 py-2 rounded-lg transition-colors border ${
                s === "সব বিষয়"
                  ? "bg-[#016a3e] text-white border-[#016a3e]"
                  : "text-[#a1a1aa] border-[#ffffff12] hover:text-white hover:border-[#ffffff25]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Teacher grid */}
      <section className="py-12 px-5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachers.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="border border-[#ffffff10] rounded-xl p-5 flex flex-col gap-4 hover:border-[#ffffff20] hover:bg-[#ffffff05] transition-all group"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-[#ffffff12] shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#d4d4d8] transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#d4d4d8] mt-0.5 font-medium">{t.subject}</div>
                </div>
                <div className="ml-auto text-xs text-[#a1a1aa] flex items-center gap-1">
                  <span className="text-yellow-400">★</span> {t.rating}
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-1.5 text-xs text-[#71717a]">
                <div>{t.qualification}</div>
                <div>{t.experience}</div>
              </div>

              {/* Stats */}
              <div className="flex gap-3 text-xs text-[#71717a] border-t border-[#ffffff08] pt-3">
                <span>{t.totalClasses}</span>
                <span>·</span>
                <span>{t.students}</span>
              </div>

              {/* Stream tags */}
              <div className="flex flex-wrap gap-1.5">
                {t.streams.map((s) => (
                  <span key={s} className="text-[10px] text-[#a1a1aa] border border-[#ffffff12] px-2 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="max-w-5xl mx-auto mt-8 text-center">
          <button className="text-sm text-[#a1a1aa] border border-[#ffffff12] px-6 py-2.5 rounded-lg hover:text-white hover:border-[#ffffff25] transition-colors">
            আরও শিক্ষক দেখো
          </button>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-14 px-5 bg-[#121212] border-t border-[#ffffff10]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-white">তুমিও চর্চার শিক্ষক হতে পারো</h2>
          <p className="text-sm text-[#71717a] max-w-md leading-relaxed">
            তোমার বিষয়ে দক্ষতা থাকলে এবং পড়াতে ভালো লাগলে — চর্চায় আবেদন করো। লাখো শিক্ষার্থীর কাছে পৌঁছাও।
          </p>
          <Link
            href="/teach"
            className="text-sm bg-[#016a3e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#015532] transition-colors"
          >
            শিক্ষক হিসেবে আবেদন করো
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
