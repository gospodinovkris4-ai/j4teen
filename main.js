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

      /* CATEGORIES PAGE */
      categoriesPageTitle: "Категории – J4Teen",
      categoriesTitle: "Всички категории",
      categoriesSubtitle: "Избери област и разгледай обявите",

      /* CATEGORY SINGLE */
      categoryPageTitle: "Категория – J4Teen",
      categorySubtitle: "Налични обяви",
      noJobs: "Няма обяви в тази категория.",

      /* JOBS */
      jobsPageTitle: "Обяви – J4Teen",
      jobsTitle: "Искам да работя",
      jobsSubtitle: "Всички налични обяви",

      /* NEWS */
      newsPageTitle: "Новини – J4Teen",
      newsTitle: "Актуално 2026",
      newsSubtitle: "Новини и съвети за младежи",

      news1: "Как да си намериш почасова работа",
      news1Sub: "Практични съвети за старт през 2026",

      news2: "Търсени умения при младежи",
      news2Sub: "Какво търсят работодателите",

      news3: "Как да комбинираш училище и работа",
      news3Sub: "Реалистичен баланс без прегаряне",

      news4: "Най-подходящи първи работи",
      news4Sub: "Идеи за ученици и студенти",

      allNews: "Всички новини",

      /* CHAT */
      chatPageTitle: "Чат – J4Teen",
      chatTitle: "Чат",
      chatSubtitle: "Свържи се директно",
      chatNamePh: "Име",
      chatMsgPh: "Съобщение",
      chatSend: "Изпрати",

      /* POST */
      postPageTitle: "Публикувай обява – J4Teen",
      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява за минута",
      jobTitlePh: "Заглавие на обявата",
      jobDescPh: "Описание",
      jobPricePh: "Цена (напр. 15 лв)",
      selectCategory: "Избери категория",
      postBtn: "Публикувай обява",
      postSuccess: "Обявата е публикувана успешно!",

      /* PRICING */
      pricingPageTitle: "Планове – J4Teen",
      pricingTitle: "Абонаментни планове",
      pricingBasic: "Basic",
      pricingBasicSub: "За малки нужди",
      pricingPro: "Pro",
      pricingProSub: "По-добра видимост",
      pricingPremium: "Premium",
      pricingPremiumSub: "Най-добрият избор",
      pricingPopular: "Най-купуван",
      pricingChoose: "Избери"
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

      categoriesPageTitle: "Categories – J4Teen",
      categoriesTitle: "All categories",
      categoriesSubtitle: "Choose an area and browse jobs",

      categoryPageTitle: "Category – J4Teen",
      categorySubtitle: "Available jobs",
      noJobs: "No jobs in this category.",

      jobsPageTitle: "Jobs – J4Teen",
      jobsTitle: "I want to work",
      jobsSubtitle: "All available jobs",

      newsPageTitle: "News – J4Teen",
      newsTitle: "Updates 2026",
      newsSubtitle: "News and tips for youth",

      news1: "How to find part-time work",
      news1Sub: "Practical tips for 2026",

      news2: "In-demand youth skills",
      news2Sub: "What employers look for",

      news3: "How to combine school and work",
      news3Sub: "Realistic balance without burnout",

      news4: "Best first jobs",
      news4Sub: "Ideas for students",

      allNews: "All news",

      chatPageTitle: "Chat – J4Teen",
      chatTitle: "Chat",
      chatSubtitle: "Connect directly",
      chatNamePh: "Name",
      chatMsgPh: "Message",
      chatSend: "Send",

      postPageTitle: "Post a job – J4Teen",
      postTitle: "I'm hiring",
      postSubtitle: "Post a job in one minute",
      jobTitlePh: "Job title",
      jobDescPh: "Description",
      jobPricePh: "Price (e.g. 15 BGN)",
      selectCategory: "Select category",
      postBtn: "Post job",
      postSuccess: "Job posted successfully!",

      pricingPageTitle: "Plans – J4Teen",
      pricingTitle: "Pricing plans",
      pricingBasic: "Basic",
      pricingBasicSub: "For small needs",
      pricingPro: "Pro",
      pricingProSub: "Better visibility",
      pricingPremium: "Premium",
      pricingPremiumSub: "Best choice",
      pricingPopular: "Most popular",
      pricingChoose: "Choose"
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

    const titleEl = document.querySelector("title[data-key]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-key");
      if (t[key]) titleEl.textContent = t[key];
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
