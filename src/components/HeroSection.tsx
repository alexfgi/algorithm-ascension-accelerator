import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, DollarSign, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [activeModels, setActiveModels] = useState(12);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModels(prev => prev === 12 ? 11 : 12);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-fuchsia/10 via-transparent to-cyber-blue/5"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* ROI Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-neon-fuchsia/20 border-neon-fuchsia text-neon-fuchsia hover:bg-neon-fuchsia/30 px-4 py-2 text-sm font-semibold animate-pulse-glow">
                ⚡ 98% Client ROI Guaranteed
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-neon-fuchsia via-cyber-blue to-neon-fuchsia bg-clip-text text-transparent">
                  Be Seen by
                </span>
                <br />
                <span className="text-foreground">10,000+ Viewers</span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
                  in 60 Minutes
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Our <span className="text-neon-fuchsia font-semibold">$10/hr Promotion</span> Gets You 
              <span className="text-cyber-blue font-semibold"> Front-Page Chaturbate/Stripchat</span> Placement - 
              <span className="text-foreground font-semibold"> Earn 3X Tips or 100% Refund</span>
            </p>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-neon-fuchsia">47</div>
                <div className="text-sm text-muted-foreground">Avg $/hr Before</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-cyber-blue">138</div>
                <div className="text-sm text-muted-foreground">Avg $/hr After</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-neon-fuchsia">+173%</div>
                <div className="text-sm text-muted-foreground">Tips Increase</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-cyber-blue">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button variant="hero" size="xl" className="w-full lg:w-auto min-w-80">
                <Zap className="w-5 h-5 mr-2" />
                Claim My Front-Page Spot
              </Button>
              
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <Button variant="premium" size="lg" className="w-full lg:w-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  START FREE TRIAL
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  <Users className="w-4 h-4 inline mr-1" />
                  <span className="text-neon-fuchsia font-semibold">{activeModels} models</span> being boosted now
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-card/50 border border-neon-fuchsia/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neon-fuchsia/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-neon-fuchsia" />
                </div>
                <div>
                  <p className="text-sm font-semibold">7-Day Profit Guarantee</p>
                  <p className="text-xs text-muted-foreground">Earn $500+ in first week or full refund + $50 bonus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Ranking Chart Visualization */}
            <div className="bg-card/30 backdrop-blur-sm border border-neon-fuchsia/20 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-center">Your Algorithm Domination</h3>
              
              {/* Mock Ranking Chart */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Position #47</span>
                  <div className="w-24 h-2 bg-muted rounded-full">
                    <div className="w-4 h-2 bg-destructive rounded-full"></div>
                  </div>
                  <span className="text-sm text-destructive">$47/hr</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Position #12</span>
                  <div className="w-24 h-2 bg-muted rounded-full">
                    <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-yellow-500">$89/hr</span>
                </div>
                
                <div className="flex items-center justify-between animate-glow">
                  <span className="text-sm text-neon-fuchsia font-semibold">Position #3</span>
                  <div className="w-24 h-2 bg-muted rounded-full">
                    <div className="w-20 h-2 bg-neon-fuchsia rounded-full"></div>
                  </div>
                  <span className="text-sm text-neon-fuchsia font-semibold">$138/hr</span>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue">
                  🔥 GUARANTEED TOP 3
                </Badge>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 animate-float">
              <div className="bg-neon-fuchsia/20 backdrop-blur-sm rounded-full p-3 border border-neon-fuchsia/30">
                <Zap className="w-6 h-6 text-neon-fuchsia" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-cyber-blue/20 backdrop-blur-sm rounded-full p-3 border border-cyber-blue/30">
                <Users className="w-6 h-6 text-cyber-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};