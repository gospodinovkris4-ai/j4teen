// news-feed.js
// J4Teen Internal News Feed (MVP → Backend-ready)

const J4TEEN_NEWS_POOL = [
  {
    id: "youth-jobs",
    category: "jobs",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title_bg: "Младежката заетост в България расте",
    title_en: "Youth employment in Bulgaria is rising",
    text_bg: "Все повече млади хора намират почасова и гъвкава работа според пазара.",
    text_en: "More young people are finding part-time and flexible jobs."
  },
  {
    id: "part-time-trend",
    category: "jobs",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    title_bg: "Почасовата работа е новият стандарт",
    title_en: "Part-time work becomes the new standard",
    text_bg: "Гъвкавите модели се предпочитат от ученици и студенти.",
    text_en: "Flexible work models are preferred by students."
  },
  {
    id: "employers-youth",
    category: "business",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    title_bg: "Работодателите инвестират в млади кадри",
    title_en: "Employers invest in young talent",
    text_bg: "Компаниите все по-често наемат млади служители.",
    text_en: "Companies increasingly hire young employees."
  },
  {
    id: "skills-2026",
    category: "skills",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title_bg: "Най-търсените умения през 2026",
    title_en: "Most demanded skills in 2026",
    text_bg: "Комуникация, адаптивност и дигитални умения.",
    text_en: "Communication, adaptability and digital skills."
  },
  {
    id: "first-job",
    category: "career",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    title_bg: "Как да намериш първата си работа",
    title_en: "How to get your first job",
    text_bg: "Практични съвети за младежи без опит.",
    text_en: "Practical tips for young people without experience."
  }
];





// 👉 deterministic daily rotation
function getDailyNews(count = 3) {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  const shuffled = [...J4TEEN_NEWS_POOL]
    .map((item, i) => ({ item, key: (seed + i * 31) % 997 }))
    .sort((a, b) => a.key - b.key)
    .map(x => x.item);

  return shuffled.slice(0, count).map(n => ({
    ...n,
    date: today.toISOString()
  }));
}

// expose globally
window.J4TEEN_DAILY_NEWS = getDailyNews;
