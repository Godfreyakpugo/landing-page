document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const middleFlex = document.querySelector(".middle-flex");

  hamburger.addEventListener("click", function () {
    middleFlex.classList.toggle("active");
  });
});