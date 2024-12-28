import { Grid, DollarSign, HelpCircle, Download } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-4 bg-background border-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <Grid className="mr-2 h-4 w-4 text-emerald-500" />
          Features
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <DollarSign className="mr-2 h-4 w-4 text-emerald-500" />
          Pricing
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <HelpCircle className="mr-2 h-4 w-4 text-emerald-500" />
          FAQ
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <Download className="mr-2 h-4 w-4 text-emerald-500" />
          Download
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavigationMenu;