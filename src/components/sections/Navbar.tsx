"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
type SubItem = { label: string; href: string; desc?: string };
type Category = {
  label: string;
  href?: string;           // direct link (no sub-panel)
  sub?: SubItem[];         // opens a right-side sub-panel
};

const classJobsMenu: Category[] = [
  { label: "ক্লাস ৬", href: "/stream/class-6" },
  { label: "ক্লাস ৭", href: "/stream/class-7" },
  { label: "ক্লাস ৮", href: "/stream/class-8" },
  { label: "ক্লাস ৯", href: "/stream/class-9" },
  {
    label: "SSC",
    sub: [
      { label: "SSC-25", href: "/batches/ssc-25", desc: "২০২৫ সালের SSC পরীক্ষার্থী" },
      { label: "SSC-26", href: "/batches/ssc-26", desc: "২০২৬ সালের SSC পরীক্ষার্থী" },
      { label: "SSC-27", href: "/batches/ssc-27", desc: "২০২৭ সালের SSC পরীক্ষার্থী" },
      { label: "SSC-28", href: "/batches/ssc-28", desc: "২০২৮ সালের SSC পরীক্ষার্থী" },
    ],
  },
  {
    label: "HSC",
    sub: [
      { label: "HSC-25 বিজ্ঞান", href: "/batches/hsc-25?div=science", desc: "২০২৫ — বিজ্ঞান বিভাগ" },
      { label: "HSC-25 মানবিক", href: "/batches/hsc-25?div=humanities", desc: "২০২৫ — মানবিক বিভাগ" },
      { label: "HSC-25 ব্যবসায়", href: "/batches/hsc-25?div=commerce", desc: "২০২৫ — ব্যবসায় বিভাগ" },
      { label: "HSC-26 বিজ্ঞান", href: "/batches/hsc-26?div=science", desc: "২০২৬ — বিজ্ঞান বিভাগ" },
      { label: "HSC-26 মানবিক", href: "/batches/hsc-26?div=humanities", desc: "২০২৬ — মানবিক বিভাগ" },
      { label: "HSC-26 ব্যবসায়", href: "/batches/hsc-26?div=commerce", desc: "২০২৬ — ব্যবসায় বিভাগ" },
      { label: "HSC-27 বিজ্ঞান", href: "/batches/hsc-27?div=science", desc: "২০২৭ — বিজ্ঞান বিভাগ" },
      { label: "HSC-27 মানবিক", href: "/batches/hsc-27?div=humanities", desc: "২০২৭ — মানবিক বিভাগ" },
      { label: "HSC-27 ব্যবসায়", href: "/batches/hsc-27?div=commerce", desc: "২০২৭ — ব্যবসায় বিভাগ" },
      { label: "HSC-28", href: "/batches/hsc-28", desc: "২০২৮ সালের HSC পরীক্ষার্থী" },
    ],
  },
  {
    label: "ইংরেজি মাধ্যম",
    sub: [
      { label: "O Level", href: "/stream/english-medium#o-level", desc: "Cambridge ও Edexcel O Level" },
      { label: "A Level", href: "/stream/english-medium#a-level", desc: "Cambridge ও Edexcel A Level" },
    ],
  },
  {
    label: "চাকরির প্রস্তুতি",
    sub: [
      { label: "BCS", href: "/stream/jobs#bcs", desc: "প্রিলি, লিখিত ও ভাইভা" },
      { label: "ব্যাংক জব", href: "/stream/jobs#bank", desc: "সরকারি ও বেসরকারি ব্যাংক" },
      { label: "সরকারি চাকরি", href: "/stream/jobs#govt", desc: "বিভিন্ন মন্ত্রণালয় ও বিভাগ" },
    ],
  },
];

