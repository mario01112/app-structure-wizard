
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Medal, Pill, Calendar, Zap, ShoppingCart } from "lucide-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth();
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

  // Calculate days since starting
  const daysSinceStart = user.progress.startDate 
    ? Math.floor((new Date().getTime() - new Date(user.progress.startDate).getTime()) / (1000 * 3600 * 24))
    : 0;

  return (
    <Layout>
      <div className="space-y-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Olá, {user.name.split(' ')[0]}!
          </h1>
          {daysSinceStart > 0 && (
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Dia {daysSinceStart}
            </div>
          )}
        </div>

        {/* Daily checkin card */}
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="bg-nitric-600 text-white p-4">
            <h2 className="font-bold text-lg">Seu progresso com Nitric Boost</h2>
          </div>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 py-2">
              <div className="h-24 w-24 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-nitric-600">{user.progress.daysCompleted}</div>
                  <div className="text-xs text-gray-500">dias</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Check-in Diário</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Registre seu uso diário do Nitric Boost e acompanhe seu progresso
                </p>
                <Button 
                  className="mt-3 bg-nitric-600 hover:bg-nitric-700"
                  onClick={() => navigate("/progresso")}
                >
                  Fazer Check-in
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Pill className="h-5 w-5 text-nitric-600" />
              </div>
              <h3 className="font-medium text-sm">Instruções</h3>
              <p className="text-xs text-gray-500 mt-1">Como usar o Nitric Boost</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-medium text-sm">Benefícios</h3>
              <p className="text-xs text-gray-500 mt-1">Resultados esperados</p>
            </CardContent>
          </Card>
        </div>

        {/* Buy now button */}
        <div className="mt-8">
          <a 
            href="https://getnitricboost.net/discovery#aff=Preciosa88"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full py-6 text-lg bg-nitric-600 hover:bg-nitric-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Comprar Nitric Boost
            </Button>
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-6 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <Medal className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium">Resultado Garantido</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    O Nitric Boost foi formulado para melhorar seu desempenho físico e saúde
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
