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
