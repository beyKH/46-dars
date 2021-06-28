var elSiteHeaderSection = document.querySelector(".site-header");
var elSiteHeaderToggler = elSiteHeaderSection.querySelector(".js-site-header-toggler");

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener("click", function () {
    elSiteHeaderSection.classList.toggle("site-header--open");
  });
}

