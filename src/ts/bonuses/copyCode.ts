import copyToClipboard from "copy-to-clipboard";

const initCodeCopy = (): void => {
  document.addEventListener("click", ({ target }): void => {
    const copyElement = (target as Element).closest(
      "[data-copy-code]"
    ) as HTMLParagraphElement;

    if (copyElement) {
      const { dataset } = copyElement as HTMLParagraphElement;
      const { copyCode } = dataset;

      if (copyCode) {
        copyToClipboard(copyCode);
        alert(`${copyCode} copied to clipboard!`);
      }
    }
  });
};

export { initCodeCopy };
