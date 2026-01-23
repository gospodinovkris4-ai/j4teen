document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});

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



