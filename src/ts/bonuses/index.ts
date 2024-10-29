import { initCodeCopy } from "./copyCode";
import { initList } from "./list";

const initBonuses = (): void => {
  initList();
  initCodeCopy();
};

export { initBonuses };
