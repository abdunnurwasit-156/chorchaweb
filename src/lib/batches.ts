export type Division = "science" | "humanities" | "commerce";
export type BatchStatus = "active" | "upcoming" | "completed";

export type LiveTest = {
  todayTopic: string;
  todaySubject: string;
  todayTime: string;
  todayParticipating: string;
  weeklyTopic: string;
  weeklyDay: string;
};

export type BatchMeta = {
  slug: string;
  label: string;
  year: number;
  type: "SSC" | "HSC";
  status: BatchStatus;
  tagline: string;
  enrolledStudents: string;
  totalVideos: string;
  totalMockTests: string;     // mock + druto combined
  examDate: string;
  startDate?: string;          // upcoming batches
  liveTest?: LiveTest;         // active batches only
  discountPercent?: number;    // per-batch optional discount
};

export type PricingTier = {
  months: number;
  label: string;
  price: number;
  perMonth: number;
  popular?: boolean;
};

// Universal pricing — same across all batches
export const PRICING_TIERS: PricingTier[] = [
  { months: 1,  label: "১ মাস",   price: 249,  perMonth: 249 },
  { months: 3,  label: "৩ মাস",   price: 499,  perMonth: 166 },
  { months: 6,  label: "৬ মাস",   price: 799,  perMonth: 133, popular: true },
  { months: 12, label: "১২ মাস", price: 1399, perMonth: 117 },
];

export const BASE_PRICE = 249;

export const BATCHES: BatchMeta[] = [
  {
    slug: "ssc-25", label: "SSC-25", year: 2025, type: "SSC", status: "completed",
    tagline: "২০২৫ সালের SSC পরীক্ষার্থী", enrolledStudents: "৯২,০০০+",
    totalVideos: "৩৪০+", totalMockTests: "১২ লাখ+", examDate: "ফেব্রুয়ারি ২০২৫",
  },
  {
    slug: "ssc-26", label: "SSC-26", year: 2026, type: "SSC", status: "active",
    tagline: "২০২৬ সালের SSC পরীক্ষার্থী", enrolledStudents: "৬৮,০০০+",
    totalVideos: "২৮০+", totalMockTests: "৮.৫ লাখ+", examDate: "ফেব্রুয়ারি ২০২৬",
    discountPercent: 20,
    liveTest: {
      todayTopic: "অম্ল, ক্ষারক ও লবণ",
      todaySubject: "রসায়ন",
      todayTime: "রাত ৯:০০",
      todayParticipating: "৪,২০০+",
      weeklyTopic: "পদার্থবিজ্ঞান — পূর্ণাঙ্গ অধ্যায় ৩–৫",
      weeklyDay: "শুক্রবার",
    },
  },
  {
    slug: "ssc-27", label: "SSC-27", year: 2027, type: "SSC", status: "upcoming",
    tagline: "২০২৭ সালের SSC পরীক্ষার্থী", enrolledStudents: "১২,০০০+",
    totalVideos: "৬০+", totalMockTests: "২.১ লাখ+", examDate: "ফেব্রুয়ারি ২০২৭",
    startDate: "জানুয়ারি ২০২৬",
  },
  {
    slug: "ssc-28", label: "SSC-28", year: 2028, type: "SSC", status: "upcoming",
    tagline: "২০২৮ সালের SSC পরীক্ষার্থী", enrolledStudents: "৩,০০০+",
    totalVideos: "—", totalMockTests: "—", examDate: "ফেব্রুয়ারি ২০২৮",
    startDate: "জুলাই ২০২৬",
  },
  {
    slug: "hsc-25", label: "HSC-25", year: 2025, type: "HSC", status: "completed",
    tagline: "২০২৫ সালের HSC পরীক্ষার্থী", enrolledStudents: "১,১০,০০০+",
    totalVideos: "৫৬০+", totalMockTests: "২২ লাখ+", examDate: "এপ্রিল ২০২৫",
  },
  {
    slug: "hsc-26", label: "HSC-26", year: 2026, type: "HSC", status: "active",
    tagline: "২০২৬ সালের HSC পরীক্ষার্থী", enrolledStudents: "৮৫,০০০+",
    totalVideos: "৪২০+", totalMockTests: "১৪ লাখ+", examDate: "এপ্রিল ২০২৬",
    discountPercent: 15,
    liveTest: {
      todayTopic: "তড়িৎচৌম্বকীয় আবেশ",
      todaySubject: "পদার্থবিজ্ঞান",
      todayTime: "রাত ৯:৩০",
      todayParticipating: "৬,৮০০+",
      weeklyTopic: "জৈব রসায়ন — পূর্ণাঙ্গ",
      weeklyDay: "শুক্রবার",
    },
  },
  {
    slug: "hsc-27", label: "HSC-27", year: 2027, type: "HSC", status: "upcoming",
    tagline: "২০২৭ সালের HSC পরীক্ষার্থী", enrolledStudents: "২২,০০০+",
    totalVideos: "১৪০+", totalMockTests: "৪.৫ লাখ+", examDate: "এপ্রিল ২০২৭",
    startDate: "মে ২০২৬",
  },
  {
    slug: "hsc-28", label: "HSC-28", year: 2028, type: "HSC", status: "upcoming",
    tagline: "২০২৮ সালের HSC পরীক্ষার্থী", enrolledStudents: "৫,০০০+",
    totalVideos: "—", totalMockTests: "—", examDate: "এপ্রিল ২০২৮",
    startDate: "মে ২০২৭",
  },
];

