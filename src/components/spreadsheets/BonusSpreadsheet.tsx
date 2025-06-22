
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BonusSpreadsheet = () => {
  const bonuses = [
    {
      nome: "📱 App Nitric IA",
      entrega: "Link direto automático",
      personalizado: "Sim",
      vinculado: "Todas as compras"
    },
    {
      nome: "📖 E-book Potência Natural",
      entrega: "Download automático",
      personalizado: "Não",
      vinculado: "3 ou 6 frascos"
    },
    {
      nome: "🎥 Vídeos Exclusivos",
      entrega: "Link por email",
      personalizado: "Sim",
      vinculado: "6 frascos"
    },
    {
      nome: "💬 Grupo VIP WhatsApp",
      entrega: "Convite manual",
      personalizado: "Não",
      vinculado: "6 frascos"
    },
    {
      nome: "📋 Plano Alimentar",
      entrega: "PDF por email",
      personalizado: "Sim",
      vinculado: "3 ou 6 frascos"
    },
    {
      nome: "🏆 Programa 30 Dias",
      entrega: "Acesso à plataforma",
      personalizado: "Sim",
      vinculado: "6 frascos"
    },
    {
      nome: "💊 Consulta Nutricional",
      entrega: "Agendamento manual",
      personalizado: "Sim",
      vinculado: "6 frascos"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 border-b">
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <span className="text-xl">🎁</span>
          🟤 7. BÔNUS E SUPORTE
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-amber-50">
              <TableHead className="font-bold text-amber-800">Nome do Bônus</TableHead>
              <TableHead className="font-bold text-amber-800">Entrega</TableHead>
              <TableHead className="font-bold text-amber-800">Personalizado por Idade?</TableHead>
              <TableHead className="font-bold text-amber-800">Vinculado ao Quê?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bonuses.map((bonus, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-amber-25"}>
                <TableCell className="font-medium">{bonus.nome}</TableCell>
                <TableCell>{bonus.entrega}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    bonus.personalizado === 'Sim' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {bonus.personalizado}
                  </span>
                </TableCell>
                <TableCell className="font-semibold text-amber-700">{bonus.vinculado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BonusSpreadsheet;
