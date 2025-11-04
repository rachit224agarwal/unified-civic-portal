import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  IndianRupee, 
  FileText, 
  MessageSquare, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: IndianRupee,
      title: t('features.billPayments'),
      description: t('features.billPaymentsDesc')
    },
    {
      icon: FileText,
      title: t('features.documents'),
      description: t('features.documentsDesc')
    },
    {
      icon: MessageSquare,
      title: t('features.grievances'),
      description: t('features.grievancesDesc')
    },
    {
      icon: Shield,
      title: t('features.security'),
      description: t('features.securityDesc')
    }
  ];

  const stats = [
    { value: "10M+", label: t('stats.activeUsers') },
    { value: "99.9%", label: t('stats.uptime') },
    { value: "24/7", label: t('stats.support') },
    { value: "50+", label: t('stats.services') }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Header with Controls */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold gradient-text">
            Citizen Portal
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'var(--gradient-hero)',
          }}
        />
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary-foreground)) 2%, transparent 0%), 
                            radial-gradient(circle at 75px 75px, hsl(var(--primary-foreground)) 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Content */}
            <div className="glass-elevated rounded-3xl p-12 md:p-16 animate-fade-in">
              {/* Tricolor Accent Bar */}
              <div className="w-32 h-1 mx-auto mb-8 rounded-full tricolor-border" />
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                {t('hero.title')}
                <br />
                <span className="text-white">{t('hero.subtitle')}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg"
                  onClick={() => navigate('/auth')}
                  className="bg-white text-primary hover:bg-white/90 shadow-elevated text-lg px-8 py-6 group"
                >
                  {t('hero.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/auth')}
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  {t('hero.signIn')}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, idx) => (
              <Card 
                key={idx} 
                className="glass-card p-6 hover-lift cursor-pointer group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                  {t('benefits.title')}
                </h2>
                <div className="space-y-4">
                  {[
                    t('benefits.benefit1'),
                    t('benefits.benefit2'),
                    t('benefits.benefit3'),
                    t('benefits.benefit4'),
                    t('benefits.benefit5')
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-lg text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  size="lg"
                  onClick={() => navigate('/auth')}
                  className="mt-6"
                >
                  {t('benefits.cta')}
                </Button>
              </div>

              <Card className="glass-elevated p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{t('benefits.fast')}</h4>
                      <p className="text-sm text-muted-foreground">{t('benefits.fastDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{t('benefits.securityTitle')}</h4>
                      <p className="text-sm text-muted-foreground">{t('benefits.securityDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{t('benefits.trusted')}</h4>
                      <p className="text-sm text-muted-foreground">{t('benefits.trustedDesc')}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center glass-elevated p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              {t('cta.description')}
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6"
            >
              {t('cta.button')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t('footer.initiative')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
