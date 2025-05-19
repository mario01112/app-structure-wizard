
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Bell, Clock, CalendarCheck } from "lucide-react";

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
      <div className="space-y-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Lembretes</h1>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Configurar Lembretes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reminders">Lembretes diários</Label>
                <p className="text-sm text-gray-500">
                  Receba lembretes para tomar o Nitric Boost
                </p>
              </div>
              <Switch
                id="reminders"
                checked={remindersEnabled}
                onCheckedChange={setRemindersEnabled}
              />
            </div>
            
            {remindersEnabled && (
              <div className="space-y-2">
                <Label htmlFor="time">Horário do lembrete</Label>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <Input
                    id="time"
                    type="time"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            )}
            
            <Button 
              className="w-full bg-nitric-600 hover:bg-nitric-700"
              onClick={handleSaveReminders}
            >
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CalendarCheck className="h-5 w-5" />
              Dicas de Uso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Horário Ideal</h3>
              <p className="text-sm text-gray-600">
                Para melhores resultados, tome o Nitric Boost pela manhã, de preferência 30 minutos antes do café da manhã.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Consistência</h3>
              <p className="text-sm text-gray-600">
                Mantenha um horário regular todos os dias para maximizar os benefícios.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Hidratação</h3>
              <p className="text-sm text-gray-600">
                Beba bastante água ao longo do dia enquanto estiver usando o Nitric Boost.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reminders;
