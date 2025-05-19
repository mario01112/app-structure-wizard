
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  name: string;
  email: string;
  progress: {
    startDate: string;
    lastCheckIn: string;
    daysCompleted: number;
    weight: number;
    reminderTime: string;
    notes: string;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserProgress: (progressData: Partial<User['progress']>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on init
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    // For demo purposes, we'll simulate a login
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo accounts - in a real app this would be handled by a backend
      const demoUsers: Record<string, User> = {
        "user@example.com": {
          id: "1",
          name: "Usuário Demonstração",
          email: "user@example.com",
          progress: {
            startDate: new Date().toISOString(),
            lastCheckIn: new Date().toISOString(),
            daysCompleted: 0,
            weight: 70,
            reminderTime: "08:00",
            notes: "",
          }
        }
      };

      if (password !== "password" || !demoUsers[email]) {
        throw new Error("Email ou senha inválidos");
      }

      const userData = demoUsers[email];
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userData));
      
      toast.success("Login realizado com sucesso!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Falha no login: " + (error instanceof Error ? error.message : "Erro desconhecido"));
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new user (in a real app this would be handled by a backend)
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        progress: {
          startDate: new Date().toISOString(),
          lastCheckIn: new Date().toISOString(),
          daysCompleted: 0,
          weight: 0,
          reminderTime: "08:00",
          notes: "",
        }
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(newUser));
      
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Falha no registro: " + (error instanceof Error ? error.message : "Erro desconhecido"));
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    toast.info("Você saiu da conta");
  };

  const updateUserProgress = (progressData: Partial<User['progress']>) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      progress: {
        ...user.progress,
        ...progressData
      }
    };
    
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    updateUserProgress
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
