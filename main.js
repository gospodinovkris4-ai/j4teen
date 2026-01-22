document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
