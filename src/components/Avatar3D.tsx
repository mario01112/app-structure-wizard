
import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Zap } from 'lucide-react';

interface Avatar3DProps {
  name: string;
  type?: 'male' | 'female';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

const Avatar3D = ({ name, type = 'male', size = 'md', interactive = true }: Avatar3DProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const avatarVariants = {
    idle: {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    },
    hover: {
      scale: 1.1,
      rotateY: 15,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay: 0.5
      }
    }
  };

  const getAvatarGradient = () => {
    return type === 'female' 
      ? 'from-pink-500 via-purple-500 to-red-500'
      : 'from-blue-500 via-green-500 to-red-500';
  };

  return (
    <motion.div 
      className="relative inline-block"
      variants={floatingVariants}
      animate="animate"
    >
      <motion.div
        className={`
          ${sizeClasses[size]} rounded-full relative overflow-hidden
          bg-gradient-to-br ${getAvatarGradient()}
          shadow-2xl border-4 border-white/20
          backdrop-blur-sm
        `}
        variants={avatarVariants}
        initial="idle"
        animate="idle"
        whileHover={interactive ? "hover" : undefined}
        style={{
          background: `linear-gradient(135deg, 
            ${type === 'female' ? '#ec4899, #8b5cf6, #ef4444' : '#3b82f6, #10b981, #ef4444'}
          )`,
          boxShadow: `
            0 0 30px rgba(${type === 'female' ? '236, 72, 153' : '59, 130, 246'}, 0.5),
            inset 0 0 30px rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Avatar Inner Content */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
          <motion.div
            className="text-white font-bold"
            style={{ fontSize: size === 'lg' ? '2rem' : size === 'md' ? '1.5rem' : '1rem' }}
            animate={{
              scale: [1, 1.05, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            {name?.charAt(0).toUpperCase() || <User className="h-6 w-6" />}
          </motion.div>
        </div>

        {/* Energy Particles */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          variants={sparkleVariants}
          animate="animate"
        >
          <Sparkles className="h-3 w-3 text-white p-0.5" />
        </motion.div>

        <motion.div
          className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        >
          <Zap className="h-2 w-2 text-white p-0.5" />
        </motion.div>

        {/* 3D Effect Layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
        <div className="absolute inset-0 rounded-full border border-white/30"></div>
      </motion.div>

      {/* Status Indicator */}
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Avatar3D;
