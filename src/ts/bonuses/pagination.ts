import { getItemTemplate } from "./item";
import type { TItem } from "./item/types";

const initPagination = (wrapperElement: HTMLDivElement): void => {
  const listElement = wrapperElement.querySelector<HTMLDivElement>(
    "[data-bonuses-list]"
  );
  const paginationElement =
    wrapperElement.querySelector<HTMLDivElement>("[data-pagination]");
  const spinnerElement =
    wrapperElement.querySelector<HTMLDivElement>("[data-spinner]");

  if (paginationElement) {
    const paginationItems =
      paginationElement.querySelectorAll<HTMLLIElement>("[data-page]");

    const getPageData = async (page: string): Promise<void> => {
      const limit: string = "6";
      const params = new URLSearchParams({
        _page: page,
        _limit: limit,
      });
      const response = await fetch(
        `https://my-json-server.typicode.com/megathrone777/json-server/bonuses?${params}`
      );

      if (response && response.ok && listElement && spinnerElement) {
        const items = (await response.json()) as TItem[];

        spinnerElement.classList.add("hidden");

        if (items && !!items.length) {
          const newItems = items
            .map(({ badges, image, title }: TItem) =>
              getItemTemplate(badges, image, title)
            )
            .join("");

          listElement.innerHTML = newItems;

          return;
        }

        listElement.innerHTML = "<p class='text-center text-lg'>No items.</p>";
      }
    };

    if (paginationItems && !!paginationItems.length && spinnerElement) {
      for (const paginationItem of paginationItems) {
        paginationItem.addEventListener("click", ({ currentTarget }): void => {
          const { dataset, classList } = currentTarget as HTMLLIElement;

          for (const item of paginationItems) {
            item.classList.remove("selected");
          }

          spinnerElement.classList.toggle("hidden");
          classList.add("selected");
          getPageData(dataset.page!);
        });
      }
    }
  }
};

export { initPagination };
