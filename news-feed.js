// news-feed.js
const J4TEEN_NEWS = [
  {
    id: 1,
    sector: "jobs",
    date: new Date().toISOString(),
    title_bg: "Младежката заетост в България расте през 2026",
    title_en: "Youth employment in Bulgaria is rising in 2026",
    text_bg: "Все повече млади хора намират почасова и сезонна работа според последни анализи.",
    text_en: "More young people are finding part-time and seasonal jobs according to recent studies."
  },
  {
    id: 2,
    sector: "part-time",
    date: new Date(Date.now() - 86400000).toISOString(), // вчера
    title_bg: "Почасовата работа става все по-популярна",
    title_en: "Part-time work is becoming more popular",
    text_bg: "Гъвкавите работни позиции са предпочитани от ученици и студенти.",
    text_en: "Flexible jobs are preferred by students and young people."
  },
  {
    id: 3,
    sector: "youth",
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
    title_bg: "Как ученици съчетават училище и работа",
    title_en: "How students balance school and work",
    text_bg: "Все повече младежи намират баланс между образование и доходи.",
    text_en: "More youths are finding balance between education and income."
  },
  {
    id: 4,
    sector: "jobs",
    date: new Date(Date.now() - 3 * 86400000).toISOString(),
    title_bg: "Работа без опит – възможно ли е?",
    title_en: "Jobs without experience – is it possible?",
    text_bg: "Много работодатели вече търсят мотивация, а не опит.",
    text_en: "Many employers now value motivation over experience."
  }
];

