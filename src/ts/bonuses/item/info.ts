const renderInfo = `
  <div class="flex items-center justify-between pb-6 border-b-[1px] mb-4 pt-4 md:flex-wrap md:gap-y-4 md:pt-2">
    <div class="flex gap-x-2 md:w-full md:justify-between md:items-center">
      <div 
        class="
          basis-10 
          bg-gray-200 
          flex 
          h-10 
          items-center 
          justify-center 
          md:basis-8 md:bg-blue-100 md:h-8 md:w-8
          rounded 
          w-10 
        "
      >
        <svg class="h-6 w-6 md:scale-75">
          <use xlink:href="#moneyIcon"></use>
        </svg>
      </div>

      <div class="md:flex md:justify-between md:flex-row-reverse md:items-center md:grow">
        <p class="font-bold leading-6 md:leading-none">12 500 CZK</p>
        <p class="text-gray-500 uppercase leading-[10px] text-xs">Max. výše bonusu</p>
      </div>
    </div>

    <div class="flex gap-x-2 md:w-full">
      <div 
        class="
          basis-10 
          bg-gray-200 
          flex 
          h-10 
          items-center 
          justify-center 
          md:basis-8 md:bg-blue-100 md:h-8 md:w-8
          rounded 
          w-10 
        "
      >
        <svg class="h-6 w-6 md:scale-75">
          <use xlink:href="#coinsIcon"></use>
        </svg>
      </div>

      <div class="md:flex md:justify-between md:flex-row-reverse md:items-center md:grow">
        <p class="font-bold leading-6 md:leading-none">125 CZK</p>
        <p class="text-gray-500 uppercase leading-[10px] text-xs">Max. sázka</p>
      </div>
    </div>

    <div class="flex gap-x-2 md:w-full">
      <div 
        class="
          basis-10 
          bg-gray-200 
          flex 
          h-10 
          items-center 
          justify-center 
          md:basis-8 md:bg-blue-100 md:h-8 md:w-8
          rounded 
          w-10 
        "
      >
        <svg class="h-6 w-6 md:scale-75">
          <use xlink:href="#handIcon"></use>
        </svg>
      </div>

      <div class="md:flex md:justify-between md:flex-row-reverse md:items-center md:grow">
        <p class="font-bold leading-6 md:leading-none">1 250 CZK</p>
        <p class="text-gray-500 uppercase leading-[10px] text-xs">Min. vklad</p>
      </div>
    </div>

    <div class="flex gap-x-2 md:w-full">
      <div
        class="
          basis-10 
          bg-gray-200 
          flex 
          h-10 
          items-center 
          justify-center 
          md:basis-8 md:bg-blue-100 md:h-8 md:w-8
          rounded 
          w-10 
        "
      >
        <svg class="h-6 w-6 md:scale-75">
          <use xlink:href="#discountIcon"></use>
        </svg>
      </div>

      <div class="md:flex md:justify-between md:flex-row-reverse md:items-center md:grow">
        <p class="font-bold leading-6 md:leading-none">50 %</p>
        <p class="text-gray-500 uppercase leading-[10px] text-xs">% výše bonusu</p>
      </div>
    </div>

    <div class="flex gap-x-2 md:w-full">
      <div 
        class="
          basis-10 
          bg-gray-200 
          flex 
          h-10 
          items-center 
          justify-center 
          md:basis-8 md:bg-blue-100 md:h-8 md:w-8
          rounded 
          w-10 
        "
      >
        <svg class="h-6 w-[23px] md:scale-75">
          <use xlink:href="#lotteryIcon"></use>
        </svg>
      </div>

      <div class="md:flex md:justify-between md:flex-row-reverse md:items-center md:grow">
        <p class="font-bold leading-6 md:leading-none">50</p>
        <p class="text-gray-500 uppercase leading-[10px] text-xs">Free spins</p>
      </div>
    </div>
  </div>
`;

export { renderInfo };
