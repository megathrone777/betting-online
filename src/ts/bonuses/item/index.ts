import { renderBadges } from "./badges";
import { renderInfo } from "./info";
import { renderSections } from "./sections";
import type { TBadge } from "./types";

const getItemTemplate = (
  badges: TBadge[],
  image: string,
  title?: string
): string => `
    <div 
      class="
        border-2 border-transparent
        [&.opened]:border-yellow-400
        group 
        mb-4 
        md:mb-6 md:bg-white md:border md:border-gray-300
        overflow-hidden 
        relative 
        rounded-lg
      "
      data-bonuses-item
    >
      <div 
        class="
          flex
          group-hover:bg-yellow-50 group-[.opened]:bg-yellow-50 md:group-[.opened]:bg-white
          items-center 
          justify-between 
          lg:p-2
          md:flex-col md:group-hover:bg-transparent md:items-start md:p-0 
          p-4 
          transition-colors 
          xl:p-2 
        "
      >
        <div 
          class="
            basis-[420px] 
            gap-x-6 gap-y-1
            grid grid-areas-bonus-content grid-cols-[min-content]
            items-center
            justify-start
            lg:gap-x-2 
            max-w-[400px] 
            md:basis-0 md:gap-y-2 md:grid-areas-bonus-content-mobile md:max-w-full md:mb-4 md:pt-4 md:px-4
            xl:basis-[380px] xl:gap-x-3 
          "
        >
          <div 
            class="
              bg-blue-900 
              flex 
              grid-in-logo
              h-20 
              items-center 
              justify-center 
              lg:h-16 lg:min-w-16 lg:w-16 
              md:h-12 md:min-w-12 md:px-2 md:w-12 
              min-w-20 
              rounded-lg 
              text-center 
              w-20 
            "
          >
            <img alt="Bonus image." src="/images/${image}">
          </div>

          <div class="grid-in-badges flex items-center gap-x-2">
            ${renderBadges(badges)}
            <p class="text-[11px] leading-[19px] whitespace-nowrap">Expirace 22.8.2024</p>
          </div>

          ${
  title && title.length > 0
    ? `
            <h3 
              class="
                font-black 
                grid-in-title 
                text-[22px] 
                xl:text-[20px] 
                leading-[22px] 
                md:text-base md:font-bold md:leading-6
              "
            >
              ${title}
            </h3>
          `
    : ""
}
          <p class="text-sm leading-4 grid-in-text">Up to 2000 CAD + 250 FS</p>
        </div>

        <div class="flex items-center gap-x-4 xl:gap-x-2 md:hidden">
          <div>
            <p 
              class="
                font-bold 
                from-[#ff641a] 
                group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:text-transparent 
                leading-6 
                lg:text-xs
                mb-1 
                to-[#ff9100] 
                uppercase 
                xl:text-sm 
              "
            >
              12 500 CZK
            </p>

            <p class="text-gray-500 text-[10px] font-medium uppercase leading-[10px]">
              Max výše Bonusu
            </p>
          </div>

          <span class="inline-block min-h-[38px] w-px bg-gray-400"></span>

          <div>
            <p 
              class="
                mb-1 
                font-bold 
                leading-6 
                uppercase 
                group-hover:text-transparent group-hover:bg-gradient-to-b group-hover:bg-clip-text
                from-[#ff641a] 
                to-[#ff9100] 
                xl:text-sm 
                lg:text-xs
              "
            >
              500 CZK
            </p>
            <p class="text-gray-500 text-[10px] font-medium uppercase leading-[10px]">
              Min. vklad
            </p>
          </div>
        </div>

        <div 
          class="
            flex flex-col 
            gap-y-2 
            items-start 
            justify-center 
            md:flex-col-reverse md:items-stretch md:w-full md:gap-y-0
          "
        >
          <div class="md:flex">
            <button
              class="
                bg-yellow-400 
                font-bold 
                grow
                h-[46px] 
                hover:bg-yellow-100 
                inline-block 
                leading-none
                md:h-[44px] md:hover:bg-yellow-400 md:rounded-t-none md:rounded-ee-none 
                min-w-[120px] 
                px-4 
                rounded-lg 
                text-base 
                transition-colors 
              "
              type="button"
            >
              Využít bonus
            </button>
            
            <button 
              class="
                hidden 
                md:block 
                rounded-ee-lg 
                bg-gray-400 
                text-white 
                min-w-24 
                font-bold
              "
              data-more-mobile
              data-text-closed="Více info"
              data-text-opened="Skrýt info"
              type="button"
            >
              <span data-more-mobile-text>
                Více info
              </span>
            </button>
          </div>

          <div
            class="
              grid-rows-[0fr]
              group-[.opened]:grid-rows-[1fr]
              hidden
              md:grid
              px-4
              transition-[grid-template-rows]
            "
          >
            <div class="overflow-hidden">
              ${renderInfo}
              ${renderSections}
            </div>
          </div>

          <div 
            class="
              md:flex 
              md:justify-between 
              md:mx-4 
              md:border-b 
              md:border-b-transparent 
              md:group-[.opened]:border-b-gray-200
              md:pb-4
            "
          >
            <p 
              class="
                cursor-pointer 
                underline 
                decoration-dashed 
                decoration-from-font 
                underline-offset-[3px] 
                text-[11px] 
                leading-none 
                hover:no-underline
              "
              data-copy-code="SO12XI9"
            >
              Zkopíruj kod SO12XI9
            </p>

            <a class="text-[11px] leading-none" href="#">
              <span>Přečíst recenzi</span>

              <svg class="ml-1 align-middle h-[7px] w-[4px] hidden md:inline-block">
                <use xlink:href="#angleSmallIcon"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          grid grid-rows-[0fr]
          group-[.opened]:grid-rows-[1fr]
          px-4
          transition-[grid-template-rows]
          md:hidden
        "
      >
        <div class="overflow-hidden">
          ${renderInfo}
          ${renderSections}
        </div>
      </div>

      <button
        class="
          absolute 
          hidden 
          group-hover:inline-block group-[.opened]:max-w-full group-[.opened]:block group-[.opened]:rounded-t-none
          appearance-none 
          bottom-0 
          h-5 
          rounded-t-md 
          font-medium 
          text-[10px] 
          max-w-36 
          mx-auto 
          left-0 
          right-0 
          uppercase 
          bg-gray-200
          md:hidden
          md:group-hover:hidden md:group-[.opened]:hidden
        " 
        data-more
        data-text-opened="Méně detailů"
        data-text-closed="více detailů"
        type="button"
      >
        <span 
          class="align-[-2px] cursor-pointer"
          data-more-text
        >
          více detailů
        </span>

        <svg class="h-[6px] w-3 inline-block align-middle ml-1 group-[.opened]:rotate-180">
          <use xlink:href="#angleIcon"></use>
        </svg>
      </button>
    </div>
`;

export { getItemTemplate };
