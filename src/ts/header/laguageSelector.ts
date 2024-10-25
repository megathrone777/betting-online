const initLanguageSelector = (): void => {
  const wrapperElement = document.querySelector("[data-language-selector]");

  if (wrapperElement) {
    const popoverElement = wrapperElement.querySelector("[data-popover]");
    const triggerElement = wrapperElement.querySelector("[data-trigger]");

    if (popoverElement && triggerElement) {
      triggerElement.addEventListener("click", (): void => {
        popoverElement.classList.toggle("hidden");
      });

      document.addEventListener("click", ({ target }): void => {
        if (!wrapperElement.contains(target as Document) && !popoverElement.classList.contains("hidden")) {
          popoverElement.classList.toggle("hidden");
        }
      });
    }
  }
};

export { initLanguageSelector };
