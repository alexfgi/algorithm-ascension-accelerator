import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const StickyCTA = () => {
  const [bgColor, setBgColor] = useState("bg-neon-fuchsia");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show sticky CTA after user scrolls down
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Color changing effect every 8 seconds
    const interval = setInterval(() => {
      setBgColor(prev => 
        prev === "bg-neon-fuchsia" ? "bg-cyber-blue" : "bg-neon-fuchsia"
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container mx-auto">
        <div className={`${bgColor} rounded-lg shadow-lg backdrop-blur-sm transition-all duration-1000 animate-glow`}>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-cosmic-purple" />
              <span className="font-semibold text-cosmic-purple">
                Your Top 3 Spot is 1 Click Away
              </span>
            </div>
            
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-cosmic-purple text-neon-fuchsia hover:bg-cosmic-purple/80 font-semibold"
            >
              Claim Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};