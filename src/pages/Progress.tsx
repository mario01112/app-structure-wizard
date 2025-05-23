
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { Calendar, TrendingUp, CheckCircle, Target, Zap, Trophy, Fire } from "lucide-react";

const Progress = () => {
  const { user, isAuthenticated, updateUserProgress } = useAuth();
  const navigate = useNavigate();
  const [weight, setWeight] = useState<number | ''>('');
  const [notes, setNotes] = useState("");
  const [canCheckIn, setCanCheckIn] = useState(true);

  // Force navigation to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (user) {
      setWeight(user.progress.weight || '');
      setNotes(user.progress.notes || '');
      
      // Check if user already checked in today
      if (user.progress.lastCheckIn) {
        const lastCheckIn = new Date(user.progress.lastCheckIn);
        const today = new Date();
        const isToday = 
          lastCheckIn.getDate() === today.getDate() &&
          lastCheckIn.getMonth() === today.getMonth() &&
          lastCheckIn.getFullYear() === today.getFullYear();
          
        setCanCheckIn(!isToday);
      }
    }
  }, [isAuthenticated, navigate, user]);

  const handleCheckIn = () => {
    if (!user) return;
    
    const numericWeight = typeof weight === 'string' ? parseFloat(weight) : weight;
    
    updateUserProgress({
      lastCheckIn: new Date().toISOString(),
      daysCompleted: user.progress.daysCompleted + 1,
      weight: !isNaN(numericWeight) ? numericWeight : user.progress.weight,
      notes: notes,
    });
    
    toast.success("Check-in realizado com sucesso!");
    setCanCheckIn(false);
  };

  const progressPercentage = Math.min((user?.progress.daysCompleted || 0) * 3.33, 100);
  
  if (!isAuthenticated || !user) {
    return null;
  }
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-6">
        <div className="container mx-auto px-4 space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full animate-pulse-glow">
                <Trophy className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Seu Progresso
            </h1>
            <p className="text-gray-300 text-lg">
              {format(new Date(), "PPP", { locale: ptBR })}
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-orange-500/20 shadow-2xl animate-scale-in">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Fire className="h-6 w-6 text-orange-500" />
                Visão Geral do Progresso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-xl border border-blue-500/20">
                  <Calendar className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
                  <p className="text-blue-300 text-sm text-center mb-2">Dias Completados</p>
                  <p className="text-3xl font-bold text-white text-center">{user.progress.daysCompleted}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 p-6 rounded-xl border border-green-500/20">
                  <TrendingUp className="h-8 w-8 text-green-400 mb-3 mx-auto" />
                  <p className="text-green-300 text-sm text-center mb-2">Peso Atual</p>
                  <p className="text-3xl font-bold text-white text-center">
                    {user.progress.weight || "--"}<span className="text-lg ml-1">kg</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-6 rounded-xl border border-purple-500/20">
                  <Target className="h-8 w-8 text-purple-400 mb-3 mx-auto" />
                  <p className="text-purple-300 text-sm text-center mb-2">Meta de 30 Dias</p>
                  <div className="space-y-2">
                    <Progress value={progressPercentage} className="h-3" />
                    <p className="text-white text-center text-lg font-semibold">
                      {Math.round(progressPercentage)}%
                    </p>
                  </div>
                </div>
              </div>

              {user.progress.lastCheckIn && (
                <div className="text-center">
                  <p className="text-gray-400">Último check-in em</p>
                  <p className="text-orange-400 font-semibold">
                    {format(new Date(user.progress.lastCheckIn), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Daily Check-in */}
          <Card className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-orange-500/20 shadow-2xl animate-scale-in">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Zap className="h-6 w-6 text-orange-500" />
                Check-in Diário
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {canCheckIn ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="weight" className="text-white text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-orange-400" />
                        Seu peso hoje (kg):
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        step="0.1"
                        placeholder="Ex: 70.5"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 h-12 text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="notes" className="text-white text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        Como você está se sentindo?
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Descreva como está se sentindo hoje, energia, disposição..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={4}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 resize-none"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={handleCheckIn}
                  >
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Registrar Check-in de Hoje
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center animate-completion-burst">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Check-in Concluído!</h3>
                  <p className="text-gray-300 text-lg max-w-md mx-auto">
                    Parabéns! Você já fez seu check-in hoje. Continue assim e volte amanhã para manter sua sequência.
                  </p>
                  <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-4 rounded-lg border border-orange-500/20">
                    <p className="text-orange-400 font-semibold">
                      Sequência atual: {user.progress.daysCompleted} dias
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Progress History */}
          <Card className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-orange-500/20 shadow-2xl animate-scale-in">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Calendar className="h-6 w-6 text-orange-500" />
                Histórico de Progresso
              </CardTitle>
            </CardHeader>
            <CardContent>
              {user.progress.daysCompleted > 0 ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 p-6 rounded-xl border border-gray-600/20">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-lg font-semibold text-white">
                        {format(new Date(user.progress.lastCheckIn), "dd/MM/yyyy", { locale: ptBR })}
                      </span>
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Dia {user.progress.daysCompleted}
                      </span>
                    </div>
                    {user.progress.weight && (
                      <p className="text-gray-300 mb-2">
                        <strong>Peso:</strong> {user.progress.weight}kg
                      </p>
                    )}
                    {user.progress.notes && (
                      <p className="text-gray-300">
                        <strong>Observações:</strong> {user.progress.notes}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="bg-gray-800/50 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                    <Calendar className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl text-white">Nenhum histórico ainda</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Faça seu primeiro check-in para começar a registrar seu progresso e acompanhar sua jornada.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Progress;
