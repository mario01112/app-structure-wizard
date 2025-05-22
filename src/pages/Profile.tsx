
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, User as UserIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [isEditing, setIsEditing] = useState(false);
  
  // Force navigation to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleUpdateProfile = () => {
    // Here you would call an API to update the user's profile
    // This is just a mock implementation
    toast.success("Perfil atualizado com sucesso!");
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  // Calculate days since starting
  const daysSinceStart = user.progress?.startDate 
    ? Math.floor((new Date().getTime() - new Date(user.progress.startDate).getTime()) / (1000 * 3600 * 24))
    : 0;

  return (
    <Layout>
      <div className="space-y-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Perfil</h1>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg bg-nitric-600 text-white">
                  {user.name?.charAt(0).toUpperCase() || user.username?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user.name || "Usuário"}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  @{user.username}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {!isEditing ? (
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Nome</div>
                  <div>{user.name || "Não definido"}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Nome de usuário</div>
                  <div>{user.username}</div>
                </div>
                
                {daysSinceStart > 0 && (
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Usando Nitric Boost há</div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-nitric-600" />
                      {daysSinceStart} dias
                    </div>
                  </div>
                )}
                
                <div className="pt-4 flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(true)}
                  >
                    Editar perfil
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={handleLogout}
                  >
                    Sair
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Nome de usuário</Label>
                  <Input
                    id="username"
                    value={user.username}
                    disabled
                  />
                </div>

                <div className="pt-4 flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(false)}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleUpdateProfile}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
