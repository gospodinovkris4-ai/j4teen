document.addEventListener("DOMContentLoaded", function () {

  /* MENU */
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  /* ================= LANGUAGES ================= */

  var translations = {
    bg: {
      home: "Начало",
      jobs: "Обяви",
      post: "Публикувай",
      chat: "Чат",

      heroTitle: "Намери почасова работа или помощ наблизо",
      heroSubtitle: "J4Teen – общност и обяви за младежи",
      heroWork: "Искам да работя",
      heroHire: "Търся човек за работа",

      /* TABS */
      tabWork: "Работа",
      tabCompanies: "Компании",
      tabNews: "Новини",

      /* CATEGORIES */
      popularCats: "Популярни категории",
      allCategories: "Виж всички категории",

      catDog: "Разходка на куче",
      catDogSub: "Почасова помощ",
      catHome: "Помощ в дома",
      catHomeSub: "Почистване, грижа",
      catDelivery: "Доставки",
      catDeliverySub: "Храна, пратки",

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
      newsTitle: "Актуално 2026",
      news1: "Как да си намериш почасова работа",
      news1Sub: "Практични съвети",
      news2: "Търсени умения при младежи",
      news2Sub: "Какво търсят компаниите",
      allNews: "Всички новини"
    },

    en: {
      home: "Home",
      jobs: "Jobs",
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

      catDog: "Dog walking",
      catDogSub: "Hourly help",
      catHome: "Home help",
      catHomeSub: "Cleaning, care",
      catDelivery: "Delivery",
      catDeliverySub: "Food, packages",

      companiesTitle: "For companies",
      companiesPost: "Post job ads",
      companiesPostSub: "Find young people fast.",
      companiesReach: "Reach youth",
      companiesReachSub: "The right audience.",
      companiesPlans: "Flexible plans",
      companiesPlansSub: "Subscriptions that fit you.",
      seePlans: "See plans",

      newsTitle: "Updates 2026",
      news1: "How to find part-time work",
      news1Sub: "Practical tips",
      news2: "In-demand youth skills",
      news2Sub: "What companies look for",
      allNews: "All news"
    }
  };

  var currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    var t = translations[currentLang];
    document.querySelectorAll("[data-key]").forEach(el => {
      var key = el.getAttribute("data-key");
      if (t[key]) el.textContent = t[key];
    });

    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = currentLang === "bg" ? "EN" : "BG";
  }

  applyLang();

  var langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      currentLang = currentLang === "bg" ? "en" : "bg";
      localStorage.setItem("lang", currentLang);
      applyLang();
    });
  }

});
