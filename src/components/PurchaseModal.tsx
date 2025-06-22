
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, ShoppingCart, Star, Crown } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const handleOptionClick = (url: string) => {
    onClose();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500/30 text-white p-0 overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              Choose your Nitric Boost option:
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Explanatory message */}
          <div className="text-center text-gray-300 leading-relaxed">
            <p className="mb-4">
              If you don't have problems in bed with your wife, you can just let the video play in the background — at the end you'll be redirected automatically.
            </p>
            <p className="font-semibold text-blue-400">
              Or skip the wait and choose your pack now:
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            {/* Watch Video Button */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/b?p=nb_1&b=93&fid=188&pg=1564')}
              className="w-full h-14 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <Play className="h-5 w-5 mr-3" />
              <span className="text-lg font-semibold">Watch the Full Video</span>
              <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
            </Button>

            {/* Buy 1 Bottle */}
            <Button
              onClick={() => handleOptionClick('https://elasticfunnels-cdn.b-cdn.net/93/assets/images/cards.webp')}
              className="w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingCart className="h-5 w-5 mr-3" />
              <span className="text-lg font-semibold">Buy 1 Bottle</span>
              <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
            </Button>

            {/* Buy 3 Bottles - Best Value */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/b?p=nb_3&b=93&fid=188&pg=1564')}
              className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all duration-300 hover:scale-105 shadow-xl border-2 border-yellow-400"
            >
              <div className="flex items-center justify-center w-full">
                <Star className="h-5 w-5 mr-3 text-yellow-400" />
                <div className="text-center">
                  <div className="text-lg font-bold">Buy 3 Bottles</div>
                  <div className="text-sm text-yellow-300 font-semibold">(Best Value)</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
              </div>
            </Button>

            {/* Buy 6 Bottles - Ultimate Pack */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/b?p=nb_1&b=93&fid=188&pg=1564')}
              className="w-full h-16 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-300 hover:scale-105 shadow-xl border-2 border-orange-400"
            >
              <div className="flex items-center justify-center w-full">
                <Crown className="h-5 w-5 mr-3 text-orange-400" />
                <div className="text-center">
                  <div className="text-lg font-bold">Buy 6 Bottles</div>
                  <div className="text-sm text-orange-300 font-semibold">(Ultimate Pack)</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
              </div>
            </Button>
          </div>

          {/* Footer note */}
          <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-700">
            <p>Choose your preferred option above to continue</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
