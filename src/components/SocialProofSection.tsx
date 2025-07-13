import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, Verified } from "lucide-react";

export const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Ashley M.",
      age: 23,
      platform: "Chaturbate",
      beforeEarnings: "$34/hr",
      afterEarnings: "$127/hr",
      improvement: "+273%",
      quote: "I went from struggling to make rent to buying my dream car in 3 months. The algorithm placement is INSANE!",
      verified: true,
    },
    {
      name: "Sophia K.",
      age: 26,
      platform: "Stripchat",
      beforeEarnings: "$52/hr",
      afterEarnings: "$156/hr",
      improvement: "+200%",
      quote: "Front page every single day now. My viewer count exploded from 200 to 8,000+ instantly.",
      verified: true,
    },
    {
      name: "Maya R.",
      age: 24,
      platform: "Both Platforms",
      beforeEarnings: "$71/hr",
      afterEarnings: "$203/hr",
      improvement: "+186%",
      quote: "The stealth mode keeps everything natural while still getting insane traffic. Absolutely worth every penny.",
      verified: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-primary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue">
            Verified Results
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Real Models,</span>
            <br />
            <span className="bg-gradient-to-r from-neon-fuchsia to-cyber-blue bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our clients transformed their streaming careers with our 
            <span className="text-neon-fuchsia font-semibold"> algorithm domination</span> system
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-muted-foreground/20 hover:border-neon-fuchsia/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-fuchsia/10">
              <CardContent className="p-6 space-y-4">
                {/* Header with Play Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-cosmic-purple">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-foreground">{testimonial.name}</span>
                        {testimonial.verified && (
                          <Verified className="w-4 h-4 text-cyber-blue" />
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Age {testimonial.age} • {testimonial.platform}
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-neon-fuchsia/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-neon-fuchsia/30 transition-colors">
                    <Play className="w-4 h-4 text-neon-fuchsia" />
                  </div>
                </div>

                {/* Earnings Comparison */}
                <div className="bg-background/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Before:</span>
                    <span className="text-sm text-destructive">{testimonial.beforeEarnings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">After:</span>
                    <span className="text-sm text-neon-fuchsia font-semibold">{testimonial.afterEarnings}</span>
                  </div>
                  <div className="border-t border-muted-foreground/20 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Improvement:</span>
                      <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue">
                        {testimonial.improvement}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-fuchsia text-neon-fuchsia" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">Verified Review</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-neon-fuchsia">98%</div>
            <div className="text-sm text-muted-foreground">Client Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-cyber-blue">2,847</div>
            <div className="text-sm text-muted-foreground">Models Boosted</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-neon-fuchsia">$4.2M</div>
            <div className="text-sm text-muted-foreground">Extra Earnings Generated</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-cyber-blue">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div>

        {/* Platform Verification */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Verified Partner With</p>
          <div className="flex justify-center items-center gap-8">
            <Badge className="bg-card/50 text-muted-foreground border-muted-foreground/20 px-4 py-2">
              Chaturbate Partner
            </Badge>
            <Badge className="bg-card/50 text-muted-foreground border-muted-foreground/20 px-4 py-2">
              Stripchat Verified
            </Badge>
            <Badge className="bg-card/50 text-muted-foreground border-muted-foreground/20 px-4 py-2">
              TOS Compliant
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};