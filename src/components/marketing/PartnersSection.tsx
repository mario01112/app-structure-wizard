
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, Zap, Pill, Heart, Dumbbell, FlaskConical } from "lucide-react";

const partners = [
  {
    name: "VitalTech Solutions",
    category: "Tecnologia em Saúde",
    description: "Integração de IA avançada para análise de performance",
    icon: Zap,
    flag: "🌍",
    color: "blue"
  },
  {
    name: "BioBoost Brasil",
    category: "Suplementos Naturais",
    description: "Desenvolvimento conjunto de fórmulas exclusivas",
    icon: Pill,
    flag: "🇧🇷",
    color: "green"
  },
  {
    name: "FitMind Corporation",
    category: "Wellness & AI",
    description: "Algoritmos de machine learning para personalização",
    icon: Building2,
    flag: "🇺🇸",
    color: "purple"
  },
  {
    name: "NutraMax International",
    category: "Nutrição Esportiva",
    description: "Pesquisa científica e validação de resultados",
    icon: FlaskConical,
    flag: "🌿",
    color: "cyan"
  },
  {
    name: "HealthAfrica Angola",
    category: "Saúde Natural",
    description: "Expansão e adaptação cultural para mercado africano",
    icon: Heart,
    flag: "🇦🇴",
    color: "red"
  },
  {
    name: "PharmaTech Labs",
    category: "Biotecnologia",
    description: "Estudos clínicos e desenvolvimento de novos compostos",
    icon: FlaskConical,
    flag: "💊",
    color: "indigo"
  },
  {
    name: "ElitePerformance Global",
    category: "Fitness & Training",
    description: "Metodologias de treino e protocolos de alta performance",
    icon: Dumbbell,
    flag: "🏋️",
    color: "orange"
  }
];

const PartnersSection = () => {
  return (
    <motion.section 
      className="space-y-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          🤝 Strategic Partners
        </h2>
        <p className="text-xl text-gray-300">
          Trusted by leading companies worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`transition-opacity delay-[${index * 100}ms]`}
          >
            <Card className={`bg-gradient-to-br from-slate-900/90 to-${partner.color}-900/90 border-${partner.color}-600/30 backdrop-blur-sm h-full`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{partner.flag}</div>
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r from-${partner.color}-500 to-${partner.color}-700 rounded-full flex items-center justify-center`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <partner.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Company Info */}
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {partner.name}
                    </h4>
                    <p className={`text-${partner.color}-300 font-semibold text-sm mb-2`}>
                      {partner.category}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  {/* Partnership Badge */}
                  <div className={`inline-flex items-center gap-2 bg-${partner.color}-600/20 text-${partner.color}-300 px-3 py-1 rounded-full text-xs font-semibold`}>
                    <Globe className="h-3 w-3" />
                    Strategic Partner
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersSection;
