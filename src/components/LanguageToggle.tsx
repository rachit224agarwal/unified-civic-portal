import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className="glass-card hover:glass-elevated transition-all font-medium"
    >
      {language === "en" ? "हिं" : "EN"}
    </Button>
  );
}
