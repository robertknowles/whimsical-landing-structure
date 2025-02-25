
import { Grid, HelpCircle } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 flex items-center bg-background/80 backdrop-blur-sm border-none pt-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img 
          src="/lovable-uploads/da9c96ed-e76c-456c-88ac-3db8e2de639c.png" 
          alt="TidyMind Logo" 
          className="h-8 md:h-10"
        />
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-4">
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
      </div>
    </Menubar>
  );
};

export default NavigationMenu;
