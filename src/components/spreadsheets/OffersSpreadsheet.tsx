
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ShoppingCart } from "lucide-react";

const OffersSpreadsheet = () => {
  const offers = [
    {
      nome: "Pacote Inicial",
      frascos: "1 frasco",
      descricao: "Experimente por 30 dias",
      link: "https://getnitricboost.net/b?p=nb_1&b=93&fid=188&pg=1564",
      imagem: "single-bottle.jpg",
      cta: "Experimente agora"
    },
    {
      nome: "Melhor Valor",
      frascos: "3 frascos",
      descricao: "3 meses de tratamento + bônus",
      link: "https://getnitricboost.net/b?p=nb_3&b=93&fid=188&pg=1564",
      imagem: "three-bottles.jpg",
      cta: "🏆 Melhor valor"
    },
    {
      nome: "Pacote Ultimate",
      frascos: "6 frascos",
      descricao: "6 meses + todos os bônus",
      link: "https://getnitricboost.net/b?p=nb_6&b=93&fid=188&pg=1564",
      imagem: "six-bottles.jpg",
      cta: "👑 Recomendado"
    },
    {
      nome: "Vídeo Apresentação",
      frascos: "N/A",
      descricao: "Vídeo completo do produto",
      link: "https://getnitricboost.net/b?p=nb_1&b=93&fid=188&pg=1564",
      imagem: "video-thumb.jpg",
      cta: "▶️ Assistir"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b">
        <CardTitle className="flex items-center gap-2 text-green-800">
          <ShoppingCart className="h-5 w-5" />
          🟢 1. OFERTAS E REDIRECIONAMENTOS
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-50">
              <TableHead className="font-bold text-green-800">Nome da Oferta</TableHead>
              <TableHead className="font-bold text-green-800">Frascos Incluídos</TableHead>
              <TableHead className="font-bold text-green-800">Descrição Comercial</TableHead>
              <TableHead className="font-bold text-green-800">Link (URL)</TableHead>
              <TableHead className="font-bold text-green-800">Imagem Associada</TableHead>
              <TableHead className="font-bold text-green-800">CTA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium">{offer.nome}</TableCell>
                <TableCell>{offer.frascos}</TableCell>
                <TableCell>{offer.descricao}</TableCell>
                <TableCell className="max-w-xs truncate">
                  <a href={offer.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    Link <ExternalLink className="h-3 w-3" />
                  </a>
                </TableCell>
                <TableCell>{offer.imagem}</TableCell>
                <TableCell className="font-semibold text-green-700">{offer.cta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OffersSpreadsheet;
