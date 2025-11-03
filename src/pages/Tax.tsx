import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Wallet, FileText, TrendingUp, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Tax = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleFileReturn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Return Filed",
        description: "Your tax return has been submitted successfully",
      });
      setLoading(false);
    }, 1500);
  };

  const taxReturns = [
    {
      year: "2024-25",
      status: "Filed",
      date: "15 Jul 2024",
      amount: 45000,
    },
    {
      year: "2023-24",
      status: "Processed",
      date: "20 Jul 2023",
      amount: 38000,
    },
  ];

  const refundStatus = {
    year: "2023-24",
    amount: 12500,
    status: "In Progress",
    estimatedDate: "30 Nov 2025",
  };

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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Tax Services</h1>
                <p className="text-xs text-muted-foreground">File returns and check refund status</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* File Tax Return */}
            <Card className="glass-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  File Tax Return
                </CardTitle>
                <CardDescription>Submit your income tax return online</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFileReturn} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Number</Label>
                      <Input id="pan" placeholder="XXXXX0000X" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Assessment Year</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024-25">2024-25</SelectItem>
                          <SelectItem value="2023-24">2023-24</SelectItem>
                          <SelectItem value="2022-23">2022-23</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="income">Total Income (₹)</Label>
                      <Input id="income" type="number" placeholder="0" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deductions">Total Deductions (₹)</Label>
                      <Input id="deductions" type="number" placeholder="0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Return Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select return type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="itr1">ITR-1 (Salary Income)</SelectItem>
                        <SelectItem value="itr2">ITR-2 (Capital Gains)</SelectItem>
                        <SelectItem value="itr3">ITR-3 (Business/Profession)</SelectItem>
                        <SelectItem value="itr4">ITR-4 (Presumptive)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="document">Upload Form 16 (Optional)</Label>
                    <Input id="document" type="file" accept=".pdf,.jpg,.png" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    disabled={loading}
                  >
                    {loading ? "Filing..." : "File Return"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Tax Returns History */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Tax Returns History</CardTitle>
                <CardDescription>Your filed tax returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {taxReturns.map((ret, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">AY {ret.year}</h4>
                          <p className="text-sm text-muted-foreground">Filed on {ret.date}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          ret.status === "Processed" 
                            ? "bg-green-500/20 text-green-500" 
                            : "bg-blue-500/20 text-blue-500"
                        }`}>
                          {ret.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-muted-foreground">Tax Paid</p>
                          <p className="text-lg font-bold text-primary">₹{ret.amount}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
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
            {/* Refund Status */}
            <Card className="glass-card border-green-500/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Refund Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Assessment Year</p>
                    <p className="font-semibold text-foreground">{refundStatus.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Refund Amount</p>
                    <p className="text-2xl font-bold text-green-500">₹{refundStatus.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 mt-1">
                      {refundStatus.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Date</p>
                    <p className="font-medium text-foreground">{refundStatus.estimatedDate}</p>
                  </div>
                </div>
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
                    Tax Calculator
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    View Form 26AS
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Download Tax Forms
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Tax Saving Tips
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
                  Contact tax helpline for assistance with filing
                </p>
                <div className="p-3 rounded-lg bg-primary/10 mb-3">
                  <p className="font-semibold text-sm">Tax Helpline</p>
                  <p className="text-lg font-bold text-primary">1800-180-1961</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Email Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
