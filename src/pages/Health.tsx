import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Heart, Calendar, FileText, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Health = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleAppointmentBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Appointment Booked",
        description: "Your appointment has been scheduled successfully",
      });
      setLoading(false);
    }, 1500);
  };

  const upcomingAppointments = [
    {
      hospital: "Government General Hospital",
      doctor: "Dr. Sharma",
      specialty: "General Physician",
      date: "15 Nov 2025",
      time: "10:00 AM",
    },
  ];

  const medicalRecords = [
    {
      type: "Blood Test Report",
      date: "01 Nov 2025",
      hospital: "City Health Center",
    },
    {
      type: "X-Ray Report",
      date: "15 Oct 2025",
      hospital: "District Hospital",
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Health Services</h1>
                <p className="text-xs text-muted-foreground">Book appointments & access records</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Book Appointment */}
            <Card className="glass-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </CardTitle>
                <CardDescription>Schedule a consultation with healthcare professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAppointmentBooking} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hospital">Select Hospital</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose hospital" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Government General Hospital</SelectItem>
                          <SelectItem value="district">District Hospital</SelectItem>
                          <SelectItem value="city">City Health Center</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Specialty</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Physician</SelectItem>
                          <SelectItem value="cardio">Cardiology</SelectItem>
                          <SelectItem value="ortho">Orthopedics</SelectItem>
                          <SelectItem value="dental">Dental</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input id="time" type="time" required />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-600"
                    disabled={loading}
                  >
                    {loading ? "Booking..." : "Book Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled consultations</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((apt, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{apt.hospital}</h4>
                            <p className="text-sm text-muted-foreground">{apt.doctor} - {apt.specialty}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>📅 {apt.date}</span>
                          <span>🕐 {apt.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">No upcoming appointments</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Medical Records */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Medical Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medicalRecords.map((record, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <p className="font-medium text-sm text-foreground">{record.type}</p>
                      <p className="text-xs text-muted-foreground">{record.hospital}</p>
                      <p className="text-xs text-muted-foreground">{record.date}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Records
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="glass-card border-destructive/50">
              <CardHeader>
                <CardTitle className="text-lg text-destructive">Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-destructive/10">
                    <p className="font-semibold text-destructive">Ambulance</p>
                    <p className="text-2xl font-bold text-destructive">108</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="font-semibold text-sm">Health Helpline</p>
                    <p className="text-lg font-bold text-primary">1075</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
