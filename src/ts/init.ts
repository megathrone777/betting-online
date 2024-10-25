import { initBonuses } from "./bonuses";
import { initHeader } from "./header";

window.onload = (): void => {
  initHeader();
  initBonuses();
};
