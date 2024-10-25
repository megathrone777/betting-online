const initMenu = (): void => {
  const wrapperElement = document.querySelector("[data-menu]");
  const menuTriggerElement = document.querySelector("[data-menu-trigger]");

  if (wrapperElement && menuTriggerElement) {
    const triggerElements = wrapperElement.querySelectorAll(
      "[data-dropdown-trigger]"
    );

    if (triggerElements && !!triggerElements.length) {
      for (const triggerElement of triggerElements) {
        const dropdownElement = triggerElement.querySelector("[data-dropdown]");

        if (dropdownElement) {
          triggerElement.addEventListener("click", (): void => {
            dropdownElement.classList.toggle("opened");
            triggerElement.classList.toggle("opened");
          });

          document.addEventListener("click", ({ target }): void => {
            if (
              !triggerElement.contains(target as Document) &&
              dropdownElement.classList.contains("opened")
            ) {
              dropdownElement.classList.remove("opened");
              triggerElement.classList.remove("opened");
            }
          });
        }
      }
    }

    menuTriggerElement.addEventListener("click", (): void => {
      menuTriggerElement.classList.toggle("opened");

      if (window.innerWidth < 1024) {
        wrapperElement.classList.toggle("opened");
      }
    });
  }
};

export { initMenu };
