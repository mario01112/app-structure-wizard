
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Send, User, Zap, Calendar, Dumbbell, ShoppingCart, Brain, Sparkles, Heart, Target } from "lucide-react";
import { toast } from "sonner";
import { generateAIResponse } from "@/utils/nitricAI";

const NitricAI = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: '🔥 Olá, guerreiro! Sou o Nitric IA, seu coach virtual para máxima performance! Como posso potencializar sua jornada hoje? Posso ajudar com saúde, bem-estar, exercícios, suplementação e muito mais! 💪⚡' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput("");
    setIsLoading(true);
    
    try {
      const response = await generateAIResponse(userMessage);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error generating AI response:", error);
      toast.error("Ops! Tive um problema ao processar sua mensagem. Tente novamente!");
      setIsLoading(false);
    }
  };

  const suggestionTopics = [
    { 
      label: "💪 Exercícios", 
      icon: <Dumbbell className="h-4 w-4" />,
      question: "Quais exercícios posso fazer para turbinar minha energia e circulação?",
      gradient: "from-red-500 to-red-700"
    },
    { 
      label: "📅 Rotina", 
      icon: <Calendar className="h-4 w-4" />,
      question: "Como criar uma rotina diária para máxima performance?",
      gradient: "from-blue-500 to-blue-700"
    },
    { 
      label: "🛒 Suplemento", 
      icon: <ShoppingCart className="h-4 w-4" />,
      question: "Como otimizar os benefícios do Nitric Boost?",
      gradient: "from-green-500 to-green-700"
    },
    { 
      label: "📈 Progresso", 
      icon: <Zap className="h-4 w-4" />,
      question: "Como acompanhar e acelerar meu progresso?",
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-screen relative">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-main-gradient opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-full blur-3xl animate-energy-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-600/30 to-blue-600/20 rounded-full blur-3xl animate-energy-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 space-y-6 py-6 pb-32">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 bg-energy-gradient text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl animate-button-power">
              <Brain className="h-6 w-6" />
              NITRIC IA - SEU COACH VIRTUAL
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold animate-text-energy">
              🤖 Seu Assistente de Performance 🚀
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              IA avançada para saúde, bem-estar, nutrição e máxima performance
            </p>
          </div>
          
          {/* AI Avatar Card */}
          <Card className="bg-dark-elegant border-blue-600/50 border-2 overflow-hidden shadow-2xl hover-glow max-w-2xl mx-auto">
            <CardContent className="p-8 flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-energy-gradient p-1 shadow-2xl animate-floating-avatar">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center overflow-hidden">
                    <Bot className="h-12 w-12 text-white animate-pulse" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-energy-pulse">
                  <Heart className="h-3 w-3 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Nitric Brain</h2>
                <p className="text-blue-300 text-lg">
                  IA avançada conectada ao conhecimento de alta performance
                </p>
                <div className="flex items-center mt-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  <span className="text-green-400 font-semibold">Online e pronto para turbinar seus resultados!</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Messages Container */}
          <div className="max-w-4xl mx-auto">
            <div className="h-[50vh] overflow-y-auto rounded-2xl p-6 shadow-inner border-2 border-blue-900/50 bg-dark-elegant backdrop-blur-lg">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex items-start mb-6 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-6 ${
                      message.role === 'user' 
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white ml-auto shadow-xl border border-red-500/30 hover-glow' 
                        : 'bg-gradient-to-r from-blue-900/90 to-purple-900/90 border-2 border-blue-600/30 shadow-xl backdrop-blur-sm hover-glow'
                    } transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center mb-3">
                      {message.role === 'assistant' && (
                        <div className="bg-blue-600/50 p-2 rounded-full mr-3 animate-energy-pulse">
                          <Bot className="h-5 w-5 text-blue-400" />
                        </div>
                      )}
                      <span className="text-sm font-bold text-gray-200">
                        {message.role === 'user' ? 'Você 💪' : 'Nitric IA 🤖'}
                      </span>
                      {message.role === 'user' && (
                        <div className="bg-red-600/50 p-2 rounded-full ml-3 animate-energy-pulse">
                          <User className="h-5 w-5 text-gray-200" />
                        </div>
                      )}
                    </div>
                    <p className={`text-base leading-relaxed ${message.role === 'user' ? 'text-white' : 'text-gray-200'}`}>
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start mb-6 justify-start animate-fade-in">
                  <div className="max-w-[80%] rounded-2xl p-6 bg-gradient-to-r from-blue-900/90 to-purple-900/90 border-2 border-blue-600/30 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-600/50 p-2 rounded-full mr-3 animate-energy-pulse">
                        <Bot className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-sm font-bold text-gray-200">
                        Nitric IA 🤖
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: "0.6s" }}></div>
                      <span className="text-gray-300 ml-2">Processando sua pergunta...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Suggestion Chips */}
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {suggestionTopics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                className={`flex items-center gap-2 bg-gradient-to-r ${topic.gradient} text-white border-none hover:scale-105 transition-all duration-300 shadow-lg animate-energy-pulse font-semibold px-6 py-3`}
                onClick={() => setInput(topic.question)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {topic.icon}
                {topic.label}
              </Button>
            ))}
          </div>
          
          {/* CTA Card */}
          <Card className="bg-dark-elegant border-red-600/50 border-2 shadow-2xl hover-glow max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-energy-gradient rounded-full flex items-center justify-center mx-auto animate-energy-pulse">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Potencialize seus resultados!</h3>
                <p className="text-gray-300">Combine IA + Nitric Boost para máxima performance</p>
                <a 
                  href="https://getnitricboost.net/discovery#aff=Preciosa88"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-xl font-bold py-6 px-8 bg-energy-gradient hover:scale-110 transition-all duration-300 shadow-2xl animate-button-power">
                    🔥 QUERO O MEU NITRIC BOOST! 🚀
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Input Form */}
        <div className="fixed bottom-0 left-0 right-0 bg-dark-elegant border-t-2 border-blue-600/30 backdrop-blur-lg z-50">
          <div className="max-w-4xl mx-auto p-6">
            <form onSubmit={handleSendMessage} className="flex gap-4">
              <Input
                placeholder="Digite sua pergunta para o Nitric IA..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-gray-800/80 border-2 border-blue-600/50 text-white placeholder:text-gray-400 focus:ring-blue-600 backdrop-blur-sm text-lg py-6 rounded-xl"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-energy-gradient hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 px-8 py-6 rounded-xl"
              >
                <Send className="h-6 w-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NitricAI;
