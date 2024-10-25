const initList = (): void => {
  const wrapperElement = document.querySelector("[data-bonuses]");

  if (wrapperElement) {
    const itemElements = wrapperElement.querySelectorAll("[data-item]");
    const paginationElement = wrapperElement.querySelector("[data-pagination]");

    if (itemElements && !!itemElements.length) {
      for (const itemElement of itemElements) {
        const moreButtonElement = itemElement.querySelector("[data-more]");
        const moreButtonMobileElement =
          itemElement.querySelector("[data-more-mobile]");
        const moreButtonTextElement =
          itemElement.querySelector("[data-more-text]");
        const moreButtonMobileTextElement = itemElement.querySelector(
          "[data-more-mobile-text]"
        );
        const sectionsElement = itemElement.querySelector("[data-sections]");

        // TODO: wrap conditions to function
        if (moreButtonElement && moreButtonTextElement) {
          moreButtonElement.addEventListener(
            "click",
            ({ currentTarget }): void => {
              const { dataset } = currentTarget as HTMLButtonElement;

              itemElement.classList.toggle("opened");

              if (itemElement.classList.contains("opened")) {
                moreButtonTextElement.textContent = dataset.textOpened!;
              } else {
                moreButtonTextElement.textContent = dataset.textClosed!;
              }
            }
          );
        }

        if (moreButtonMobileElement && moreButtonMobileTextElement) {
          moreButtonMobileElement.addEventListener(
            "click",
            ({ currentTarget }): void => {
              const { dataset } = currentTarget as HTMLButtonElement;

              itemElement.classList.toggle("opened");

              if (itemElement.classList.contains("opened")) {
                moreButtonMobileTextElement.textContent = dataset.textOpened!;
              } else {
                moreButtonMobileTextElement.textContent = dataset.textClosed!;
              }
            }
          );
        }

        if (sectionsElement) {
          const sectionItems = sectionsElement.querySelectorAll("[data-item]");

          if (sectionItems && !!sectionItems.length) {
            for (const sectionItem of sectionItems) {
              const sectionTrigger =
                sectionItem.querySelector("[data-trigger]");

              if (sectionTrigger) {
                sectionTrigger.addEventListener("click", (): void => {
                  sectionItem.classList.toggle("opened");
                });
              }
            }
          }
        }
      }
    }

    if (paginationElement) {
      const paginationItems = paginationElement.querySelectorAll("[data-page]");

      const getPageData = async (page: number): Promise<void> => {
        // Show spinner
        const response = await fetch("/data/bonuses.json");
        const data = await response.json();

        if (response && response.ok) {
          alert(`Fetched page ${page}: \n ${JSON.stringify(data[page])}`);
        }
      };

      if (paginationItems && !!paginationItems.length) {
        for (const paginationItem of paginationItems) {
          paginationItem.addEventListener(
            "click",
            ({ currentTarget }): void => {
              const { dataset } = currentTarget as HTMLLIElement;

              getPageData(+dataset.page!);
            }
          );
        }
      }
    }
  }
};

export { initList };
