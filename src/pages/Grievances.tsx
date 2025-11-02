import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  MessageSquare, 
  AlertCircle,
  Clock,
  CheckCircle2,
  Upload,
  FileText
} from "lucide-react";

const Grievances = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = [
    { value: "water-supply", label: "Water Supply" },
    { value: "electricity", label: "Electricity" },
    { value: "roads", label: "Roads & Infrastructure" },
    { value: "sanitation", label: "Sanitation" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Grievance Submitted!",
        description: "Your complaint has been registered. You'll receive updates via email.",
      });
      setLoading(false);
      setCategory("");
      setSubject("");
      setDescription("");
    }, 2000);
  };

  const myGrievances = [
    {
      id: "GRV-2025-001",
      subject: "Water supply disruption in Sector 12",
      category: "Water Supply",
      status: "In Review",
      date: "Jan 29, 2025",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-800",
      statusColor: "text-yellow-600",
    },
    {
      id: "GRV-2025-002",
      subject: "Street light not working on Main Road",
      category: "Electricity",
      status: "Resolved",
      date: "Jan 25, 2025",
      icon: CheckCircle2,
      color: "bg-green-100 text-green-800",
      statusColor: "text-green-600",
    },
    {
      id: "GRV-2024-089",
      subject: "Potholes on Highway 15",
      category: "Roads",
      status: "Pending",
      date: "Jan 20, 2025",
      icon: AlertCircle,
      color: "bg-red-100 text-red-800",
      statusColor: "text-red-600",
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
          <h1 className="text-3xl font-bold gradient-text">Grievance Portal</h1>
          <p className="text-muted-foreground">Submit complaints and track resolution status</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Submit Form */}
          <div className="lg:col-span-2">
            <Card className="glass-elevated p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Submit Grievance</h2>
                  <p className="text-sm text-muted-foreground">Tell us about your concern</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of the issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide more details about your grievance..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Attachments (Optional)</Label>
                  <div className="glass-card p-8 border-2 border-dashed rounded-lg text-center cursor-pointer hover:bg-muted/20 transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Images, PDFs (max 5MB)
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading || !category || !subject || !description}
                >
                  {loading ? "Submitting..." : "Submit Grievance"}
                </Button>
              </form>
            </Card>

            {/* My Grievances */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">My Grievances</h3>
              </div>
              <div className="space-y-4">
                {myGrievances.map((grievance, idx) => (
                  <Card key={idx} className="glass-card p-5 hover-lift cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <grievance.icon className={`h-5 w-5 ${grievance.statusColor}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{grievance.subject}</p>
                          <p className="text-xs text-muted-foreground">ID: {grievance.id}</p>
                        </div>
                      </div>
                      <Badge className={grievance.color}>
                        {grievance.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{grievance.category}</span>
                      <span className="text-muted-foreground">{grievance.date}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Legend */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4 text-foreground">Status Guide</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Pending</p>
                    <p className="text-xs text-muted-foreground">Awaiting review</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm font-medium text-foreground">In Review</p>
                    <p className="text-xs text-muted-foreground">Being processed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Resolved</p>
                    <p className="text-xs text-muted-foreground">Issue closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Statistics */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4 text-foreground">Your Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Submitted</span>
                  <span className="text-2xl font-bold text-foreground">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Resolved</span>
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg. Resolution Time</span>
                  <span className="text-2xl font-bold text-foreground">5d</span>
                </div>
              </div>
            </Card>

            {/* Help Card */}
            <Card className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-semibold mb-2 text-foreground">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is here to assist you with your grievances
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

export default Grievances;
