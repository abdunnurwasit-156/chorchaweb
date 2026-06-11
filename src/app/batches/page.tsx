import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";
import { BATCHES, STATUS_LABEL, STATUS_COLOR } from "@/lib/batches";

const sscBatches = BATCHES.filter((b) => b.type === "SSC");
const hscBatches = BATCHES.filter((b) => b.type === "HSC");

export default function BatchesPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">
            ব্যাচ
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            সব ব্যাচ
          </h1>
          <p className="text-[#71717a] mt-4 text-sm leading-relaxed max-w-xl">
            তোমার পরীক্ষার বছর অনুযায়ী ব্যাচ বেছে নাও। প্রতিটি ব্যাচে আলাদা
            ভিডিও ক্লাস, মক টেস্ট এবং লিডারবোর্ড আছে।
          </p>
        </div>
      </section>

      {/* SSC */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">SSC ব্যাচ</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {sscBatches.map((b) => (
              <Link
                key={b.slug}
                href={`/batches/${b.slug}`}
                className="border border-[#ffffff10] rounded-2xl p-5 flex flex-col gap-3 hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d4d4d8] transition-colors">
                    {b.label}
                  </h3>
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${STATUS_COLOR[b.status]}`}
                  >
                    {STATUS_LABEL[b.status]}
                  </span>
                </div>
                <p className="text-xs text-[#71717a]">{b.tagline}</p>
                <div className="flex flex-col gap-1.5 text-xs text-[#71717a] border-t border-[#ffffff08] pt-3">
                  <div className="flex justify-between">
                    <span>শিক্ষার্থী</span>
                    <span className="text-white">{b.enrolledStudents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ভিডিও</span>
                    <span className="text-white">{b.totalVideos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>পরীক্ষা</span>
                    <span className="text-white">{b.examDate}</span>
                  </div>
                </div>
                <span className="text-xs text-[#d4d4d8] mt-1 group-hover:underline">
                  ব্যাচ দেখো →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HSC */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">HSC ব্যাচ</h2>
          <p className="text-xs text-[#71717a] mb-6">
            বিজ্ঞান · মানবিক · ব্যবসায় — তিনটি বিভাগের জন্য আলাদা কন্টেন্ট
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {hscBatches.map((b) => (
              <Link
                key={b.slug}
                href={`/batches/${b.slug}`}
                className="border border-[#ffffff10] rounded-2xl p-5 flex flex-col gap-3 hover:border-[#ffffff20] hover:bg-[#ffffff06] transition-all group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d4d4d8] transition-colors">
                    {b.label}
                  </h3>
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${STATUS_COLOR[b.status]}`}
                  >
                    {STATUS_LABEL[b.status]}
                  </span>
                </div>
                <p className="text-xs text-[#71717a]">{b.tagline}</p>

                {/* Division tags */}
                <div className="flex flex-wrap gap-1.5">
                  {["বিজ্ঞান", "মানবিক", "ব্যবসায়"].map((d) => (
                    <span
                      key={d}
                      className="text-[9px] text-[#a1a1aa] border border-[#ffffff10] px-2 py-0.5 rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-[#71717a] border-t border-[#ffffff08] pt-3">
                  <div className="flex justify-between">
                    <span>শিক্ষার্থী</span>
                    <span className="text-white">{b.enrolledStudents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ভিডিও</span>
                    <span className="text-white">{b.totalVideos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>পরীক্ষা</span>
                    <span className="text-white">{b.examDate}</span>
                  </div>
                </div>
                <span className="text-xs text-[#d4d4d8] mt-1 group-hover:underline">
                  ব্যাচ দেখো →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-white">
            নিজের ব্যাচ খুঁজে পাওনি?
          </h2>
          <p className="text-sm text-[#71717a]">
            আমাদের সাথে যোগাযোগ করো বা ক্লাস ৬–১০ স্ট্রিম থেকে শুরু করো।
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/stream/class-6-10"
              className="text-sm border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg hover:text-white hover:border-[#ffffff25] transition-colors"
            >
              ক্লাস ৬–১০ দেখো
            </Link>
            <Link
              href="/contact"
              className="text-sm border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg hover:text-white hover:border-[#ffffff25] transition-colors"
            >
              যোগাযোগ করো
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
