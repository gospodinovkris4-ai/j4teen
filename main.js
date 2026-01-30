/*******************************
 * J4Teen – MAIN.JS (STABLE)
 * ONLY: MENU + LANGUAGES
 *******************************/

document.addEventListener("DOMContentLoaded", function () {

  /* =============================
     MENU (BURGER) – СТАБИЛНО
  ============================= */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  }

  /* =============================
     TRANSLATIONS – ПЪЛНИ
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

      companiesTitle: "За компании",
      companiesPost: "Публикувай обяви",
      companiesPostSub: "Намери млади хора бързо.",
      companiesReach: "Достигни младежи",
      companiesReachSub: "Точната аудитория.",
      companiesPlans: "Гъвкави планове",
      companiesPlansSub: "Абонаменти според нуждите.",
      seePlans: "Виж планове",

      catDog: "Разходка на куче",
      catDogSub: "Почасова помощ",
      catHome: "Помощ в дома",
      catHomeSub: "Почистване, грижа",
      catDelivery: "Доставки",
      catDeliverySub: "Храна, пратки",

      categoriesPageTitle: "Категории – J4Teen",
      categoriesTitle: "Всички категории",
      categoriesSubtitle: "Избери област и разгледай обявите",

      jobsPageTitle: "Обяви – J4Teen",
      jobsTitle: "Искам да работя",
      jobsSubtitle: "Всички налични обяви",

      newsPageTitle: "Новини – J4Teen",
      newsTitle: "Актуално",
      newsSubtitle: "Новини и съвети за младежи",
      allNews: "Всички новини",

      pricingPageTitle: "Абонаментни планове – J4Teen",
      pricingHero: "Планове за компании",
      pricingHeroSub: "Избери план, който ти пасва",

      postPageTitle: "Публикувай обява – J4Teen",
      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява за минута",
      postBtn: "Публикувай обява"
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

      companiesTitle: "For companies",
      companiesPost: "Post job ads",
      companiesPostSub: "Find young people fast.",
      companiesReach: "Reach young people",
      companiesReachSub: "The right audience.",
      companiesPlans: "Flexible plans",
      companiesPlansSub: "Subscriptions that fit your needs.",
      seePlans: "See plans",

      catDog: "Dog walking",
      catDogSub: "Hourly help",
      catHome: "Home help",
      catHomeSub: "Cleaning, care",
      catDelivery: "Delivery",
      catDeliverySub: "Food, packages",

      categoriesPageTitle: "Categories – J4Teen",
      categoriesTitle: "All categories",
      categoriesSubtitle: "Choose an area and browse jobs",

      jobsPageTitle: "Jobs – J4Teen",
      jobsTitle: "I want to work",
      jobsSubtitle: "All available jobs",

      newsPageTitle: "News – J4Teen",
      newsTitle: "Updates",
      newsSubtitle: "News and tips for youth",
      allNews: "All news",

      pricingPageTitle: "Pricing plans – J4Teen",
      pricingHero: "Plans for companies",
      pricingHeroSub: "Choose a plan that fits you",

      postPageTitle: "Post a job – J4Teen",
      postTitle: "I'm hiring",
      postSubtitle: "Post a job in one minute",
      postBtn: "Post job"
    }
  };

  let currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    const t = translations[currentLang];

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
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
