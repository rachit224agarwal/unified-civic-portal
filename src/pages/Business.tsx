import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Briefcase, FileText, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Business = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLicenseApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your business license application has been received",
      });
      setLoading(false);
    }, 1500);
  };

  const myLicenses = [
    {
      type: "Trade License",
      licenseNo: "TL2024001234",
      issueDate: "01 Jan 2024",
      expiryDate: "31 Dec 2024",
      status: "Active",
    },
    {
      type: "Food License (FSSAI)",
      licenseNo: "FSSAI2023005678",
      issueDate: "15 Mar 2023",
      expiryDate: "14 Mar 2026",
      status: "Active",
    },
  ];

  const licenseTypes = [
    {
      name: "Trade License",
      description: "For all commercial establishments",
      fees: "₹5,000",
      validity: "1 Year",
    },
    {
      name: "Food License",
      description: "FSSAI registration for food businesses",
      fees: "₹2,000",
      validity: "3 Years",
    },
    {
      name: "Shop & Establishment",
      description: "For shops and commercial establishments",
      fees: "₹3,000",
      validity: "5 Years",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Business License</h1>
                <p className="text-xs text-muted-foreground">Apply and renew business permits</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Apply for License */}
            <Card className="glass-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Apply for Business License
                </CardTitle>
                <CardDescription>Submit new license application</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLicenseApplication} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="license-type">License Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trade">Trade License</SelectItem>
                        <SelectItem value="food">Food License (FSSAI)</SelectItem>
                        <SelectItem value="shop">Shop & Establishment</SelectItem>
                        <SelectItem value="factory">Factory License</SelectItem>
                        <SelectItem value="pollution">Pollution Control</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" placeholder="Enter business name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="owner-name">Owner Name</Label>
                      <Input id="owner-name" placeholder="Enter owner name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Number</Label>
                      <Input id="pan" placeholder="XXXXX0000X" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gstin">GSTIN (Optional)</Label>
                      <Input id="gstin" placeholder="00XXXXX0000X0X0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Enter complete business address" 
                      required 
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Upload Documents (PAN, Address Proof, etc.)</Label>
                    <Input id="documents" type="file" accept=".pdf,.jpg,.png" multiple />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* My Licenses */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>My Business Licenses</CardTitle>
                <CardDescription>Your active licenses and permits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myLicenses.map((license, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{license.type}</h4>
                          <p className="text-sm text-muted-foreground font-mono">{license.licenseNo}</p>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {license.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-muted-foreground">Issue Date</p>
                          <p className="font-medium text-foreground">{license.issueDate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Expiry Date</p>
                          <p className="font-medium text-foreground">{license.expiryDate}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Renew
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* License Types */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">License Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {licenseTypes.map((type, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <h4 className="font-semibold text-sm text-foreground mb-1">{type.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{type.description}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Fees: <span className="font-semibold text-primary">{type.fees}</span></span>
                        <span className="text-muted-foreground">Validity: <span className="font-medium text-foreground">{type.validity}</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Status */}
            <Card className="glass-card border-yellow-500/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  Pending Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <p className="font-medium text-sm text-foreground mb-1">Factory License</p>
                  <p className="text-xs text-muted-foreground mb-2">App ID: BL2025001234</p>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500">
                    Under Review
                  </span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Track Application
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    License Requirements
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Renewal Process
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Fee Structure
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    FAQs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact licensing department for assistance
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
