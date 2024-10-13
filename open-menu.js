(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuscroll = document.querySelector("[data-scroll]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true";

    menuBtnRef.classList.toggle("is-scroll");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuscroll.classList.toggle("is-scroll");
  });

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true";

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  // Исправленный селектор для ссылок с классом header-mob-link
  document.querySelectorAll('.header-mob-link').forEach(link => {
    link.addEventListener('click', (event) => {
      // Снимаем классы при клике на ссылку
      mobileMenuscroll.classList.remove("is-scroll");
      mobileMenuRef.classList.remove("is-open");
    });
  });
})();
