
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import all spreadsheet components
import OffersSpreadsheet from './OffersSpreadsheet';
import BenefitsSpreadsheet from './BenefitsSpreadsheet';
import AppStructureSpreadsheet from './AppStructureSpreadsheet';
import ExercisesSpreadsheet from './ExercisesSpreadsheet';
import AISpreadsheet from './AISpreadsheet';
import MultilingualSpreadsheet from './MultilingualSpreadsheet';
import BonusSpreadsheet from './BonusSpreadsheet';
import MarketingSpreadsheet from './MarketingSpreadsheet';

const SpreadsheetsManager = () => {
  const handleExport = (type: string) => {
    // Placeholder for export functionality
    console.log(`Exportando planilha como ${type}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            📊 Gestão Nitric Boost Ultra + App Nitric IA
          </CardTitle>
          <p className="text-blue-100 mt-2">
            8 Planilhas organizadas para marketing, tech e produto
          </p>
        </CardHeader>
        <CardContent className="flex gap-4 justify-center">
          <Button 
            variant="secondary" 
            onClick={() => handleExport('excel')}
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            📊 Exportar Excel
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleExport('pdf')}
            className="bg-white text-purple-600 hover:bg-purple-50"
          >
            📄 Exportar PDF
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleExport('sheets')}
            className="bg-white text-green-600 hover:bg-green-50"
          >
            📋 Google Sheets
          </Button>
        </CardContent>
      </Card>

      {/* Spreadsheets Tabs */}
      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="offers">🟢 Ofertas</TabsTrigger>
          <TabsTrigger value="benefits">🔵 Benefícios</TabsTrigger>
          <TabsTrigger value="structure">🟣 Estrutura</TabsTrigger>
          <TabsTrigger value="exercises">🟠 Exercícios</TabsTrigger>
          <TabsTrigger value="ai">⚫ IA</TabsTrigger>
          <TabsTrigger value="multilingual">🟡 Idiomas</TabsTrigger>
          <TabsTrigger value="bonus">🟤 Bônus</TabsTrigger>
          <TabsTrigger value="marketing">🔴 Marketing</TabsTrigger>
        </TabsList>

        <TabsContent value="offers" className="mt-6">
          <OffersSpreadsheet />
        </TabsContent>

        <TabsContent value="benefits" className="mt-6">
          <BenefitsSpreadsheet />
        </TabsContent>

        <TabsContent value="structure" className="mt-6">
          <AppStructureSpreadsheet />
        </TabsContent>

        <TabsContent value="exercises" className="mt-6">
          <ExercisesSpreadsheet />
        </TabsContent>

        <TabsContent value="ai" className="mt-6">
          <AISpreadsheet />
        </TabsContent>

        <TabsContent value="multilingual" className="mt-6">
          <MultilingualSpreadsheet />
        </TabsContent>

        <TabsContent value="bonus" className="mt-6">
          <BonusSpreadsheet />
        </TabsContent>

        <TabsContent value="marketing" className="mt-6">
          <MarketingSpreadsheet />
        </TabsContent>
      </Tabs>

      {/* Footer Info */}
      <Card className="bg-gray-50 border-dashed">
        <CardContent className="text-center py-6">
          <p className="text-gray-600">
            💡 <strong>Dica:</strong> Estas planilhas são interativas e podem ser facilmente exportadas para Excel, Google Sheets ou PDF para uso offline.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpreadsheetsManager;
