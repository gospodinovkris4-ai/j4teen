/*********************************
 * J4Teen – MAIN.JS (FINAL, FIXED)
 * MENU + LANGUAGES (GLOBAL)
 *********************************/

document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     MENU (STABLE)
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
     TRANSLATIONS (FULL + CHAT)
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

      jobsPageTitle: "Обяви – J4Teen",
      jobsTitle: "Искам да работя",
      jobsSubtitle: "Всички налични обяви",

      categoriesPageTitle: "Категории – J4Teen",
      categoriesTitle: "Всички категории",
      categoriesSubtitle: "Избери област и разгледай обявите",

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

      companiesTitle: "За компании",
      companiesPost: "Публикувай обяви",
      companiesPostSub: "Намери млади хора бързо.",
      companiesReach: "Достигни младежи",
      companiesReachSub: "Точната аудитория.",
      companiesPlans: "Гъвкави планове",
      companiesPlansSub: "Абонаменти според нуждите.",
      seePlans: "Виж планове",

      newsTitle: "Актуално",
      newsSubtitle: "Новини и съвети за младежи",
      allNews: "Всички новини",

      postPageTitle: "Публикувай обява – J4Teen",
      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява за минута",
      postBtn: "Публикувай обява",
      jobTitlePh: "Заглавие на обявата",
      jobDescPh: "Описание",
      jobPricePh: "Цена (напр. 15 лв)",
      selectCategory: "Избери категория",

      pricingTitle: "Абонаментни планове – J4Teen",
      pricingHero: "Планове за компании",
      pricingHeroSub: "Избери план, който ти пасва",
      pricingBasic: "Basic",
      pricingBasicSub: "За малки нужди",
      pricingPro: "Pro",
      pricingProSub: "По-добра видимост",
      pricingPremium: "Premium",
      pricingPremiumSub: "Най-добрият избор",
      pricingChoose: "Избери",

      pricingBasicFeat1: "✔️ До 3 обяви",
      pricingBasicFeat2: "✔️ 7 дни активни",
      pricingBasicFeat3: "✔️ Видима за всички",
      pricingProFeat1: "✔️ До 5 обяви",
      pricingProFeat2: "✔️ 15 дни активни",
      pricingProFeat3: "✔️ По-добро позициониране",
      pricingPremiumFeat1: "✔️ Неограничени обяви",
      pricingPremiumFeat2: "✔️ 30 дни активни",
      pricingPremiumFeat3: "✔️ Топ позиция",

      /* ✅ CHAT – ДОБАВЕНО */
      chatPageTitle: "Чат – J4Teen",
      chatTitle: "Чат",
      chatSubtitle: "Свържи се директно",
      chatNamePh: "Име",
      chatMsgPh: "Съобщение",
      chatSend: "Изпрати",
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

      jobsPageTitle: "Jobs – J4Teen",
      jobsTitle: "I want to work",
      jobsSubtitle: "All available jobs",

      categoriesPageTitle: "Categories – J4Teen",
      categoriesTitle: "All categories",
      categoriesSubtitle: "Choose an area and browse jobs",

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

      postPageTitle: "Post a job – J4Teen",
      postTitle: "I'm hiring",
      postSubtitle: "Post a job in one minute",
      postBtn: "Post job",
      jobTitlePh: "Job title",
      jobDescPh: "Description",
      jobPricePh: "Price (e.g. 15 €)",
      selectCategory: "Select category",

      pricingTitle: "Pricing plans – J4Teen",
      pricingHero: "Plans for companies",
      pricingHeroSub: "Choose a plan that fits you",
      pricingBasic: "Basic",
      pricingBasicSub: "For small needs",
      pricingPro: "Pro",
      pricingProSub: "Better visibility",
      pricingPremium: "Premium",
      pricingPremiumSub: "Best choice",
      pricingChoose: "Choose",

      pricingBasicFeat1: "✔️ Up to 3 listings",
      pricingBasicFeat2: "✔️ Active for 7 days",
      pricingBasicFeat3: "✔️ Visible to everyone",
      pricingProFeat1: "✔️ Up to 5 listings",
      pricingProFeat2: "✔️ Active for 15 days",
      pricingProFeat3: "✔️ Better positioning",
      pricingPremiumFeat1: "✔️ Unlimited listings",
      pricingPremiumFeat2: "✔️ Active for 30 days",
      pricingPremiumFeat3: "✔️ Top placement",

      /* ✅ CHAT – ДОБАВЕНО */
      chatPageTitle: "Chat – J4Teen",
      chatTitle: "Chat",
      chatSubtitle: "Connect directly",
      chatNamePh: "Name",
      chatMsgPh: "Message",
      chatSend: "Send",
      jobChatBtn: "Chat"
    }
  };

  /* =============================
     APPLY LANGUAGE
  ============================= */
  let currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    const t = translations[currentLang];

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
      const key = el.dataset.keyPlaceholder;
      if (t[key]) el.placeholder = t[key];
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
