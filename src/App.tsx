import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Bills from "./pages/Bills";
import Documents from "./pages/Documents";
import Grievances from "./pages/Grievances";
import Health from "./pages/Health";
import Property from "./pages/Property";
import Tax from "./pages/Tax";
import Education from "./pages/Education";
import Business from "./pages/Business";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/grievances" element={<Grievances />} />
          <Route path="/health" element={<Health />} />
          <Route path="/property" element={<Property />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/education" element={<Education />} />
          <Route path="/business" element={<Business />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
