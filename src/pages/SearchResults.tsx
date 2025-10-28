import { useSearchParams, useNavigate } from "react-router-dom";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const location = searchParams.get("location");
  const bedrooms = searchParams.get("bedrooms");

  const filteredProperties = properties.filter((property) => {
    const locationMatch = !location || property.location === location;
    const bedroomsMatch = !bedrooms || property.bedrooms === parseInt(bedrooms);
    return locationMatch && bedroomsMatch;
  });

  const donholmPhases = ["Phase 1", "Phase 2", "Phase 4", "Phase 5"];
  const showDonholmPhases = location === "Donholm";

  const eastleighSections = [
    "Eastleigh 8",
    "Eastleigh 6 Street",
    "Jaamka",
    "California",
    "12Ka",
    "Section 3",
    "Ushirika",
    "Pangani"
  ];
  const showEastleighSections = location === "Eastleigh";

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-10">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            New Search
          </Button>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Available Properties
          </h1>
          <p className="text-muted-foreground text-lg">
            {filteredProperties.length} propert{filteredProperties.length === 1 ? 'y' : 'ies'} found
            {location && ` in ${location}`}
            {bedrooms && ` with ${bedrooms} bedroom${parseInt(bedrooms) > 1 ? 's' : ''}`}
          </p>
        </div>

        {showDonholmPhases && (
          <div className="mb-8 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Select Donholm Phase</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {donholmPhases.map((phase) => (
                <Button
                  key={phase}
                  variant="outline"
                  className="h-auto py-4 flex flex-col gap-1"
                  onClick={() => navigate(`/donholm/${encodeURIComponent(phase)}`)}
                >
                  <span className="font-semibold">Donholm</span>
                  <span className="text-sm text-muted-foreground">{phase}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {showEastleighSections && (
          <div className="mb-8 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Select Eastleigh Section</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {eastleighSections.map((section) => (
                <Button
                  key={section}
                  variant="outline"
                  className="h-auto py-4 flex flex-col gap-1"
                  onClick={() => navigate(`/eastleigh/${encodeURIComponent(section)}`)}
                >
                  <span className="font-semibold">Eastleigh</span>
                  <span className="text-sm text-muted-foreground">{section}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">No properties found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search filters
            </p>
            <Button onClick={() => navigate("/")}>
              Return to Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
