import { getItemTemplate } from "./item";
import type { TItem } from "./item/types";
import { initPagination } from "./pagination";

const toggleContent = (
  trigger: string,
  triggerText: string,
  item: string
): void => {
  document.addEventListener("click", ({ target }): void => {
    const triggerElement = (target as Element).closest<HTMLButtonElement>(
      trigger
    );

    if (triggerElement) {
      const itemElement = triggerElement.closest(item);
      const { dataset } = triggerElement;

      if (itemElement) {
        const textElement =
          itemElement.querySelector<HTMLSpanElement>(triggerText)!;

        itemElement.classList.toggle("opened");

        if (itemElement.classList.contains("opened")) {
          textElement.textContent = dataset.textOpened!;
        } else {
          textElement.textContent = dataset.textClosed!;
        }
      }
    }
  });
};

const initList = async (): Promise<void> => {
  const wrapperElement =
    document.querySelector<HTMLDivElement>("[data-bonuses]");

  if (wrapperElement) {
    const listElement = wrapperElement.querySelector<HTMLDivElement>(
      "[data-bonuses-list]"
    );
    const params = new URLSearchParams({
      _page: "1",
      _limit: "6",
    });
    const response = await fetch(
      `https://my-json-server.typicode.com/megathrone777/json-server/bonuses?${params}`
    );

    if (response && response.ok && listElement) {
      const items = (await response.json()) as TItem[];

      const newItems = items
        .map(({ badges, image, title }: TItem) =>
          getItemTemplate(badges, image, title)
        )
        .join("");

      listElement.innerHTML = newItems;
    }

    initPagination(wrapperElement);
    toggleContent("[data-more]", "[data-more-text]", "[data-bonuses-item]");

    toggleContent(
      "[data-more-mobile]",
      "[data-more-mobile-text]",
      "[data-bonuses-item]"
    );

    document.addEventListener("click", ({ target }): void => {
      const triggerElement = (target as Element).closest<HTMLButtonElement>(
        "[data-section-trigger]"
      );

      if (triggerElement) {
        const itemElement = triggerElement.closest("[data-section-item]");

        if (itemElement) {
          itemElement.classList.toggle("opened");
        }
      }
    });
  }
};

export { initList };
