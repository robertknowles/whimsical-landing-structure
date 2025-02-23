
import { Grid, HelpCircle } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 flex items-center bg-background/80 backdrop-blur-sm border-none">
      <div className="container mx-auto flex items-center">
        <div className="flex-1 flex items-center">
          <img 
            src="/lovable-uploads/a6485826-bd22-4a7e-905f-59a8d32cecba.png" 
            alt="TidyMind Logo" 
            className="h-8 md:h-10 mr-auto"
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
      </div>
    </Menubar>
  );
};

export default NavigationMenu;
