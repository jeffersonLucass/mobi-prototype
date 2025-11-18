import { Home, Search, Bookmark, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Início", path: "/" },
    { icon: Search, label: "Buscar", path: "/search" },
    { icon: Bookmark, label: "Salvos", path: "/saved" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-card">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors"
              activeClassName="text-primary bg-primary/10"
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
