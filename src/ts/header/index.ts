import { initLanguageSelector } from "./laguageSelector";
import { initMenu } from "./menu";
import { initSearch } from "./search";

const initHeader = (): void => {
  initMenu();
  initLanguageSelector();
  initSearch();
};

export { initHeader };
