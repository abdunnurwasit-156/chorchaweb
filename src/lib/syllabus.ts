// Mock chapter data. Each subject → list of chapters with video counts.
// Used to drive the expandable syllabus on batch pages.

export type Chapter = { name: string; videos: number };

export const CHAPTERS: Record<string, Chapter[]> = {
  // ── Sciences (shared SSC/HSC) ──
  "পদার্থবিজ্ঞান ১ম পত্র": [
    { name: "ভৌতজগৎ ও পরিমাপ", videos: 8 },
    { name: "ভেক্টর", videos: 12 },
    { name: "গতিবিদ্যা", videos: 15 },
    { name: "নিউটনিয়ান বলবিদ্যা", videos: 14 },
    { name: "কাজ, ক্ষমতা ও শক্তি", videos: 10 },
    { name: "মহাকর্ষ ও অভিকর্ষ", videos: 9 },
    { name: "পদার্থের গাঠনিক ধর্ম", videos: 8 },
    { name: "পর্যাবৃত্ত গতি", videos: 11 },
    { name: "আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব", videos: 7 },
  ],
  "পদার্থবিজ্ঞান ২য় পত্র": [
    { name: "তাপগতিবিদ্যা", videos: 9 },
    { name: "স্থির তড়িৎ", videos: 13 },
    { name: "চল তড়িৎ", videos: 12 },
    { name: "তড়িৎচৌম্বকীয় আবেশ", videos: 11 },
    { name: "জ্যামিতিক আলোকবিজ্ঞান", videos: 9 },
    { name: "ভৌত আলোকবিজ্ঞান", videos: 8 },
    { name: "আধুনিক পদার্থবিজ্ঞান", videos: 10 },
    { name: "সেমিকন্ডাক্টর ও ইলেকট্রনিক্স", videos: 7 },
    { name: "জ্যোতির্বিজ্ঞান", videos: 5 },
  ],
  "পদার্থবিজ্ঞান": [
    { name: "ভৌত রাশি ও পরিমাপ", videos: 6 },
    { name: "গতি", videos: 10 },
    { name: "বল", videos: 9 },
    { name: "কাজ, ক্ষমতা ও শক্তি", videos: 8 },
    { name: "পদার্থের অবস্থা ও চাপ", videos: 7 },
    { name: "বস্তুর উপর তাপের প্রভাব", videos: 6 },
    { name: "তরঙ্গ ও শব্দ", videos: 8 },
    { name: "আলোর প্রতিফলন", videos: 7 },
    { name: "আলোর প্রতিসরণ", videos: 7 },
    { name: "স্থির তড়িৎ", videos: 6 },
    { name: "চল তড়িৎ", videos: 9 },
    { name: "তড়িৎ প্রকৌশল", videos: 5 },
  ],

  "রসায়ন ১ম পত্র": [
    { name: "ল্যাবরেটরির নিরাপদ ব্যবহার", videos: 4 },
    { name: "গুণগত রসায়ন", videos: 11 },
    { name: "মৌলের পর্যায়বৃত্ত ধর্ম", videos: 9 },
    { name: "রাসায়নিক পরিবর্তন", videos: 13 },
    { name: "কর্মমুখী রসায়ন", videos: 8 },
  ],
  "রসায়ন ২য় পত্র": [
    { name: "পরিবেশ রসায়ন", videos: 7 },
    { name: "জৈব রসায়ন", videos: 18 },
    { name: "পরিমাণগত রসায়ন", videos: 10 },
    { name: "তড়িৎ রসায়ন", videos: 9 },
    { name: "অর্থনৈতিক রসায়ন", videos: 6 },
  ],
  "রসায়ন": [
    { name: "রসায়নের ধারণা", videos: 5 },
    { name: "পদার্থের অবস্থা", videos: 6 },
    { name: "পদার্থের গঠন", videos: 8 },
    { name: "পর্যায় সারণি", videos: 7 },
    { name: "রাসায়নিক বন্ধন", videos: 9 },
    { name: "মোলের ধারণা ও স্টয়কিওমিতি", videos: 7 },
    { name: "রাসায়নিক বিক্রিয়া", videos: 8 },
    { name: "এসিড-ক্ষারক সমতা", videos: 7 },
    { name: "আমাদের জীবনে রসায়ন", videos: 5 },
  ],

  "জীববিজ্ঞান ১ম পত্র": [
    { name: "কোষ ও এর গঠন", videos: 9 },
    { name: "কোষ বিভাজন", videos: 7 },
    { name: "অণুজীব", videos: 6 },
    { name: "শৈবাল ও ছত্রাক", videos: 5 },
    { name: "ব্রায়োফাইটা ও টেরিডোফাইটা", videos: 5 },
    { name: "নগ্নবীজী ও আবৃতবীজী", videos: 7 },
    { name: "টিস্যু ও টিস্যুতন্ত্র", videos: 8 },
    { name: "উদ্ভিদ শারীরতত্ত্ব", videos: 11 },
    { name: "উদ্ভিদ প্রজনন", videos: 6 },
    { name: "জীবপ্রযুক্তি", videos: 7 },
  ],
  "জীববিজ্ঞান ২য় পত্র": [
    { name: "প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস", videos: 8 },
    { name: "প্রাণীর পরিচিতি", videos: 7 },
    { name: "পরিপাক ও শোষণ", videos: 6 },
    { name: "রক্ত ও সঞ্চালন", videos: 8 },
    { name: "শ্বসন ও শ্বাসক্রিয়া", videos: 6 },
    { name: "বর্জ্য নিষ্কাশন", videos: 5 },
    { name: "চলন ও অঙ্গচালনা", videos: 6 },
    { name: "সমন্বয় ও নিঃসরণ", videos: 7 },
    { name: "মানব জীবনের ধারাবাহিকতা", videos: 6 },
  ],
  "জীববিজ্ঞান": [
    { name: "জীবন পাঠ", videos: 4 },
    { name: "জীবকোষ ও টিস্যু", videos: 8 },
    { name: "জীবনীশক্তি", videos: 6 },
    { name: "জীবে পরিবহন", videos: 7 },
    { name: "জীবের প্রজনন", videos: 6 },
    { name: "জীবের বংশগতি ও বিবর্তন", videos: 5 },
    { name: "মানবদেহ", videos: 9 },
    { name: "জীবপ্রযুক্তি", videos: 5 },
  ],

  // ── Math ──
  "উচ্চতর গণিত ১ম পত্র": [
    { name: "ম্যাট্রিক্স ও নির্ণায়ক", videos: 10 },
    { name: "ভেক্টর", videos: 9 },
    { name: "সরলরেখা", videos: 8 },
    { name: "বৃত্ত", videos: 7 },
    { name: "ত্রিকোণমিতিক অনুপাত", videos: 11 },
    { name: "সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত", videos: 8 },
    { name: "ফাংশন ও ফাংশনের লেখচিত্র", videos: 9 },
    { name: "অন্তরীকরণ", videos: 14 },
    { name: "যোগজীকরণ", videos: 12 },
  ],
  "উচ্চতর গণিত ২য় পত্র": [
    { name: "বাস্তব সংখ্যা ও অসমতা", videos: 6 },
    { name: "যোগাশ্রয়ী প্রোগ্রাম", videos: 7 },
    { name: "জটিল সংখ্যা", videos: 9 },
    { name: "বহুপদী ও বহুপদীয় সমীকরণ", videos: 8 },
    { name: "দ্বিপদী বিস্তৃতি", videos: 7 },
    { name: "কনিক", videos: 11 },
    { name: "বিপরীত ত্রিকোণমিতিক ফাংশন", videos: 6 },
    { name: "স্থিতিবিদ্যা", videos: 9 },
    { name: "সমতলে বস্তুকণার গতি", videos: 10 },
    { name: "বিন্যাস ও সমাবেশ", videos: 7 },
    { name: "সম্ভাবনা", videos: 8 },
  ],
  "গণিত": [
    { name: "বাস্তব সংখ্যা", videos: 5 },
    { name: "সেট ও ফাংশন", videos: 7 },
    { name: "বীজগাণিতিক রাশি", videos: 6 },
    { name: "সূচক ও লগারিদম", videos: 7 },
    { name: "এক চলকবিশিষ্ট সমীকরণ", videos: 6 },
    { name: "দ্বিঘাত সমীকরণ", videos: 8 },
    { name: "অসমতা", videos: 5 },
    { name: "অনুপাত, সমানুপাত ও ভাগ অনুপাত", videos: 6 },
    { name: "ব্যবসায়িক গণিত", videos: 5 },
    { name: "ত্রিকোণমিতিক অনুপাত", videos: 8 },
    { name: "জ্যামিতি", videos: 9 },
    { name: "পরিসংখ্যান", videos: 6 },
  ],

  // ── Languages ──
  "বাংলা প্রথম পত্র": [
    { name: "গদ্য", videos: 12 },
    { name: "পদ্য", videos: 14 },
    { name: "উপন্যাস ও নাটক", videos: 6 },
    { name: "সারমর্ম ও সারাংশ", videos: 5 },
    { name: "ভাবসম্প্রসারণ", videos: 4 },
  ],
  "বাংলা দ্বিতীয় পত্র": [
    { name: "ব্যাকরণ", videos: 9 },
    { name: "ধ্বনি, বর্ণ, সন্ধি", videos: 7 },
    { name: "শব্দ গঠন", videos: 6 },
    { name: "পদ প্রকরণ", videos: 8 },
    { name: "বাক্য", videos: 6 },
    { name: "নির্মিত (পত্রলেখা, রচনা)", videos: 5 },
  ],
  "বাংলা ১ম পত্র": [
    { name: "গদ্য", videos: 14 },
    { name: "পদ্য", videos: 16 },
    { name: "উপন্যাস", videos: 7 },
    { name: "নাটক", videos: 6 },
  ],
  "বাংলা ২য় পত্র": [
    { name: "ব্যাকরণ অংশ", videos: 11 },
    { name: "নির্মিত অংশ — প্রবন্ধ", videos: 5 },
    { name: "নির্মিত অংশ — পত্র ও দরখাস্ত", videos: 4 },
    { name: "নির্মিত অংশ — সারমর্ম", videos: 4 },
  ],

  "ইংরেজি প্রথম পত্র": [
    { name: "Seen Passage", videos: 8 },
    { name: "Unseen Passage", videos: 6 },
    { name: "Cloze Test", videos: 5 },
    { name: "Flow Chart, Summary", videos: 5 },
    { name: "Rearranging", videos: 4 },
  ],
  "ইংরেজি দ্বিতীয় পত্র": [
    { name: "Right Form of Verbs", videos: 6 },
    { name: "Article, Preposition", videos: 5 },
    { name: "Voice, Narration", videos: 6 },
    { name: "Tag Question, Transformation", videos: 5 },
    { name: "Composition & Letter", videos: 5 },
  ],
  "ইংরেজি ১ম পত্র": [
    { name: "Seen Passage", videos: 10 },
    { name: "Unseen Passage", videos: 8 },
    { name: "Summary & Flow Chart", videos: 6 },
    { name: "Cloze Test (with/without clues)", videos: 6 },
  ],
  "ইংরেজি ২য় পত্র": [
    { name: "Grammar — Tense, Verb forms", videos: 9 },
    { name: "Article, Preposition, Modifier", videos: 7 },
    { name: "Voice, Narration", videos: 6 },
    { name: "Transformation of Sentences", videos: 5 },
    { name: "Writing — Application, CV, Paragraph", videos: 6 },
  ],

  // ── ICT ──
  "তথ্য ও যোগাযোগ প্রযুক্তি": [
    { name: "তথ্য ও যোগাযোগ প্রযুক্তি ও বিশ্ব", videos: 5 },
    { name: "যোগাযোগ ব্যবস্থা ও নেটওয়ার্কিং", videos: 7 },
    { name: "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস", videos: 8 },
    { name: "ওয়েব ডিজাইন (HTML)", videos: 6 },
    { name: "প্রোগ্রামিং ভাষা (C)", videos: 9 },
    { name: "ডাটাবেজ ম্যানেজমেন্ট সিস্টেম", videos: 6 },
  ],

  // ── General studies (SSC class 6–10) ──
  "বাংলাদেশ ও বিশ্বপরিচয়": [
    { name: "বাংলাদেশের ইতিহাস", videos: 7 },
    { name: "বাংলাদেশের সংবিধান", videos: 5 },
    { name: "বাংলাদেশের প্রশাসন ও রাজনীতি", videos: 5 },
    { name: "বিশ্ব রাজনীতি ও আন্তর্জাতিক সম্পর্ক", videos: 6 },
    { name: "অর্থনীতি ও উন্নয়ন", videos: 5 },
  ],
  "ইসলাম ধর্ম ও নৈতিক শিক্ষা": [
    { name: "আকাইদ ও নৈতিক জীবন", videos: 4 },
    { name: "শরিয়াহ", videos: 5 },
    { name: "ইসলামের ইতিহাস", videos: 5 },
    { name: "আখলাক", videos: 4 },
    { name: "কুরআন ও হাদিস", videos: 5 },
  ],

  // ── HSC humanities ──
  "বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা": [
    { name: "বাংলার প্রাচীন যুগ", videos: 6 },
    { name: "মধ্যযুগের বাংলা", videos: 7 },
    { name: "ব্রিটিশ আমল", videos: 8 },
    { name: "পাকিস্তান আমল ও ভাষা আন্দোলন", videos: 6 },
    { name: "মুক্তিযুদ্ধ", videos: 9 },
    { name: "বিশ্বসভ্যতা", videos: 7 },
  ],
  "ইসলামের ইতিহাস ও সংস্কৃতি": [
    { name: "ইসলাম-পূর্ব আরব", videos: 5 },
    { name: "নবী মুহাম্মদ (সা.) এর জীবন", videos: 8 },
    { name: "খিলাফতে রাশিদা", videos: 7 },
    { name: "উমাইয়া ও আব্বাসীয় খিলাফত", videos: 7 },
    { name: "ভারতে মুসলিম শাসন", videos: 6 },
  ],
  "পৌরনীতি ও সুশাসন": [
    { name: "পৌরনীতির মৌলিক ধারণা", videos: 5 },
    { name: "নাগরিক ও রাষ্ট্র", videos: 6 },
    { name: "সরকার ব্যবস্থা", videos: 6 },
    { name: "সংবিধান ও বাংলাদেশ", videos: 5 },
    { name: "সুশাসন", videos: 5 },
  ],
  "সমাজবিজ্ঞান": [
    { name: "সমাজবিজ্ঞানের পরিচয়", videos: 4 },
    { name: "সমাজ ও সংস্কৃতি", videos: 6 },
    { name: "পরিবার, বিবাহ ও জাতি", videos: 6 },
    { name: "সামাজিক প্রতিষ্ঠান ও পরিবর্তন", videos: 6 },
    { name: "সামাজিক স্তরবিন্যাস", videos: 5 },
  ],
  "অর্থনীতি": [
    { name: "অর্থনীতির পরিচয়", videos: 4 },
    { name: "অর্থনৈতিক সমস্যা ও সমাধান", videos: 5 },
    { name: "চাহিদা, যোগান ও ভারসাম্য", videos: 7 },
    { name: "উৎপাদন ও ব্যয়", videos: 6 },
    { name: "মুদ্রা ও ব্যাংকিং", videos: 6 },
    { name: "বাংলাদেশের অর্থনীতি", videos: 5 },
  ],

  // ── HSC commerce ──
  "ব্যবসায় সংগঠন ও ব্যবস্থাপনা": [
    { name: "ব্যবসায়ের পরিচয়", videos: 4 },
    { name: "একমালিকানা ও অংশীদারি", videos: 5 },
    { name: "যৌথ মূলধনী কোম্পানি", videos: 7 },
    { name: "সমবায় সমিতি ও রাষ্ট্রীয় ব্যবসায়", videos: 5 },
    { name: "ব্যবস্থাপনার নীতিমালা", videos: 6 },
    { name: "পরিকল্পনা, সংগঠন, নেতৃত্ব", videos: 7 },
  ],
  "হিসাববিজ্ঞান ১ম পত্র": [
    { name: "হিসাববিজ্ঞান পরিচিতি", videos: 5 },
    { name: "দু'তরফা দাখিলা ও জাবেদা", videos: 8 },
    { name: "খতিয়ান ও রেওয়ামিল", videos: 7 },
    { name: "নগদান বই", videos: 6 },
    { name: "চূড়ান্ত হিসাব", videos: 9 },
  ],
  "হিসাববিজ্ঞান ২য় পত্র": [
    { name: "অংশীদারি ব্যবসায়ের হিসাব", videos: 8 },
    { name: "কোম্পানির হিসাব", videos: 9 },
    { name: "শাখা ও বিভাগীয় হিসাব", videos: 6 },
    { name: "অলাভজনক প্রতিষ্ঠানের হিসাব", videos: 5 },
    { name: "আর্থিক বিবরণী বিশ্লেষণ", videos: 7 },
  ],
  "ফিন্যান্স, ব্যাংকিং ও বিমা": [
    { name: "অর্থায়নের ধারণা", videos: 4 },
    { name: "অর্থের সময়মূল্য", videos: 6 },
    { name: "মূলধন বাজেটিং", videos: 7 },
    { name: "ব্যাংকিং পরিচিতি", videos: 5 },
    { name: "বিমা", videos: 5 },
  ],
  "উৎপাদন ব্যবস্থাপনা ও বিপণন": [
    { name: "উৎপাদন ব্যবস্থাপনা পরিচিতি", videos: 4 },
    { name: "পণ্য পরিকল্পনা ও ডিজাইন", videos: 5 },
    { name: "মান নিয়ন্ত্রণ", videos: 5 },
    { name: "বিপণন পরিচিতি", videos: 5 },
    { name: "বিপণন মিশ্রণ", videos: 7 },
  ],
};

// Fallback for any subject not in the map above
export const DEFAULT_CHAPTERS: Chapter[] = [
  { name: "অধ্যায় ১", videos: 6 },
  { name: "অধ্যায় ২", videos: 7 },
  { name: "অধ্যায় ৩", videos: 5 },
  { name: "অধ্যায় ৪", videos: 6 },
];

export function getChapters(subject: string): Chapter[] {
  return CHAPTERS[subject] ?? DEFAULT_CHAPTERS;
}

export function totalVideos(subject: string): number {
  return getChapters(subject).reduce((sum, ch) => sum + ch.videos, 0);
}
