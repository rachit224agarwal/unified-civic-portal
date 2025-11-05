import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  IndianRupee,
  FileText,
  MessageSquare,
  Shield,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // 💫 Animated blue dots background
  useEffect(() => {
    const canvas = document.getElementById("dots-bg") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dots = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.5)"; // soft blue
        ctx.shadowColor = "rgba(59,130,246,0.8)";
        ctx.shadowBlur = 12;
        ctx.fill();
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      });
      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  const features = [
    {
      icon: IndianRupee,
      title: t("features.billPayments"),
      description: t("features.billPaymentsDesc"),
    },
    {
      icon: FileText,
      title: t("features.documents"),
      description: t("features.documentsDesc"),
    },
    {
      icon: MessageSquare,
      title: t("features.grievances"),
      description: t("features.grievancesDesc"),
    },
    {
      icon: Shield,
      title: t("features.security"),
      description: t("features.securityDesc"),
    },
  ];

  const benefits = [
    t("benefits.benefit1"),
    t("benefits.benefit2"),
    t("benefits.benefit3"),
    t("benefits.benefit4"),
    t("benefits.benefit5"),
  ];

  const stats = [
    { value: "10M+", label: t("stats.activeUsers") },
    { value: "99.9%", label: t("stats.uptime") },
    { value: "24/7", label: t("stats.support") },
    { value: "50+", label: t("stats.services") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Floating Dots Canvas */}
      <canvas
        id="dots-bg"
        className="absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
      ></canvas>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-md bg-gradient-to-r from-slate-900/60 via-indigo-800/40 to-slate-900/60 dark:from-slate-950/60 dark:to-indigo-950/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight gradient-text">
            eSahayata
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-gradient-to-br from-indigo-50 via-blue-100 to-white dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] transition-colors duration-700">
        <div className="absolute inset-0 opacity-30 bg-[url('/grid.svg')] bg-repeat"></div>

        <div className="max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-400 to-blue-600 dark:from-indigo-300 dark:to-sky-500">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => navigate("/auth")}
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-8 py-6 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30"
            >
              {t("hero.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/auth")}
              className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200/30 dark:hover:bg-slate-800/30 text-lg px-8 py-6 rounded-xl"
            >
              {t("hero.signIn")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-slate-700 dark:text-slate-200">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-4">
              {t("features.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="glass-card p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 bg-gradient-to-b from-white/80 to-indigo-50 dark:from-slate-900/60 dark:to-indigo-950/40 border border-slate-200/20 dark:border-slate-700/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-500/10 flex items-center justify-center rounded-xl">
                    <feature.icon className="text-indigo-400 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/20 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-300 dark:to-sky-400">
              {t("benefits.title")}
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-indigo-500 shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              {t("benefits.cta")}
            </Button>
          </div>

          <Card className="glass-card p-8 bg-gradient-to-br from-white/80 to-indigo-50 dark:from-slate-900/60 dark:to-indigo-950/40 border border-slate-200/20 dark:border-slate-700/20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {t("benefits.fast")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t("benefits.fastDesc")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {t("benefits.securityTitle")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t("benefits.securityDesc")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {t("benefits.trusted")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t("benefits.trustedDesc")}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-sky-600" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-3xl backdrop-blur-xl bg-white/20 dark:bg-slate-900/40">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-slate-100/90 mb-8">
              {t("cta.description")}
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-white text-indigo-600 hover:bg-white/90 text-lg px-10 py-6 rounded-xl"
            >
              {t("cta.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-slate-700/40 text-center relative z-10">
        <p className="text-muted-foreground text-sm">
          {t("footer.copyright")}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          {t("footer.initiative")}
        </p>
      </footer>
    </div>
  );
};

export default Index;
