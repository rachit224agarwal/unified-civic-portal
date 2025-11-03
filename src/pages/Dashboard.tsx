import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  IndianRupee,
  FileText,
  MessageSquare,
  LogOut,
  User,
  Bell,
  TrendingUp,
  Home,
  Heart,
  Briefcase,
  GraduationCap,
  Car,
  Wallet,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/");
  };

  const services = [
    {
      title: "Bill Payments",
      description: "Pay your utility bills instantly",
      icon: IndianRupee,
      path: "/bills",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Documents",
      description: "Request official documents",
      icon: FileText,
      path: "/documents",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Grievances",
      description: "Submit and track complaints",
      icon: MessageSquare,
      path: "/grievances",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Property Records",
      description: "Access land and property documents",
      icon: Home,
      path: "/property",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Health Services",
      description: "Book appointments & medical records",
      icon: Heart,
      path: "/health",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Tax Services",
      description: "File returns and check refund status",
      icon: Wallet,
      path: "/tax",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Business License",
      description: "Apply and renew business permits",
      icon: Briefcase,
      path: "/business",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Education",
      description: "Scholarships and certificates",
      icon: GraduationCap,
      path: "/education",
      color: "from-teal-500 to-green-600",
    },
    {
      title: "Vehicle Services",
      description: "Registration and license renewal",
      icon: Car,
      path: "/vehicles",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const pendingBills = [
    {
      type: "Electricity",
      amount: 1250,
      dueDate: "15 Nov 2025",
      consumerId: "ELEC123456",
      status: "Overdue",
    },
    {
      type: "Water",
      amount: 450,
      dueDate: "20 Nov 2025",
      consumerId: "WAT789012",
      status: "Pending",
    },
    {
      type: "Gas",
      amount: 850,
      dueDate: "25 Nov 2025",
      consumerId: "GAS345678",
      status: "Pending",
    },
  ];

  const quickStats = [
    { label: "Pending Bills", value: "3", icon: IndianRupee },
    { label: "Documents Requested", value: "2", icon: FileText },
    { label: "Active Grievances", value: "1", icon: MessageSquare },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold">CS</span>
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Citizen Services</h1>
                <p className="text-xs text-muted-foreground">Government of India</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="glass-elevated p-6 md:p-8 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{ background: 'var(--gradient-primary)' }}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">
                    Welcome back, {user?.user_metadata?.full_name || "Citizen"}! 👋
                  </h2>
                  <p className="text-muted-foreground">
                    Access all your government services from one place
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickStats.map((stat, idx) => (
            <Card key={idx} className="glass-card p-6 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Quick Access</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="glass-card p-6 hover-lift cursor-pointer group"
                onClick={() => navigate(service.path)}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5">
                  Access Service →
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending Bills */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Pending Bills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingBills.map((bill, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg text-foreground">{bill.type}</h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      bill.status === "Overdue"
                        ? "bg-destructive/20 text-destructive"
                        : "bg-orange-500/20 text-orange-500"
                    }`}
                  >
                    {bill.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    Consumer ID: <span className="font-mono">{bill.consumerId}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Due Date: {bill.dueDate}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground">Amount Due</p>
                    <p className="text-2xl font-bold text-primary">₹{bill.amount}</p>
                  </div>
                  <Button
                    onClick={() => navigate("/bills")}
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    Pay Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Recent Activity</h3>
          <Card className="glass-card p-6">
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No recent activity</p>
              <p className="text-sm">Your recent transactions will appear here</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
