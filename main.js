/*******************************
 * J4Teen – MAIN.JS (MVP)
 * Supabase + Languages (STABLE)
 *******************************/

/* =============================
   1️⃣ SUPABASE CONFIG
   (НЕ ПИПАМЕ ЛОГИКАТА)
============================= */
const SUPABASE_URL = "https://aujswymolniwtdxyangf.supabase.co";
const SUPABASE_KEY = "sb_publishable_UNykLLkp5Jzb9TQlq-qijg_U94miJxS";

let supabase = null;
if (window.supabase && window.supabase.createClient) {
  supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
}

/* =============================
   2️⃣ MENU
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});

/* =============================
   3️⃣ LANGUAGE SYSTEM (FIX)
============================= */
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

    popularCats: "Популярни категории",
    allCategories: "Виж всички категории",

    jobsTitle: "Искам да работя",
    jobsSubtitle: "Всички налични обяви",

    categorySubtitle: "Налични обяви",
    noJobs: "Няма обяви.",

    postTitle: "Търся човек за работа",
    postSubtitle: "Публикувай обява за минута",
    postBtn: "Публикувай обява",

    jobDescLabel: "Описание:",
    jobPriceLabel: "Заплащане:",
    jobChatBtn: "Пиши в чата"
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

    popularCats: "Popular categories",
    allCategories: "View all categories",

    jobsTitle: "I want to work",
    jobsSubtitle: "All available jobs",

    categorySubtitle: "Available jobs",
    noJobs: "No jobs available.",

    postTitle: "I'm hiring",
    postSubtitle: "Post a job in one minute",
    postBtn: "Post job",

    jobDescLabel: "Description:",
    jobPriceLabel: "Payment:",
    jobChatBtn: "Chat"
  }
};

let currentLang = localStorage.getItem("lang") || "bg";

function applyLang() {
  const t = translations[currentLang];
  if (!t) return;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    if (t[key]) el.placeholder = t[key];
  });

  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = currentLang === "bg" ? "EN" : "BG";
}

document.addEventListener("DOMContentLoaded", () => {
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

/* =============================
   4️⃣ SUPABASE – JOBS (НЕ ПИПАМЕ)
============================= */
async function publishJob({ title, desc, price, category }) {
  if (!supabase) return false;

  const { error } = await supabase.from("jobs").insert([
    { title, description: desc, price, category }
  ]);

  if (error) {
    alert("❌ Грешка при публикуване.");
    console.error(error);
    return false;
  }
  return true;
}

async function loadJobs(containerId, category = null) {
  if (!supabase) return;

  let query = supabase.from("jobs").select("*").order("created_at", {
    ascending: false
  });

  if (category) query = query.eq("category", category);

  const { data, error } = await query;
  if (error) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (!data.length) {
    container.innerHTML = `<p>${translations[currentLang].noJobs}</p>`;
    return;
  }

  data.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";
    div.innerHTML = `
      <div>
        <div class="title">${job.title}</div>
        <div class="meta">${job.description}</div>
      </div>
      <div class="price">${job.price || ""}</div>
    `;
    div.onclick = () => {
      window.location.href = "job.html?id=" + job.id;
    };
    container.appendChild(div);
  });
}
