
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
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-slate-900 to-blue-900 border-2 border-blue-500/30 text-white p-0 overflow-hidden">
        {/* Header with blue gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-center relative overflow-hidden">
          {/* Product image in header */}
          <div className="absolute top-2 right-2 w-16 h-16 opacity-30">
            <img 
              src="/lovable-uploads/edc72c6e-e923-42b6-a59f-c944034f462e.png" 
              alt="Nitric Boost"
              className="w-full h-full object-contain"
            />
          </div>
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
            {/* Watch Video Button - Discovery Page */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/discovery#aff=Preciosa88')}
              className="w-full h-14 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <Play className="h-5 w-5 mr-3" />
              <span className="text-lg font-semibold">Watch the Full Video</span>
              <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
            </Button>

            {/* Buy 1 Bottle */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/b?p=nb_1&b=93&fid=188&pg=1564')}
              className="w-full h-14 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingCart className="h-5 w-5 mr-3" />
              <span className="text-lg font-semibold">🟢 Buy 1 Bottle</span>
              <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
            </Button>

            {/* Buy 3 Bottles - Best Value */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/b?p=nb_3&b=93&fid=188&pg=1564')}
              className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all duration-300 hover:scale-105 shadow-xl border-2 border-cyan-400"
            >
              <div className="flex items-center justify-center w-full">
                <Star className="h-5 w-5 mr-3 text-cyan-400" />
                <div className="text-center">
                  <div className="text-lg font-bold">🔵 Buy 3 Bottles</div>
                  <div className="text-sm text-cyan-300 font-semibold">(Best Value)</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
              </div>
            </Button>

            {/* Buy 6 Bottles - Ultimate Pack */}
            <Button
              onClick={() => handleOptionClick('https://getnitricboost.net/b?p=nb_6&b=93&fid=188&pg=1564')}
              className="w-full h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white transition-all duration-300 hover:scale-105 shadow-xl border-2 border-blue-400"
            >
              <div className="flex items-center justify-center w-full">
                <Crown className="h-5 w-5 mr-3 text-blue-400" />
                <div className="text-center">
                  <div className="text-lg font-bold">🟣 Buy 6 Bottles</div>
                  <div className="text-sm text-blue-300 font-semibold">(Ultimate Pack)</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-3 opacity-70" />
              </div>
            </Button>
          </div>

          {/* Footer note */}
          <div className="text-center text-xs text-gray-500 pt-4 border-t border-slate-700">
            <p>Choose your preferred option above to continue</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
