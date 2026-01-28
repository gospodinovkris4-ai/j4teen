// news-feed.js
// J4Teen Internal News Feed (MVP → Backend-ready)

const J4TEEN_NEWS_POOL = [
  {
    id: "youth-jobs",
    category: "jobs",
    title_bg: "Младежката заетост в България расте",
    title_en: "Youth employment in Bulgaria is rising",
    text_bg: "Все повече млади хора намират почасова и гъвкава работа според последни наблюдения на пазара.",
    text_en: "More young people are finding part-time and flexible jobs according to recent market observations."
  },
  {
    id: "part-time-trend",
    category: "jobs",
    title_bg: "Почасовата работа е новият стандарт",
    title_en: "Part-time work becomes the new standard",
    text_bg: "Гъвкавите работни модели са предпочитани от ученици и студенти.",
    text_en: "Flexible work models are preferred by students and young people."
  },
  {
    id: "employers-youth",
    category: "business",
    title_bg: "Работодателите търсят млади кадри",
    title_en: "Employers are looking for young talent",
    text_bg: "Бизнесът все по-често инвестира в млади служители и стажанти.",
    text_en: "Businesses increasingly invest in young employees and interns."
  },
  {
    id: "skills-2026",
    category: "skills",
    title_bg: "Най-търсените умения през 2026",
    title_en: "Most demanded skills in 2026",
    text_bg: "Комуникация, адаптивност и базови дигитални умения са ключови.",
    text_en: "Communication, adaptability and basic digital skills are key."
  },
  {
    id: "first-job",
    category: "career",
    title_bg: "Как да намериш първата си работа",
    title_en: "How to get your first job",
    text_bg: "Практични съвети за младежи без предишен опит.",
    text_en: "Practical advice for young people with no prior experience."
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
