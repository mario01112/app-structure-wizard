
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import GrowthStatsSection from "@/components/marketing/GrowthStatsSection";
import PartnersSection from "@/components/marketing/PartnersSection";
import InfluencersSection from "@/components/marketing/InfluencersSection";
import VIPCallToAction from "@/components/marketing/VIPCallToAction";

const Marketing = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5
  };

  return (
    <Layout>
      <motion.div 
        className="space-y-8 py-6 relative min-h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Background effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 opacity-90"></div>
        
        <div className="relative z-10 space-y-12">
          {/* Hero Section */}
          <motion.div 
            className="text-center space-y-6 py-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              🔥 Success Stories 🔥
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover why thousands of users are transforming their lives with Nitric IA
            </p>
          </motion.div>

          {/* VIP Call to Action - Top */}
          <VIPCallToAction />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Growth Statistics */}
          <GrowthStatsSection />

          {/* Partners Section */}
          <PartnersSection />

          {/* Influencers Section */}
          <InfluencersSection />

          {/* VIP Call to Action - Bottom */}
          <VIPCallToAction />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Marketing;
