
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Zap, Video, MessageCircle, Crown, Gift } from "lucide-react";

const VIPCallToAction = () => {
  const benefits = [
    { icon: MessageCircle, text: "Suporte direto 24/7 com especialistas" },
    { icon: Video, text: "Vídeos exclusivos de treinos avançados" },
    { icon: Gift, text: "Dicas secretas de nutrição e suplementação" },
    { icon: Zap, text: "Acesso antecipado a novos recursos do app" },
    { icon: Users, text: "Comunidade de guerreiros motivados como você" },
    { icon: Crown, text: "Sessões ao vivo com o CEO Mario" }
  ];

  const handleJoinVIP = () => {
    window.open("https://t.me/+lAtiWgthKXk0MTNk", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section 
      className="space-y-6"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-gradient-to-br from-slate-900/95 to-cyan-900/95 border-cyan-400/50 backdrop-blur-sm overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <CardContent className="p-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Alert Header */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-4 py-2 rounded-full font-bold text-lg">
                🚨 ACESSO EXCLUSIVO GARANTIDO 🚨
              </div>
            </motion.div>

            {/* Main Message */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Join Our VIP Telegram Group
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ao comprar o suplemento ou baixar o app, você terá acesso imediato ao nosso 
                <span className="text-cyan-400 font-bold"> Grupo VIP no Telegram</span> — 
                com dicas exclusivas, vídeos bônus e suporte direto com o CEO Mario.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-cyan-400/20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">✅ {benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6 border-y border-cyan-400/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">2,500+</div>
                <div className="text-gray-300">Guerreiros no Grupo</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300">Suporte Ativo</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">100%</div>
                <div className="text-gray-300">Exclusivo</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleJoinVIP}
                className="text-2xl font-bold py-6 px-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-cyan-400/50 rounded-2xl"
              >
                <MessageCircle className="h-8 w-8 mr-3" />
                🔥 ENTRAR NO GRUPO VIP 🔥
                <ExternalLink className="h-6 w-6 ml-3" />
              </Button>
            </motion.div>

            {/* Bottom Message */}
            <motion.p 
              className="text-cyan-400 font-bold text-lg"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡ SEJA O PRÓXIMO A TRANSFORMAR SUA VIDA! ⚡
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default VIPCallToAction;
