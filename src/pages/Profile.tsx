
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  User, 
  LogOut, 
  Calendar, 
  ShoppingCart, 
  Settings, 
  HelpCircle,
  Shield
} from "lucide-react";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Force navigation to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const startDate = user.progress.startDate 
    ? format(new Date(user.progress.startDate), "PPP", { locale: ptBR }) 
    : "Não registrado";
    
  return (
    <Layout>
      <div className="space-y-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Perfil</h1>

        <Card className="overflow-hidden shadow-md">
          <div className="bg-nitric-600 p-6 text-white">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Data de início</span>
                </div>
                <span className="text-gray-900 font-medium">{startDate}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Total de dias</span>
                </div>
                <span className="text-gray-900 font-medium">{user.progress.daysCompleted}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Ações</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <a 
              href="https://getnitricboost.net/discovery#aff=Preciosa88"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
            >
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-3 text-nitric-600" />
                <span>Comprar Nitric Boost</span>
              </div>
            </a>
            <Separator />
            <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-3 text-gray-500" />
                <span>Configurações</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
                <span>Ajuda e Suporte</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-gray-500" />
                <span>Política de Privacidade</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Button 
            variant="outline" 
            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair da conta
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
