import Link from "next/link";

const footerLinks = {
  "স্ট্রিম ও ব্যাচ": [
    { label: "ক্লাস ৬–১০", href: "/stream/class-6-10" },
    { label: "এইচএসসি", href: "/stream/hsc" },
    { label: "SSC-26 ব্যাচ", href: "/batches/ssc-26" },
    { label: "SSC-27 ব্যাচ", href: "/batches/ssc-27" },
    { label: "HSC-26 ব্যাচ", href: "/batches/hsc-26" },
    { label: "HSC-27 ব্যাচ", href: "/batches/hsc-27" },
    { label: "চাকরির প্রস্তুতি", href: "/stream/jobs" },
    { label: "ইংরেজি মাধ্যম", href: "/stream/english-medium" },
  ],
  "ফিচারসমূহ": [
    { label: "ভিডিও ক্লাস", href: "/#video-classes" },
    { label: "মক টেস্ট", href: "/#mock-exam" },
    { label: "প্রশ্ন ব্যাংক", href: "/#question-bank" },
    { label: "AI টিউটর", href: "/#ai-tutor" },
    { label: "প্রিমিয়াম", href: "/premium" },
    { label: "বিনামূল্যে নোট ও গাইড", href: "/free-notes" },
    { label: "ফ্রি ডাউনলোড", href: "/free-download" },
    { label: "সার্টিফিকেট যাচাই", href: "/verify-certificate" },
  ],
  "কোম্পানি": [
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "ক্যারিয়ার", href: "/careers" },
    { label: "শিক্ষক হিসেবে যোগ দাও", href: "/teach" },
    { label: "আমাদের শিক্ষকরা", href: "/teacher-panel" },
    { label: "অ্যাফিলিয়েট রেজিস্ট্রেশন", href: "/affiliate" },
  ],
  "সহায়তা ও আইনি": [
    { label: "যোগাযোগ", href: "/contact" },
    { label: "সাহায্য কেন্দ্র", href: "/help" },
    { label: "সাধারণ প্রশ্নোত্তর", href: "/faq" },
    { label: "শর্তাবলি", href: "/terms" },
    { label: "গোপনীয়তা নীতি", href: "/privacy" },
    { label: "ফেরত নীতি", href: "/refund-policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#ffffff10] pt-14 pb-8 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Top: brand + contact + social */}
        <div className="grid md:grid-cols-3 gap-10 mb-12 pb-10 border-b border-[#ffffff08]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo_white.png" alt="Chorcha" className="h-7 w-auto" />
            </div>
            <p className="text-xs text-[#71717a] leading-relaxed max-w-xs">
              চর্চা করো নিজের গতিতে। বাংলাদেশের শিক্ষার্থীদের জন্য সেরা এডটেক প্ল্যাটফর্ম।
            </p>
            {/* Social */}
            <div>
              <p className="text-xs text-[#71717a] uppercase tracking-wider mb-3 font-medium">সামাজিক মাধ্যম</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "ফেসবুক", href: "#" },
                  { label: "ইনস্টাগ্রাম", href: "#" },
                  { label: "লিংকডইন", href: "#" },
                  { label: "ইউটিউব", href: "#" },
                  { label: "টিকটক", href: "#" },
                ].map((s) => (
                  <a key={s.label} href={s.href} className="text-xs text-[#71717a] hover:text-white transition-colors border border-[#ffffff10] px-2.5 py-1 rounded-md">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-xs text-[#71717a] uppercase tracking-wider mb-4 font-medium">যোগাযোগ</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "কল করো (সার্বক্ষণিক)",
                  value: "16910",
                  href: "tel:16910",
                  note: "২৪/৭",
                },
                {
                  label: "WhatsApp (সার্বক্ষণিক)",
                  value: "+880 1896-016252",
                  href: "https://wa.me/8801896016252",
                  note: "২৪/৭",
                },
                {
                  label: "বাংলাদেশের বাইরে",
                  value: "+880 9610-916910",
                  href: "tel:+8809610916910",
                  note: "আন্তর্জাতিক",
                },
                {
                  label: "সাপোর্ট ইমেইল",
                  value: "support@chorcha.net",
                  href: "mailto:support@chorcha.net",
                  note: "সাধারণত ২৪ ঘণ্টায় উত্তর",
                },
                {
                  label: "পার্টনারশিপ / ইভেন্ট",
                  value: "partnership@chorcha.net",
                  href: "mailto:partnership@chorcha.net",
                  note: "ব্যবসায়িক অনুরোধ",
                },
                {
                  label: "অফিস",
                  value: "[ ঠিকানা ], রাজশাহী",
                  href: null,
                  note: "রবি–বৃহস্পতি, ৯টা–৬টা",
                },
              ].map((c) => (
                <div key={c.label} className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-[#71717a] uppercase tracking-wide">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-white hover:text-[#d4d4d8] transition-colors font-medium">{c.value}</a>
                  ) : (
                    <span className="text-sm text-white font-medium">{c.value}</span>
                  )}
                  <span className="text-[10px] text-[#71717a]">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-[#71717a] uppercase tracking-wider mb-4">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#71717a] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#ffffff08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717a]">
          <span>© ২০২৪ চর্চা টেকনোলজিস লিমিটেড। সর্বস্বত্ব সংরক্ষিত।</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">শর্তাবলি</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">গোপনীয়তা</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">রিফান্ড</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
