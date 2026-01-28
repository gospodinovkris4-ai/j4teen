// news-feed.js
// J4Teen Internal News Feed (MVP → Backend-ready)

const J4TEEN_NEWS_POOL = [
  {
    id: "youth-jobs",
    category: "jobs",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title_bg: "Младежката заетост в България расте",
    title_en: "Youth employment in Bulgaria is rising",
    text_bg: "Все повече млади хора намират почасова и гъвкава работа.",
    text_en: "More young people are finding part-time and flexible jobs.",
    content_bg: `
      <p>Младежката заетост в България бележи стабилен ръст през последните години.
      Все повече ученици и студенти избират почасова работа, която им позволява
      да съчетават образование и доход.</p>

      <p>Работодателите започват да предлагат гъвкави графици,
      краткосрочни ангажименти и дистанционни възможности.</p>

      <p>Тази тенденция се очаква да се засили през 2026 година.</p>
    `,
    content_en: `
      <p>Youth employment in Bulgaria has been steadily increasing.
      More students are choosing part-time jobs that allow flexibility.</p>

      <p>Employers are adapting by offering flexible schedules and short-term roles.</p>

      <p>This trend is expected to grow throughout 2026.</p>
    `
  },

  {
    id: "part-time-trend",
    category: "jobs",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    title_bg: "Почасовата работа е новият стандарт",
    title_en: "Part-time work becomes the new standard",
    text_bg: "Гъвкавите модели се предпочитат от ученици и студенти.",
    text_en: "Flexible work models are preferred by students.",
    content_bg: `
      <p>Почасовата работа вече не е изключение, а стандарт.
      Младите хора търсят свобода и баланс.</p>

      <p>Това води до промяна в пазара на труда,
      особено в сфери като услуги, IT и логистика.</p>
    `,
    content_en: `
      <p>Part-time work is no longer an exception but a norm.</p>

      <p>Young people value flexibility and balance.</p>
    `
  },

  {
    id: "employers-youth",
    category: "business",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    title_bg: "Работодателите инвестират в млади кадри",
    title_en: "Employers invest in young talent",
    text_bg: "Компаниите все по-често наемат млади служители.",
    text_en: "Companies increasingly hire young employees.",
    content_bg: `
      <p>Все повече компании в България инвестират в млади кадри.</p>

      <p>Програмите за стажове и обучение стават основен инструмент.</p>
    `,
    content_en: `
      <p>More companies are investing in young talent.</p>

      <p>Internship and training programs are becoming essential.</p>
    `
  },

  {
    id: "skills-2026",
    category: "skills",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title_bg: "Най-търсените умения през 2026",
    title_en: "Most demanded skills in 2026",
    text_bg: "Комуникация, адаптивност и дигитални умения.",
    text_en: "Communication, adaptability and digital skills.",
    content_bg: `
      <p>Пазарът на труда изисква нови умения.</p>

      <p>Комуникацията, адаптивността и дигиталната грамотност
      са сред най-важните качества.</p>
    `,
    content_en: `
      <p>The labor market demands new skills.</p>

      <p>Communication and adaptability are key.</p>
    `
  },

  {
    id: "first-job",
    category: "career",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    title_bg: "Как да намериш първата си работа",
    title_en: "How to get your first job",
    text_bg: "Практични съвети за младежи без опит.",
    text_en: "Practical tips for young people without experience.",
    content_bg: `
      <p>Първата работа е предизвикателство.</p>

      <p>Важно е да започнеш с малки стъпки
      и да трупаш опит постепенно.</p>
    `,
    content_en: `
      <p>Your first job is a challenge.</p>

      <p>Start small and build experience.</p>
    `
  }
];

// 👉 deterministic daily rotation (НЕ ПИПАНО)
function getDailyNews(count = 3) {
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  const shuffled = [...J4TEEN_NEWS_POOL]
    .map((item, i) => ({ item, key: (seed + i * 31) % 997 }))
    .sort((a, b) => a.key - b.key)
    .map(x => x.item);

  return shuffled.slice(0, count).map(n => ({
    ...n,
    date: today.toISOString()
  }));
}

// 🌍 EXPOSE (НЕ ПИПАНО)
window.J4TEEN_DAILY_NEWS = getDailyNews;
window.J4TEEN_NEWS = J4TEEN_NEWS_POOL;
