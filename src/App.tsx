import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EstatePage from "./pages/EstatePage.tsx";
import InteriorsPage from "./pages/InteriorsPage.tsx";
import ConstructionPage from "./pages/ConstructionPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import PropertiesPage from "./pages/PropertiesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import JointVenturePage from "./pages/JointVenturePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CostCalculator from "./pages/CostCalculator.tsx";
import PropertyDetailPage from "./pages/PropertyDetailPage.tsx";
import SellPropertyPage from "./pages/SellPropertyPage.tsx";
import NotFound from "./pages/NotFound.tsx";

import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/list-property" element={<SellPropertyPage />} />
          <Route path="/estate" element={<EstatePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/interiors" element={<InteriorsPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/property/:propertyId" element={<PropertyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/joint-venture" element={<JointVenturePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
