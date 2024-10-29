const initSearch = (): void => {
  const wrapperElement =
    document.querySelector<HTMLDivElement>("[data-search]");

  if (wrapperElement) {
    const popoverElement =
      wrapperElement.querySelector<HTMLDivElement>("[data-popover]");
    const triggerElement =
      wrapperElement.querySelector<HTMLButtonElement>("[data-trigger]");

    if (popoverElement && triggerElement) {
      triggerElement.addEventListener("click", (): void => {
        popoverElement.classList.toggle("hidden");
      });

      document.addEventListener("click", ({ target }): void => {
        if (
          !wrapperElement.contains(target as Document) &&
          !popoverElement.classList.contains("hidden")
        ) {
          popoverElement.classList.toggle("hidden");
        }
      });
    }
  }
};

export { initSearch };
