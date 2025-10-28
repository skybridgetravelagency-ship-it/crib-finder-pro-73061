import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

const DonholmPhase = () => {
  const { phase } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-10">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Button>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Donholm {phase}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Properties coming soon to this area
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              We're currently updating our property listings for Donholm {phase}. 
              Contact us to get notified when new properties become available in this area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/254116733496?text=I%27m%20interested%20in%20properties%20in%20Donholm%20' + phase, '_blank')}
              >
                Contact via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:+254116733496')}
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonholmPhase;
