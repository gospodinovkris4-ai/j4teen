document.addEventListener("DOMContentLoaded", function () {

  /* ================= MENU ================= */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
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

      /* ===== CATEGORIES ===== */
      catAnimals: "Грижа за животни",
      catAnimalsSub: "Разходка, гледане",

      catHome: "Домашна помощ",
      catHomeSub: "Почистване, помощник",

      catAgriculture: "Земеделие",
      catAgricultureSub: "Бране, сезонна работа",

      catPhysical: "Физическа работа",
      catPhysicalSub: "Носене, склад",

      catFood: "Заведения",
      catFoodSub: "Сервитьор, бар",

      catCare: "Грижа за хора",
      catCareSub: "Деца, възрастни",

      catDelivery: "Доставки",
      catDeliverySub: "Храна, пратки",

      catHourly: "Почасова помощ",
      catHourlySub: "Кратки задачи",

      /* ===== NEWS ===== */
      newsTitle: "Актуално 2026",

      news1: "Как да си намериш почасова работа",
      news1Sub: "Практични съвети",

      news2: "Търсени умения при младежи",
      news2Sub: "Какво търсят компаниите",

      allNews: "Всички новини",

      /* ===== COMMON ===== */
      categoriesTitle: "Всички категории",
      categoriesSubtitle: "Избери област и разгледай обявите"
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

      /* ===== CATEGORIES ===== */
      catAnimals: "Animal care",
      catAnimalsSub: "Walking, sitting",

      catHome: "Home help",
      catHomeSub: "Cleaning, assistance",

      catAgriculture: "Agriculture",
      catAgricultureSub: "Harvest, seasonal work",

      catPhysical: "Physical work",
      catPhysicalSub: "Lifting, warehouse",

      catFood: "Food & hospitality",
      catFoodSub: "Waiter, bar",

      catCare: "People care",
      catCareSub: "Children, elderly",

      catDelivery: "Delivery",
      catDeliverySub: "Food, packages",

      catHourly: "Hourly help",
      catHourlySub: "Short tasks",

      /* ===== NEWS ===== */
      newsTitle: "Updates 2026",

      news1: "How to find part-time work",
      news1Sub: "Practical tips",

      news2: "In-demand youth skills",
      news2Sub: "What companies look for",

      allNews: "All news",

      /* ===== COMMON ===== */
      categoriesTitle: "All categories",
      categoriesSubtitle: "Choose an area and browse jobs"
    }
  };

  let currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    const t = translations[currentLang];

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (t[key]) el.textContent = t[key];
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
