
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AISpreadsheet = () => {
  const interactions = [
    {
      tipo: "🤔 Pergunta",
      exemplo: "Como posso melhorar minha energia hoje?",
      avatar: "Sim",
      baseadoEm: "Humor do usuário, hora do dia"
    },
    {
      tipo: "💡 Dica",
      exemplo: "Que tal fazer o exercício de respiração agora?",
      avatar: "Sim", 
      baseadoEm: "Progresso do treino, tempo"
    },
    {
      tipo: "🔥 Motivação",
      exemplo: "Você está indo muito bem! Continue assim!",
      avatar: "Sim",
      baseadoEm: "Exercícios completados"
    },
    {
      tipo: "📊 Análise",
      exemplo: "Seus resultados melhoraram 30% esta semana",
      avatar: "Não",
      baseadoEm: "Dados de progresso"
    },
    {
      tipo: "⏰ Lembrete",
      exemplo: "Hora do seu treino diário!",
      avatar: "Sim",
      baseadoEm: "Horário configurado"
    },
    {
      tipo: "🎯 Objetivo",
      exemplo: "Vamos definir sua meta para hoje?",
      avatar: "Sim",
      baseadoEm: "Perfil do usuário"
    },
    {
      tipo: "❓ Resposta",
      exemplo: "Com base no seu perfil, recomendo...",
      avatar: "Sim",
      baseadoEm: "Pergunta específica do usuário"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
        <CardTitle className="flex items-center gap-2 text-gray-800">
          <span className="text-xl">🤖</span>
          ⚫ 5. INTELIGÊNCIA ARTIFICIAL DO APP
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-bold text-gray-800">Tipo de Interação</TableHead>
              <TableHead className="font-bold text-gray-800">Exemplo de Texto</TableHead>
              <TableHead className="font-bold text-gray-800">Avatar Presente?</TableHead>
              <TableHead className="font-bold text-gray-800">Responde com Base em Quê?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interactions.map((interaction, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-25"}>
                <TableCell className="font-medium">{interaction.tipo}</TableCell>
                <TableCell className="italic text-gray-700">"{interaction.exemplo}"</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    interaction.avatar === 'Sim' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {interaction.avatar}
                  </span>
                </TableCell>
                <TableCell>{interaction.baseadoEm}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AISpreadsheet;
