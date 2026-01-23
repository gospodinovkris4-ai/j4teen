document.addEventListener("DOMContentLoaded", function () {
  var burgers = document.querySelectorAll(".burger");

  burgers.forEach(function (burger) {
    burger.addEventListener("click", function () {
      var nav = burger.closest(".topbar");
      if (!nav) return;

      var menu = nav.querySelector(".menu");
      if (!menu) return;

      menu.classList.toggle("show");
    });
  });
});


// ===== SHOW JOBS =====
// SHOW JOBS AS CARDS
const jobsContainer = document.getElementById("jobs-list");

if (jobsContainer) {
  const jobs = JSON.parse(localStorage.getItem("jobs") || "[]");
  jobsContainer.innerHTML = "";

  jobs.forEach(job => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = "#";

    card.innerHTML = `
      <div class="icon">💼</div>
      <h3>${job.title}</h3>
      <p>${job.desc}</p>
      <p style="font-weight:700; margin-top:8px;">${job.price}</p>
    `;

    jobsContainer.appendChild(card);
  });
}


function clearJobs() {
  localStorage.removeItem("jobs");
  location.reload();
}

// FORCE SHOW JOBS (DEBUG SAFE)
const jobsContainer = document.getElementById("jobs-list");

if (jobsContainer) {
  const jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

  jobsContainer.innerHTML = "";

  if (jobs.length === 0) {
    jobsContainer.innerHTML = "<p>Няма публикувани обяви.</p>";
  }

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="icon">💼</div>
      <h3>${job.title}</h3>
      <p>${job.desc}</p>
      <p style="font-weight:700">${job.price}</p>
    `;

    jobsContainer.appendChild(card);
  });
}




