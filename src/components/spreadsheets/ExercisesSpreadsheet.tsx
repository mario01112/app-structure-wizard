
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ExternalLink } from "lucide-react";

const ExercisesSpreadsheet = () => {
  const exercises = [
    {
      nome: "Ponte Pélvica Explosiva",
      objetivo: "Ativar região pélvica e fortalecer glúteos",
      series: "3x15 repetições",
      instrucao: "Deite de costas, levante quadril, mantenha 2s",
      video: "https://player.vimeo.com/video/123456789",
      traducoes: "Sim",
      emoji: "🔥"
    },
    {
      nome: "Respiração de Guerreiro",
      objetivo: "Reduzir ansiedade e melhorar foco",
      series: "5 minutos",
      instrucao: "Respiração 4-4-6 (inspira-segura-expira)",
      video: "https://player.vimeo.com/video/123456790",
      traducoes: "Sim",
      emoji: "🌬️"
    },
    {
      nome: "Agachamento de Potência",
      objetivo: "Estimular testosterona e resistência",
      series: "3x20 repetições",
      instrucao: "Agachamento explosivo com peso nos calcanhares",
      video: "https://player.vimeo.com/video/123456791",
      traducoes: "Sim",
      emoji: "💪"
    },
    {
      nome: "Prancha Diamante",
      objetivo: "Fortalecer core e estabilidade",
      series: "3x45 segundos",
      instrucao: "Prancha com mãos em forma de diamante",
      video: "https://player.vimeo.com/video/123456792",
      traducoes: "Não",
      emoji: "💎"
    },
    {
      nome: "Burpee Explosivo",
      objetivo: "Cardio intenso e força explosiva",
      series: "3x10 repetições",
      instrucao: "Movimento completo: agachar, prancha, pulo",
      video: "https://player.vimeo.com/video/123456793",
      traducoes: "Não",
      emoji: "⚡"
    },
    {
      nome: "Alongamento do Guerreiro",
      objetivo: "Melhorar flexibilidade e recuperação",
      series: "8 minutos",
      instrucao: "Sequência de alongamentos completos",
      video: "https://player.vimeo.com/video/123456794",
      traducoes: "Sim",
      emoji: "🧘‍♂️"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <Check className="h-5 w-5" />
          🟠 4. EXERCÍCIOS DO APP
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-orange-50">
              <TableHead className="font-bold text-orange-800">Nome do Exercício</TableHead>
              <TableHead className="font-bold text-orange-800">Objetivo</TableHead>
              <TableHead className="font-bold text-orange-800">Séries/Repetições</TableHead>
              <TableHead className="font-bold text-orange-800">Instrução</TableHead>
              <TableHead className="font-bold text-orange-800">Link do Vídeo</TableHead>
              <TableHead className="font-bold text-orange-800">Traduções</TableHead>
              <TableHead className="font-bold text-orange-800">Emoji</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exercises.map((exercise, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-orange-25"}>
                <TableCell className="font-medium">{exercise.nome}</TableCell>
                <TableCell>{exercise.objetivo}</TableCell>
                <TableCell className="font-semibold text-orange-700">{exercise.series}</TableCell>
                <TableCell className="max-w-xs">{exercise.instrucao}</TableCell>
                <TableCell>
                  <a href={exercise.video} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    Vídeo <ExternalLink className="h-3 w-3" />
                  </a>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    exercise.traducoes === 'Sim' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {exercise.traducoes}
                  </span>
                </TableCell>
                <TableCell className="text-2xl">{exercise.emoji}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ExercisesSpreadsheet;
