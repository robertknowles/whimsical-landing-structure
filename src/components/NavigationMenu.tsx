import { useState } from "react";
import { Menu, X, Grid, DollarSign, HelpCircle, Download } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 bg-background border-none px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-4 w-full">
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t md:hidden p-4 flex flex-col gap-4">
            <MenubarTrigger className="cursor-pointer flex items-center">
              <Grid className="mr-2 h-4 w-4 text-emerald-500" />
              Features
            </MenubarTrigger>
            <MenubarTrigger className="cursor-pointer flex items-center">
              <DollarSign className="mr-2 h-4 w-4 text-emerald-500" />
              Pricing
            </MenubarTrigger>
            <MenubarTrigger className="cursor-pointer flex items-center">
              <HelpCircle className="mr-2 h-4 w-4 text-emerald-500" />
              FAQ
            </MenubarTrigger>
            <MenubarTrigger className="cursor-pointer flex items-center">
              <Download className="mr-2 h-4 w-4 text-emerald-500" />
              Download
            </MenubarTrigger>
          </div>
        )}
      </div>
    </Menubar>
  );
};

export default NavigationMenu;