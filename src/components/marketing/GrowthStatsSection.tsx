
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Heart, BarChart3 } from "lucide-react";

const monthlyStats = [
  { month: "Janeiro 2024", users: 12500, percentage: 25 },
  { month: "Fevereiro", users: 18900, percentage: 38 },
  { month: "Março", users: 28400, percentage: 57 },
  { month: "Abril", users: 42800, percentage: 86 },
  { month: "Maio", users: 67200, percentage: 135 },
  { month: "Junho", users: 89500, percentage: 180 }
];

const GrowthStatsSection = () => {
  return (
    <motion.section 
      className="space-y-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          📊 Explosive Growth Statistics
        </h2>
        <p className="text-xl text-gray-300">
          6 months of exponential transformation
        </p>
      </div>

      {/* Monthly Growth Chart */}
      <Card className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 border-blue-600/30 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📈 Monthly User Growth
          </h3>
          <div className="space-y-4">
            {monthlyStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="w-24 text-white font-semibold text-sm">
                  {stat.month}
                </div>
                <div className="flex-1 relative">
                  <div className="h-8 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-end pr-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(stat.percentage, 100)}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                    >
                      <span className="text-white text-xs font-bold">
                        {stat.users.toLocaleString()}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-gradient-to-br from-slate-900/90 to-green-900/90 border-green-600/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">+615%</div>
              <p className="text-green-300 font-semibold">Growth in 6 months</p>
              <p className="text-gray-400 text-sm mt-2">🔥 Exponential expansion</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 border-blue-600/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <p className="text-blue-300 font-semibold">Daily Active Users</p>
              <p className="text-gray-400 text-sm mt-2">⚡ Engaged community</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-gradient-to-br from-slate-900/90 to-yellow-900/90 border-yellow-600/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">96.7%</div>
              <p className="text-yellow-300 font-semibold">Satisfaction Rate</p>
              <p className="text-gray-400 text-sm mt-2">💪 Happy warriors</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GrowthStatsSection;
