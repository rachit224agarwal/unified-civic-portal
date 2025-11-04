import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const translations: Translations = {
  // Hero Section
  'hero.title': {
    en: 'Empowering Citizens,',
    hi: 'नागरिकों को सशक्त बनाना,',
  },
  'hero.subtitle': {
    en: 'Digitally 🇮🇳',
    hi: 'डिजिटली 🇮🇳',
  },
  'hero.description': {
    en: 'Access all government services seamlessly from one unified platform. Fast, secure, and available 24/7.',
    hi: 'एक एकीकृत प्लेटफॉर्म से सभी सरकारी सेवाओं तक निर्बाध रूप से पहुंचें। तेज़, सुरक्षित और 24/7 उपलब्ध।',
  },
  'hero.getStarted': {
    en: 'Get Started',
    hi: 'शुरू करें',
  },
  'hero.signIn': {
    en: 'Sign In',
    hi: 'साइन इन',
  },
  'stats.activeUsers': {
    en: 'Active Users',
    hi: 'सक्रिय उपयोगकर्ता',
  },
  'stats.uptime': {
    en: 'Uptime',
    hi: 'अपटाइम',
  },
  'stats.support': {
    en: 'Support',
    hi: 'सहायता',
  },
  'stats.services': {
    en: 'Services',
    hi: 'सेवाएं',
  },
  // Features Section
  'features.title': {
    en: 'Comprehensive Services',
    hi: 'व्यापक सेवाएं',
  },
  'features.subtitle': {
    en: 'Everything you need to interact with government services, all in one place',
    hi: 'सरकारी सेवाओं के साथ बातचीत करने के लिए आपको जो कुछ भी चाहिए, सब एक ही जगह',
  },
  'features.billPayments': {
    en: 'Bill Payments',
    hi: 'बिल भुगतान',
  },
  'features.billPaymentsDesc': {
    en: 'Pay electricity, water, and gas bills instantly with secure transactions',
    hi: 'सुरक्षित लेनदेन के साथ बिजली, पानी और गैस के बिल तुरंत भुगतान करें',
  },
  'features.documents': {
    en: 'Official Documents',
    hi: 'आधिकारिक दस्तावेज़',
  },
  'features.documentsDesc': {
    en: 'Request and download verified government documents quickly',
    hi: 'सत्यापित सरकारी दस्तावेज़ तेज़ी से अनुरोध और डाउनलोड करें',
  },
  'features.grievances': {
    en: 'Grievance Portal',
    hi: 'शिकायत पोर्टल',
  },
  'features.grievancesDesc': {
    en: 'Submit complaints and track resolution status in real-time',
    hi: 'शिकायतें दर्ज करें और रियल-टाइम में समाधान की स्थिति को ट्रैक करें',
  },
  'features.security': {
    en: 'Secure Authentication',
    hi: 'सुरक्षित प्रमाणीकरण',
  },
  'features.securityDesc': {
    en: 'Bank-grade security with encrypted data protection',
    hi: 'एन्क्रिप्टेड डेटा सुरक्षा के साथ बैंक-ग्रेड सुरक्षा',
  },
  // Benefits Section
  'benefits.title': {
    en: 'Why Choose Our Portal?',
    hi: 'हमारा पोर्टल क्यों चुनें?',
  },
  'benefits.benefit1': {
    en: 'Instant access to 50+ government services',
    hi: '50+ सरकारी सेवाओं तक त्वरित पहुंच',
  },
  'benefits.benefit2': {
    en: 'Secure payments with transaction history',
    hi: 'लेनदेन इतिहास के साथ सुरक्षित भुगतान',
  },
  'benefits.benefit3': {
    en: 'Real-time grievance tracking',
    hi: 'रियल-टाइम शिकायत ट्रैकिंग',
  },
  'benefits.benefit4': {
    en: 'AI-powered assistance 24/7',
    hi: 'AI-संचालित सहायता 24/7',
  },
  'benefits.benefit5': {
    en: 'Mobile-friendly responsive design',
    hi: 'मोबाइल-फ्रेंडली रिस्पॉन्सिव डिज़ाइन',
  },
  'benefits.cta': {
    en: 'Start Using Portal',
    hi: 'पोर्टल का उपयोग शुरू करें',
  },
  'benefits.fast': {
    en: 'Lightning Fast',
    hi: 'बिजली की तेजी',
  },
  'benefits.fastDesc': {
    en: 'Services load in under 2 seconds',
    hi: 'सेवाएं 2 सेकंड से कम समय में लोड होती हैं',
  },
  'benefits.securityTitle': {
    en: 'Bank-Grade Security',
    hi: 'बैंक-ग्रेड सुरक्षा',
  },
  'benefits.securityDesc': {
    en: '256-bit encryption for all data',
    hi: 'सभी डेटा के लिए 256-बिट एन्क्रिप्शन',
  },
  'benefits.trusted': {
    en: 'Trusted by Millions',
    hi: 'लाखों द्वारा विश्वसनीय',
  },
  'benefits.trustedDesc': {
    en: '10M+ active users nationwide',
    hi: '10M+ सक्रिय उपयोगकर्ता देशव्यापी',
  },
  // CTA Section
  'cta.title': {
    en: 'Ready to Get Started?',
    hi: 'शुरू करने के लिए तैयार हैं?',
  },
  'cta.description': {
    en: 'Join millions of citizens accessing government services digitally',
    hi: 'डिजिटल रूप से सरकारी सेवाओं तक पहुंचने वाले लाखों नागरिकों में शामिल हों',
  },
  'cta.button': {
    en: 'Create Account Now',
    hi: 'अभी खाता बनाएं',
  },
  // Footer
  'footer.copyright': {
    en: '© 2025 Unified Citizen Service Portal. All rights reserved.',
    hi: '© 2025 एकीकृत नागरिक सेवा पोर्टल। सर्वाधिकार सुरक्षित।',
  },
  'footer.initiative': {
    en: 'A Digital India Initiative',
    hi: 'एक डिजिटल इंडिया पहल',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
