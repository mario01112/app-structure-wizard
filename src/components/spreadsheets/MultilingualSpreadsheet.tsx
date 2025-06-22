
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MultilingualSpreadsheet = () => {
  const languages = [
    {
      idioma: "🇧🇷 Português (PT)",
      status: "Ativo",
      componentes: "100% - Todos os módulos",
      observacoes: "Idioma principal completo"
    },
    {
      idioma: "🇺🇸 Inglês (EN)",
      status: "Ativo",
      componentes: "85% - Exercícios, IA, Modal",
      observacoes: "Progresso em desenvolvimento"
    },
    {
      idioma: "🇪🇸 Espanhol (ES)",
      status: "Traduzindo",
      componentes: "60% - Modal de compra, Inicial",
      observacoes: "Prioridade comercial"
    },
    {
      idioma: "🇫🇷 Francês (FR)",
      status: "Pendente",
      componentes: "30% - Apenas modal de compra",
      observacoes: "Expansão futura"
    },
    {
      idioma: "🇩🇪 Alemão (DE)",
      status: "Pendente",
      componentes: "0% - Não iniciado",
      observacoes: "Mercado europeu"
    },
    {
      idioma: "🇮🇹 Italiano (IT)",
      status: "Pendente",
      componentes: "0% - Não iniciado",
      observacoes: "Mercado europeu"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-b">
        <CardTitle className="flex items-center gap-2 text-yellow-800">
          <span className="text-xl">🌍</span>
          🟡 6. MULTILÍNGUE
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-yellow-50">
              <TableHead className="font-bold text-yellow-800">Idioma</TableHead>
              <TableHead className="font-bold text-yellow-800">Status</TableHead>
              <TableHead className="font-bold text-yellow-800">Componentes Traduzidos</TableHead>
              <TableHead className="font-bold text-yellow-800">Observações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {languages.map((language, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-yellow-25"}>
                <TableCell className="font-medium">{language.idioma}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    language.status === 'Ativo' ? 'bg-green-100 text-green-800' :
                    language.status === 'Traduzindo' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {language.status}
                  </span>
                </TableCell>
                <TableCell>{language.componentes}</TableCell>
                <TableCell className="text-gray-600">{language.observacoes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MultilingualSpreadsheet;
