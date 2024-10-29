import type { TBadge } from "./types";

const renderBadges = (badges: TBadge[]): string => `
  <ul class="flex gap-x-2">
  ${badges.map(({ title, type }: TBadge): string =>
    type === "recommended"
      ? `
        <li
          class="
          bg-red-700 
            font-medium 
            h-[19px] 
            leading-[19px] 
            px-1 
            rounded 
            text-[11px] text-center text-nowrap text-white 
          "
        >
          ${title}
        </li>
        `
      : `           
        <li
          class="
            bg-yellow-100 
            font-medium 
            h-[19px] 
            leading-[19px] 
            px-1 
            rounded 
            text-[11px] text-yellow-900 text-center text-nowrap
          "
        >
          ${title}
        </li>
      `
  ).join("")}
  </ul>
`;

export { renderBadges };
