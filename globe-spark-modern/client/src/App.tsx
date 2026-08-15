// Quiet Authority design system: warm editorial surfaces, cobalt signal accents, asymmetric growth-story layout.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AboutPage, ApproachPage, ContactPage, InsightsPage, ServiceDetailPage, ServicesPage, WorkPage } from "./pages/Multipage";
import { Route, Switch } from "wouter";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/services/:slug">{(params) => <ServiceDetailPage slug={params.slug} />}</Route>
            <Route path="/approach" component={ApproachPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/work" component={WorkPage} />
            <Route path="/insights" component={InsightsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={Home} />
          </Switch>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
