import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Home, Search, FileText, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Property = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Search Complete",
        description: "Property records have been retrieved",
      });
      setLoading(false);
    }, 1500);
  };

  const myProperties = [
    {
      type: "Residential Plot",
      location: "Sector 12, Gandhinagar",
      area: "200 sq yards",
      registrationNo: "PROP2020001234",
      status: "Verified",
    },
    {
      type: "Agricultural Land",
      location: "Village Madhpur",
      area: "2 Acres",
      registrationNo: "PROP2018005678",
      status: "Verified",
    },
  ];

  const recentTransactions = [
    {
      type: "Property Registration",
      date: "15 Oct 2025",
      amount: 5000,
      status: "Completed",
    },
    {
      type: "Mutation Certificate",
      date: "01 Sep 2025",
      amount: 2000,
      status: "Completed",
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Property Records</h1>
                <p className="text-xs text-muted-foreground">Access land and property documents</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search Property */}
            <Card className="glass-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Property Records
                </CardTitle>
                <CardDescription>Find property details by registration number or location</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="search">Property Registration Number / Survey Number</Label>
                    <Input
                      id="search"
                      placeholder="Enter registration or survey number"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input id="district" placeholder="Enter district" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="village">Village/Town</Label>
                      <Input id="village" placeholder="Enter village or town" />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600"
                    disabled={loading}
                  >
                    {loading ? "Searching..." : "Search Property"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* My Properties */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>My Properties</CardTitle>
                <CardDescription>Your registered properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myProperties.map((property, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{property.type}</h4>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="w-3 h-3" />
                            {property.location}
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                          {property.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Area</p>
                          <p className="font-medium text-foreground">{property.area}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Registration No.</p>
                          <p className="font-mono text-xs text-foreground">{property.registrationNo}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Services */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Property Certificate
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Mutation Request
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Encumbrance Certificate
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Land Conversion
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((txn, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-medium text-sm text-foreground">{txn.type}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
                          {txn.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{txn.date}</p>
                      <p className="text-sm font-semibold text-primary mt-1">₹{txn.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="glass-card border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact property registration office for assistance
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

export default Property;
