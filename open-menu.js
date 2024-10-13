(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileMenuscroll = document.querySelector("[data-scroll]");

    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-scroll");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
      mobileMenuscroll.classList.toggle("is-scroll");
    });
  
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();