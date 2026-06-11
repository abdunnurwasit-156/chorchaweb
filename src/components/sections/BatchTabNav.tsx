"use client";
import { useEffect, useState } from "react";

const TABS = [
  { id: "overview",     label: "ওভারভিউ" },
  { id: "live-test",    label: "লাইভ মডেল টেস্ট" },
  { id: "progress",     label: "প্রোগ্রেস" },
  { id: "coach",        label: "চর্চা কোচ" },
  { id: "syllabus",     label: "সিলেবাস" },
  { id: "instructors",  label: "শিক্ষকগণ" },
  { id: "features",     label: "ফিচার" },
  { id: "payment",      label: "পেমেন্ট" },
  { id: "faq",          label: "FAQ" },
];

export function BatchTabNav() {
  const [active, setActive] = useState<string>(TABS[0].id);

  useEffect(() => {
    const sections = TABS
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 112;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="sticky top-14 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#ffffff10] px-5">
      <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-2 no-scrollbar relative">
        {TABS.map((t) => {
          const isActive = active === t.id;
          return (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={(e) => handleClick(e, t.id)}
              className={`relative shrink-0 text-xs px-3.5 py-2 rounded-lg whitespace-nowrap transition-all ${
                isActive
                  ? "text-white bg-[#10b98115]"
                  : "text-[#a1a1aa] hover:text-white hover:bg-[#ffffff08]"
              }`}
            >
              {t.label}
              {isActive && (
                <span className="absolute left-2 right-2 -bottom-2 h-0.5 bg-[#10b981] rounded-full" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
