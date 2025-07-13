import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Zap, Shield, TrendingUp, Users, Clock, Crown } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-neon-fuchsia/20 text-neon-fuchsia border-neon-fuchsia">
            Platform-Approved Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-neon-fuchsia to-cyber-blue bg-clip-text text-transparent">
              Algorithm Domination
            </span>
            <br />
            <span className="text-foreground">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your platform and watch your earnings explode. Every package includes our 
            <span className="text-neon-fuchsia font-semibold"> Guaranteed Top 3</span> promise.
          </p>
        </div>

        {/* Service Tabs */}
        <Tabs defaultValue="chaturbate" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="chaturbate" className="data-[state=active]:bg-neon-fuchsia data-[state=active]:text-cosmic-purple">
              Chaturbate Elite
            </TabsTrigger>
            <TabsTrigger value="stripchat" className="data-[state=active]:bg-cyber-blue data-[state=active]:text-cosmic-purple">
              Stripchat Amplifier
            </TabsTrigger>
            <TabsTrigger value="combo" className="data-[state=active]:bg-gradient-accent data-[state=active]:text-cosmic-purple">
              Combo Deals
            </TabsTrigger>
          </TabsList>

          {/* Chaturbate Package */}
          <TabsContent value="chaturbate" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Package */}
              <Card className="border-muted-foreground/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-neon-fuchsia">Elite Starter</CardTitle>
                  <CardDescription>Perfect for new models</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">$10<span className="text-lg text-muted-foreground">/hr</span></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Guaranteed Page 1-3 in 4k+ rooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">🔥 BOOSTED badge on thumbnail</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">SMS viewer surge alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">TOS-Compliant methods</span>
                    </div>
                  </div>
                  <Button variant="neon" className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Start Boosting
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Package */}
              <Card className="border-neon-fuchsia/50 bg-card/50 backdrop-blur-sm relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-fuchsia text-cosmic-purple">
                  MOST POPULAR
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-neon-fuchsia">Elite Pro</CardTitle>
                  <CardDescription>Maximum visibility boost</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">$18<span className="text-lg text-muted-foreground">/hr</span></div>
                    <div className="text-sm text-muted-foreground">+173% avg tips</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Guaranteed Top 3 Position</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">👑 FEATURED tag priority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Real-time analytics dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">24/7 priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Tip catalyst optimization</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full">
                    <Star className="w-4 h-4 mr-2" />
                    Dominate Algorithm
                  </Button>
                </CardContent>
              </Card>

              {/* VIP Package */}
              <Card className="border-cyber-blue/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-cyber-blue">Elite VIP</CardTitle>
                  <CardDescription>Complete domination package</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">$35<span className="text-lg text-muted-foreground">/hr</span></div>
                    <div className="text-sm text-cyber-blue">White-glove service</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Guaranteed #1-2 Position</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Custom promotion strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Multiple platform coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Earnings optimization consulting</span>
                    </div>
                  </div>
                  <Button variant="cyber" className="w-full">
                    <Shield className="w-4 h-4 mr-2" />
                    Go VIP
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Stripchat Package */}
          <TabsContent value="stripchat" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Similar structure for Stripchat */}
              <Card className="border-muted-foreground/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-cyber-blue">Amplifier Basic</CardTitle>
                  <CardDescription>Essential visibility boost</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">$10<span className="text-lg text-muted-foreground">/hr</span></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">"POPULAR" Tab Feature</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">10k+ viewer exposure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Stealth Mode (no promo tags)</span>
                    </div>
                  </div>
                  <Button variant="neon" className="w-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Amplify Now
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Stripchat */}
              <Card className="border-cyber-blue/50 bg-card/50 backdrop-blur-sm relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyber-blue text-cosmic-purple">
                  RECOMMENDED
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-cyber-blue">Amplifier Pro</CardTitle>
                  <CardDescription>Maximum earning potential</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">$18<span className="text-lg text-muted-foreground">/hr</span></div>
                    <div className="text-sm text-muted-foreground">+200% avg tips</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Front page guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Tip catalyst activation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Multiple category placement</span>
                    </div>
                  </div>
                  <Button variant="cyber" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Dominate Stripchat
                  </Button>
                </CardContent>
              </Card>

              {/* VIP Stripchat */}
              <Card className="border-neon-fuchsia/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-neon-fuchsia">Amplifier Elite</CardTitle>
                  <CardDescription>Total platform control</CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">$35<span className="text-lg text-muted-foreground">/hr</span></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Platform feature priority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Custom audience targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Revenue optimization suite</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full">
                    <Crown className="w-4 h-4 mr-2" />
                    Go Elite
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Combo Deals */}
          <TabsContent value="combo" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Double Traffic Tuesday */}
              <Card className="border-neon-fuchsia/50 bg-gradient-primary/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
                <CardHeader className="text-center">
                  <Badge className="mx-auto bg-neon-fuchsia text-cosmic-purple mb-2">
                    LIMITED TIME
                  </Badge>
                  <CardTitle className="text-2xl text-neon-fuchsia">Double Traffic Tuesday</CardTitle>
                  <CardDescription>Chaturbate + Official Promo Bundle</CardDescription>
                  <div className="py-4">
                    <div className="text-sm text-muted-foreground line-through">$60 value</div>
                    <div className="text-4xl font-bold text-foreground">$49<span className="text-lg text-muted-foreground">/session</span></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Chaturbate Elite Pro boost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">$60 Official Platform Promo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Synchronized traffic surge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-fuchsia" />
                      <span className="text-sm">Cross-platform analytics</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full text-lg" size="lg">
                    <Clock className="w-5 h-5 mr-2" />
                    Claim Tuesday Deal
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Valid every Tuesday. Next available: 3 days
                  </p>
                </CardContent>
              </Card>

              {/* Multi-Platform Domination */}
              <Card className="border-cyber-blue/50 bg-gradient-primary/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-neon-fuchsia"></div>
                <CardHeader className="text-center">
                  <Badge className="mx-auto bg-cyber-blue text-cosmic-purple mb-2">
                    BEST VALUE
                  </Badge>
                  <CardTitle className="text-2xl text-cyber-blue">Multi-Platform Domination</CardTitle>
                  <CardDescription>Complete algorithm control</CardDescription>
                  <div className="py-4">
                    <div className="text-4xl font-bold text-foreground">$25<span className="text-lg text-muted-foreground">/hr</span></div>
                    <div className="text-sm text-cyber-blue">Per platform</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Chaturbate + Stripchat sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Audience flow optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Peak hour coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm">Revenue split optimization</span>
                    </div>
                  </div>
                  <Button variant="cyber" className="w-full text-lg" size="lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Dominate All Platforms
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};