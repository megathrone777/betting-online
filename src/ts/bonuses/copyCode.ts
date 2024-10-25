import copyToClipboard from "copy-to-clipboard";

const initCodeCopy = (): void => {
  const copyElements = document.querySelectorAll("[data-copy-code]");

  if (copyElements && !!copyElements.length) {
    for (const copyElement of copyElements) {
      copyElement.addEventListener("click", ({ currentTarget }): void => {
        const { dataset } = currentTarget as HTMLParagraphElement;
        const { copyCode } = dataset;

        if (copyCode) {
          copyToClipboard(copyCode);
          alert(`${copyCode} copied to clipboard!`);
        }
      });
    }
  }
};

export { initCodeCopy };
