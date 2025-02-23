
import { Grid, HelpCircle } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 flex items-center px-2 md:px-4 bg-background/80 backdrop-blur-sm border-none">
      <div className="flex-1 flex items-center">
        <img 
          src="/lovable-uploads/bf8e8ace-e372-40a0-9606-3febdc025b3c.png" 
          alt="TidyMind Logo" 
          className="h-4 md:h-5 mr-auto"
        />
      </div>
      <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap">
            <Grid className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
            Features
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap">
            <HelpCircle className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
            FAQ
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex-1" />
    </Menubar>
  );
};

export default NavigationMenu;
