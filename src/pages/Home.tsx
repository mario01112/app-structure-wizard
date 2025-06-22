
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
    type: "tween" as const,
    ease: "anticipate" as const,
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
        {/* Background effects with blue theme */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" as const,
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
          {/* Hero Section with Product Image and Avatar */}
          <motion.div 
            className="text-center space-y-6 py-12"
            variants={itemVariants}
          >
            {/* Product Image Hero */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                type: "spring" as const, 
                stiffness: 260, 
                damping: 20,
                delay: 0.3 
              }}
            >
              <div className="relative">
                <img 
                  src="/lovable-uploads/edc72c6e-e923-42b6-a59f-c944034f462e.png" 
                  alt="Nitric Boost Ultra"
                  className="w-64 h-64 object-contain filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Avatar 3D */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                type: "spring" as const, 
                stiffness: 260, 
                damping: 20,
                delay: 0.5 
              }}
            >
              <Avatar3D 
                name={user.name || "Champion"}
                type="male"
                size="lg"
                interactive={true}
              />
            </motion.div>

            {/* Welcome message in English */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Hello, {user.name?.split(' ')[0] || 'Champion'}! 
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl font-semibold text-white bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Your journey to power and vitality starts now 💪🔥
              </motion.p>
              {daysSinceStart > 0 && (
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 1.2, 
                    type: "spring" as const, 
                    stiffness: 300 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Trophy className="h-6 w-6" />
                  Day {daysSinceStart} of Transformation
                  <Heart className="h-6 w-6 animate-pulse" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Main CTA Button */}
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
              <Button className="text-2xl font-bold py-8 px-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-110 transition-all duration-300 shadow-2xl rounded-2xl border-2 border-white/20">
                🔥 GET MINE NOW 🔥
                <ShoppingCart className="h-8 w-8 ml-3" />
              </Button>
            </motion.a>
          </motion.div>

          {/* Feature Cards with Product Images */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {/* Exercise Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <Card 
                onClick={() => navigate("/exercises")}
                className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 border-blue-600/30 cursor-pointer transition-all duration-500 overflow-hidden group backdrop-blur-sm"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent group-hover:from-blue-600/40 transition-all duration-300"></div>
                  <div className="relative z-10 space-y-4">
                    {/* Customer Image */}
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-400/50">
                      <img 
                        src="/lovable-uploads/b160f4a0-4686-4b34-b029-0f7cda1f0725.png" 
                        alt="Happy Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" as const
                      }}
                    >
                      <Dumbbell className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Power Exercises</h3>
                    <p className="text-gray-300 text-lg">
                      Specific workouts to maximize your energy and vitality
                    </p>
                    <div className="flex items-center text-blue-400 font-semibold">
                      <span>Start Training</span>
                      <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Nitric AI Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <Card 
                onClick={() => navigate("/nitric-ai")}
                className="bg-gradient-to-br from-slate-900/90 to-cyan-900/90 border-cyan-600/30 cursor-pointer transition-all duration-500 overflow-hidden group backdrop-blur-sm"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent group-hover:from-cyan-600/40 transition-all duration-300"></div>
                  <div className="relative z-10 space-y-4">
                    {/* Customer Image */}
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-cyan-400/50">
                      <img 
                        src="/lovable-uploads/90990a71-17fe-4221-95da-493d29fe9687.png" 
                        alt="Satisfied Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: 1.5
                      }}
                    >
                      <Bot className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Nitric AI</h3>
                    <p className="text-gray-300 text-lg">
                      Your virtual coach for health, wellness and maximum performance
                    </p>
                    <div className="flex items-center text-cyan-400 font-semibold">
                      <span>Chat Now</span>
                      <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Daily Check-in with Customer Image */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 border-blue-600/50 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Customer testimonial image */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400/50">
                    <img 
                      src="/lovable-uploads/e197ea23-3acd-4f82-94fd-c58e338809df.png" 
                      alt="Customer Testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div 
                    className="relative"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" as const },
                      scale: { duration: 4, repeat: Infinity }
                    }}
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center shadow-inner">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-white">{user.progress.daysCompleted}</div>
                          <div className="text-sm text-gray-200">days</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-4">Daily Energy Check-in</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Track your progress and keep the flame of transformation burning 🔥
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="text-xl font-bold py-6 px-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-xl"
                        onClick={() => navigate("/progress")}
                      >
                        ⚡ Check-in Now ⚡
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={itemVariants}
          >
            {[
              { icon: Pill, title: "Instructions", subtitle: "How to use", color: "blue", delay: 0 },
              { icon: Zap, title: "Benefits", subtitle: "Results", color: "cyan", delay: 0.1 },
              { icon: Calendar, title: "Reminders", subtitle: "Automation", color: "blue", onClick: () => navigate("/reminders"), delay: 0.2 },
              { icon: Medal, title: "Progress", subtitle: "Evolution", color: "cyan", delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`transition-opacity delay-[${item.delay * 1000}ms]`}
              >
                <Card 
                  className={`bg-gradient-to-br from-slate-900/90 to-${item.color}-900/90 border-${item.color}-600/30 cursor-pointer backdrop-blur-sm`}
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
                        ease: "easeInOut" as const,
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
