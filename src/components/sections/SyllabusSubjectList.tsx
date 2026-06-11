"use client";

import { useState } from "react";
import { getChapters, totalVideos } from "@/lib/syllabus";

function SubjectAccordion({ subject }: { subject: string }) {
  const chapters = getChapters(subject);
  const total = totalVideos(subject);

  return (
    <details className="border border-[#ffffff10] rounded-xl px-4 group">
      <summary className="py-3.5 cursor-pointer list-none flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-sm font-medium text-white truncate">
            {subject}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-[#71717a]">
            {chapters.length} অধ্যায় · {total} ভিডিও
          </span>
          <span className="text-[#71717a] group-open:rotate-180 transition-transform">
            ▾
          </span>
        </div>
      </summary>
      <div className="border-t border-[#ffffff08] py-3 flex flex-col gap-1.5">
        {chapters.map((ch, i) => (
          <div
            key={ch.name}
            className="flex items-center justify-between py-1.5 text-xs"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-[10px] text-[#71717a] shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[#a1a1aa] truncate">{ch.name}</span>
            </div>
            <span className="text-[#71717a] shrink-0">{ch.videos} ভিডিও</span>
          </div>
        ))}
      </div>
    </details>
  );
}

export function SyllabusSubjectList({ subjects }: { subjects: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? subjects : subjects.slice(0, 5);
  const remaining = subjects.length - 5;

  return (
    <div className="flex flex-col gap-2">
      {visible.map((subject) => (
        <SubjectAccordion key={subject} subject={subject} />
      ))}
      {remaining > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm text-[#10b981] hover:text-[#34d399] transition-colors text-left"
        >
          {expanded ? "কম দেখাও ↑" : `আরো ${remaining}টি বিষয় দেখো ↓`}
        </button>
      )}
    </div>
  );
}
