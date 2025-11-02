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
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Clock, 
  CheckCircle2,
  FileCheck,
  FileSearch
} from "lucide-react";

const Documents = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [documentType, setDocumentType] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const documentTypes = [
    { value: "birth-certificate", label: "Birth Certificate" },
    { value: "domicile-certificate", label: "Domicile Certificate" },
    { value: "income-certificate", label: "Income Certificate" },
    { value: "caste-certificate", label: "Caste Certificate" },
  ];

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "Your document request has been submitted. You'll receive updates via email.",
      });
      setLoading(false);
      setDocumentType("");
      setApplicantName("");
      setAadhaarNumber("");
    }, 2000);
  };

  const requestedDocuments = [
    {
      type: "Birth Certificate",
      date: "Jan 28, 2025",
      status: "Approved",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
      downloadable: true,
    },
    {
      type: "Income Certificate",
      date: "Jan 26, 2025",
      status: "In Review",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      downloadable: false,
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
          <h1 className="text-3xl font-bold gradient-text">Official Documents</h1>
          <p className="text-muted-foreground">Request and download verified government documents</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card className="glass-elevated p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <FileSearch className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Request Document</h2>
                  <p className="text-sm text-muted-foreground">Fill in your details to request a document</p>
                </div>
              </div>

              <form onSubmit={handleRequest} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="document-type">Document Type</Label>
                  <Select value={documentType} onValueChange={setDocumentType} required>
                    <SelectTrigger id="document-type">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="applicant-name">Applicant Name</Label>
                  <Input
                    id="applicant-name"
                    placeholder="Enter full name as per Aadhaar"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aadhaar">Aadhaar Number</Label>
                  <Input
                    id="aadhaar"
                    placeholder="XXXX XXXX XXXX"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    required
                    maxLength={12}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your Aadhaar will be verified for authentication
                  </p>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-foreground">Processing Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Typically processed within 7-10 business days
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      You'll receive email notifications on status updates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Digital signature will be applied to verified documents
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading || !documentType || !applicantName || !aadhaarNumber}
                >
                  {loading ? "Submitting Request..." : "Submit Request"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Available Documents */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Available Documents</h3>
              </div>
              <div className="space-y-2">
                {documentTypes.map((type, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={() => setDocumentType(type.value)}
                  >
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{type.label}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Requested Documents */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">My Requests</h3>
              </div>
              <div className="space-y-3">
                {requestedDocuments.map((doc, idx) => (
                  <div key={idx} className="glass-card p-4 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${doc.bgColor}`}>
                          <doc.icon className={`h-4 w-4 ${doc.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">{doc.type}</p>
                          <p className="text-xs text-muted-foreground">{doc.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs font-medium ${doc.color}`}>
                        {doc.status}
                      </span>
                      {doc.downloadable && (
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Help Card */}
            <Card className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-semibold mb-2 text-foreground">Document Guidelines</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Ensure accurate Aadhaar details</li>
                <li>• All documents are digitally signed</li>
                <li>• Valid nationwide</li>
                <li>• Free of charge</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