const simpleNav = [
  {
    label: "ফিচারসমূহ",
    children: [
      { label: "ভিডিও ক্লাস", href: "/#video-classes", desc: "বিশেষজ্ঞ শিক্ষকদের রেকর্ডেড ক্লাস" },
      { label: "মক টেস্ট", href: "/#mock-exam", desc: "কাস্টম পরীক্ষা, রিয়েল টাইম ফলাফল" },
      { label: "প্রশ্ন ব্যাংক", href: "/#question-bank", desc: "১০ লাখ+ বিগত বছরের প্রশ্ন" },
      { label: "AI টিউটর", href: "/#ai-tutor", desc: "তাৎক্ষণিক ব্যাখ্যা, বাংলায়" },
    ],
  },
  { label: "প্রিমিয়াম", href: "/premium" },
  {
    label: "কোম্পানি",
    children: [
      { label: "আমাদের সম্পর্কে", href: "/about", desc: "আমরা কারা, কেন চর্চা" },
      { label: "ক্যারিয়ার", href: "/careers", desc: "আমাদের দলে যোগ দাও" },
      { label: "শিক্ষক হিসেবে যোগ দাও", href: "/teach", desc: "তোমার জ্ঞান শেয়ার করো" },
      { label: "আমাদের শিক্ষকরা", href: "/teacher-panel", desc: "চর্চার সকল শিক্ষকের তালিকা" },
      { label: "অ্যাফিলিয়েট", href: "/affiliate", desc: "রেফার করো, আয় করো" },
      { label: "যোগাযোগ", href: "/contact", desc: "আমাদের সাথে কথা বলো" },
      { label: "সাহায্য ও FAQ", href: "/help", desc: "সাধারণ প্রশ্নোত্তর" },
    ],
  },
];

