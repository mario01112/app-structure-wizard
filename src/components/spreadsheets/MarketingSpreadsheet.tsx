
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const MarketingSpreadsheet = () => {
  const materials = [
    {
      tipo: "🖼️ Imagem",
      titulo: "Banner Principal Nitric Boost",
      link: "banner-principal.jpg",
      local: "Instagram, Facebook, Site",
      emojis: "💪⚡🔥",
      status: "Pronto"
    },
    {
      tipo: "🎥 Vídeo",
      titulo: "Demonstração do App IA",
      link: "demo-app-ia.mp4",
      local: "Instagram Stories, WhatsApp",
      emojis: "🤖📱✨",
      status: "Pronto"
    },
    {
      tipo: "📝 Texto",
      titulo: "Copy para Modal de Compra",
      link: "copy-modal.txt",
      local: "App, Landing Page",
      emojis: "💬🎯📈",
      status: "Pronto"
    },
    {
      tipo: "🎨 Arte",
      titulo: "Stories Exercícios",
      link: "stories-exercicios.psd",
      local: "Instagram Stories",
      emojis: "💪🏃‍♂️🔥",
      status: "Pendência"
    },
    {
      tipo: "🖼️ Imagem", 
      titulo: "Carrossel Benefícios",
      link: "carrossel-beneficios.jpg",
      local: "Instagram, Facebook",
      emojis: "⚡❤️🧠💪",
      status: "Pronto"
    },
    {
      tipo: "🎥 Vídeo",
      titulo: "Testemunhos de Usuários",
      link: "testemunhos.mp4",
      local: "Site, Instagram",
      emojis: "⭐👥💬",
      status: "Pendência"
    },
    {
      tipo: "📝 Texto",
      titulo: "Sequência Email Marketing",
      link: "emails-sequence.txt",
      local: "Email, WhatsApp",
      emojis: "✉️📧🎯",
      status: "Pronto"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 border-b">
        <CardTitle className="flex items-center gap-2 text-red-800">
          <span className="text-xl">📊</span>
          🔴 8. MATERIAIS DE MARKETING
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-red-50">
              <TableHead className="font-bold text-red-800">Tipo</TableHead>
              <TableHead className="font-bold text-red-800">Título/Tema</TableHead>
              <TableHead className="font-bold text-red-800">Link ou Arquivo</TableHead>
              <TableHead className="font-bold text-red-800">Local de Uso</TableHead>
              <TableHead className="font-bold text-red-800">Emojis/Ícones</TableHead>
              <TableHead className="font-bold text-red-800">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materials.map((material, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-red-25"}>
                <TableCell className="font-medium">{material.tipo}</TableCell>
                <TableCell>{material.titulo}</TableCell>
                <TableCell className="max-w-xs truncate">
                  <span className="text-blue-600 flex items-center gap-1">
                    {material.link} <ExternalLink className="h-3 w-3" />
                  </span>
                </TableCell>
                <TableCell>{material.local}</TableCell>
                <TableCell className="text-lg">{material.emojis}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    material.status === 'Pronto' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {material.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MarketingSpreadsheet;
