
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ExerciseItem } from "./ExerciseItem";
import { Exercise, Category } from "@/types/exercises";

interface ExerciseCategoryProps {
  category: Category;
  completedExercises: string[];
  onMarkComplete: (exerciseId: string) => void;
}

export const ExerciseCategory: React.FC<ExerciseCategoryProps> = ({
  category,
  completedExercises,
  onMarkComplete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const completedCount = category.exercises.filter(ex => 
    completedExercises.includes(ex.id)
  ).length;
  
  return (
    <Card className="shadow-sm">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="p-4 flex flex-row items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <CardTitle className="text-lg">{category.name}</CardTitle>
              <span className="ml-2 text-sm text-muted-foreground">
                ({completedCount}/{category.exercises.length})
              </span>
            </div>
            {isOpen ? (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            )}
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="p-4 pt-0">
            <div className="space-y-4">
              {category.exercises.map((exercise) => (
                <ExerciseItem
                  key={exercise.id}
                  exercise={exercise}
                  isCompleted={completedExercises.includes(exercise.id)}
                  onMarkComplete={() => onMarkComplete(exercise.id)}
                />
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
