/*********************************
 * J4Teen – MAIN.JS (FINAL, CLEAN)
 * MENU + LANGUAGES ONLY
 *********************************/

document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     MENU (GLOBAL)
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

      /* POST */
      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява за минута",
      postBtn: "Публикувай обява",
      jobTitlePh: "Заглавие на обявата",
      jobDescPh: "Описание",
      jobPricePh: "Цена (напр. 15 лв)",
      selectCategory: "Избери категория",

      /* JOB */
      jobDescLabel: "Описание:",
      jobPriceLabel: "Заплащане:",
      jobChatBtn: "Пиши в чата",

      /* CHAT (⬅⬅⬅ ТОВА ЛИПСВАШЕ) */
      chatPageTitle: "Чат – J4Teen",
      chatTitle: "Чат",
      chatSubtitle: "Свържи се директно",
      chatNamePh: "Име",
      chatMsgPh: "Съобщение",
      chatSend: "Изпрати",

      /* NEWS */
      newsTitle: "Актуално",
      newsSubtitle: "Новини и съвети за младежи",
      allNews: "Всички новини"
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

      postTitle: "I'm hiring",
      postSubtitle: "Post a job in one minute",
      postBtn: "Post job",
      jobTitlePh: "Job title",
      jobDescPh: "Description",
      jobPricePh: "Price (e.g. 15 €)",
      selectCategory: "Select category",

      jobDescLabel: "Description:",
      jobPriceLabel: "Payment:",
      jobChatBtn: "Chat",

      /* CHAT */
      chatPageTitle: "Chat – J4Teen",
      chatTitle: "Chat",
      chatSubtitle: "Connect directly",
      chatNamePh: "Name",
      chatMsgPh: "Message",
      chatSend: "Send",

      newsTitle: "Updates",
      newsSubtitle: "News and tips for youth",
      allNews: "All news"
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
