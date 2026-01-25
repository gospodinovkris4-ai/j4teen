document.addEventListener("DOMContentLoaded", function () {

  /* MENU */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  /* TRANSLATIONS */
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

      /* JOBS PAGE */
      jobsPageTitle: "Обяви – J4Teen",
      jobsTitle: "Искам да работя",
      jobsSubtitle: "Всички налични обяви на едно място",
      jobsStat1: "Локални обяви",
      jobsStat1Sub: "Близо до теб",
      jobsStat2: "Почасова работа",
      jobsStat2Sub: "Гъвкаво време",
      jobsStat3: "Заплащане",
      jobsStat3Sub: "Директно договаряне",
      jobsEmpty: "Няма публикувани обяви в момента.",
      allCities: "Всички градове",

      /* CATEGORIES */
      catDog: "Разходка на куче",
      catDogSub: "Почасова помощ",
      catHome: "Помощ в дома",
      catHomeSub: "Почистване, грижа",
      catDelivery: "Доставки",
      catDeliverySub: "Храна, пратки",
      catKids: "Гледане на деца",
      catKidsSub: "Почасово",
      catElderly: "Помощ за възрастни",
      catElderlySub: "Грижа, придружаване",
      catCleaning: "Почистване",
      catCleaningSub: "Домове, офиси",
      catPhysical: "Физическа работа",
      catPhysicalSub: "Преместване, носене",
      catWaiter: "Сервитьор",
      catWaiterSub: "Заведения, събития",
      catCook: "Готвач",
      catCookSub: "Кухня, подготовка",
      catBarman: "Барман",
      catBarmanSub: "Бар, напитки",
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

      newsTitle: "Актуално 2026",
      newsSubtitle: "Новини и съвети за младежи",
      news1: "Как да си намериш почасова работа",
      news1Sub: "Практични съвети",
      news2: "Търсени умения при младежи",
      news2Sub: "Какво търсят компаниите",
      news3: "Как да комбинираш училище и работа",
      news3Sub: "Баланс без прегаряне",
      news4: "Подходящи първи работи",
      news4Sub: "Идеи за ученици",
      allNews: "Всички новини",

      categorySubtitle: "Налични обяви",
      noJobs: "Няма обяви в тази категория.",

      pricingTitle: "Абонаментни планове",
      pricingHero: "Планове за компании",
      pricingHeroSub: "Избери план, който ти пасва",
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
      jobsSubtitle: "All available jobs in one place",
      jobsStat1: "Local jobs",
      jobsStat1Sub: "Near you",
      jobsStat2: "Hourly work",
      jobsStat2Sub: "Flexible time",
      jobsStat3: "Payment",
      jobsStat3Sub: "Direct agreement",
      jobsEmpty: "No jobs have been posted yet.",
      allCities: "All cities",

      catDog: "Dog walking",
      catDogSub: "Hourly help",
      catHome: "Home help",
      catHomeSub: "Cleaning, care",
      catDelivery: "Delivery",
      catDeliverySub: "Food, packages",
      catKids: "Child care",
      catKidsSub: "Hourly",
      catElderly: "Elderly care",
      catElderlySub: "Care, assistance",
      catCleaning: "Cleaning",
      catCleaningSub: "Homes, offices",
      catPhysical: "Physical work",
      catPhysicalSub: "Moving, carrying",
      catWaiter: "Waiter",
      catWaiterSub: "Restaurants, events",
      catCook: "Cook",
      catCookSub: "Kitchen, preparation",
      catBarman: "Bartender",
      catBarmanSub: "Bar, drinks",
      catHourly: "Hourly help",
      catHourlySub: "Short tasks",

      companiesTitle: "For companies",
      companiesPost: "Post job ads",
      companiesPostSub: "Find young people fast.",
      companiesReach: "Reach youth",
      companiesReachSub: "The right audience.",
      companiesPlans: "Flexible plans",
      companiesPlansSub: "Subscriptions that fit you.",
      seePlans: "See plans",

      newsTitle: "Updates 2026",
      newsSubtitle: "News and tips for youth",
      news1: "How to find part-time work",
      news1Sub: "Practical tips",
      news2: "In-demand youth skills",
      news2Sub: "What companies look for",
      news3: "Balancing school and work",
      news3Sub: "No burnout",
      news4: "Best first jobs",
      news4Sub: "Ideas for students",
      allNews: "All news",

      categorySubtitle: "Available jobs",
      noJobs: "No jobs in this category.",

      pricingTitle: "Pricing plans",
      pricingHero: "Plans for companies",
      pricingHeroSub: "Choose what fits you",
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
