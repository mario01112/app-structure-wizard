
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    age: 34,
    location: "São Paulo, Brasil",
    flag: "🇧🇷",
    text: "Cara, em 2 semanas usando o Nitric IA + suplemento minha energia explodiu! Minha esposa não para de elogiar... 😏🔥 O app é viciante, uso todo dia!",
    rating: 5,
    emoji: "⚡💪"
  },
  {
    name: "Jennifer Thompson",
    age: 29,
    location: "Miami, USA",
    flag: "🇺🇸",
    text: "Amazing results! The AI coach is like having a personal trainer 24/7. My confidence is through the roof! 🚀✨ Best investment ever!",
    rating: 5,
    emoji: "💕🏆"
  },
  {
    name: "António Mateus",
    age: 41,
    location: "Luanda, Angola",
    flag: "🇦🇴",
    text: "Mano, este app mudou minha vida! A IA dá conselhos que realmente funcionam. Sinto-me como um leão! 🦁🔥 Recomendo 100%!",
    rating: 5,
    emoji: "💯⚡"
  },
  {
    name: "Maria Santos",
    age: 36,
    location: "Maputo, Moçambique",
    flag: "🇲🇿",
    text: "Incrível como o app me motiva todos os dias! Meu marido está impressionado com os resultados... 😉💃 Valeu cada centavo!",
    rating: 5,
    emoji: "🌟💖"
  },
  {
    name: "Miguel Rodriguez",
    age: 42,
    location: "Madrid, Espanha",
    flag: "🇪🇸",
    text: "¡Increíble! La IA es muy inteligente y los ejercicios realmente funcionan. Mi energía está por las nubes! 🚀💪",
    rating: 5,
    emoji: "🔥🏅"
  },
  {
    name: "Sarah Johnson",
    age: 31,
    location: "Londres, Inglaterra",
    flag: "🇬🇧",
    text: "This app is brilliant! The personalized workouts and AI guidance are game-changers. I feel unstoppable! 💪✨",
    rating: 5,
    emoji: "🌟👑"
  }
];

const TestimonialsSection = () => {
  return (
    <motion.section 
      className="space-y-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          💬 Real User Testimonials
        </h2>
        <p className="text-xl text-gray-300">
          Hear from our amazing community of transformation warriors
        </p>
      </div>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 border-blue-600/30 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* User Info */}
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{testimonial.flag}</div>
                        <div>
                          <h4 className="font-bold text-white">
                            {testimonial.name}, {testimonial.age}
                          </h4>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <MapPin className="h-3 w-3" />
                            {testimonial.location}
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Emoji */}
                      <div className="text-2xl text-center">
                        {testimonial.emoji}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-blue-600 hover:bg-blue-700 border-blue-500" />
        <CarouselNext className="bg-blue-600 hover:bg-blue-700 border-blue-500" />
      </Carousel>
    </motion.section>
  );
};

export default TestimonialsSection;
