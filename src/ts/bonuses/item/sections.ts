const renderSections = `
  <div class="pb-8 md:pb-2">
    <div class="mb-4 group/section" data-section-item>
      <div class="flex items-center justify-between cursor-pointer mb-2 select-none" data-section-trigger>
        <h5 class="font-bold leading-6">Jak získat bonus?</h5>
        
        <svg class="h-3 w-3 group-[.opened]/section:hidden">
          <use xlink:href="#plusIcon"></use>
        </svg>

        <svg class="h-3 w-3 hidden group-[.opened]/section:block">
          <use xlink:href="#minusIcon"></use>
        </svg>
      </div>

      <div class="pl-5 h-0 overflow-hidden group-[.opened]/section:h-[calc-size(auto,size)] transition-[height]">
        <ul class="list-disc leading-6">
          <li>
            <a 
              class="text-blue-500 hover:text-yellow-400 transition-colors" 
              href="#"
            >
              Registruj se
            </a> 
            v Betanu a získej 100 Kč do sázkovky + 500 
            otoček zdarma s promo kódem „VYHRAJ„
          </li>
          <li>
            Navíc znásob svůj první vklad do casina 100% až do výše 600 Kč
          </li>
          <li>
            Bonus má WR pouze 1x, nelze na něm tedy prodělat!
          </li>
        </ul>
      </div>
    </div>

    <div class="group/section" data-section-item>
      <div class="flex items-center justify-between cursor-pointer mb-2 select-none" data-section-trigger>
        <h5 class="font-bold leading-6">Časové omezení bonusu</h5>
        
        <svg class="h-3 w-3 group-[.opened]/section:hidden">
          <use xlink:href="#plusIcon"></use>
        </svg>

        <svg class="h-3 w-3 hidden group-[.opened]/section:block">
          <use xlink:href="#minusIcon"></use>
        </svg>
      </div>

      <div class="pl-5 h-0 overflow-hidden group-[.opened]/section:h-[calc-size(auto,size)] transition-[height]">
        <ul class="list-disc leading-6">
          <li>
            <a 
              class="text-blue-500 hover:text-yellow-400 transition-colors" 
              href="#"
            >
              Registruj se
            </a> 
            v Betanu a získej 100 Kč do sázkovky + 500 
            otoček zdarma s promo kódem „VYHRAJ„
          </li>
          <li>
            Navíc znásob svůj první vklad do casina 100% až do výše 600 Kč
          </li>
          <li>
            Bonus má WR pouze 1x, nelze na něm tedy prodělat!
          </li>
        </ul>
      </div>
    </div>
  </div>
`;

export { renderSections };
