
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const BenefitsSpreadsheet = () => {
  const benefits = [
    {
      beneficio: "Aumento da Energia",
      emoji: "⚡",
      explicacao: "Mais disposição e vitalidade no dia a dia",
      categoria: "Energia",
      aplicavel: "Ambos"
    },
    {
      beneficio: "Melhora da Potência",
      emoji: "💪",
      explicacao: "Fortalecimento e resistência física",
      categoria: "Potência",
      aplicavel: "Homens"
    },
    {
      beneficio: "Aumento da Confiança",
      emoji: "🔥",
      explicacao: "Maior autoestima e segurança pessoal",
      categoria: "Confiança",
      aplicavel: "Ambos"
    },
    {
      beneficio: "Circulação Sanguínea",
      emoji: "❤️",
      explicacao: "Melhora do fluxo sanguíneo corporal",
      categoria: "Natural",
      aplicavel: "Ambos"
    },
    {
      beneficio: "Resistência Física",
      emoji: "🏃‍♂️",
      explicacao: "Maior capacidade de exercícios",
      categoria: "Energia",
      aplicavel: "Ambos"
    },
    {
      beneficio: "Foco Mental",
      emoji: "🧠",
      explicacao: "Maior concentração e clareza mental",
      categoria: "Confiança",
      aplicavel: "Ambos"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Star className="h-5 w-5" />
          🔵 2. BENEFÍCIOS DO PRODUTO
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="font-bold text-blue-800">Benefício</TableHead>
              <TableHead className="font-bold text-blue-800">Emoji</TableHead>
              <TableHead className="font-bold text-blue-800">Explicação Curta</TableHead>
              <TableHead className="font-bold text-blue-800">Categoria</TableHead>
              <TableHead className="font-bold text-blue-800">Aplicável Para</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {benefits.map((benefit, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-25"}>
                <TableCell className="font-medium">{benefit.beneficio}</TableCell>
                <TableCell className="text-2xl">{benefit.emoji}</TableCell>
                <TableCell>{benefit.explicacao}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    benefit.categoria === 'Potência' ? 'bg-red-100 text-red-800' :
                    benefit.categoria === 'Energia' ? 'bg-orange-100 text-orange-800' :
                    benefit.categoria === 'Confiança' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {benefit.categoria}
                  </span>
                </TableCell>
                <TableCell>{benefit.aplicavel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BenefitsSpreadsheet;
