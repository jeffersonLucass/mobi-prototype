import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import mobiLogo from "@/assets/mobi-logo.png";
import { Link } from "react-router-dom";

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

        <div className="flex items-center gap-1">
          <Link to="/login">
            <Button variant="ghost" size="icon" className="text-foreground">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-foreground relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
