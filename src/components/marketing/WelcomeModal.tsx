
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Crown, Star, Gift, Users } from "lucide-react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds on first visit
    const hasSeenWelcome = localStorage.getItem("nitric-welcome-seen");
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("nitric-welcome-seen", "true");
  };

  const handleJoinVIP = () => {
    handleClose();
    window.open("https://t.me/+lAtiWgthKXk0MTNk", "_blank", "noopener,noreferrer");
  };

  const handleBuyNow = () => {
    handleClose();
    window.open("https://getnitricboost.net/discovery#aff=Preciosa88", "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-slate-900 to-blue-900 border-2 border-cyan-500/50 text-white p-0 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 w-8 h-8 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>

            {/* Header with animated background */}
            <motion.div 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-center relative overflow-hidden"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              {/* Floating icons */}
              <motion.div 
                className="absolute top-4 left-4 text-3xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🔥
              </motion.div>
              <motion.div 
                className="absolute top-4 right-16 text-3xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ⚡
              </motion.div>

              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Welcome to Nitric IA! 🚀
              </motion.h2>
              <motion.p 
                className="text-xl text-cyan-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Transform your life with AI-powered fitness
              </motion.p>
            </motion.div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Benefits */}
              <motion.div 
                className="space-y-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-center text-white mb-4">
                  🎯 Exclusive Benefits Await You:
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Crown, text: "VIP Access", color: "yellow" },
                    { icon: Star, text: "AI Coach 24/7", color: "blue" },
                    { icon: Gift, text: "Exclusive Content", color: "green" },
                    { icon: Users, text: "Elite Community", color: "purple" }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-r from-slate-800 to-${benefit.color}-900/50 p-4 rounded-lg border border-${benefit.color}-500/30`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <benefit.icon className={`h-8 w-8 text-${benefit.color}-400 mx-auto mb-2`} />
                      <p className="text-white text-sm font-semibold text-center">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/20"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">89,500+</div>
                    <div className="text-gray-400 text-sm">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">96.7%</div>
                    <div className="text-gray-400 text-sm">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">+615%</div>
                    <div className="text-gray-400 text-sm">Growth</div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="space-y-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                {/* VIP Group Button */}
                <Button
                  onClick={handleJoinVIP}
                  className="w-full h-14 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white transition-all duration-300 hover:scale-105 shadow-lg text-lg font-bold"
                >
                  <Crown className="h-6 w-6 mr-3" />
                  Join VIP Telegram Group (2,500+ Members)
                  <ExternalLink className="h-5 w-5 ml-3" />
                </Button>

                {/* Buy Now Button */}
                <Button
                  onClick={handleBuyNow}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all duration-300 hover:scale-105 shadow-lg text-lg font-bold"
                >
                  <Gift className="h-6 w-6 mr-3" />
                  🔥 GET NITRIC BOOST NOW 🔥
                  <ExternalLink className="h-5 w-5 ml-3" />
                </Button>

                {/* Continue Button */}
                <Button
                  onClick={handleClose}
                  variant="ghost"
                  className="w-full text-gray-400 hover:text-white hover:bg-slate-800/50"
                >
                  Continue to App
                </Button>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
