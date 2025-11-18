import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import mobiLogo from "@/assets/mobi-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-card">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-foreground">
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center gap-2">
          <img src={mobiLogo} alt="MOBI+" className="w-8 h-8" />
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MOBI+
          </h1>
        </div>

        <Button variant="ghost" size="icon" className="text-foreground relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
