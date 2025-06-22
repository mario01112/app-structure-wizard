
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Play, Users, Award } from "lucide-react";

const influencers = [
  {
    handle: "@CoachMarcusVital",
    name: "Marcus Vital",
    age: 38,
    location: "Brasil",
    flag: "💪",
    profession: "Coach de Alta Performance",
    content: "Vídeos de treino, dicas de suplementação, transformações reais",
    color: "blue"
  },
  {
    handle: "@FitnessQueenSara",
    name: "Sara Martinez",
    age: 32,
    location: "México",
    flag: "🔥",
    profession: "Personal Trainer & Nutricionista",
    content: "Lives de treino, receitas saudáveis, depoimentos de clientes",
    color: "pink"
  },
  {
    handle: "@DrFitnessAfrica",
    name: "Dr. João Mbanza",
    age: 45,
    location: "Angola",
    flag: "⚡",
    profession: "Médico Especialista em Performance",
    content: "Educação científica, análises de suplementos, consultoria online",
    color: "green"
  },
  {
    handle: "@PowerLifeCoach",
    name: "Amanda Silva",
    age: 29,
    location: "Portugal",
    flag: "🚀",
    profession: "Coach de Bem-estar",
    content: "Mindset, motivação diária, protocolos de energia",
    color: "purple"
  },
  {
    handle: "@WarriorFitnessUK",
    name: "James Thompson",
    age: 35,
    location: "Inglaterra",
    flag: "💯",
    profession: "Ex-atleta olímpico",
    content: "Treinos intensos, mentalidade de campeão, reviews de produtos",
    color: "yellow"
  }
];

const InfluencersSection = () => {
  return (
    <motion.section 
      className="space-y-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.0 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          🌟 Influencers Recommend Us
        </h2>
        <p className="text-xl text-gray-300">
          Top fitness experts and coaches trust Nitric IA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`transition-opacity delay-[${index * 100}ms]`}
          >
            <Card className={`bg-gradient-to-br from-slate-900/90 to-${influencer.color}-900/90 border-${influencer.color}-600/30 backdrop-blur-sm h-full`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Profile Header */}
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{influencer.flag}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Instagram className={`h-4 w-4 text-${influencer.color}-400`} />
                        <span className={`text-${influencer.color}-300 font-bold text-sm`}>
                          {influencer.handle}
                        </span>
                      </div>
                      <h4 className="font-bold text-white">
                        {influencer.name}, {influencer.age}
                      </h4>
                      <p className="text-gray-400 text-xs">{influencer.location}</p>
                    </div>
                  </div>

                  {/* Profession */}
                  <div className={`inline-flex items-center gap-2 bg-${influencer.color}-600/20 text-${influencer.color}-300 px-3 py-1 rounded-full text-xs font-semibold`}>
                    <Award className="h-3 w-3" />
                    {influencer.profession}
                  </div>

                  {/* Content Description */}
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-white">Conteúdo:</strong> {influencer.content}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <div className={`flex items-center gap-1 bg-${influencer.color}-600/10 text-${influencer.color}-400 px-2 py-1 rounded text-xs`}>
                      <Play className="h-3 w-3" />
                      Videos
                    </div>
                    <div className={`flex items-center gap-1 bg-${influencer.color}-600/10 text-${influencer.color}-400 px-2 py-1 rounded text-xs`}>
                      <Users className="h-3 w-3" />
                      Community
                    </div>
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

export default InfluencersSection;
