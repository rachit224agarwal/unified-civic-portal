import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, FileText, RefreshCw, DollarSign, ClipboardCheck, Wind, FileCheck, AlertCircle } from "lucide-react";

const VehicleServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t("vehicleServices.drivingLicense"),
      description: t("vehicleServices.drivingLicenseDesc"),
      action: t("vehicleServices.applyNow"),
      color: "text-primary"
    },
    {
      icon: Car,
      title: t("vehicleServices.registration"),
      description: t("vehicleServices.registrationDesc"),
      action: t("vehicleServices.applyNow"),
      color: "text-secondary"
    },
    {
      icon: RefreshCw,
      title: t("vehicleServices.rcTransfer"),
      description: t("vehicleServices.rcTransferDesc"),
      action: t("vehicleServices.applyNow"),
      color: "text-accent"
    },
    {
      icon: DollarSign,
      title: t("vehicleServices.roadTax"),
      description: t("vehicleServices.roadTaxDesc"),
      action: t("vehicleServices.payNow"),
      color: "text-primary"
    },
    {
      icon: ClipboardCheck,
      title: t("vehicleServices.fitness"),
      description: t("vehicleServices.fitnessDesc"),
      action: t("vehicleServices.applyNow"),
      color: "text-secondary"
    },
    {
      icon: Wind,
      title: t("vehicleServices.pollution"),
      description: t("vehicleServices.pollutionDesc"),
      action: t("vehicleServices.checkStatus"),
      color: "text-accent"
    },
    {
      icon: FileCheck,
      title: t("vehicleServices.permit"),
      description: t("vehicleServices.permitDesc"),
      action: t("vehicleServices.applyNow"),
      color: "text-primary"
    },
    {
      icon: AlertCircle,
      title: t("vehicleServices.challan"),
      description: t("vehicleServices.challanDesc"),
      action: t("vehicleServices.checkStatus"),
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <PageHeader />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            {t("vehicleServices.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("vehicleServices.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  variant="default"
                >
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VehicleServices;