export const SSC_SUBJECTS = [
  "বাংলা প্রথম পত্র", "বাংলা দ্বিতীয় পত্র",
  "ইংরেজি প্রথম পত্র", "ইংরেজি দ্বিতীয় পত্র",
  "গণিত", "উচ্চতর গণিত",
  "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান",
  "বাংলাদেশ ও বিশ্বপরিচয়",
  "তথ্য ও যোগাযোগ প্রযুক্তি",
  "ইসলাম ধর্ম ও নৈতিক শিক্ষা",
];

export const HSC_SUBJECTS: Record<Division, string[]> = {
  science: [
    "পদার্থবিজ্ঞান ১ম পত্র", "পদার্থবিজ্ঞান ২য় পত্র",
    "রসায়ন ১ম পত্র", "রসায়ন ২য় পত্র",
    "জীববিজ্ঞান ১ম পত্র", "জীববিজ্ঞান ২য় পত্র",
    "উচ্চতর গণিত ১ম পত্র", "উচ্চতর গণিত ২য় পত্র",
    "বাংলা ১ম পত্র", "বাংলা ২য় পত্র",
    "ইংরেজি ১ম পত্র", "ইংরেজি ২য় পত্র",
    "তথ্য ও যোগাযোগ প্রযুক্তি",
  ],
  humanities: [
    "বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা",
    "ইসলামের ইতিহাস ও সংস্কৃতি",
    "পৌরনীতি ও সুশাসন",
    "সমাজবিজ্ঞান",
    "অর্থনীতি",
    "বাংলা ১ম পত্র", "বাংলা ২য় পত্র",
    "ইংরেজি ১ম পত্র", "ইংরেজি ২য় পত্র",
    "তথ্য ও যোগাযোগ প্রযুক্তি",
  ],
  commerce: [
    "ব্যবসায় সংগঠন ও ব্যবস্থাপনা",
    "হিসাববিজ্ঞান ১ম পত্র", "হিসাববিজ্ঞান ২য় পত্র",
    "ফিন্যান্স, ব্যাংকিং ও বিমা",
    "উৎপাদন ব্যবস্থাপনা ও বিপণন",
    "বাংলা ১ম পত্র", "বাংলা ২য় পত্র",
    "ইংরেজি ১ম পত্র", "ইংরেজি ২য় পত্র",
    "তথ্য ও যোগাযোগ প্রযুক্তি",
  ],
};

export const DIVISION_LABELS: Record<Division, string> = {
  science: "বিজ্ঞান",
  humanities: "মানবিক",
  commerce: "ব্যবসায় শিক্ষা",
};

export function getBatch(slug: string): BatchMeta | undefined {
  return BATCHES.find((b) => b.slug === slug);
}

export const STATUS_LABEL: Record<BatchStatus, string> = {
  active: "চলমান",
  upcoming: "শীঘ্রই",
  completed: "সম্পন্ন",
};

export const STATUS_COLOR: Record<BatchStatus, string> = {
  active:    "text-[#10b981] border-[#10b98130] bg-[#10b98110]",
  upcoming:  "text-[#34d399] border-[#34d39930] bg-[#34d39910]",
  completed: "text-[#71717a] border-[#ffffff15] bg-[#ffffff08]",
};
