
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Send, User, Zap, Calendar, Dumbbell, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { generateAIResponse } from "@/utils/nitricAI";

const NitricAI = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Olá! Sou o Nitric IA. Como posso ajudar você hoje? Posso responder dúvidas sobre saúde, desempenho, exercícios ou suplementos.' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Force navigation to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput("");
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await generateAIResponse(userMessage);
      
      // Add AI response after a short delay to make it feel more natural
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error generating AI response:", error);
      toast.error("Desculpe, tive um problema ao processar sua mensagem.");
      setIsLoading(false);
    }
  };

  const suggestionTopics = [
    { 
      label: "Exercícios", 
      icon: <Dumbbell className="h-4 w-4" />,
      question: "Quais exercícios posso fazer para melhorar minha circulação?"
    },
    { 
      label: "Rotina", 
      icon: <Calendar className="h-4 w-4" />,
      question: "Como planejar minha rotina de exercícios?"
    },
    { 
      label: "Renovar", 
      icon: <ShoppingCart className="h-4 w-4" />,
      question: "Quando devo renovar meu suplemento?"
    },
    { 
      label: "Progresso", 
      icon: <Zap className="h-4 w-4" />,
      question: "Como acompanhar meu progresso?"
    }
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="pb-24 pt-4 relative">
        {/* Background Neural Network Design */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        {/* Content - with z-index to appear above background */}
        <div className="relative z-10 space-y-5">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-shift">
                  Nitric IA
                </span>
              </h1>
              <p className="text-gray-400 max-w-md">
                Seu assistente pessoal para saúde, desempenho e nutrição
              </p>
            </div>
          </div>
          
          {/* AI Profile Card */}
          <Card className="bg-gradient-to-br from-blue-950/60 to-indigo-900/60 border-blue-700/30 overflow-hidden shadow-xl backdrop-blur-sm">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-700 p-0.5 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse-glow">
                <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center overflow-hidden">
                  <Bot className="h-10 w-10 text-white animate-pulse" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Nitric Brain</h2>
                <p className="text-sm text-blue-300">
                  Conectado ao conhecimento avançado em saúde e bem-estar
                </p>
                <div className="flex items-center mt-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  <span className="text-xs text-green-400">Online e pronto para ajudar</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Message history container - with glass morphism effect */}
          <div className="h-[50vh] overflow-y-auto rounded-xl p-4 shadow-inner border border-blue-900/50 bg-gradient-to-br from-gray-900/95 to-blue-950/95 backdrop-blur-lg">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex items-start mb-5 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white ml-auto shadow-lg border border-blue-500/20' 
                      : 'bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-blue-900/30 shadow-lg backdrop-blur-sm'
                  } transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center mb-2">
                    {message.role === 'assistant' && (
                      <div className="bg-blue-600/30 p-1 rounded-full mr-2">
                        <Bot className="h-4 w-4 text-blue-400" />
                      </div>
                    )}
                    <span className="text-xs font-medium text-gray-200">
                      {message.role === 'user' ? 'Você' : 'Nitric IA'}
                    </span>
                    {message.role === 'user' && (
                      <div className="bg-blue-600/30 p-1 rounded-full ml-2">
                        <User className="h-4 w-4 text-gray-200" />
                      </div>
                    )}
                  </div>
                  <p className={`text-sm ${message.role === 'user' ? 'text-white' : 'text-gray-200'}`}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start mb-5 justify-start animate-fade-in">
                <div className="max-w-[80%] rounded-2xl p-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-blue-900/30 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600/30 p-1 rounded-full mr-2">
                      <Bot className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-medium text-gray-200">
                      Nitric IA
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggestion chips */}
          <div className="flex flex-wrap gap-2">
            {suggestionTopics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 bg-blue-950/50 text-blue-200 border-blue-700/30 hover:bg-blue-800/50 hover:text-white transition-all duration-200"
                onClick={() => setInput(topic.question)}
              >
                {topic.icon}
                {topic.label}
              </Button>
            ))}
          </div>
          
          {/* Input form with glass morphism */}
          <form onSubmit={handleSendMessage} className="flex gap-2 relative z-10">
            <Input
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-gray-800/70 border-blue-900/50 text-white placeholder:text-gray-400 focus:ring-blue-600 backdrop-blur-sm"
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NitricAI;
