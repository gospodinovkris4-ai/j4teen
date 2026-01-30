/*******************************
 * J4Teen – MAIN.JS (MVP)
 * Supabase: READ + WRITE
 *******************************/

/* =============================
   1️⃣ SUPABASE CONFIG
============================= */
const SUPABASE_URL = "https://aujswymolniwtdxyangf.supabase.co";
const SUPABASE_KEY = "sb_publishable_UNykLLkp5Jzb9TQlq-qijg_U94miJxS";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

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
   3️⃣ PUBLISH JOB (POST)
============================= */
async function publishJob({ title, desc, price, category }) {
  const { error } = await supabase.from("jobs").insert([
    {
      title,
      description: desc,
      price,
      category
    }
  ]);

  if (error) {
    alert("❌ Грешка при публикуване. Опитай пак.");
    console.error(error);
    return false;
  }

  return true;
}

/* =============================
   4️⃣ LOAD JOBS (GLOBAL)
============================= */
async function loadJobs(containerId, category = null) {
  let query = supabase.from("jobs").select("*").order("created_at", {
    ascending: false
  });

  if (category) {
    query = query.eq("category", category);
  }

  const { data: jobs, error } = await query;

  if (error) {
    console.error(error);
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (!jobs.length) {
    container.innerHTML =
      "<p style='text-align:center;'>Няма обяви.</p>";
    return;
  }

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";
    div.style.cursor = "pointer";

    div.innerHTML = `
      <div>
        <div class="title">${job.title}</div>
        <div class="meta">${job.description}</div>
      </div>
      <div class="price">${job.price || ""}</div>
    `;

    div.addEventListener("click", () => {
      window.location.href = "job.html?id=" + job.id;
    });

    container.appendChild(div);
  });
}

/* =============================
   5️⃣ AUTO INIT (PAGES)
============================= */
document.addEventListener("DOMContentLoaded", () => {

  // JOBS PAGE
  if (document.getElementById("jobs-list")) {
    loadJobs("jobs-list");
  }

  // CATEGORY PAGE
  if (document.getElementById("category-jobs")) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("cat");
    if (category) {
      loadJobs("category-jobs", category);
    }
  }

  // POST FORM
  const postForm = document.getElementById("post-form");
  if (postForm) {
    postForm.addEventListener("submit", async e => {
      e.preventDefault();

      const title = document.getElementById("job-title").value;
      const desc = document.getElementById("job-desc").value;
      const price = document.getElementById("job-price").value;
      const category = document.getElementById("job-category").value;

      const ok = await publishJob({
        title,
        desc,
        price,
        category
      });

      if (ok) {
        window.location.href = "jobs.html";
      }
    });
  }
});
