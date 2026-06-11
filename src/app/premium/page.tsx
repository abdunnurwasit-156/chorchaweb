import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const plans = [
  {
    name: "ফ্রি",
    price: "০ টাকা",
    period: "সবসময়ের জন্য",
    highlight: false,
    features: [
      "প্রতিদিন ১০টি মক টেস্ট প্রশ্ন",
      "সীমিত প্রশ্ন ব্যাংক অ্যাক্সেস",
      "AI টিউটর: প্রতিদিন ৫টি প্রশ্ন",
      "লিডারবোর্ড দেখা",
      "বেসিক প্রগ্রেস ট্র্যাকিং",
    ],
    cta: "বিনামূল্যে শুরু করো",
    ctaHref: "/auth/register",
  },
  {
    name: "প্রিমিয়াম",
    price: "১৯৯ টাকা",
    period: "প্রতি মাসে",
    highlight: true,
    badge: "সবচেয়ে জনপ্রিয়",
    features: [
      "সীমাহীন মক টেস্ট",
      "সম্পূর্ণ প্রশ্ন ব্যাংক অ্যাক্সেস",
      "সীমাহীন AI টিউটর",
      "সব ভিডিও ক্লাস অ্যাক্সেস",
      "বিস্তারিত প্রগ্রেস বিশ্লেষণ",
      "অফলাইন ভিডিও ডাউনলোড",
      "প্রিমিয়াম লিডারবোর্ড",
      "অগ্রাধিকার সহায়তা",
    ],
    cta: "প্রিমিয়াম শুরু করো",
    ctaHref: "/auth/register?plan=premium",
  },
  {
    name: "বার্ষিক",
    price: "১,৪৯৯ টাকা",
    period: "প্রতি বছর (মাসে ১২৫ টাকা)",
    highlight: false,
    badge: "৩৭% সাশ্রয়",
    features: [
      "প্রিমিয়াম প্ল্যানের সব সুবিধা",
      "বছরে ৩৭% সাশ্রয়",
      "পরীক্ষা-বিশেষ স্টাডি প্ল্যান",
      "গ্রুপ স্টাডি ফিচার (শীঘ্রই)",
      "পরিবার শেয়ারিং — ২ জন পর্যন্ত",
    ],
    cta: "বার্ষিক প্ল্যান শুরু করো",
    ctaHref: "/auth/register?plan=annual",
  },
];

const faqs = [
  {
    q: "ফ্রি প্ল্যানে কতদিন থাকতে পারব?",
    a: "ফ্রি প্ল্যান সবসময়ের জন্য। কোনো ট্রায়াল পিরিয়ড নেই, স্বয়ংক্রিয়ভাবে চার্জ হবে না।",
  },
  {
    q: "পেমেন্ট কীভাবে করব?",
    a: "bKash, Nagad, Rocket এবং ভিসা/মাস্টারকার্ড দিয়ে পেমেন্ট করা যাবে।",
  },
  {
    q: "প্রিমিয়াম বাতিল করলে কী হবে?",
    a: "যেকোনো সময় বাতিল করতে পারবে। বাতিল করলে বর্তমান বিলিং সাইকেল শেষ পর্যন্ত প্রিমিয়াম অ্যাক্সেস থাকবে।",
  },
  {
    q: "একটি অ্যাকাউন্ট কি একাধিক ডিভাইসে ব্যবহার করা যাবে?",
    a: "হ্যাঁ, একই অ্যাকাউন্ট মোবাইল ও ওয়েব উভয়েই ব্যবহার করতে পারবে।",
  },
  {
    q: "রিফান্ড পাব কি?",
    a: "পেমেন্টের ৭ দিনের মধ্যে অনুরোধ করলে সম্পূর্ণ রিফান্ড দেওয়া হবে। বিস্তারিত দেখো আমাদের রিফান্ড নীতিতে।",
  },
];

export default function PremiumPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 px-5 text-center border-b border-[#ffffff10]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">প্রিমিয়াম</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">তোমার পড়াশোনায় বিনিয়োগ করো</h1>
          <p className="text-[#71717a] mt-4 text-sm leading-relaxed">
            ফ্রি প্ল্যানেই অনেক কিছু পাবে। কিন্তু সীমাহীন ভিডিও ক্লাস, মক টেস্ট আর AI টিউটরের জন্য প্রিমিয়াম নাও।
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col gap-5 border ${
                plan.highlight
                  ? "border-[#016a3e] bg-[#016a3e08]"
                  : "border-[#ffffff10]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-white">{plan.name}</span>
                  {plan.badge && (
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${plan.highlight ? "text-[#016a3e] border-[#016a3e30] bg-[#016a3e10]" : "text-[#10b981] border-[#10b98130] bg-[#10b98110]"}`}>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-white">{plan.price}</div>
                <div className="text-xs text-[#71717a] mt-0.5">{plan.period}</div>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-xs text-[#a1a1aa] flex items-start gap-2">
                    <span className="text-[#d4d4d8] mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`text-sm font-semibold text-center py-2.5 rounded-xl transition-colors ${
                  plan.highlight
                    ? "bg-[#016a3e] text-white hover:bg-[#015532]"
                    : "border border-[#ffffff15] text-[#a1a1aa] hover:text-white hover:border-[#ffffff25]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Compare table */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">বিস্তারিত তুলনা</h2>
          <div className="border border-[#ffffff10] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#ffffff10] bg-[#ffffff05]">
                  <th className="text-left px-5 py-3 text-[#71717a] font-medium">ফিচার</th>
                  <th className="text-center px-4 py-3 text-[#71717a] font-medium">ফ্রি</th>
                  <th className="text-center px-4 py-3 text-[#d4d4d8] font-medium">প্রিমিয়াম</th>
                  <th className="text-center px-4 py-3 text-[#71717a] font-medium">বার্ষিক</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["মক টেস্ট", "১০/দিন", "সীমাহীন", "সীমাহীন"],
                  ["প্রশ্ন ব্যাংক", "সীমিত", "সম্পূর্ণ", "সম্পূর্ণ"],
                  ["ভিডিও ক্লাস", "✗", "✓", "✓"],
                  ["অফলাইন ভিডিও", "✗", "✓", "✓"],
                  ["AI টিউটর", "৫/দিন", "সীমাহীন", "সীমাহীন"],
                  ["বিস্তারিত বিশ্লেষণ", "বেসিক", "সম্পূর্ণ", "সম্পূর্ণ"],
                  ["পরিবার শেয়ারিং", "✗", "✗", "২ জন পর্যন্ত"],
                ].map(([feature, free, premium, annual]) => (
                  <tr key={feature} className="border-b border-[#ffffff08] last:border-0">
                    <td className="px-5 py-3 text-[#a1a1aa]">{feature}</td>
                    <td className="text-center px-4 py-3 text-[#71717a]">{free}</td>
                    <td className="text-center px-4 py-3 text-white font-medium">{premium}</td>
                    <td className="text-center px-4 py-3 text-[#71717a]">{annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">সাধারণ প্রশ্নোত্তর</h2>
          <div className="flex flex-col gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#ffffff08] pb-5">
                <h3 className="font-medium text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#71717a] mt-8">
            আরও প্রশ্ন আছে?{" "}
            <Link href="/contact" className="text-[#d4d4d8] hover:underline">আমাদের সাথে যোগাযোগ করো</Link>
            {" "}অথবা{" "}
            <Link href="/faq" className="text-[#d4d4d8] hover:underline">FAQ দেখো</Link>।
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
