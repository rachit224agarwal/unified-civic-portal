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
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Zap, Droplets, Flame, CreditCard, Receipt } from "lucide-react";

const Bills = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [billType, setBillType] = useState("");
  const [consumerId, setConsumerId] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const billTypes = [
    { value: "electricity", label: "Electricity", icon: Zap, color: "text-yellow-500" },
    { value: "water", label: "Water", icon: Droplets, color: "text-blue-500" },
    { value: "gas", label: "Gas", icon: Flame, color: "text-orange-500" },
  ];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `Your ${billType} bill of ₹${amount} has been paid successfully.`,
      });
      setLoading(false);
      setBillType("");
      setConsumerId("");
      setAmount("");
    }, 2000);
  };

  const recentTransactions = [
    {
      type: "Electricity",
      amount: "₹1,234",
      date: "2 days ago",
      status: "Completed",
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      type: "Water",
      amount: "₹456",
      date: "1 week ago",
      status: "Completed",
      icon: Droplets,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold gradient-text">Bill Payments</h1>
          <p className="text-muted-foreground">Pay your utility bills instantly and securely</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="glass-elevated p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Make Payment</h2>
                  <p className="text-sm text-muted-foreground">Fill in the details below</p>
                </div>
              </div>

              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bill-type">Bill Type</Label>
                  <Select value={billType} onValueChange={setBillType} required>
                    <SelectTrigger id="bill-type">
                      <SelectValue placeholder="Select bill type" />
                    </SelectTrigger>
                    <SelectContent>
                      {billTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className={`h-4 w-4 ${type.color}`} />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consumer-id">Consumer ID / Account Number</Label>
                  <Input
                    id="consumer-id"
                    placeholder="Enter your consumer ID"
                    value={consumerId}
                    onChange={(e) => setConsumerId(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="1"
                  />
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Convenience Fee</span>
                    <span className="font-semibold">₹0</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="gradient-text">₹{amount || "0.00"}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading || !billType || !consumerId || !amount}
                >
                  {loading ? "Processing..." : "Pay Now"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 Your payment is secured with 256-bit encryption
                </p>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Bill Types */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4 text-foreground">Quick Access</h3>
              <div className="space-y-3">
                {billTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setBillType(type.value)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center`}>
                      <type.icon className={`h-5 w-5 ${type.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{type.label}</p>
                      <p className="text-xs text-muted-foreground">Pay bill</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Recent Transactions */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Receipt className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Recent Payments</h3>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((transaction, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                      <transaction.icon className={`h-5 w-5 ${transaction.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-foreground">{transaction.type}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm text-foreground">{transaction.amount}</p>
                      <p className="text-xs text-green-600">{transaction.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Help Card */}
            <Card className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-semibold mb-2 text-foreground">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our support team for assistance with bill payments
              </p>
              <Button variant="outline" className="w-full" size="sm">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
