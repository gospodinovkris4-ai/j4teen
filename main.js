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
var jobsContainer = document.getElementById("jobs-list");

if (jobsContainer) {
  var jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

  jobs.forEach(function (job) {
    var div = document.createElement("div");
    div.className = "job";

    div.innerHTML = `
      <div>
        <div class="title">${job.title}</div>
        <div class="meta">${job.description}</div>
      </div>
      <div class="price">${job.price}</div>
    `;

    jobsContainer.appendChild(div);
  });
}

