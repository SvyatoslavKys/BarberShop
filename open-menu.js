(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuscroll = document.querySelector("[data-scroll]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true";
    
    // Переключаем классы
    menuBtnRef.classList.toggle("is-scroll");
    menuBtnRef.classList.toggle("is-open");
    mobileMenuscroll.classList.toggle("is-scroll");
    mobileMenuRef.classList.toggle("is-open");
    
    // Обновляем aria-attribute
    menuBtnRef.setAttribute("aria-expanded", !expanded);
  });

  // Снятие классов у menuBtnRef при нажатии на ссылки с классом .header-mob-link
  document.querySelectorAll('.header-mob-link').forEach(link => {
    link.addEventListener('click', () => {
      // Снимаем классы с menuBtnRef
      menuBtnRef.classList.remove("is-scroll");
      menuBtnRef.classList.remove("is-open");

      // Снимаем классы с мобильного меню
      mobileMenuscroll.classList.remove("is-scroll");
      mobileMenuRef.classList.remove("is-open");
    });
  });
})();
