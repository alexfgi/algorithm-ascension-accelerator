import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Shield, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-cosmic-purple border-t border-neon-fuchsia/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-cosmic-purple" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-fuchsia to-cyber-blue bg-clip-text text-transparent">
                AlgoBoost
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Algorithm domination for elite performers. Turn streaming hours into $100+/hr paydays.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyber-blue" />
              <span className="text-xs text-cyber-blue">TOS-Compliant Methods</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2 text-sm">
              <a href="#chaturbate" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Chaturbate Elite
              </a>
              <a href="#stripchat" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Stripchat Amplifier
              </a>
              <a href="#combo" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Combo Deals
              </a>
              <a href="#official" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Official Promotions
              </a>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2 text-sm">
              <a href="#faq" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                FAQ
              </a>
              <a href="#tos" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Privacy Policy
              </a>
              <a href="#refund" className="block text-muted-foreground hover:text-neon-fuchsia transition-colors">
                Refund Policy
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">24/7 Priority Assistance</h3>
            <div className="space-y-3">
              <Button variant="neon" size="sm" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram Support
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Response time: &lt;15 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neon-fuchsia/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 AlgoBoost. All rights reserved. 
              <span className="text-neon-fuchsia ml-2">Guaranteed Results or 100% Refund</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">Secured by:</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-card rounded border border-muted-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold">S</span>
                </div>
                <span className="text-muted-foreground">Stripe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-card rounded border border-muted-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold">C</span>
                </div>
                <span className="text-muted-foreground">Coinbase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};