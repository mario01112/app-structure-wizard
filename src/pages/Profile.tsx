import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, User as UserIcon, Mail, Settings, LogOut, Shield, CalendarClock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
      <div className="space-y-8 py-6 relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-15"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        </div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Perfil
            </h1>
            <p className="text-gray-400">Gerencie suas informações pessoais</p>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="relative z-10">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md overflow-hidden animate-scale-in border-t border-purple-500/20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
            
            <CardHeader className="pb-6 border-b border-gray-700 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <Avatar className="h-24 w-24 bg-gradient-to-br from-purple-600 to-blue-600 p-1 shadow-lg mx-auto md:mx-0">
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    {user.name?.charAt(0).toUpperCase() || user.username?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center md:text-left">
                  <CardTitle className="text-2xl text-white">{user.name || "Usuário"}</CardTitle>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="inline-flex items-center bg-blue-900/40 px-2 py-1 rounded-full text-xs text-blue-300">
                      <Mail className="h-3 w-3 mr-1" />
                      {user.username}
                    </span>
                    {daysSinceStart > 0 && (
                      <span className="inline-flex items-center bg-purple-900/40 px-2 py-1 rounded-full text-xs text-purple-300">
                        <CalendarClock className="h-3 w-3 mr-1" />
                        {daysSinceStart} dias
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6 relative z-10">
              {!isEditing ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                      <Label className="text-xs text-gray-400 mb-1 block">Nome</Label>
                      <div className="text-white flex items-center">
                        <UserIcon className="h-4 w-4 mr-2 text-blue-400" />
                        {user.name || "Não definido"}
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                      <Label className="text-xs text-gray-400 mb-1 block">Nome de usuário</Label>
                      <div className="text-white flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-purple-400" />
                        {user.username}
                      </div>
                    </div>
                    
                    {daysSinceStart > 0 && (
                      <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                        <Label className="text-xs text-gray-400 mb-1 block">Usando Nitric Boost há</Label>
                        <div className="text-white flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                          {daysSinceStart} dias
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4 flex flex-col space-y-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(true)}
                      className="bg-transparent border border-blue-600/50 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300 transition-all duration-300"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Editar perfil
                    </Button>
                    
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button 
                          variant="outline"
                          className="bg-transparent border border-red-600/30 text-red-400 hover:bg-red-950/50 hover:text-red-300 transition-all duration-300"
                        >
                          <Shield className="h-4 w-4 mr-2" />
                          Privacidade e Segurança
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="bg-gray-900 border-gray-800 text-white">
                        <SheetHeader>
                          <SheetTitle className="text-white">Privacidade e Segurança</SheetTitle>
                          <SheetDescription>
                            Gerencie suas configurações de privacidade e segurança
                          </SheetDescription>
                        </SheetHeader>
                        <div className="mt-6 space-y-4">
                          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                            <h3 className="font-medium text-blue-400 mb-2">Política de Privacidade</h3>
                            <p className="text-sm text-gray-400">
                              Seus dados estão protegidos e nunca são compartilhados com terceiros sem o seu consentimento.
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                            <h3 className="font-medium text-blue-400 mb-2">Segurança da Conta</h3>
                            <p className="text-sm text-gray-400">
                              Recomendamos alterar sua senha regularmente para manter sua conta segura.
                            </p>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                    
                    <Button 
                      variant="destructive" 
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white transition-all duration-300"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Nome</Label>
                      <div className="relative">
                        <UserIcon className="h-4 w-4 text-gray-400 absolute top-3 left-3" />
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-500 pl-10 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-300">Nome de usuário</Label>
                      <div className="relative">
                        <Mail className="h-4 w-4 text-gray-400 absolute top-3 left-3" />
                        <Input
                          id="username"
                          value={user.username}
                          disabled
                          className="bg-gray-800/80 border-gray-700 text-gray-400 pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                      className="bg-transparent border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      onClick={handleUpdateProfile}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                    >
                      Salvar
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-purple-500/10 p-4 relative z-10">
              <p className="text-xs text-gray-400 w-full text-center">
                Membro desde {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "..."}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
