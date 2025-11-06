import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/PageHeader";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Car,
  FileText,
  Calendar,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const Vehicles = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  const [serviceType, setServiceType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [loading, setLoading] = useState(false);

  const services = [
    { value: "registration", label: "Vehicle Registration" },
    { value: "license-renewal", label: "License Renewal" },
    { value: "transfer", label: "Transfer Ownership" },
    { value: "fine-payment", label: "Fine / Penalty Payment" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast({
        title: "Request submitted",
        description: `Your ${serviceType || "service"} request for ${vehicleNumber} has been received.`,
      });
      setServiceType("");
      setVehicleNumber("");
      setOwnerName("");
      setLoading(false);
    }, 1200);
  };

  const handleCheckStatus = () => {
    if (!applicationId) {
      toast({ title: "Enter Application ID", description: "Please provide your application ID to check status." });
      return;
    }

    // Mock status lookup
    toast({ title: "Status Found", description: `Application ${applicationId} is In Progress.` });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <PageHeader title={t("vehicle.title") || "Vehicle Services"} rightContent={
        <Button variant="ghost" onClick={() => navigate(-1)} size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
      } />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="glass-elevated p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Vehicle Services</h2>
                  <p className="text-sm text-muted-foreground">Registration, license renewal, transfers and fine payments</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select value={serviceType} onValueChange={setServiceType} required>
                    <SelectTrigger id="service-type">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-number">Vehicle Number</Label>
                    <Input id="vehicle-number" placeholder="MH12AB1234" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="owner-name">Owner / Applicant Name</Label>
                    <Input id="owner-name" placeholder="Full name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required />
                  </div>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Required Documents</h4>
                      <p className="text-xs text-muted-foreground">Upload scanned copies after submitting application</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <input type="file" className="w-full" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" size="lg" className="flex-1" disabled={loading || !serviceType || !vehicleNumber || !ownerName}>
                    {loading ? "Submitting..." : "Submit Request"}
                  </Button>
                  <Button variant="outline" onClick={() => { setServiceType(""); setVehicleNumber(""); setOwnerName(""); }}>
                    Reset
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <button onClick={() => setServiceType("registration")} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Car className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-medium">New Registration</p>
                    <p className="text-xs text-muted-foreground">Apply for a new registration</p>
                  </div>
                </button>

                <button onClick={() => setServiceType("license-renewal")} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-medium">License Renewal</p>
                    <p className="text-xs text-muted-foreground">Renew your driving license</p>
                  </div>
                </button>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold text-foreground">Check Application Status</h3>
              </div>
              <div className="space-y-3">
                <Input placeholder="Enter Application ID" value={applicationId} onChange={(e) => setApplicationId(e.target.value)} />
                <div className="flex gap-2">
                  <Button onClick={handleCheckStatus} className="flex-1">Check Status</Button>
                  <Button variant="outline" onClick={() => setApplicationId("")}>Clear</Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="space-y-3">
                <h4 className="font-semibold">Need Help?</h4>
                <p className="text-sm text-muted-foreground">Contact RTO support for complex requests</p>
                <Button variant="outline" className="w-full">Contact Support</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
