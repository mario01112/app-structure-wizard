
import { Category } from "@/types/exercises";

export const exerciseCategories: Category[] = [
  {
    id: "morning-stretches",
    name: "Alongamentos matinais",
    exercises: [
      {
        id: "pelvic-bridge",
        name: "Ponte Pélvica",
        shortDescription: "Ativa a região do quadril e melhora a circulação na área genital.",
        imageSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Deite-se de costas, joelhos dobrados, pés no chão.",
          "Levante o quadril até formar uma linha reta dos ombros aos joelhos.",
          "Mantenha por 5 segundos e volte.",
          "Faça 3 séries de 10 repetições."
        ],
        tip: "Faça ao acordar para ativar a circulação."
      },
      {
        id: "cat-cow-stretch",
        name: "Alongamento Gato-Vaca",
        shortDescription: "Melhora a flexibilidade da coluna e ativa o core.",
        imageSrc: "https://images.unsplash.com/photo-1588286840104-8457f630308d?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Fique de quatro, mãos alinhadas com os ombros e joelhos com os quadris.",
          "Inspire e arqueie as costas para baixo, levantando a cabeça (vaca).",
          "Expire e arqueie as costas para cima, abaixando a cabeça (gato).",
          "Repita 10 vezes lentamente."
        ],
        tip: "Concentre-se na respiração e no movimento da coluna."
      }
    ]
  },
  {
    id: "breathing-focus",
    name: "Exercícios de respiração e foco",
    exercises: [
      {
        id: "diaphragmatic-breathing",
        name: "Respiração Diafragmática",
        shortDescription: "Reduz estresse e melhora o foco mental.",
        imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Sente-se confortavelmente ou deite-se de costas.",
          "Coloque uma mão no peito e outra no abdômen.",
          "Inspire profundamente pelo nariz, expandindo o abdômen.",
          "Expire lentamente pela boca, contraindo suavemente o abdômen.",
          "Repita por 5 minutos."
        ],
        tip: "Pratique diariamente para reduzir ansiedade e melhorar a concentração."
      },
      {
        id: "box-breathing",
        name: "Respiração Quadrada",
        shortDescription: "Técnica usada por atletas e militares para acalmar a mente.",
        imageSrc: "https://images.unsplash.com/photo-1518310952931-b1de897abd5e?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Inspire por 4 segundos.",
          "Segure o ar por 4 segundos.",
          "Expire por 4 segundos.",
          "Aguente sem respirar por 4 segundos.",
          "Repita o ciclo por 5 minutos."
        ],
        tip: "Praticar antes de situações estressantes pode ajudar a manter a calma e o foco."
      }
    ]
  },
  {
    id: "blood-circulation",
    name: "Exercícios para circulação sanguínea",
    exercises: [
      {
        id: "leg-pumps",
        name: "Bombeamento de Pernas",
        shortDescription: "Melhora o fluxo sanguíneo nas pernas e região pélvica.",
        imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Deite-se de costas com as pernas elevadas contra a parede.",
          "Flexione e estenda os pés alternadamente por 30 segundos.",
          "Depois, faça movimentos circulares com os tornozelos por 30 segundos.",
          "Descanse e repita 3 vezes."
        ],
        tip: "Ótimo para fazer após longos períodos sentado."
      },
      {
        id: "hip-circles",
        name: "Círculos com o Quadril",
        shortDescription: "Ativa a circulação na região pélvica e melhora a mobilidade.",
        imageSrc: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Fique de pé com as mãos nos quadris e pés afastados na largura dos ombros.",
          "Faça círculos amplos com o quadril em sentido horário 10 vezes.",
          "Repita em sentido anti-horário 10 vezes.",
          "Faça 3 séries."
        ],
        tip: "Mantenha o core ativado durante o exercício para maior estabilidade."
      }
    ]
  },
  {
    id: "power-libido",
    name: "Exercícios para potência e libido",
    exercises: [
      {
        id: "kegel-exercises",
        name: "Exercícios de Kegel",
        shortDescription: "Fortalece os músculos do assoalho pélvico, melhorando o controle e a sensação.",
        imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Identifique os músculos pélvicos contraindo como se estivesse interrompendo o fluxo urinário.",
          "Contraia esses músculos, mantendo por 3-5 segundos.",
          "Relaxe por 3-5 segundos.",
          "Repita 10 vezes, 3 vezes ao dia."
        ],
        tip: "Pode ser feito discretamente em qualquer lugar e a qualquer momento."
      },
      {
        id: "squat-jumps",
        name: "Agachamentos com Salto",
        shortDescription: "Aumenta a testosterona e melhora a circulação nas pernas e região pélvica.",
        imageSrc: "https://images.unsplash.com/photo-1510797766257-a44a5bfc7b4e?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Fique em pé com os pés na largura dos ombros.",
          "Abaixe-se em um agachamento profundo.",
          "Salte explosivamente para cima, estendendo completamente as pernas.",
          "Aterrisse suavemente voltando à posição de agachamento.",
          "Faça 3 séries de 10 repetições."
        ],
        tip: "Mantenha o core ativado durante todo o exercício para proteger a coluna."
      }
    ]
  },
  {
    id: "pre-post-workout",
    name: "Dicas para pré e pós-treino",
    exercises: [
      {
        id: "dynamic-warmup",
        name: "Aquecimento Dinâmico",
        shortDescription: "Prepara o corpo para o exercício, aumentando a temperatura muscular e a frequência cardíaca.",
        imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Pule corda ou faça jumping jacks por 2 minutos.",
          "Faça 10 rotações para cada articulação principal (ombros, quadris, tornozelos).",
          "Realize 10 agachamentos leves e 10 afundos para cada perna.",
          "Complete com 10 flexões modificadas."
        ],
        tip: "Um bom aquecimento reduz o risco de lesão e melhora o desempenho."
      },
      {
        id: "static-stretching",
        name: "Alongamento Estático Pós-Treino",
        shortDescription: "Ajuda na recuperação muscular e reduz a tensão acumulada durante o exercício.",
        imageSrc: "https://images.unsplash.com/photo-1517637382994-f02da38c6728?auto=format&fit=crop&q=80&w=800&h=500",
        steps: [
          "Alongue cada grupo muscular principal por 20-30 segundos.",
          "Mantenha a respiração calma e regular durante cada alongamento.",
          "Evite movimentos de reflexo ou balísticos.",
          "Foque especialmente nos músculos trabalhados durante seu treino."
        ],
        tip: "Alongar após o exercício, quando os músculos estão aquecidos, é mais eficaz e seguro."
      }
    ]
  }
];
