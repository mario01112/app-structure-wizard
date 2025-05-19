
// This file contains the AI assistant logic and predefined responses

// Example exercises to recommend
const exerciseRecommendations = [
  "Ponte Pélvica: ótima para melhorar a circulação na região íntima.",
  "Agachamento: aumenta a força e irrigação sanguínea nas pernas e quadril.",
  "Prancha Abdominal: melhora a postura e a resistência central do corpo.",
  "Alongamentos Diários: ajudam a manter a flexibilidade e melhoram o fluxo sanguíneo.",
  "Respiração Profunda: oxigena o corpo e ajuda a reduzir o estresse."
];

// Predefined responses based on keywords
const responseMap: Record<string, string[]> = {
  "exercicio": [
    "Recomendo começar com exercícios leves de alongamento pela manhã, seguidos por exercícios de força 3 vezes por semana. Integre exercícios para circulação sanguínea como caminhadas diárias.",
    "Para otimizar seus resultados, tente incluir 5-10 minutos de exercícios específicos para circulação todos os dias. Nossa seção de Exercícios tem opções excelentes para incluir na sua rotina.",
    "A combinação ideal são exercícios aeróbicos e de força. Tente 20 minutos de cardio (caminhada rápida ou ciclismo) 3x semana, e 2x semana de exercícios resistidos focados nos membros inferiores."
  ],
  "circulacao": [
    "Para melhorar sua circulação sanguínea, recomendo exercícios como caminhadas diárias, alongamentos pela manhã e exercícios específicos como a ponte pélvica. Visite nossa aba de Exercícios para instruções detalhadas.",
    "A circulação melhora com movimentos regulares. Tente não ficar sentado por mais de 1 hora seguida. Levante-se, caminhe ou faça alguns agachamentos para estimular o fluxo sanguíneo.",
    "O Nitric Boost auxilia na circulação por conter ingredientes que apoiam a produção de óxido nítrico, que por sua vez ajuda a dilatar os vasos sanguíneos."
  ],
  "rotina": [
    "Uma rotina eficaz inclui: 1) Tome o Nitric Boost pela manhã, 2) Pratique 5min de respiração profunda, 3) Faça os exercícios recomendados 3x por semana, 4) Mantenha-se hidratado durante o dia.",
    "Para resultados ideais, estabeleça uma rotina consistente: tome o suplemento no mesmo horário, pratique os exercícios recomendados em dias alternados, e faça o check-in diário no app para acompanhar seu progresso.",
    "Recomendo alternar dias de exercícios ativos com dias de recuperação e alongamento. Não se esqueça de registrar sua evolução no app para acompanharmos juntos!"
  ],
  "comprar": [
    "Você pode adquirir o Nitric Boost através do link oficial: https://getnitricboost.net/discovery#aff=Preciosa88. Lá você encontrará todas as informações sobre o produto e as opções de compra.",
    "Para comprar mais Nitric Boost, acesse diretamente: https://getnitricboost.net/discovery#aff=Preciosa88. Recomendo verificar as ofertas de pacotes múltiplos para economia.",
    "O Nitric Boost está disponível exclusivamente pelo site oficial: https://getnitricboost.net/discovery#aff=Preciosa88. Isso garante que você receberá o produto original com todas as garantias."
  ],
  "renovar": [
    "Recomendo renovar seu suplemento a cada 30 dias para não interromper os benefícios. Você pode comprar em: https://getnitricboost.net/discovery#aff=Preciosa88",
    "Para manter os resultados consistentes, é importante não ficar sem o Nitric Boost. Considere renovar quando estiver com apenas uma semana restante. Acesse: https://getnitricboost.net/discovery#aff=Preciosa88",
    "A constância é chave para bons resultados. Para não ficar sem, configure um lembrete 5 dias antes de acabar seu frasco e renove em: https://getnitricboost.net/discovery#aff=Preciosa88"
  ],
  "beneficio": [
    "O Nitric Boost foi formulado para ajudar a melhorar a circulação sanguínea, aumentar a energia e apoiar a saúde cardiovascular. Muitos usuários relatam melhora na disposição e desempenho físico.",
    "Os principais benefícios incluem: melhor circulação sanguínea, aumento da energia, apoio à função endotelial (revestimento dos vasos sanguíneos), e potencial melhora no desempenho físico e bem-estar geral.",
    "O Nitric Boost contém ingredientes que ajudam na produção de óxido nítrico, um componente que auxilia na dilatação dos vasos sanguíneos, melhorando assim a circulação e potencialmente o desempenho físico."
  ],
  "progresso": [
    "Seu progresso pode ser acompanhado na aba Progresso do aplicativo. Lá você pode registrar como se sente e acompanhar sua evolução ao longo do tempo. Continue fazendo os check-ins diários!",
    "Para monitorar seu progresso efetivamente, registre como se sente diariamente, complete os exercícios recomendados e marque-os como concluídos. Isso nos ajudará a personalizar ainda mais as recomendações para você.",
    "A constância é essencial para ver resultados. Continue com o uso regular do Nitric Boost, pratique os exercícios recomendados e acompanhe seu progresso no app. Estamos aqui para apoiá-lo nessa jornada!"
  ],
  "saude": [
    "Para uma saúde íntima e geral otimizada, recomendo: 1) Hidratação adequada, 2) Alimentação balanceada rica em antioxidantes, 3) Exercícios regulares, 4) Gerenciamento do estresse, e 5) Sono de qualidade.",
    "A saúde íntima está conectada com a saúde geral. O Nitric Boost, combinado com exercícios regulares, alimentação equilibrada e bom gerenciamento do estresse, pode ajudar a promover bem-estar em todos os aspectos.",
    "Para uma abordagem holística à saúde, combine o uso do Nitric Boost com hábitos saudáveis: reduza alimentos processados, pratique atividades físicas regularmente, e priorize um sono de qualidade."
  ]
};

