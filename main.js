document.addEventListener("DOMContentLoaded", function () {

  /* ================= MENU ================= */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  /* ================= DEMO JOBS ================= */
  const DEMO_JOBS = [
    { title: "Бране на череши", desc: "Сезонна работа за 5 дни", price: "80 лв/ден", category: "agriculture" },
    { title: "Помощник в оранжерия", desc: "Поливане и подреждане", price: "60 лв/ден", category: "agriculture" },

    { title: "Разходка на куче", desc: "Сутрин и вечер", price: "15 лв", category: "animals" },
    { title: "Гледане на котка", desc: "2 пъти на ден", price: "20 лв", category: "animals" },

    { title: "Почистване на апартамент", desc: "Еднократно почистване", price: "70 лв", category: "home" },
    { title: "Домашен помощник", desc: "2 часа дневно", price: "12 лв/час", category: "home" },

    { title: "Помощник в склад", desc: "Подреждане на стока", price: "10 лв/час", category: "physical" },
    { title: "Носене на мебели", desc: "Кратка задача", price: "50 лв", category: "physical" },

    { title: "Сервитьор за събитие", desc: "Сватба през уикенда", price: "100 лв", category: "food" },
    { title: "Бар помощник", desc: "Вечерна смяна", price: "12 лв/час", category: "food" },

    { title: "Гледане на дете", desc: "След училище", price: "10 лв/час", category: "care" },
    { title: "Помощ за възрастен човек", desc: "Пазаруване и компания", price: "40 лв", category: "care" },

    { title: "Доставка на храна", desc: "Кратки курсове", price: "8 лв/доставка", category: "delivery" },
    { title: "Доставка на пратки", desc: "Собствен транспорт", price: "15 лв", category: "delivery" },

    { title: "Монтаж на рафтове", desc: "Домашна задача", price: "30 лв", category: "hourly" },
    { title: "Почистване на мазе", desc: "Еднократна помощ", price: "40 лв", category: "hourly" }
  ];

  const existingJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
  if (existingJobs.length === 0) {
    localStorage.setItem("jobs", JSON.stringify(DEMO_JOBS));
  }

  /* ================= TRANSLATIONS ================= */
  const translations = {
    bg: {
      home: "Начало",
      jobs: "Обяви",
      categories: "Категории",
      newsMenu: "Новини",
      plans: "Планове",
      post: "Публикувай",
      chat: "Чат",

      heroTitle: "Намери почасова работа или помощ наблизо",
      heroSubtitle: "J4Teen – общност и обяви за младежи",
      heroWork: "Искам да работя",
      heroHire: "Търся човек за работа",

      tabWork: "Работа",
      tabCompanies: "Компании",
      tabNews: "Новини",

      popularCats: "Популярни категории",
      allCategories: "Виж всички категории",

      jobsPageTitle: "Обяви – J4Teen",
      jobsTitle: "Искам да работя",
      jobsSubtitle: "Всички налични обяви",
      jobsEmpty: "Няма публикувани обяви.",

      categorySubtitle: "Налични обяви",
      noJobs: "Няма обяви в тази категория.",

      chatPageTitle: "Чат – J4Teen",
      chatTitle: "Чат",
      chatSubtitle: "Свържи се директно",
      chatNamePh: "Име",
      chatMsgPh: "Съобщение",
      chatSend: "Изпрати"
    },

    en: {
      home: "Home",
      jobs: "Jobs",
      categories: "Categories",
      newsMenu: "News",
      plans: "Plans",
      post: "Post",
      chat: "Chat",

      heroTitle: "Find part-time work or help nearby",
      heroSubtitle: "J4Teen – jobs and community for youth",
      heroWork: "I want to work",
      heroHire: "I'm hiring",

      tabWork: "Work",
      tabCompanies: "Companies",
      tabNews: "News",

      popularCats: "Popular categories",
      allCategories: "View all categories",

      jobsPageTitle: "Jobs – J4Teen",
      jobsTitle: "I want to work",
      jobsSubtitle: "All available jobs",
      jobsEmpty: "No jobs available.",

      categorySubtitle: "Available jobs",
      noJobs: "No jobs in this category.",

      chatPageTitle: "Chat – J4Teen",
      chatTitle: "Chat",
      chatSubtitle: "Connect directly",
      chatNamePh: "Name",
      chatMsgPh: "Message",
      chatSend: "Send"
    }
  };

  let currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    const t = translations[currentLang];

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
      const key = el.getAttribute("data-key-placeholder");
      if (t[key]) el.placeholder = t[key];
    });

    const btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = currentLang === "bg" ? "EN" : "BG";
  }

  applyLang();

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "bg" ? "en" : "bg";
      localStorage.setItem("lang", currentLang);
      applyLang();
    });
  }

});
