document.addEventListener("DOMContentLoaded", function () {

  // ===== MENU =====
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  // ===== POST JOB =====
  var form = document.getElementById("post-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var title = document.getElementById("job-title").value;
      var desc = document.getElementById("job-desc").value;
      var price = document.getElementById("job-price").value;

      var jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

      jobs.push({ title: title, desc: desc, price: price });

      localStorage.setItem("jobs", JSON.stringify(jobs));

      alert("Обявата е запазена");
      form.reset();
    });
  }

  // ===== SHOW JOBS =====
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

});
