import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, GraduationCap, Award, FileText, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Education = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleScholarshipApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your scholarship application has been received",
      });
      setLoading(false);
    }, 1500);
  };

  const scholarships = [
    {
      name: "National Merit Scholarship",
      amount: "₹50,000",
      eligibility: "12th Pass with 85%+",
      deadline: "30 Dec 2025",
      status: "Open",
    },
    {
      name: "Minority Scholarship",
      amount: "₹30,000",
      eligibility: "Minority Community Students",
      deadline: "15 Jan 2026",
      status: "Open",
    },
    {
      name: "SC/ST Scholarship",
      amount: "₹40,000",
      eligibility: "SC/ST Category",
      deadline: "20 Dec 2025",
      status: "Open",
    },
  ];

  const myCertificates = [
    {
      type: "10th Marksheet",
      issueDate: "15 May 2020",
      board: "CBSE",
      status: "Verified",
    },
    {
      type: "12th Marksheet",
      issueDate: "20 May 2022",
      board: "CBSE",
      status: "Verified",
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Education Services</h1>
                <p className="text-xs text-muted-foreground">Scholarships and certificates</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Apply for Scholarship */}
            <Card className="glass-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Apply for Scholarship
                </CardTitle>
                <CardDescription>Submit your scholarship application</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleScholarshipApplication} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="obc">OBC</SelectItem>
                          <SelectItem value="sc">SC</SelectItem>
                          <SelectItem value="st">ST</SelectItem>
                          <SelectItem value="minority">Minority</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="income">Annual Family Income (₹)</Label>
                      <Input id="income" type="number" placeholder="0" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="class">Class/Standard</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10th</SelectItem>
                          <SelectItem value="12">12th</SelectItem>
                          <SelectItem value="ug">Undergraduate</SelectItem>
                          <SelectItem value="pg">Postgraduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="percentage">Last Exam Percentage</Label>
                      <Input id="percentage" type="number" step="0.01" placeholder="0.00" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scholarship">Scholarship Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select scholarship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="merit">National Merit Scholarship</SelectItem>
                        <SelectItem value="minority">Minority Scholarship</SelectItem>
                        <SelectItem value="scst">SC/ST Scholarship</SelectItem>
                        <SelectItem value="obc">OBC Scholarship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Upload Documents (Marksheet, Income Certificate)</Label>
                    <Input id="documents" type="file" accept=".pdf,.jpg,.png" multiple />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-500 to-green-600"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Available Scholarships */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Available Scholarships</CardTitle>
                <CardDescription>Browse and apply for scholarships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scholarships.map((scholarship, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{scholarship.name}</h4>
                          <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                          {scholarship.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-muted-foreground">Amount</p>
                          <p className="font-semibold text-primary">{scholarship.amount}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Deadline</p>
                          <p className="font-medium text-foreground">{scholarship.deadline}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
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
            {/* My Certificates */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  My Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {myCertificates.map((cert, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-sm text-foreground">{cert.type}</p>
                          <p className="text-xs text-muted-foreground">{cert.board}</p>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Issued: {cert.issueDate}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  Request New Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Scholarship Guidelines
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Application Status
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    Eligibility Checker
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
                  Contact education department for assistance
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

export default Education;
