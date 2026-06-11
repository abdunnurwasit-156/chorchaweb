import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const categories = [
  {
    title: "শুরু করা",
    articles: [
      "কীভাবে অ্যাকাউন্ট খুলব?",
      "কোন স্ট্রিম আমার জন্য সঠিক?",
      "অ্যাপ কোথায় পাব?",
      "ফ্রি ও প্রিমিয়ামের পার্থক্য কী?",
    ],
  },
  {
    title: "ভিডিও ক্লাস",
    articles: [
      "ভিডিও ক্লাস কীভাবে দেখব?",
      "অফলাইনে ভিডিও ডাউনলোড করব কীভাবে?",
      "ভিডিও লোড না হলে কী করব?",
      "ভিডিও কোয়ালিটি পরিবর্তন করব কীভাবে?",
    ],
  },
  {
    title: "মক টেস্ট",
    articles: [
      "মক টেস্ট কীভাবে শুরু করব?",
      "কাস্টম টেস্ট কীভাবে তৈরি করব?",
      "পরীক্ষার ফলাফল কোথায় দেখব?",
      "ভুল উত্তরের ব্যাখ্যা কোথায় পাব?",
    ],
  },
  {
    title: "পেমেন্ট ও প্রিমিয়াম",
    articles: [
      "প্রিমিয়াম কীভাবে কিনব?",
      "কোন পেমেন্ট পদ্ধতি আছে?",
      "রিফান্ড কীভাবে পাব?",
      "প্রিমিয়াম বাতিল করব কীভাবে?",
    ],
  },
  {
    title: "অ্যাকাউন্ট ও নিরাপত্তা",
    articles: [
      "পাসওয়ার্ড ভুলে গেলে কী করব?",
      "ইমেইল পরিবর্তন করব কীভাবে?",
      "অ্যাকাউন্ট ডিলিট করব কীভাবে?",
      "অ্যাকাউন্ট শেয়ার করা কি যাবে?",
    ],
  },
  {
    title: "AI টিউটর",
    articles: [
      "AI টিউটর কীভাবে ব্যবহার করব?",
      "AI কি ভুল উত্তর দিতে পারে?",
      "AI কোন ভাষায় উত্তর দেয়?",
      "ফ্রি প্ল্যানে AI কতটুকু ব্যবহার করা যাবে?",
    ],
  },
];

export default function HelpPage() {
  return (
    <PageLayout>
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">সাহায্য কেন্দ্র</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">আমরা কীভাবে সাহায্য করতে পারি?</h1>
          <p className="text-[#71717a] mt-4 text-sm">সাধারণ প্রশ্নের উত্তর এখানে খোঁজো, অথবা সরাসরি আমাদের সাথে যোগাযোগ করো।</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div key={cat.title} className="border border-[#ffffff10] rounded-xl p-5">
              <h3 className="font-semibold text-white text-sm mb-4">{cat.title}</h3>
              <ul className="flex flex-col gap-2">
                {cat.articles.map((a) => (
                  <li key={a}>
                    <Link href={`/help/${encodeURIComponent(a)}`} className="text-xs text-[#71717a] hover:text-white transition-colors flex items-start gap-1.5">
                      <span className="text-[#d4d4d8] mt-0.5 shrink-0">→</span>
                      {a}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact support */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-white">উত্তর খুঁজে পাওনি?</h2>
          <p className="text-sm text-[#71717a]">আমাদের সহায়তা দল সবসময় তোমার পাশে আছে।</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="text-sm bg-[#016a3e] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#015532] transition-colors">
              আমাদের সাথে যোগাযোগ করো
            </Link>
            <a href="mailto:contact@chorcha.net" className="text-sm border border-[#ffffff15] text-[#a1a1aa] px-5 py-2.5 rounded-lg hover:text-white hover:border-[#ffffff25] transition-colors">
              contact@chorcha.net
            </a>
          </div>
          <p className="text-xs text-[#71717a]">সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়</p>
        </div>
      </section>
    </PageLayout>
  );
}
