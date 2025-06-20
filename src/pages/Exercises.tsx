
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Flame, Zap, Trophy, Sparkles, Target } from "lucide-react";
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
      description: "Ativa a região pélvica, melhora a circulação e fortalece os glúteos para máxima potência.",
      duration: "3 séries de 12 repetições",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1469&auto=format&fit=crop",
      gradient: "from-red-600 to-red-800",
      borderColor: "border-red-500/50"
    },
    {
      id: "respiracao-diafragmatica",
      title: "Respiração Diafragmática",
      description: "Reduz ansiedade, melhora oxigenação e potencializa o foco mental para performance superior.",
      duration: "5 minutos de respiração profunda",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1469&auto=format&fit=crop",
      gradient: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500/50"
    },
    {
      id: "agachamento",
      title: "Agachamento Potência",
      description: "Estimula a testosterona, fortalece pernas e aumenta resistência para energia explosiva.",
      duration: "3 séries de 15 repetições",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1469&auto=format&fit=crop",
      gradient: "from-green-600 to-green-800",
      borderColor: "border-green-500/50"
    },
    {
      id: "prancha-abdominal",
      title: "Prancha de Força",
      description: "Melhora o core, equilíbrio e resistência física para máxima estabilidade e poder.",
      duration: "3x 30 segundos",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1469&auto=format&fit=crop",
      gradient: "from-orange-600 to-orange-800",
      borderColor: "border-orange-500/50"
    }
  ];

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
      toast.success("🔥 ENERGIA MÁXIMA! Exercício concluído! 💪", {
        description: "Você está ficando cada vez mais forte!"
      });
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

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-screen relative">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-main-gradient opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-600/30 to-green-600/20 rounded-full blur-3xl animate-energy-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-600/30 to-red-600/20 rounded-full blur-3xl animate-energy-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Animated completion overlay */}
        {showCompletionAnimation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg">
            <div className="text-center animate-completion-energy">
              <div className="w-32 h-32 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-energy-pulse">
                <Flame className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 animate-text-energy">
                ENERGIA MÁXIMA! 🔥
              </h2>
              <p className="text-2xl text-gray-300">Exercício concluído com sucesso!</p>
              <div className="flex justify-center space-x-4 mt-6">
                <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                <Trophy className="h-8 w-8 text-yellow-400 animate-pulse" />
                <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 space-y-8 py-6">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 bg-energy-gradient text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl animate-button-power">
              <Target className="h-8 w-8" />
              EXERCÍCIOS DE POTÊNCIA MÁXIMA
              <Flame className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold animate-text-energy">
              💪 Treine Como Um Guerreiro 💪
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Aumente sua energia, circulação e potência com movimentos estratégicos para máxima performance
            </p>
          </div>
          
          {/* Exercise Cards Grid */}
          <div className="grid gap-8 max-w-6xl mx-auto">
            {exercises.map((exercise, index) => (
              <Card 
                key={exercise.id} 
                className={`
                  bg-dark-elegant ${exercise.borderColor} border-2 shadow-2xl 
                  transform transition-all duration-500 hover:scale-105 hover-glow
                  animate-fade-in overflow-hidden
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Exercise Image */}
                    <div className="lg:w-1/3 relative overflow-hidden">
                      <img 
                        src={exercise.image} 
                        alt={exercise.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${exercise.gradient} opacity-60`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-energy-pulse">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Exercise Content */}
                    <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl font-bold text-white">{exercise.title}</h3>
                          <div className={`w-3 h-3 rounded-full ${completedExercises.includes(exercise.id) ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">{exercise.description}</p>
                        <div className="flex items-center gap-3 text-gray-200 text-lg">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${exercise.gradient} flex items-center justify-center`}>
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-semibold">{exercise.duration}</span>
                        </div>
                      </div>
                      
                      {/* Complete Button */}
                      <div className="pt-6">
                        <Button
                          onClick={() => markExerciseComplete(exercise.id)}
                          className={`
                            w-full text-xl font-bold py-6 transition-all duration-300 transform hover:scale-105
                            ${completedExercises.includes(exercise.id) 
                              ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 animate-energy-pulse' 
                              : `bg-gradient-to-r ${exercise.gradient} hover:shadow-2xl animate-button-power`
                            }
                          `}
                        >
                          <CheckCircle className={`h-6 w-6 mr-3 ${completedExercises.includes(exercise.id) ? 'animate-pulse' : ''}`} />
                          {completedExercises.includes(exercise.id) ? '✅ CONCLUÍDO COM ENERGIA!' : '🔥 CONQUISTAR AGORA!'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Integration Section */}
          <Card className="bg-dark-elegant border-purple-600/50 border-2 shadow-2xl animate-fade-in hover-glow">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-energy-pulse">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Quer um plano personalizado de guerreiro?</h3>
                <p className="text-xl text-gray-300">Nossa IA pode criar uma rotina explosiva baseada no seu perfil único.</p>
                <Button 
                  onClick={() => navigate("/nitric-ia")}
                  className="text-xl font-bold py-6 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl transform transition-all duration-300 hover:scale-110 animate-button-power"
                >
                  🤖 FALAR COM NITRIC IA AGORA 🚀
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Workout Completion Button */}
          <div className="text-center pt-8">
            <Button 
              onClick={handleWorkoutComplete}
              className="text-3xl font-bold py-8 px-12 bg-energy-gradient hover:scale-110 transition-all duration-300 shadow-2xl animate-button-power rounded-2xl"
            >
              <Trophy className="h-8 w-8 mr-3" />
              🏆 FINALIZEI COMO UM GUERREIRO! 💥
              <Flame className="h-8 w-8 ml-3" />
            </Button>
          </div>

          {/* Progress Indicator */}
          {completedExercises.length > 0 && (
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/30 to-green-800/30 text-green-300 px-8 py-4 rounded-full border border-green-500/50 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 animate-pulse" />
                <span className="text-xl font-bold">
                  {completedExercises.length} de {exercises.length} exercícios conquistados! 🔥
                </span>
                <Sparkles className="h-6 w-6 animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Exercises;
