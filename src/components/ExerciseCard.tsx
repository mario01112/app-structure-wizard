
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Play, Pause, RotateCcw, Clock, Target, Zap, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface ExerciseCardProps {
  exercise: {
    id: string;
    title: string;
    description: string;
    duration: string;
    difficulty: string;
    category: string;
    benefits: string[];
    instructions: string[];
    videoUrl?: string;
    thumbnailUrl: string;
    gradient: string;
    borderColor: string;
    energyColor: string;
  };
  isCompleted: boolean;
  onComplete: (exerciseId: string) => void;
  index: number;
}

const ExerciseCard = ({ exercise, isCompleted, onComplete, index }: ExerciseCardProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const instructionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleComplete = () => {
    onComplete(exercise.id);
    
    // Trigger celebration animation
    toast.success(`🔥 ${exercise.title} conquistado! Energia máxima! 💪`, {
      description: "Você está ficando cada vez mais forte!"
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'iniciante': return 'text-green-400 bg-green-900/30';
      case 'intermediário': return 'text-yellow-400 bg-yellow-900/30';
      case 'avançado': return 'text-red-400 bg-red-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="w-full"
    >
      <Card className={`
        bg-dark-elegant ${exercise.borderColor} border-2 shadow-2xl 
        transition-all duration-500 hover-glow overflow-hidden
        ${isCompleted ? 'ring-2 ring-green-500/50' : ''}
      `}>
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row">
            {/* Exercise Media */}
            <div className="lg:w-2/5 relative overflow-hidden group">
              <motion.div
                className="relative h-64 lg:h-full"
                variants={videoVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Thumbnail/Video Container */}
                <div className="relative w-full h-full">
                  <img 
                    src={exercise.thumbnailUrl} 
                    alt={exercise.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${exercise.gradient} opacity-60`}></div>
                  
                  {/* Video Player (if available) */}
                  {exercise.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        onClick={() => setIsVideoLoaded(true)}
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="h-8 w-8 text-white ml-1" />
                      </motion.button>
                    </div>
                  )}

                  {/* Video Player Modal */}
                  {isVideoLoaded && exercise.videoUrl && (
                    <motion.div
                      className="absolute inset-0 bg-black/90 flex items-center justify-center z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="relative w-full h-full">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          poster={exercise.thumbnailUrl}
                          onPlay={() => setIsVideoPlaying(true)}
                          onPause={() => setIsVideoPlaying(false)}
                        >
                          <source src={exercise.videoUrl} type="video/mp4" />
                          Seu navegador não suporta vídeo.
                        </video>
                        
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <Button
                            onClick={handleVideoToggle}
                            variant="outline"
                            size="sm"
                            className="bg-black/50 border-white/30 text-white hover:bg-black/70"
                          >
                            {isVideoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          
                          <Button
                            onClick={() => setIsVideoLoaded(false)}
                            variant="outline"
                            size="sm"
                            className="bg-black/50 border-white/30 text-white hover:bg-black/70"
                          >
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>

                {/* Completion Badge */}
                {isCompleted && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
            
            {/* Exercise Content */}
            <div className="lg:w-3/5 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{exercise.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{exercise.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-base leading-relaxed">{exercise.description}</p>
                
                {/* Category and Benefits */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exercise.gradient} text-white`}>
                    <Target className="h-3 w-3 inline mr-1" />
                    {exercise.category}
                  </span>
                </div>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {exercise.benefits.slice(0, 4).map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <TrendingUp className="h-3 w-3 text-green-400" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Instructions Toggle */}
                <Button
                  onClick={() => setShowInstructions(!showInstructions)}
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  {showInstructions ? 'Ocultar' : 'Ver'} Instruções
                </Button>

                {/* Instructions */}
                <motion.div
                  variants={instructionVariants}
                  initial="hidden"
                  animate={showInstructions ? "visible" : "hidden"}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">Como executar:</h4>
                    <ol className="space-y-2">
                      {exercise.instructions.map((instruction, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 font-bold min-w-[20px]">{idx + 1}.</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              </div>
              
              {/* Complete Button */}
              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleComplete}
                    className={`
                      w-full text-lg font-bold py-6 transition-all duration-300
                      ${isCompleted 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
                        : `bg-gradient-to-r ${exercise.gradient} hover:shadow-2xl`
                      }
                    `}
                    disabled={isCompleted}
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isCompleted ? (
                        <>
                          <CheckCircle className="h-6 w-6" />
                          ✅ CONQUISTADO COM ENERGIA!
                        </>
                      ) : (
                        <>
                          <Zap className="h-6 w-6" />
                          🔥 CONQUISTAR AGORA!
                        </>
                      )}
                    </div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExerciseCard;
