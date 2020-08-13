window.addEventListener("scroll", function () {
  let header = document.querySelector(".header-sticky");
  header.classList.toggle("sticked", window.scrollY > 0);
})