/* ─────────────────────────────────────────
   Class 6-12 & Jobs — Two-panel Mega Menu
───────────────────────────────────────── */
function ClassJobsMegaMenu({ onClose }: { onClose: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const active = classJobsMenu.find((c) => c.label === hovered);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.13 }}
      className="absolute top-full left-0 mt-1 flex bg-[#181818] border border-[#ffffff12] rounded-2xl shadow-2xl z-50 overflow-hidden min-w-[520px]"
    >
      {/* Left panel — category list */}
      <div className="w-52 border-r border-[#ffffff08] py-2 shrink-0">
        <p className="text-[10px] text-[#71717a] uppercase tracking-widest px-4 pt-2 pb-3 font-semibold">
          ক্লাস ৬–১২ ও চাকরি
        </p>
        {classJobsMenu.map((cat) => (
          <div
            key={cat.label}
            onMouseEnter={() => setHovered(cat.sub ? cat.label : null)}
          >
            {cat.href && !cat.sub ? (
              <Link
                href={cat.href}
                onClick={onClose}
                onMouseEnter={() => setHovered(null)}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#ffffff08] transition-colors"
              >
                {cat.label}
              </Link>
            ) : (
              <button
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  hovered === cat.label
                    ? "text-white bg-[#ffffff10]"
                    : "text-[#a1a1aa] hover:text-white hover:bg-[#ffffff08]"
                }`}
              >
                {cat.label}
                {cat.sub && <ChevronRight size={13} className="opacity-50" />}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Right panel — sub items */}
      <div className="flex-1 py-2 min-w-[260px]">
        {active?.sub ? (
          <>
            <p className="text-[10px] text-[#d4d4d8] uppercase tracking-widest px-4 pt-2 pb-3 font-semibold">
              {active.label}
            </p>
            <div className="overflow-y-auto max-h-72">
              {active.sub.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex flex-col px-4 py-2.5 hover:bg-[#ffffff08] transition-colors"
                >
                  <span className="text-sm font-medium text-[#e8e8f0]">{item.label}</span>
                  {item.desc && <span className="text-xs text-[#71717a] mt-0.5">{item.desc}</span>}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center px-6">
            <p className="text-xs text-[#71717a] text-center leading-relaxed">
              বাম দিকের একটি ক্যাটাগরিতে হোভার করো
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Simple dropdown
───────────────────────────────────────── */
function Dropdown({ item }: { item: typeof simpleNav[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  if (!("children" in item)) {
    return (
      <Link href={(item as { href: string }).href} className="text-sm text-[#a1a1aa] hover:text-white transition-colors px-3 py-2">
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-[#a1a1aa] hover:text-white transition-colors px-3 py-2"
      >
        {item.label}
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.13 }}
            className="absolute top-full left-0 mt-1 w-60 bg-[#181818] border border-[#ffffff12] rounded-xl shadow-xl overflow-hidden z-50"
          >
            {(item as { children: SubItem[] }).children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex flex-col px-4 py-3 hover:bg-[#ffffff08] transition-colors border-b border-[#ffffff06] last:border-0"
              >
                <span className="text-sm font-medium text-[#e8e8f0]">{child.label}</span>
                {child.desc && <span className="text-xs text-[#71717a] mt-0.5">{child.desc}</span>}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Navbar
───────────────────────────────────────── */
export function Navbar() {
  const [classJobsOpen, setClassJobsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setClassJobsOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center gap-1">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo_white.png" alt="Chorcha" className="h-7 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1">

          {/* Class 6-12 & Jobs mega menu */}
          <div ref={megaRef} className="relative">
            <button
              onClick={() => setClassJobsOpen(!classJobsOpen)}
              className={`flex items-center gap-1 text-sm px-3 py-2 transition-colors font-medium ${
                classJobsOpen ? "text-white" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              ক্লাস ৬–১২ ও চাকরি
              <ChevronDown size={13} className={`transition-transform ${classJobsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {classJobsOpen && (
                <ClassJobsMegaMenu onClose={() => setClassJobsOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          {/* Other nav items */}
          {simpleNav.map((item) => (
            <Dropdown key={item.label} item={item} />
          ))}
        </nav>

        {/* Auth CTA */}
        <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
          <Link href="/teach" className="text-xs text-[#a1a1aa] hover:text-white transition-colors hidden xl:block">
            শিক্ষক হিসেবে যোগ দাও
          </Link>
          <Link href="/auth/login" className="text-sm text-[#a1a1aa] hover:text-white transition-colors px-3 py-2">
            লগ ইন
          </Link>
          <Link
            href="/auth/register"
            className="text-sm bg-[#016a3e] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#015532] transition-colors"
          >
            শুরু করো
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-[#a1a1aa] p-1 ml-auto" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-[#ffffff10] overflow-y-auto max-h-[80vh]"
          >
            <div className="px-5 py-4 flex flex-col gap-0.5">

              {/* Class 6-12 & Jobs — accordion */}
              <button
                className="flex items-center justify-between w-full text-sm text-[#a1a1aa] py-2.5 font-medium"
                onClick={() => setMobileExpanded(mobileExpanded === "classes" ? null : "classes")}
              >
                <span>ক্লাস ৬–১২ ও চাকরি</span>
                <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "classes" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "classes" && (
                <div className="ml-3 mb-2 flex flex-col gap-0.5">
                  {classJobsMenu.map((cat) => (
                    <div key={cat.label}>
                      {cat.href && !cat.sub ? (
                        <Link
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-[#8080a0] hover:text-white py-2 px-2 rounded transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ) : (
                        <>
                          <button
                            className="w-full flex items-center justify-between text-sm text-[#8080a0] py-2 px-2 rounded hover:text-white transition-colors"
                            onClick={() => setMobileSubExpanded(mobileSubExpanded === cat.label ? null : cat.label)}
                          >
                            <span>{cat.label}</span>
                            <ChevronDown size={12} className={`transition-transform ${mobileSubExpanded === cat.label ? "rotate-180" : ""}`} />
                          </button>
                          {mobileSubExpanded === cat.label && cat.sub && (
                            <div className="ml-4 flex flex-col gap-0.5">
                              {cat.sub.map((s) => (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-xs text-[#71717a] hover:text-white py-1.5 px-2 rounded transition-colors"
                                >
                                  {s.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Simple nav items */}
              {simpleNav.map((item) => (
                <div key={item.label}>
                  {"children" in item ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-sm text-[#a1a1aa] py-2.5"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-3 flex flex-col gap-0.5 mb-2">
                          {(item as { children: SubItem[] }).children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-[#8080a0] hover:text-white py-1.5 px-2 rounded transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={(item as { href: string }).href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-[#a1a1aa] py-2.5"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="border-t border-[#ffffff10] pt-4 mt-3 flex flex-col gap-2">
                <Link href="/teach" onClick={() => setMobileOpen(false)} className="text-sm text-center text-[#a1a1aa] py-2">
                  শিক্ষক হিসেবে যোগ দাও
                </Link>
                <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="text-sm text-center text-[#a1a1aa] py-2">
                  লগ ইন
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-center bg-[#016a3e] text-white py-2.5 rounded-lg font-medium"
                >
                  বিনামূল্যে শুরু করো
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
