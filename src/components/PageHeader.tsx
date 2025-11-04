import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageHeaderProps {
  showBackButton?: boolean;
  backAction?: () => void;
  title?: string;
  rightContent?: React.ReactNode;
}

export function PageHeader({ showBackButton, backAction, title, rightContent }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold gradient-text">
          {title || t('common.sewabandhu')}
        </div>
        <div className="flex items-center gap-3">
          {rightContent}
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
