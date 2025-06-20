
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Avatar3D from "@/components/Avatar3D";
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

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Layout>
      <motion.div 
        className="space-y-8 py-6 relative min-h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Background effects */}
        <div className="fixed inset-0 bg-main-gradient opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-600/30 to-green-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-600/30 to-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <motion.div
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section com Avatar 3D */}
          <motion.div 
            className="text-center space-y-6 py-12"
            variants={itemVariants}
          >
            {/* Avatar 3D */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.5 
              }}
            >
              <Avatar3D 
                name={user.name || "Guerreiro"}
                type="male"
                size="lg"
                interactive={true}
              />
            </motion.div>

            {/* Frase animada de boas-vindas */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold animate-text-energy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Olá, {user.name?.split(' ')[0] || 'Guerreiro'}! 
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl font-semibold text-white animate-text-energy"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Sua jornada de potência e vitalidade começa agora 💪🔥
              </motion.p>
              {daysSinceStart > 0 && (
                <motion.div 
                  className="inline-flex items-center gap-2 bg-energy-gradient text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 1.2, 
                    type: "spring", 
                    stiffness: 300 
                  }}
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                      "0 0 40px rgba(34, 197, 94, 0.7)",
                      "0 0 20px rgba(239, 68, 68, 0.5)"
                    ]
                  }}
                >
                  <Trophy className="h-6 w-6" />
                  Dia {daysSinceStart} de Transformação
                  <Heart className="h-6 w-6 animate-pulse" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Botão Principal CTA */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.a 
              href="https://getnitricboost.net/discovery#aff=Preciosa88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="text-2xl font-bold py-8 px-12 bg-energy-gradient hover:scale-110 transition-all duration-300 shadow-2xl animate-button-power rounded-2xl">
                🔥 QUERO O MEU AGORA 🔥
                <ShoppingCart className="h-8 w-8 ml-3" />
              </Button>
            </motion.a>
          </motion.div>

          {/* Cards de Funcionalidades */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {/* Card de Exercícios */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                onClick={() => navigate("/exercicios")}
                className="bg-dark-elegant border-red-600/30 cursor-pointer hover-energy hover-glow transition-all duration-500 overflow-hidden group"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent group-hover:from-red-600/40 transition-all duration-300"></div>
                  <div className="relative z-10 space-y-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Dumbbell className="h-8 w-8 text-white" />
                    </motion.div>
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
            </motion.div>

            {/* Card do Nitric IA */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                onClick={() => navigate("/nitric-ia")}
                className="bg-dark-elegant border-green-600/30 cursor-pointer hover-energy hover-glow transition-all duration-500 overflow-hidden group"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent group-hover:from-green-600/40 transition-all duration-300"></div>
                  <div className="relative z-10 space-y-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      <Bot className="h-8 w-8 text-white" />
                    </motion.div>
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
            </motion.div>
          </motion.div>

          {/* Check-in Diário */}
          <motion.div variants={itemVariants}>
            <Card className="bg-dark-elegant border-red-600/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div 
                    className="relative"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity }
                    }}
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-600/30 to-green-600/30 flex items-center justify-center shadow-inner">
                      <div className="w-24 h-24 rounded-full bg-energy-gradient flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-white">{user.progress.daysCompleted}</div>
                          <div className="text-sm text-gray-200">dias</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-4">Check-in Diário de Energia</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Registre seu progresso e mantenha a chama da transformação acesa 🔥
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="text-xl font-bold py-6 px-8 bg-energy-gradient hover:scale-105 transition-all duration-300 shadow-xl"
                        onClick={() => navigate("/progresso")}
                      >
                        ⚡ Check-in Agora ⚡
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Grid de Ações Rápidas */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={itemVariants}
          >
            {[
              { icon: Pill, title: "Instruções", subtitle: "Como usar", color: "red", delay: 0 },
              { icon: Zap, title: "Benefícios", subtitle: "Resultados", color: "green", delay: 0.1 },
              { icon: Calendar, title: "Lembretes", subtitle: "Automação", color: "red", onClick: () => navigate("/lembretes"), delay: 0.2 },
              { icon: Medal, title: "Progresso", subtitle: "Evolução", color: "green", delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`transition-opacity delay-[${item.delay * 1000}ms]`}
              >
                <Card 
                  className={`bg-dark-elegant border-${item.color}-600/30 hover-energy cursor-pointer`}
                  onClick={item.onClick}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-${item.color}-700 rounded-full flex items-center justify-center mb-3 mx-auto`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay
                      }}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Home;
