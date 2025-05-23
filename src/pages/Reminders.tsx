
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Bell, Clock, CalendarCheck, CheckCircle, AlarmCheck, Calendar } from "lucide-react";

const Reminders = () => {
  const { user, isAuthenticated, updateUserProgress } = useAuth();
  const navigate = useNavigate();
  const [reminderTime, setReminderTime] = useState("08:00");
  const [remindersEnabled, setRemindersEnabled] = useState(false);

  // Force navigation to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (user) {
      setReminderTime(user.progress.reminderTime || "08:00");
    }
  }, [isAuthenticated, navigate, user]);

  const handleSaveReminders = () => {
    if (!user) return;
    
    updateUserProgress({
      reminderTime: reminderTime,
    });
    
    // In a real app, we'd register a notification here
    // For demo, just show a toast
    if (remindersEnabled) {
      toast.success(`Lembrete diário configurado para ${reminderTime}`);
    } else {
      toast.info("Lembretes desativados");
    }
  };
  
  if (!isAuthenticated || !user) {
    return null;
  }
  
  return (
    <Layout>
      <div className="space-y-8 py-6 relative">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[120px] opacity-15"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Lembretes
            </h1>
          </div>
          <p className="text-gray-400 mt-2 max-w-md">
            Configure lembretes diários para manter sua rotina de suplementação em dia
          </p>
        </div>
        
        <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-t border-blue-500/20 relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-10"></div>
          <CardHeader className="pb-2 relative z-10">
            <CardTitle className="text-xl flex items-center gap-3">
              <AlarmCheck className="h-5 w-5 text-blue-400" />
              Configurar Lembretes
            </CardTitle>
            <CardDescription>
              Receba notificações nos horários importantes do seu dia
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 relative z-10">
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-950/30 border border-blue-800/30 backdrop-blur-sm">
              <div className="space-y-0.5">
                <Label htmlFor="reminders" className="text-blue-300 font-medium">Lembretes diários</Label>
                <p className="text-sm text-gray-400">
                  Receba lembretes para tomar o Nitric Boost
                </p>
              </div>
              <Switch
                id="reminders"
                checked={remindersEnabled}
                onCheckedChange={setRemindersEnabled}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
            
            {remindersEnabled && (
              <div className="space-y-3 p-4 rounded-lg bg-blue-950/30 border border-blue-800/30 backdrop-blur-sm animate-fade-in">
                <Label htmlFor="time" className="text-blue-300 font-medium">Horário do lembrete</Label>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-blue-800/50">
                    <Clock className="h-5 w-5 text-blue-300" />
                  </div>
                  <Input
                    id="time"
                    type="time"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                    className="flex-1 border-blue-800/50 bg-blue-900/20 text-white focus:ring-blue-500 backdrop-blur-sm"
                  />
                </div>
              </div>
            )}
            
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              onClick={handleSaveReminders}
            >
              {remindersEnabled ? "Salvar Configurações" : "Ativar Lembretes"}
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-t border-purple-500/20 animate-fade-in">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-3">
              <CalendarCheck className="h-5 w-5 text-purple-400" />
              Dicas de Uso
            </CardTitle>
            <CardDescription>
              Maximize os benefícios do seu suplemento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex gap-4 p-4 rounded-lg bg-purple-950/30 border border-purple-800/30 backdrop-blur-sm transition-all hover:bg-purple-900/20 duration-300">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-300" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-purple-300">Horário Ideal</h3>
                <p className="text-sm text-gray-400">
                  Para melhores resultados, tome o Nitric Boost pela manhã, de preferência 30 minutos antes do café da manhã.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 rounded-lg bg-blue-950/30 border border-blue-800/30 backdrop-blur-sm transition-all hover:bg-blue-900/20 duration-300">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-300" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-blue-300">Consistência</h3>
                <p className="text-sm text-gray-400">
                  Mantenha um horário regular todos os dias para maximizar os benefícios.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 rounded-lg bg-indigo-950/30 border border-indigo-800/30 backdrop-blur-sm transition-all hover:bg-indigo-900/20 duration-300">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-indigo-800/50 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-indigo-300" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-indigo-300">Hidratação</h3>
                <p className="text-sm text-gray-400">
                  Beba bastante água ao longo do dia enquanto estiver usando o Nitric Boost.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reminders;
