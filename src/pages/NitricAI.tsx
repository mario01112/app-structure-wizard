
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
      <div className="space-y-4 pb-24 pt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Nitric IA
          </h1>
        </div>
        
        {/* AI Profile Card */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none overflow-hidden shadow-lg">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-700 p-1 shadow-lg">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center overflow-hidden">
                <Bot className="h-10 w-10 text-white animate-pulse" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Assistente Nitric</h2>
              <p className="text-sm text-gray-300">
                Seu guia pessoal para saúde, desempenho e bem-estar
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Message history container */}
        <div className="h-[50vh] overflow-y-auto border border-gray-800 rounded-md p-4 bg-gradient-to-br from-gray-900 to-gray-800 shadow-inner">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex items-start mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-gradient-to-r from-nitric-600 to-blue-700 text-white ml-auto shadow-lg' 
                    : 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700 shadow-lg'
                } transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center mb-1">
                  {message.role === 'assistant' && (
                    <Bot className="h-4 w-4 mr-2 text-blue-400" />
                  )}
                  <span className="text-xs font-medium text-gray-200">
                    {message.role === 'user' ? 'Você' : 'Nitric IA'}
                  </span>
                  {message.role === 'user' && (
                    <User className="h-4 w-4 ml-2 text-gray-200" />
                  )}
                </div>
                <p className={`text-sm ${message.role === 'user' ? 'text-white' : 'text-gray-200'}`}>
                  {message.content}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start mb-4 justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700 shadow-lg">
                <div className="flex items-center mb-1">
                  <Bot className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="text-xs font-medium text-gray-200">
                    Nitric IA
                  </span>
                </div>
                <p className="text-sm text-gray-200">
                  <span className="inline-block animate-pulse">Escrevendo...</span>
                </p>
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
              className="flex items-center gap-1 bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-200"
              onClick={() => setInput(topic.question)}
            >
              {topic.icon}
              {topic.label}
            </Button>
          ))}
        </div>
        
        {/* Input form */}
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-blue-600"
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-nitric-600 to-blue-700 hover:from-nitric-700 hover:to-blue-800 text-white shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default NitricAI;
