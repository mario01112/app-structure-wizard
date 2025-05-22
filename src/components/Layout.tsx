
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, User, LineChart, Bell, ShoppingCart, Dumbbell, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Início" },
    { path: "/progresso", icon: LineChart, label: "Progresso" },
    { path: "/exercicios", icon: Dumbbell, label: "Exercícios" },
    { path: "/nitric-ia", icon: Bot, label: "Nitric IA" },
    { path: "/lembretes", icon: Bell, label: "Lembretes" },
    { path: "/perfil", icon: User, label: "Perfil" },
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="fixed top-0 left-0 w-[80vw] h-[40vh] bg-blue-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-0 w-[50vw] h-[40vh] bg-purple-900/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Main content */}
      <main className="flex-1 container max-w-4xl mx-auto pb-20 relative z-10">
        {children}
      </main>
      
      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-800 shadow-lg z-20">
        <div className="container max-w-4xl mx-auto h-full">
          <nav className="flex items-center justify-between h-full px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center rounded-md p-1.5 text-gray-400 transition-all duration-300 hover:text-white",
                  location.pathname === item.path && "text-white font-medium"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-all duration-300",
                  location.pathname === item.path 
                    ? "text-blue-400" 
                    : "text-gray-400 group-hover:text-white"
                )} />
                <span className="text-xs mt-0.5">{item.label}</span>
              </Link>
            ))}
            
            <a
              href="https://getnitricboost.net/discovery#aff=Preciosa88"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-md p-1.5 text-white bg-gradient-to-r from-nitric-600 to-red-600 hover:from-nitric-700 hover:to-red-700 transition-all duration-300 shadow-lg"
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
