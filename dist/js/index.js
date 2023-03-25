document.addEventListener("DOMContentLoaded", function () {
  // Humberger
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("nav-menu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("hidden");
  });

  // Nabvar Fixed
  window.onscroll = function () {
    const header = document.querySelector("header");

    const fixedNav = header.offsetTop;
    if (fixedNav < window.pageYOffset) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
});
