import { PageLayout } from "@/components/ui/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">যোগাযোগ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">কথা বলো আমাদের সাথে</h1>
          <p className="text-[#71717a] mt-4 text-sm leading-relaxed">
            কোনো প্রশ্ন, পরামর্শ বা সমস্যা থাকলে নিচের যেকোনো মাধ্যমে যোগাযোগ করো।
          </p>
        </div>
      </section>

      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold text-white mb-5">যোগাযোগের তথ্য</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "ইমেইল",
                    value: "contact@chorcha.net",
                    href: "mailto:contact@chorcha.net",
                    note: "সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়",
                  },
                  {
                    label: "ফোন",
                    value: "০১৬০৫-০০২৭১১",
                    href: "tel:01605002711",
                    note: "রবি–বৃহস্পতি, সকাল ১০টা – সন্ধ্যা ৬টা",
                  },
                  {
                    label: "অফিস",
                    value: "[ সম্পূর্ণ ঠিকানা ], রাজশাহী, বাংলাদেশ",
                    href: null,
                    note: "সরাসরি দেখা করতে আগে ফোন করো",
                  },
                ].map((c) => (
                  <div key={c.label} className="flex flex-col gap-1">
                    <span className="text-xs text-[#71717a] uppercase tracking-wider">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-white hover:text-[#d4d4d8] transition-colors">{c.value}</a>
                    ) : (
                      <span className="text-sm text-white">{c.value}</span>
                    )}
                    <span className="text-xs text-[#71717a]">{c.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#ffffff08] pt-6">
              <h3 className="text-sm font-medium text-white mb-4">বিভাগ অনুযায়ী ইমেইল</h3>
              <div className="flex flex-col gap-2 text-sm text-[#71717a]">
                <div className="flex items-center gap-2">
                  <span className="text-[#a1a1aa] w-32 shrink-0">ব্যবসায়িক</span>
                  <a href="mailto:business@chorcha.net" className="hover:text-white transition-colors">business@chorcha.net</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a1a1aa] w-32 shrink-0">ক্যারিয়ার</span>
                  <a href="mailto:careers@chorcha.net" className="hover:text-white transition-colors">careers@chorcha.net</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a1a1aa] w-32 shrink-0">প্রেস / মিডিয়া</span>
                  <a href="mailto:press@chorcha.net" className="hover:text-white transition-colors">press@chorcha.net</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a1a1aa] w-32 shrink-0">অ্যাফিলিয়েট</span>
                  <a href="mailto:affiliate@chorcha.net" className="hover:text-white transition-colors">affiliate@chorcha.net</a>
                </div>
              </div>
            </div>

            <div className="border-t border-[#ffffff08] pt-6">
              <h3 className="text-sm font-medium text-white mb-4">সামাজিক মাধ্যম</h3>
              <div className="flex gap-4 text-sm text-[#71717a]">
                <a href="#" className="hover:text-white transition-colors">ফেসবুক</a>
                <a href="#" className="hover:text-white transition-colors">ইনস্টাগ্রাম</a>
                <a href="#" className="hover:text-white transition-colors">ইউটিউব</a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-lg font-bold text-white mb-5">বার্তা পাঠাও</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#71717a]">তোমার নাম</label>
                <input
                  type="text"
                  placeholder="নাম লিখো"
                  className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#71717a]">ইমেইল</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#71717a]">বিষয়</label>
                <select className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-[#a1a1aa] focus:outline-none focus:border-white transition-colors">
                  <option value="">বিষয় বেছে নাও</option>
                  <option>সাধারণ জিজ্ঞাসা</option>
                  <option>প্রযুক্তিগত সমস্যা</option>
                  <option>পেমেন্ট ও রিফান্ড</option>
                  <option>কন্টেন্ট বিষয়ক</option>
                  <option>ব্যবসায়িক অংশীদারিত্ব</option>
                  <option>অন্যান্য</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#71717a]">বার্তা</label>
                <textarea
                  rows={5}
                  placeholder="তোমার বার্তা লিখো..."
                  className="bg-[#181818] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#71717a] focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#016a3e] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#015532] transition-colors"
              >
                বার্তা পাঠাও
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
