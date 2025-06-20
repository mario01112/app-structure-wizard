
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Medal, Pill, Calendar, Zap, ShoppingCart, Bot, Dumbbell, FlaskConical, ChevronRight, Sparkles, Heart, Trophy } from "lucide-react";

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
      <div className="space-y-8 py-6 relative min-h-screen">
        {/* Background effects */}
        <div className="fixed inset-0 bg-main-gradient opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-600/30 to-green-600/20 rounded-full blur-3xl animate-energy-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-600/30 to-red-600/20 rounded-full blur-3xl animate-energy-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Hero Section com Avatar 3D */}
        <div className="relative z-10 text-center space-y-6 py-12">
          {/* Avatar 3D */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full avatar-3d flex items-center justify-center animate-floating-avatar shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-energy-pulse">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Frase animada de boas-vindas */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold animate-text-energy">
              Olá, {user.name?.split(' ')[0] || 'Guerreiro'}! 
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white animate-text-energy">
              Sua jornada de potência e vitalidade começa agora 💪🔥
            </p>
            {daysSinceStart > 0 && (
              <div className="inline-flex items-center gap-2 bg-energy-gradient text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl animate-button-power">
                <Trophy className="h-6 w-6" />
                Dia {daysSinceStart} de Transformação
                <Heart className="h-6 w-6 animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Botão Principal CTA */}
        <div className="relative z-10 text-center">
          <a 
            href="https://getnitricboost.net/discovery#aff=Preciosa88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="text-2xl font-bold py-8 px-12 bg-energy-gradient hover:scale-110 transition-all duration-300 shadow-2xl animate-button-power rounded-2xl">
              🔥 QUERO O MEU AGORA 🔥
              <ShoppingCart className="h-8 w-8 ml-3" />
            </Button>
          </a>
        </div>

        {/* Cards de Funcionalidades */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card de Exercícios */}
          <Card 
            onClick={() => navigate("/exercicios")}
            className="bg-dark-elegant border-red-600/30 cursor-pointer hover-energy hover-glow transition-all duration-500 overflow-hidden group"
          >
            <CardContent className="p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent group-hover:from-red-600/40 transition-all duration-300"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 animate-energy-pulse">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Exercícios de Potência</h3>
                <p className="text-gray-300 text-lg">
                  Treinos específicos para maximizar sua energia e vitalidade
                </p>
                <div className="flex items-center text-red-400 font-semibold">
                  <span>Começar treino</span>
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card do Nitric IA */}
          <Card 
            onClick={() => navigate("/nitric-ia")}
            className="bg-dark-elegant border-green-600/30 cursor-pointer hover-energy hover-glow transition-all duration-500 overflow-hidden group"
          >
            <CardContent className="p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent group-hover:from-green-600/40 transition-all duration-300"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4 animate-energy-pulse">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nitric IA</h3>
                <p className="text-gray-300 text-lg">
                  Seu coach virtual para saúde, bem-estar e performance máxima
                </p>
                <div className="flex items-center text-green-400 font-semibold">
                  <span>Conversar agora</span>
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Check-in Diário */}
        <div className="relative z-10">
          <Card className="bg-dark-elegant border-red-600/50 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-600/30 to-green-600/30 flex items-center justify-center shadow-inner animate-energy-pulse">
                    <div className="w-24 h-24 rounded-full bg-energy-gradient flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white">{user.progress.daysCompleted}</div>
                        <div className="text-sm text-gray-200">dias</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">Check-in Diário de Energia</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Registre seu progresso e mantenha a chama da transformação acesa 🔥
                  </p>
                  <Button 
                    className="text-xl font-bold py-6 px-8 bg-energy-gradient hover:scale-105 transition-all duration-300 shadow-xl animate-button-power"
                    onClick={() => navigate("/progresso")}
                  >
                    ⚡ Check-in Agora ⚡
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Ações Rápidas */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-dark-elegant border-red-600/30 hover-energy cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mb-3 mx-auto animate-energy-pulse">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-white">Instruções</h4>
              <p className="text-xs text-gray-400 mt-1">Como usar</p>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-elegant border-green-600/30 hover-energy cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-3 mx-auto animate-energy-pulse">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-white">Benefícios</h4>
              <p className="text-xs text-gray-400 mt-1">Resultados</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-elegant border-red-600/30 hover-energy cursor-pointer" onClick={() => navigate("/lembretes")}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mb-3 mx-auto animate-energy-pulse">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-white">Lembretes</h4>
              <p className="text-xs text-gray-400 mt-1">Automação</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-elegant border-green-600/30 hover-energy cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-3 mx-auto animate-energy-pulse">
                <Medal className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-white">Progresso</h4>
              <p className="text-xs text-gray-400 mt-1">Evolução</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
