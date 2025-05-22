
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Medal, Pill, Calendar, Zap, ShoppingCart, Bot } from "lucide-react";

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
      <div className="space-y-6 py-6 relative z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Olá, {user.name.split(' ')[0]}!
          </h1>
          {daysSinceStart > 0 && (
            <div className="bg-gradient-to-r from-nitric-600 to-nitric-700 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg animate-pulse">
              <Calendar className="h-3 w-3 mr-1" />
              Dia {daysSinceStart}
            </div>
          )}
        </div>

        {/* Daily checkin card */}
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="bg-gradient-to-r from-nitric-600 to-purple-700 text-white p-5">
            <h2 className="font-bold text-xl">Seu progresso com Nitric Boost</h2>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 py-4">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-nitric-600/30 to-purple-700/30 flex items-center justify-center shadow-inner">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-nitric-600 to-purple-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{user.progress.daysCompleted}</div>
                    <div className="text-xs text-gray-200">dias</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-white">Check-in Diário</h3>
                <p className="text-gray-300 mt-2">
                  Registre seu uso diário do Nitric Boost e acompanhe seu progresso para resultados superiores
                </p>
                <Button 
                  className="mt-4 bg-gradient-to-r from-nitric-600 to-blue-700 hover:from-nitric-700 hover:to-blue-800 text-white shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("/progresso")}
                >
                  Fazer Check-in Agora
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nitric AI Card */}
        <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-blue-900/30">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="flex items-start gap-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center shadow-lg">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-white">Nitric IA - Seu Coach Virtual</h3>
                <p className="text-gray-300 mt-2">
                  Converse com nossa IA avançada para obter dicas personalizadas, tirar dúvidas e 
                  receber recomendações para melhorar seus resultados.
                </p>
                <Button 
                  className="mt-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("/nitric-ia")}
                >
                  Conversar com Nitric IA
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-lg">
            <CardContent className="p-5 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-3 shadow-lg">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-white">Instruções</h3>
              <p className="text-xs text-gray-400 mt-1">Como usar o Nitric Boost</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-lg">
            <CardContent className="p-5 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-3 shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-white">Benefícios</h3>
              <p className="text-xs text-gray-400 mt-1">Resultados esperados</p>
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
            <Button className="w-full py-6 text-lg bg-gradient-to-r from-nitric-600 to-red-600 hover:from-nitric-700 hover:to-red-700 text-white shadow-lg transition-all duration-300 hover:scale-105 group">
              <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Comprar Nitric Boost
            </Button>
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-6 space-y-4">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-lg">
            <CardContent className="p-5">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mr-4 shadow-lg">
                  <Medal className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Resultado Garantido</h3>
                  <p className="text-sm text-gray-400 mt-1">
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