// Default responses when no specific keywords match
const defaultResponses = [
  "Posso ajudar com informações sobre o Nitric Boost, exercícios recomendados, ou como melhorar sua saúde e bem-estar. O que gostaria de saber?",
  "Estou aqui para esclarecer suas dúvidas sobre saúde, desempenho, exercícios ou o Nitric Boost. Como posso ajudar hoje?",
  "Você pode me perguntar sobre sua rotina de exercícios, dicas para melhorar sua circulação, ou quando renovar seu suplemento. O que deseja saber?"
];

// Detect keywords in user input
const detectKeywords = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  for (const keyword of Object.keys(responseMap)) {
    if (lowerInput.includes(keyword)) {
      return keyword;
    }
  }
  
  if (lowerInput.includes("exercícios") || lowerInput.includes("treino")) return "exercicio";
  if (lowerInput.includes("compra") || lowerInput.includes("adquirir")) return "comprar";
  if (lowerInput.includes("benefícios") || lowerInput.includes("vantagens")) return "beneficio";
  if (lowerInput.includes("progredir") || lowerInput.includes("evolução")) return "progresso";
  if (lowerInput.includes("saudável") || lowerInput.includes("bem-estar")) return "saude";
  
  return "";
};

// Get a random response from an array
const getRandomResponse = (responses: string[]): string => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

// Main function to generate AI responses
export const generateAIResponse = async (userInput: string): Promise<string> => {
  // In a real app, this would call an AI API, but for now we'll use predefined responses
  
  // Simple 500ms delay to simulate processing time
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Detect keywords and get appropriate response
  const keyword = detectKeywords(userInput);
  
  if (keyword) {
    let response = getRandomResponse(responseMap[keyword]);
    
    // Add exercise recommendations if asking about exercises
    if (keyword === "exercicio" || keyword === "circulacao") {
      const randomExercise = getRandomResponse(exerciseRecommendations);
      response += `\n\nUma sugestão específica: ${randomExercise}`;
    }
    
    return response;
  }
  
  // Use default response if no keywords match
  return getRandomResponse(defaultResponses);
};

// Helper function for date-based suggestions (could be expanded in the future)
export const shouldSuggestRenewal = (startDate: string): boolean => {
  const start = new Date(startDate);
  const today = new Date();
  const daysSinceStart = Math.floor((today.getTime() - start.getTime()) / (1000 * 3600 * 24));
  
  // Suggest renewal every 30 days
  return daysSinceStart > 0 && daysSinceStart % 30 >= 25;
};
