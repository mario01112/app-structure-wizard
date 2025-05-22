
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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Perfil</h1>
        
        <Card className="shadow-lg border-none bg-gradient-to-br from-gray-900 to-gray-800">
          <CardHeader className="pb-4 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 bg-gradient-to-br from-nitric-600 to-blue-700 p-0.5">
                <AvatarFallback className="text-xl bg-gradient-to-br from-nitric-600 to-blue-700 text-white">
                  {user.name?.charAt(0).toUpperCase() || user.username?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-white">{user.name || "Usuário"}</CardTitle>
                <p className="text-sm text-gray-400">
                  @{user.username}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {!isEditing ? (
              <div className="space-y-5">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Nome</div>
                  <div className="text-gray-200">{user.name || "Não definido"}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Nome de usuário</div>
                  <div className="text-gray-200">{user.username}</div>
                </div>
                
                {daysSinceStart > 0 && (
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Usando Nitric Boost há</div>
                    <div className="flex items-center text-gray-200">
                      <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                      {daysSinceStart} dias
                    </div>
                  </div>
                )}
                
                <div className="pt-4 flex flex-col space-y-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(true)}
                    className="bg-transparent border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    Editar perfil
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white transition-all duration-300"
                  >
                    Sair
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Nome</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-blue-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-300">Nome de usuário</Label>
                  <Input
                    id="username"
                    value={user.username}
                    disabled
                    className="bg-gray-800 border-gray-700 text-gray-400"
                  />
                </div>

                <div className="pt-4 flex justify-end space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(false)}
                    className="bg-transparent border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleUpdateProfile}
                    className="bg-gradient-to-r from-nitric-600 to-blue-700 hover:from-nitric-700 hover:to-blue-800 text-white transition-all duration-300"
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
