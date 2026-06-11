import { PageLayout } from "@/components/ui/PageLayout";
import Link from "next/link";

const team = [
  { name: "[ প্রতিষ্ঠাতার নাম ]", role: "সহ-প্রতিষ্ঠাতা ও CEO" },
  { name: "[ সহ-প্রতিষ্ঠাতার নাম ]", role: "সহ-প্রতিষ্ঠাতা ও CTO" },
  { name: "[ নাম ]", role: "প্রধান কন্টেন্ট কর্মকর্তা" },
  { name: "[ নাম ]", role: "প্রধান ডিজাইন কর্মকর্তা" },
];

const values = [
  {
    title: "শিক্ষার্থী প্রথম",
    desc: "প্রতিটি সিদ্ধান্ত আমরা শিক্ষার্থীর কথা মাথায় রেখে নিই। সাশ্রয়ী মূল্য, বিজ্ঞাপন-মুক্ত, কম ডেটায় চলে — এগুলো আমাদের মূলনীতি।",
  },
  {
    title: "সহজলভ্যতা",
    desc: "বাংলাদেশের যেকোনো প্রান্তের শিক্ষার্থী যেন চর্চা ব্যবহার করতে পারে — সেটা নিশ্চিত করাই আমাদের লক্ষ্য।",
  },
  {
    title: "মানসম্পন্ন কন্টেন্ট",
    desc: "দেশের সেরা শিক্ষকদের সাথে মিলে তৈরি ভিডিও ক্লাস ও প্রশ্ন — মানের ক্ষেত্রে আমরা আপোষ করি না।",
  },
  {
    title: "ক্রমাগত উন্নতি",
    desc: "শিক্ষার্থীদের ফিডব্যাকের ভিত্তিতে আমরা প্রতিনিয়ত চর্চাকে আরও ভালো করছি।",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[#d4d4d8] font-medium tracking-widest uppercase mb-4">
            আমাদের সম্পর্কে
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            আমরা কারা
          </h1>
          <p className="text-[#71717a] mt-6 text-sm leading-relaxed max-w-2xl">
            চর্চা একটি বাংলাদেশি এডটেক প্রতিষ্ঠান। আমাদের লক্ষ্য — বাংলাদেশের
            প্রতিটি শিক্ষার্থীর কাছে মানসম্পন্ন শিক্ষার সুযোগ পৌঁছে দেওয়া। SSC
            থেকে BCS — সব পর্যায়ে।
          </p>
          <p className="text-[#71717a] mt-4 text-sm leading-relaxed max-w-2xl">
            ২০২২ সালে রাজশাহী থেকে যাত্রা শুরু। আজ ৫ লাখেরও বেশি শিক্ষার্থী
            প্রতিদিন চর্চা ব্যবহার করে পড়াশোনা করছে।
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-5">আমাদের মিশন</h2>
          <blockquote className="border-l-2 border-white pl-5 text-[#a1a1aa] text-base leading-relaxed">
            "বাংলাদেশের প্রতিটি শিক্ষার্থী যেন তার স্বপ্নের পরীক্ষায় সেরা
            প্রস্তুতি নিতে পারে — অর্থ, অবস্থান বা সুযোগের বাধা ছাড়াই।"
          </blockquote>
        </div>
      </section>
      {/* Values */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">আমাদের মূল্যবোধ</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-[#ffffff10] rounded-xl p-5"
              >
                <h3 className="font-semibold text-white text-sm mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-[#71717a] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">নেতৃত্ব দল</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-[#ffffff10] rounded-xl p-5 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#ffffff08] border border-[#ffffff10] mx-auto mb-3" />
                <div className="text-sm font-medium text-white">
                  {member.name}
                </div>
                <div className="text-xs text-[#71717a] mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Office */}
      <section className="py-14 px-5 border-b border-[#ffffff10]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">আমাদের অফিস</h2>
          <div className="border border-[#ffffff10] rounded-xl p-6 flex flex-col gap-2 text-sm text-[#71717a]">
            <p className="text-white font-medium">চর্চা টেকনোলজিস লিমিটেড</p>
            <p>[ সম্পূর্ণ ঠিকানা ]</p>
            <p>রাজশাহী, বাংলাদেশ</p>
            <div className="mt-3 pt-3 border-t border-[#ffffff08] flex flex-col gap-1">
              <a
                href="mailto:contact@chorcha.net"
                className="hover:text-white transition-colors"
              >
                contact@chorcha.net
              </a>
              <a
                href="tel:01605002711"
                className="hover:text-white transition-colors"
              >
                ০১৬০৫-০০২৭১১
              </a>
              <p className="text-xs text-[#71717a] mt-1">
                অফিস সময়: রবি–বৃহস্পতি, সকাল ৯টা – সন্ধ্যা ৬টা
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Join CTA */}
      <section className="py-14 px-5">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white">
            আমাদের দলে যোগ দিতে চাও?
          </h2>
          <p className="text-sm text-[#71717a]">
            আমরা শিক্ষামনস্ক, প্রযুক্তি-আগ্রহী মানুষদের খুঁজছি।
          </p>
          <Link
            href="/careers"
            className="inline-flex text-sm text-[#d4d4d8] hover:underline"
          >
            ক্যারিয়ার পেজ দেখো →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
