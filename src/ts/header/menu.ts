const initMenu = (): void => {
  const wrapperElement = document.querySelector<HTMLDivElement>("[data-menu]");
  const menuTriggerElement = document.querySelector<HTMLButtonElement>(
    "[data-menu-trigger]"
  );

  if (wrapperElement && menuTriggerElement) {
    const triggerElements = wrapperElement.querySelectorAll<HTMLButtonElement>(
      "[data-dropdown-trigger]"
    );

    if (triggerElements && !!triggerElements.length) {
      for (const triggerElement of triggerElements) {
        const dropdownElement =
          triggerElement.querySelector<HTMLDivElement>("[data-dropdown]");

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
