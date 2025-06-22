
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const AppStructureSpreadsheet = () => {
  const modules = [
    {
      modulo: "🏠 Tela Inicial",
      funcao: "Dashboard principal com navegação",
      componente: "Avatar 3D, cards de navegação",
      status: "Ativo",
      traducoes: "PT/EN/ES"
    },
    {
      modulo: "💪 Exercícios",
      funcao: "Lista de exercícios categorizados",
      componente: "Cards de exercício, vídeos",
      status: "Ativo",
      traducoes: "PT/EN"
    },
    {
      modulo: "💊 Suplemento",
      funcao: "Informações sobre Nitric Boost",
      componente: "Modal de compra, redirecionamentos",
      status: "Ativo",
      traducoes: "PT/EN/ES/FR"
    },
    {
      modulo: "🤖 Nitric IA",
      funcao: "Assistente virtual inteligente",
      componente: "Chat interface, avatar",
      status: "Ativo",
      traducoes: "PT/EN"
    },
    {
      modulo: "📊 Progresso",
      funcao: "Acompanhamento de resultados",
      componente: "Gráficos, estatísticas",
      status: "Em desenvolvimento",
      traducoes: "PT"
    },
    {
      modulo: "⏰ Lembretes",
      funcao: "Notificações personalizadas",
      componente: "Lista de lembretes, configurações",
      status: "Ativo",
      traducoes: "PT/EN"
    },
    {
      modulo: "👤 Perfil",
      funcao: "Configurações do usuário",
      componente: "Formulários, preferências",
      status: "Ativo",
      traducoes: "PT/EN"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b">
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <Check className="h-5 w-5" />
          🟣 3. ESTRUTURA DO APP NITRIC IA
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-50">
              <TableHead className="font-bold text-purple-800">Módulo</TableHead>
              <TableHead className="font-bold text-purple-800">Função</TableHead>
              <TableHead className="font-bold text-purple-800">Componente</TableHead>
              <TableHead className="font-bold text-purple-800">Status</TableHead>
              <TableHead className="font-bold text-purple-800">Traduções</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {modules.map((module, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-purple-25"}>
                <TableCell className="font-medium">{module.modulo}</TableCell>
                <TableCell>{module.funcao}</TableCell>
                <TableCell>{module.componente}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    module.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {module.status}
                  </span>
                </TableCell>
                <TableCell>{module.traducoes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AppStructureSpreadsheet;
