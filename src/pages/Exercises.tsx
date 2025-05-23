
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Flame, Zap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Exercises = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState<string[]>(
    user?.exercises?.completed || []
  );
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

  const exercises = [
    {
      id: "ponte-pelvica",
      title: "Ponte Pélvica",
      description: "Ativa a região pélvica, melhora a circulação e fortalece os glúteos.",
      duration: "3 séries de 12 repetições",
      icon: "🏋️‍♂️",
      color: "from-red-600 to-red-800"
    },
    {
      id: "respiracao-diafragmatica",
      title: "Respiração Diafragmática",
      description: "Reduz ansiedade, melhora oxigenação e foco mental.",
      duration: "5 minutos",
      icon: "🫁",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "agachamento",
      title: "Agachamento com Peso Corporal",
      description: "Estimula a testosterona, fortalece pernas e aumenta resistência.",
      duration: "3 séries de 15 repetições",
      icon: "💪",
      color: "from-green-600 to-green-800"
    },
    {
      id: "prancha-abdominal",
      title: "Prancha Abdominal",
      description: "Melhora o core, equilíbrio e resistência física.",
      duration: "3x 30 segundos",
      icon: "🔥",
      color: "from-orange-600 to-orange-800"
    }
  ];

  // Force navigation to login if not authenticated
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
      setTimeout(() => setShowCompletionAnimation(false), 2000);
      toast.success("Exercício concluído! 🔥");
    }
  };

  const handleWorkoutComplete = () => {
    if (completedExercises.length > 0) {
      setShowCompletionAnimation(true);
      setTimeout(() => setShowCompletionAnimation(false), 3000);
      toast.success("Treino finalizado! Parabéns! 💥", {
        description: "Você está no caminho certo para melhorar sua performance!"
      });
    } else {
      toast.error("Complete pelo menos um exercício primeiro!");
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="space-y-8 py-6 relative">
        {/* Animated completion overlay */}
        {showCompletionAnimation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center animate-scale-in">
              <Flame className="h-20 w-20 text-orange-500 mx-auto animate-pulse-glow mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Energia Máxima! 🔥</h2>
              <p className="text-gray-300">Exercício concluído com sucesso!</p>
            </div>
          </div>
        )}

        {/* Animated Title Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse-glow">
            💪 Exercícios para Performance Máxima
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Aumente sua energia, circulação e potência com movimentos simples e eficazes.
          </p>
        </div>
        
        {/* Exercise Cards Grid */}
        <div className="grid gap-6">
          {exercises.map((exercise, index) => (
            <Card 
              key={exercise.id} 
              className={`
                bg-gradient-to-r ${exercise.color} border-none shadow-2xl 
                transform transition-all duration-300 hover:scale-105 hover:shadow-3xl
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  {/* Exercise Icon/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center text-3xl backdrop-blur-sm">
                      {exercise.icon}
                    </div>
                  </div>
                  
                  {/* Exercise Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                    <p className="text-gray-100 leading-relaxed">{exercise.description}</p>
                    <div className="flex items-center gap-2 text-gray-200">
                      <Zap className="h-4 w-4" />
                      <span className="font-medium">{exercise.duration}</span>
                    </div>
                  </div>
                  
                  {/* Complete Button */}
                  <div className="flex-shrink-0">
                    <Button
                      onClick={() => markExerciseComplete(exercise.id)}
                      variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                      className={`
                        transition-all duration-300 transform hover:scale-110
                        ${completedExercises.includes(exercise.id) 
                          ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg' 
                          : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
                        }
                      `}
                    >
                      <CheckCircle className={`h-5 w-5 mr-2 ${completedExercises.includes(exercise.id) ? 'animate-pulse' : ''}`} />
                      {completedExercises.includes(exercise.id) ? 'Concluído' : 'Marcar'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Integration Section */}
        <Card className="bg-gradient-to-r from-purple-900 to-blue-900 border-none shadow-2xl animate-fade-in">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div className="inline-block p-3 bg-white/10 rounded-full">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Quer ajuda para personalizar sua rotina?</h3>
              <p className="text-gray-300">Nossa IA pode criar um plano personalizado baseado no seu perfil.</p>
              <Button 
                onClick={() => navigate("/nitric-ia")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                Falar com o Nitric IA 🤖
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Workout Completion Button */}
        <div className="text-center pt-6">
          <Button 
            onClick={handleWorkoutComplete}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-glow"
          >
            <Flame className="h-6 w-6 mr-2" />
            Finalizei meu treino 💥
          </Button>
        </div>

        {/* Progress Indicator */}
        {completedExercises.length > 0 && (
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">
                {completedExercises.length} de {exercises.length} exercícios concluídos
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Exercises;
