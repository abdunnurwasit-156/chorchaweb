import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const faqs = [
  {
    section: "সাধারণ",
    items: [
      {
        q: "চর্চা কি সম্পূর্ণ বিনামূল্যে?",
        a: "চর্চার ফ্রি প্ল্যানে প্রতিদিন ১০টি মক টেস্ট প্রশ্ন, সীমিত প্রশ্ন ব্যাংক এবং প্রতিদিন ৫টি AI টিউটর প্রশ্ন পাবে — বিনামূল্যে। ভিডিও ক্লাস ও সীমাহীন সুবিধার জন্য প্রিমিয়াম নিতে হবে।",
      },
      {
        q: "চর্চা কোন কোন পরীক্ষার জন্য কাজ করে?",
        a: "SSC, JSC, HSC (বিজ্ঞান/মানবিক/ব্যবসায়), বিশ্ববিদ্যালয় ভর্তি পরীক্ষা, BCS, ব্যাংক জব, সরকারি চাকরি, O Level ও A Level।",
      },
      {
        q: "চর্চা কি মোবাইলে ভালো চলে?",
        a: "হ্যাঁ। চর্চার iOS ও Android অ্যাপ আছে এবং ওয়েব সাইটটিও মোবাইল-বান্ধব। কম ডেটায়ও ভালো কাজ করে।",
      },
    ],
  },
  {
    section: "ভিডিও ক্লাস",
    items: [
      {
        q: "ভিডিও ক্লাস কি শুধু প্রিমিয়ামে?",
        a: "হ্যাঁ, সম্পূর্ণ ভিডিও ক্লাস প্রিমিয়াম সদস্যদের জন্য। তবে প্রতিটি বিষয়ের কিছু নমুনা ক্লাস বিনামূল্যে দেখা যাবে।",
      },
      {
        q: "ভিডিও কি অফলাইনে দেখা যাবে?",
        a: "হ্যাঁ, প্রিমিয়াম সদস্যরা অ্যাপ থেকে ভিডিও ডাউনলোড করে অফলাইনে দেখতে পারবে।",
      },
      {
        q: "শিক্ষকরা কারা?",
        a: "চর্চার ভিডিও ক্লাস দেশের অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত। প্রতিটি ভিডিও রেকর্ডের আগে কোয়ালিটি যাচাই করা হয়।",
      },
    ],
  },
  {
    section: "পেমেন্ট",
    items: [
      {
        q: "কোন পেমেন্ট পদ্ধতি আছে?",
        a: "bKash, Nagad, Rocket এবং ভিসা/মাস্টারকার্ড দিয়ে পেমেন্ট করা যাবে।",
      },
      {
        q: "রিফান্ড পাব কি?",
        a: "পেমেন্টের ৭ দিনের মধ্যে অনুরোধ করলে সম্পূর্ণ রিফান্ড দেওয়া হবে। বিস্তারিত দেখো আমাদের রিফান্ড নীতিতে।",
      },
      {
        q: "প্রিমিয়াম বাতিল করলে কী হবে?",
        a: "যেকোনো সময় বাতিল করতে পারবে। বাতিলের পরেও বর্তমান বিলিং সাইকেল শেষ পর্যন্ত প্রিমিয়াম অ্যাক্সেস থাকবে।",
      },
    ],
  },
  {
    section: "প্রযুক্তিগত",
    items: [
      {
        q: "অ্যাপ লোড না হলে কী করব?",
        a: "ইন্টারনেট সংযোগ পরীক্ষা করো। অ্যাপ আপডেট করো। সমস্যা থাকলে contact@chorcha.net-এ জানাও।",
      },
      {
        q: "একটি অ্যাকাউন্ট কয়টি ডিভাইসে ব্যবহার করা যাবে?",
        a: "একই সময়ে ২টি ডিভাইসে লগইন থাকা যাবে। বার্ষিক প্ল্যানে পরিবার শেয়ারিং ফিচার শীঘ্রই আসছে।",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <PageLayout>
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">সাধারণ প্রশ্নোত্তর</h1>
          <p className="text-[#71717a] mt-4 text-sm">
            উত্তর না পেলে{" "}
            <Link href="/contact" className="text-[#d4d4d8] hover:underline">আমাদের সাথে যোগাযোগ করো</Link>।
          </p>
        </div>
      </section>

      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {faqs.map((section) => (
            <div key={section.section}>
              <h2 className="text-base font-bold text-[#d4d4d8] mb-6">{section.section}</h2>
              <div className="flex flex-col gap-6">
                {section.items.map((item) => (
                  <div key={item.q} className="border-b border-[#ffffff08] pb-6">
                    <h3 className="font-medium text-white text-sm mb-2">{item.q}</h3>
                    <p className="text-sm text-[#71717a] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
