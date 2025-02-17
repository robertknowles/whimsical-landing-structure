
import React from "react";
import { Grid, DollarSign, HelpCircle, Download } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-1 sm:gap-2 md:gap-4 bg-background/80 backdrop-blur-sm border-none px-2 md:px-4 overflow-x-auto">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap">
          <Grid className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
          Features
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap">
          <DollarSign className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
          Pricing
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap">
          <HelpCircle className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
          FAQ
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap">
          <Download className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
          Download
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavigationMenu;
