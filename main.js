document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
