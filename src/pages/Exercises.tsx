
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { ExerciseCategory } from "@/components/exercises/ExerciseCategory";
import { exerciseCategories } from "@/data/exercisesData";

const Exercises = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState<string[]>(
    user?.exercises?.completed || []
  );

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
      toast.success("Exercício concluído!");
    }
    
    // Here you would update the user's completed exercises in your backend
    // This is just a UI demo for now
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="space-y-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Exercícios para Performance</h1>
        
        <p className="text-muted-foreground mb-6">
          Estes exercícios foram selecionados para ajudar a melhorar sua circulação, força e bem-estar geral.
        </p>
        
        <div className="space-y-4">
          {exerciseCategories.map((category) => (
            <ExerciseCategory 
              key={category.id}
              category={category}
              completedExercises={completedExercises}
              onMarkComplete={markExerciseComplete}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Exercises;
