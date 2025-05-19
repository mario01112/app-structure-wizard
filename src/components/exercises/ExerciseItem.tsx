
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Exercise } from "@/types/exercises";

interface ExerciseItemProps {
  exercise: Exercise;
  isCompleted: boolean;
  onMarkComplete: () => void;
}

export const ExerciseItem: React.FC<ExerciseItemProps> = ({
  exercise,
  isCompleted,
  onMarkComplete,
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card className={`border ${isCompleted ? 'bg-gray-50 border-green-100' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-base font-medium flex items-center">
              {exercise.name}
              {isCompleted && (
                <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
              )}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {exercise.shortDescription}
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setExpanded(!expanded)}
            className="p-1"
          >
            {expanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-4">
            <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
              <img 
                src={exercise.imageSrc} 
                alt={exercise.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Como fazer:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {exercise.steps.map((step, index) => (
                  <li key={index} className="text-sm">{step}</li>
                ))}
              </ul>
            </div>
            
            {exercise.tip && (
              <div className="bg-blue-50 p-3 rounded-md">
                <h4 className="font-medium text-sm">💡 Dica:</h4>
                <p className="text-sm">{exercise.tip}</p>
              </div>
            )}
            
            <div className="pt-2">
              <Button 
                onClick={onMarkComplete}
                variant={isCompleted ? "outline" : "default"}
                className={isCompleted ? "" : "bg-nitric-600 hover:bg-nitric-700"}
                size="sm"
                className="w-full"
              >
                {isCompleted ? "Desmarcar" : "Marcar como feito ✅"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
