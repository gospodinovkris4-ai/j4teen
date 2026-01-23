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
      home: "Начало",
      jobs: "Обяви",
      post: "Публикувай",
      chat: "Чат",

      heroTitle: "Намери почасова работа или помощ наблизо",
      heroSubtitle: "J4Teen – общност и обяви за младежи",
      heroWork: "Искам да работя",
      heroHire: "Търся човек за работа",

      popularCats: "Популярни категории",

      /* JOBS PAGE (ТОВА ЛИПСВАШЕ) */
      jobsTitle: "Искам да работя",
      jobsSubtitle: "Всички налични обяви",
      allCities: "Всички градове",
      clearJobs: "Изчисти всички обяви",

      /* CATEGORIES */
      catDog: "Разходка на куче",
      catDogSub: "Почасова помощ",
      catIT: "IT & Помощ",
      catITSub: "Онлайн задачи",
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
      catHourly: "Търся човек за няколко часа",
      catHourlySub: "Почасова помощ",

      postTitle: "Търся човек за работа",
      postSubtitle: "Публикувай обява",
      selectCategory: "Избери категория",
      postBtn: "Публикувай",

      jobTitlePh: "Заглавие на обявата",
      jobDescPh: "Описание",
      jobPricePh: "Цена (напр. 15 лв)",

      chatTitle: "Чат",
      chatSubtitle: "Свържи се директно",
      chatNamePh: "Име",
      chatMsgPh: "Съобщение",
      chatSend: "Изпрати"
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

      popularCats: "Popular categories",

      /* JOBS PAGE */
      jobsTitle: "I want to work",
      jobsSubtitle: "All available jobs",
      allCities: "All cities",
      clearJobs: "Clear all jobs",

      catDog: "Dog walking",
      catDogSub: "Hourly help",
      catIT: "IT & Help",
      catITSub: "Online tasks",
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
      catHourly: "Looking for hourly help",
      catHourlySub: "Hourly assistance",

      postTitle: "I'm hiring",
      postSubtitle: "Post a job",
      selectCategory: "Select category",
      postBtn: "Post job",

      jobTitlePh: "Job title",
      jobDescPh: "Description",
      jobPricePh: "Price (e.g. 15 lv)",

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
