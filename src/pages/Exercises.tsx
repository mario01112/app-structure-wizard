
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import ExerciseCard from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Flame, Trophy, Sparkles, Target, Filter, Grid, List } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { extendedExercises, exerciseCategories } from "@/data/extendedExercises";

const Exercises = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState<string[]>(
    user?.exercises?.completed || []
  );
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const markExerciseComplete = (exerciseId: string) => {
    if (completedExercises.includes(exerciseId)) {
      setCompletedExercises(completedExercises.filter(id => id !== exerciseId));
      toast.info("Exercício desmarcado");
    } else {
      setCompletedExercises([...completedExercises, exerciseId]);
      setShowCompletionAnimation(true);
      setTimeout(() => setShowCompletionAnimation(false), 3000);
    }
  };

  const handleWorkoutComplete = () => {
    if (completedExercises.length > 0) {
      setShowCompletionAnimation(true);
      setTimeout(() => setShowCompletionAnimation(false), 3000);
      toast.success("🏆 TREINO FINALIZADO! GUERREIRO IMPARÁVEL! 💥", {
        description: "Sua energia está no máximo! Continue assim!"
      });
    } else {
      toast.error("Complete pelo menos um exercício para sentir a energia!");
    }
  };

  const filteredExercises = selectedCategory === "todos" 
    ? extendedExercises 
    : extendedExercises.filter(exercise => 
        exercise.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <motion.div 
        className="min-h-screen relative"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Background Effects */}
        <div className="fixed inset-0 bg-main-gradient opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-600/30 to-green-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-600/30 to-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Animated completion overlay */}
        <AnimatePresence>
          {showCompletionAnimation && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="text-center"
                initial={{ scale: 0.5, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.5, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-32 h-32 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  <Flame className="h-16 w-16 text-white" />
                </motion.div>
                <motion.h2 
                  className="text-5xl font-bold text-white mb-4 animate-text-energy"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ENERGIA MÁXIMA! 🔥
                </motion.h2>
                <motion.p 
                  className="text-2xl text-gray-300"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Exercício concluído com sucesso!
                </motion.p>
                <motion.div 
                  className="flex justify-center space-x-4 mt-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                  <Trophy className="h-8 w-8 text-yellow-400 animate-pulse" />
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 space-y-8 py-6">
          {/* Title Section */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-energy-gradient text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 40px rgba(34, 197, 94, 0.7)"
                ]
              }}
              transition={{
                boxShadow: { 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <Target className="h-8 w-8" />
              EXERCÍCIOS DE POTÊNCIA MÁXIMA
              <Flame className="h-8 w-8" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold animate-text-energy"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              💪 Treine Como Um Guerreiro 💪
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Aumente sua energia, circulação e potência com movimentos estratégicos para máxima performance
            </motion.p>
          </motion.div>

          {/* Filter and View Controls */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCategory("todos")}
                variant={selectedCategory === "todos" ? "default" : "outline"}
                className={`${selectedCategory === "todos" ? 'bg-energy-gradient' : 'border-gray-600 text-gray-300 hover:bg-gray-800'}`}
              >
                <Filter className="h-4 w-4 mr-2" />
                Todos
              </Button>
              {exerciseCategories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={`${selectedCategory === category.name ? 'bg-energy-gradient' : 'border-gray-600 text-gray-300 hover:bg-gray-800'}`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                onClick={() => setViewMode("grid")}
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                className={viewMode === "grid" ? 'bg-energy-gradient' : 'border-gray-600 text-gray-300'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setViewMode("list")}
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                className={viewMode === "list" ? 'bg-energy-gradient' : 'border-gray-600 text-gray-300'}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          
          {/* Exercise Cards */}
          <motion.div 
            className={`max-w-6xl mx-auto ${viewMode === "grid" ? "space-y-8" : "space-y-4"}`}
            layout
          >
            <AnimatePresence mode="wait">
              {filteredExercises.map((exercise, index) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  isCompleted={completedExercises.includes(exercise.id)}
                  onComplete={markExerciseComplete}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* AI Integration Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Card className="bg-dark-elegant border-purple-600/50 border-2 shadow-2xl hover-glow max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <motion.div 
                  className="space-y-6"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <MessageCircle className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Quer um plano personalizado de guerreiro?</h3>
                  <p className="text-xl text-gray-300">Nossa IA pode criar uma rotina explosiva baseada no seu perfil único.</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => navigate("/nitric-ia")}
                      className="text-xl font-bold py-6 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl transition-all duration-300"
                    >
                      🤖 FALAR COM NITRIC IA AGORA 🚀
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Workout Completion Button */}
          <motion.div 
            className="text-center pt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleWorkoutComplete}
                className="text-3xl font-bold py-8 px-12 bg-energy-gradient hover:scale-110 transition-all duration-300 shadow-2xl rounded-2xl"
              >
                <Trophy className="h-8 w-8 mr-3" />
                🏆 FINALIZEI COMO UM GUERREIRO! 💥
                <Flame className="h-8 w-8 ml-3" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Progress Indicator */}
          <AnimatePresence>
            {completedExercises.length > 0 && (
              <motion.div 
                className="text-center"
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -50, opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/30 to-green-800/30 text-green-300 px-8 py-4 rounded-full border border-green-500/50 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 animate-pulse" />
                  <span className="text-xl font-bold">
                    {completedExercises.length} de {filteredExercises.length} exercícios conquistados! 🔥
                  </span>
                  <Sparkles className="h-6 w-6 animate-pulse" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Exercises;
