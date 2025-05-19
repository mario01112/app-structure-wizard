
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, User, LineChart, Bell, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Início" },
    { path: "/progresso", icon: LineChart, label: "Progresso" },
    { path: "/lembretes", icon: Bell, label: "Lembretes" },
    { path: "/perfil", icon: User, label: "Perfil" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 container max-w-4xl mx-auto pb-20">
        {children}
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t shadow-lg">
        <div className="container max-w-4xl mx-auto h-full">
          <nav className="flex items-center justify-between h-full px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary",
                  location.pathname === item.path && "text-primary font-medium"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                )} />
                <span className="text-xs mt-0.5">{item.label}</span>
              </Link>
            ))}
            
            <a
              href="https://getnitricboost.net/discovery#aff=Preciosa88"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-md p-1.5 text-white bg-nitric-600 hover:bg-nitric-700"
            >
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="text-xs mt-0.5">Comprar</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Layout;
