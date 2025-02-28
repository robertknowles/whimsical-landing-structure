
import { Grid, HelpCircle, DollarSign } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 flex items-center bg-background/80 backdrop-blur-sm border-none pt-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img 
          src="/lovable-uploads/adaa67ad-0c32-4f3a-af98-f6d8bb686b3e.png" 
          alt="GPT Workspace Logo" 
          className="h-8 md:h-10"
        />
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-4">
          <MenubarMenu>
            <MenubarTrigger 
              className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap"
              onClick={() => scrollToSection("features")}
            >
              <Grid className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
              Features
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger 
              className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap"
              onClick={() => scrollToSection("pricing")}
            >
              <DollarSign className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-emerald-500" />
              Pricing
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger 
              className="cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap"
              onClick={() => scrollToSection("faq")}
            >
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
