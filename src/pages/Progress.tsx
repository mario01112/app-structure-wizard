
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { Calendar, TrendingUp, CheckCircle } from "lucide-react";

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
  
  if (!isAuthenticated || !user) {
    return null;
  }
  
  return (
    <Layout>
      <div className="space-y-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Progresso</h1>
          <div className="text-sm text-gray-500">
            {format(new Date(), "PPP", { locale: ptBR })}
          </div>
        </div>

        {/* Progress Summary */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Seu progresso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2">
                <Calendar className="h-6 w-6 mx-auto text-nitric-500 mb-1" />
                <p className="text-xs text-gray-500">Dias de uso</p>
                <p className="text-lg font-bold">{user.progress.daysCompleted}</p>
              </div>
              
              <div className="p-2">
                <TrendingUp className="h-6 w-6 mx-auto text-green-500 mb-1" />
                <p className="text-xs text-gray-500">Seu peso</p>
                <p className="text-lg font-bold">{user.progress.weight || "--"} kg</p>
              </div>
              
              <div className="p-2">
                <CheckCircle className="h-6 w-6 mx-auto text-blue-500 mb-1" />
                <p className="text-xs text-gray-500">Último check-in</p>
                <p className="text-sm">
                  {user.progress.lastCheckIn 
                    ? format(new Date(user.progress.lastCheckIn), "dd/MM", { locale: ptBR })
                    : "--"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Check-in */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Check-in diário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {canCheckIn ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="weight">Seu peso hoje (kg):</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="Peso em kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Notas ou observações:</Label>
                  <Textarea
                    id="notes"
                    placeholder="Como você está se sentindo? Notou alguma mudança?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <Button 
                  className="w-full mt-4 bg-nitric-600 hover:bg-nitric-700"
                  onClick={handleCheckIn}
                >
                  Registrar Check-in
                </Button>
              </>
            ) : (
              <div className="text-center p-4">
                <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-2" />
                <h3 className="text-lg font-medium">Check-in realizado!</h3>
                <p className="text-gray-500 mt-2">
                  Você já fez seu check-in hoje. Volte amanhã para continuar seu progresso.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Progress History */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Histórico</CardTitle>
          </CardHeader>
          <CardContent>
            {user.progress.daysCompleted > 0 ? (
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      {format(new Date(user.progress.lastCheckIn), "dd/MM/yyyy", { locale: ptBR })}
                    </span>
                    <span className="text-sm text-gray-500">
                      Dia {user.progress.daysCompleted}
                    </span>
                  </div>
                  {user.progress.notes && (
                    <p className="text-sm text-gray-600 mt-1">{user.progress.notes}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500">
                <p>Faça seu primeiro check-in para começar a registrar seu progresso</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Progress;
