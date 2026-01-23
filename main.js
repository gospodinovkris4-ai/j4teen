document.addEventListener("DOMContentLoaded", function () {

  /* ================= MENU ================= */
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  /* ================= POST JOB ================= */
  var form = document.getElementById("post-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var title = document.getElementById("job-title").value;
      var desc = document.getElementById("job-desc").value;
      var price = document.getElementById("job-price").value;
      var categoryEl = document.getElementById("job-category");
      var category = categoryEl ? categoryEl.value : "";

      var jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

      jobs.push({ title, desc, price, category });
      localStorage.setItem("jobs", JSON.stringify(jobs));

      alert(currentLang === "bg" ? "Обявата е запазена" : "Job posted");
      form.reset();
    });
  }

  /* ================= SHOW JOBS ================= */
  var list = document.getElementById("jobs-list");

  if (list) {
    var jobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    list.innerHTML = "";

    jobs.forEach(function (job) {
      var div = document.createElement("div");
      div.style.padding = "12px";
      div.style.borderBottom = "1px solid #ddd";
      div.innerHTML =
        "<strong>" + job.title + "</strong><br>" +
        job.desc + "<br>" +
        "<em>" + job.price + "</em>";
      list.appendChild(div);
    });
  }

  /* ================= LANGUAGES BG / EN ================= */

  var translations = {
    bg: {
      /* MENU */
      home: "Начало",
      jobs: "Обяви",
      post: "Публикувай",
      chat: "Чат",

      /* HERO */
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
      allNews: "Всички новини",

      /* PRICING */
      pricingBasic: "Basic",
      pricingBasicSub: "1 обява на месец",
      pricingPro: "Pro",
      pricingProSub: "До 5 обяви",
      pricingPremium: "Premium",
      pricingPremiumSub: "Неограничени обяви",
      pricingPopular: "Най-купуван",

      /* FORMS */
      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява",
      selectCategory: "Избери категория",
      postBtn: "Публикувай",
      jobTitlePh: "Заглавие на обявата",
      jobDescPh: "Описание",
      jobPricePh: "Цена (напр. 15 лв)",

      /* CHAT */
      chatTitle: "Чат",
      chatSubtitle: "Свържи се директно",
      chatNamePh: "Име",
      chatMsgPh: "Съобщение",
      chatSend: "Изпрати"
    },

    en: {
      /* MENU */
      home: "Home",
      jobs: "Jobs",
      post: "Post",
      chat: "Chat",

      /* HERO */
      heroTitle: "Find part-time work or help nearby",
      heroSubtitle: "J4Teen – jobs and community for youth",
      heroWork: "I want to work",
      heroHire: "I'm hiring",

      /* TABS */
      tabWork: "Work",
      tabCompanies: "Companies",
      tabNews: "News",

      /* CATEGORIES */
      popularCats: "Popular categories",
      allCategories: "View all categories",

      catDog: "Dog walking",
      catDogSub: "Hourly help",
      catHome: "Home help",
      catHomeSub: "Cleaning, care",
      catDelivery: "Delivery",
      catDeliverySub: "Food, packages",

      /* COMPANIES */
      companiesTitle: "For companies",
      companiesPost: "Post job ads",
      companiesPostSub: "Find young people fast.",
      companiesReach: "Reach youth",
      companiesReachSub: "The right audience.",
      companiesPlans: "Flexible plans",
      companiesPlansSub: "Subscriptions that fit you.",
      seePlans: "See plans",

      /* NEWS */
      newsTitle: "Updates 2026",
      news1: "How to find part-time work",
      news1Sub: "Practical tips",
      news2: "In-demand youth skills",
      news2Sub: "What companies look for",
      allNews: "All news",

      /* PRICING */
      pricingBasic: "Basic",
      pricingBasicSub: "1 job per month",
      pricingPro: "Pro",
      pricingProSub: "Up to 5 jobs",
      pricingPremium: "Premium",
      pricingPremiumSub: "Unlimited jobs",
      pricingPopular: "Most popular",

      /* FORMS */
      postTitle: "I'm hiring",
      postSubtitle: "Post a job",
      selectCategory: "Select category",
      postBtn: "Post job",
      jobTitlePh: "Job title",
      jobDescPh: "Description",
      jobPricePh: "Price (e.g. 1.50 €)",

      /* CHAT */
      chatTitle: "Chat",
      chatSubtitle: "Connect directly",
      chatNamePh: "Name",
      chatMsgPh: "Message",
      chatSend: "Send"
    }
  };

  var currentLang = localStorage.getItem("lang") || "bg";

  function applyLang() {
    var t = translations[currentLang];

    document.querySelectorAll("[data-key]").forEach(function (el) {
      var key = el.getAttribute("data-key");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-key-placeholder");
      if (t[key]) el.placeholder = t[key];
    });

    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = currentLang === "bg" ? "EN" : "BG";
  }

  applyLang();

  var langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.preventDefault();
      currentLang = currentLang === "bg" ? "en" : "bg";
      localStorage.setItem("lang", currentLang);
      applyLang();
    });
  }

});
