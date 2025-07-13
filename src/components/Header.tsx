import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, MessageCircle, BarChart3 } from "lucide-react";
import { useState } from "react";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-cosmic-purple" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-fuchsia to-cyber-blue bg-clip-text text-transparent">
              AlgoBoost
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
                Services
              </button>
              {/* Dropdown could be added here */}
            </div>
            <a href="#results" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
              Results
            </a>
            <a href="#pricing" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
              Pricing
            </a>
            <a href="#support" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
              Support
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Live Chat */}
            <Button variant="ghost" size="sm" className="text-neon-fuchsia hover:text-neon-fuchsia hover:bg-neon-fuchsia/10">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
            
            {/* Model Dashboard */}
            <Button variant="premium" size="sm">
              Model Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden py-4 border-t border-border/20">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
                Services
              </a>
              <a href="#results" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
                Results
              </a>
              <a href="#pricing" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
                Pricing
              </a>
              <a href="#support" className="text-foreground hover:text-neon-fuchsia transition-colors font-medium">
                Support
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-border/20">
                <Button variant="ghost" size="sm" className="justify-start text-neon-fuchsia hover:text-neon-fuchsia hover:bg-neon-fuchsia/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
                <Button variant="premium" size="sm">
                  Model Dashboard
                </Button>
              </div>
            </nav>
          </div>}
      </div>

      {/* Slot Counter Bar */}
      <div className="bg-neon-fuchsia/10 border-b border-neon-fuchsia/20">
        <div className="container mx-auto px-4 py-2">
          
        </div>
      </div>
    </header>;
};