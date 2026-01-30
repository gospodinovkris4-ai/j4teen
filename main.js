/*********************************
 * J4Teen – MAIN.JS (FINAL STABLE)
 * ONLY: MENU + LANGUAGES
 *********************************/

document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     1️⃣ MENU – ЕДИНСТВЕНО МЯСТО
  ============================= */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", e => {
      e.stopPropagation();
      menu.classList.toggle("show");
    });

    document.addEventListener("click", e => {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  }

  /* =============================
     2️⃣ TRANSLATIONS – ПЪЛНИ
  ============================= */
  const translations = {
    bg: {
      siteTitle: "J4Teen",

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
      mobilePost: "+ Публикувай обява",

      /* CATEGORIES */
      catDog: "Разходка на куче",
      catDogSub: "Почасова помощ",
      catHome: "Помощ в дома",
      catHomeSub: "Почистване, грижа",
      catDelivery: "Доставки",
      catDeliverySub: "Храна, пратки",

      catAnimals: "Грижа за животни",
      catAnimalsSub: "Разходка, гледане",
      catAgriculture: "Земеделие",
      catAgricultureSub: "Бране, сезонна работа",
      catPhysical: "Физическа работа",
      catPhysicalSub: "Носене, склад",
      catFood: "Заведения",
      catFoodSub: "Сервитьор, бар",
      catCare: "Грижа за хора",
      catCareSub: "Деца, възрастни",
      catHourly: "Почасова помощ",
      catHourlySub: "Кратки задачи",

      /* COMPANIES */
      companiesTitle: "За компании",
      companiesPost: "Публикувай обяви",
      companiesPostSub: "Намери млади хора бързо.",
      companiesReach: "Достигни младежи",
      companiesReachSub: "Точната аудитория.",
      companiesPlans: "Гъвкави планове",
      companiesPlansSub: "Абонаменти според нуждите.",
      seePlans: "Виж планове",

      /* NEWS */
      newsTitle: "Актуално",
      newsSubtitle: "Новини и съвети за младежи",
      allNews: "Всички новини",

      /* POST */
      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява за минута",
      postBtn: "Публикувай обява",

      /* JOB */
      jobChatBtn: "Пиши в чата"
    },

    en: {
      siteTitle: "J4Teen",

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
      mobilePost: "+ Post a job",

      catDog: "Dog walking",
      catDogSub: "Hourly help",
      catHome: "Home help",
      catHomeSub: "Cleaning, care",
      catDelivery: "Delivery",
      catDeliverySub: "Food, packages",

      catAnimals: "Animal care",
      catAnimalsSub: "Walking, sitting",
      catAgriculture: "Agriculture",
      catAgricultureSub: "Harvest, seasonal work",
      catPhysical: "Physical work",
      catPhysicalSub: "Lifting, warehouse",
      catFood: "Food & hospitality",
      catFoodSub: "Waiter, bar",
      catCare: "People care",
      catCareSub: "Children, elderly",
      catHourly: "Hourly help",
      catHourlySub: "Short tasks",

      companiesTitle: "For companies",
      companiesPost: "Post job ads",
      companiesPostSub: "Find young people fast.",
      companiesReach: "Reach young people",
      companiesReachSub: "The right audience.",
      companiesPlans: "Flexible plans",
      companiesPlansSub: "Subscriptions that fit your needs.",
      seePlans: "See plans",

      newsTitle: "Updates",
      newsSubtitle: "News and tips for youth",
      allNews: "All news",

      postTitle: "I'm hiring",
      postSubtitle: "Post a job in one minute",
      postBtn: "Post job",

      jobChatBtn: "Chat"
    }
  };

  /* =============================
     3️⃣ APPLY LANGUAGE
  ============================= */
  let currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    const t = translations[currentLang];

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      if (t[key]) el.textContent = t[key];
    });

    const titleEl = document.querySelector("title[data-key]");
    if (titleEl && t[titleEl.dataset.key]) {
      titleEl.textContent = t[titleEl.dataset.key];
    }

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
