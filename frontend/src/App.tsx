import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import WatchDemo from "./pages/WatchDemo";
import Documentation from "./pages/Documentation";
import HelpCenter from "./pages/HelpCenter";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Changelog from "./pages/Changelog";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Moodboard from "./pages/dashboard/Moodboard";
import Sketch from "./pages/dashboard/Sketch";
import TechPack from "./pages/dashboard/TechPack";
import Supplier from "./pages/dashboard/Supplier";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="sketch-silk-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/watch-demo" element={<WatchDemo />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Moodboard />} />
              <Route path="moodboard" element={<Moodboard />} />
              <Route path="sketch" element={<Sketch />} />
              <Route path="techpack" element={<TechPack />} />
              <Route path="supplier" element={<Supplier />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
