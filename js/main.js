elSiteHeaderSection = document.querySelector(".site-header");
elSiteHeaderToggler = elSiteHeaderSection.querySelector(".js-site-header__toggler");

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener("click", function () {
  elSiteHeaderSection.classList.toggle("site-header--open");
});
}

