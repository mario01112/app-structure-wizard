
import { useState, useEffect } from 'react';

export const usePurchaseInterceptor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Palavras-chave que identificam CTAs de compra
    const purchaseKeywords = [
      'comprar', 'buy', 'quero', 'oferta', 'nitric boost', 
      'compre', 'adquirir', 'purchase', 'order', 'get',
      'obter', 'garantir', 'aproveitar'
    ];

    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Verifica se é um link ou botão
      if (!target || (!target.closest('a') && !target.closest('button'))) {
        return;
      }

      const element = target.closest('a, button') as HTMLElement;
      const text = element.textContent?.toLowerCase() || '';
      const href = element.getAttribute('href') || '';
      
      // Verifica se contém palavras-chave de compra
      const hasPurchaseKeyword = purchaseKeywords.some(keyword => 
        text.includes(keyword) || href.includes(keyword)
      );

      // Verifica se é um link para Nitric Boost
      const isNitricBoostLink = href.includes('getnitricboost.net') || 
                               href.includes('nitric') ||
                               text.includes('nitric');

      if (hasPurchaseKeyword || isNitricBoostLink) {
        // Previne o comportamento padrão
        event.preventDefault();
        event.stopPropagation();
        
        // Abre o modal
        setIsModalOpen(true);
      }
    };

    // Adiciona o listener para capturar cliques
    document.addEventListener('click', handleClick, true);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    closeModal
  };
};
