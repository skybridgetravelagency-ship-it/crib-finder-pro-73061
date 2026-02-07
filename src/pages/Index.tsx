import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LOCATIONS, BEDROOMS } from "@/data/properties";
import { MapPin, Bed, Search, Home } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | "">("");
  const [selectedType, setSelectedType] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!selectedLocation || selectedBedrooms === "" || !selectedType) {
      toast({
        title: "Please complete your search",
        description: "Select location, bedrooms, and property type to continue",
        variant: "destructive",
      });
      return;
    }

    navigate(`/search?location=${selectedLocation}&bedrooms=${selectedBedrooms}&type=${selectedType}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold tracking-tight uppercase">GURI BILLE</h1>
        <p className="text-sm text-muted-foreground font-bold uppercase">FIND YOUR DREAM HOME HERE</p>
      </div>

      {/* Search Section */}
      <div className="container max-w-4xl mx-auto px-4 pb-16">
        <Card className="p-6 md:p-8 shadow-[var(--shadow-hover)] border-border">
          <div className="space-y-8">
            {/* Location Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold uppercase">
                <MapPin className="w-5 h-5 text-primary" />
                <h2>SELECT LOCATION</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {LOCATIONS.map((location, index) => (
                  <Button
                    key={location}
                    variant="filter"
                    onClick={() => setSelectedLocation(location)}
                    className={`font-bold uppercase ${
                      selectedLocation === location
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    } ${index === 0 ? "col-span-2" : ""}`}
                  >
                    {location.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold uppercase">
                <Bed className="w-5 h-5 text-primary" />
                <h2>NUMBER OF BEDROOMS</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {BEDROOMS.map((bedroom) => (
                  <Button
                    key={bedroom}
                    variant="filter"
                    onClick={() => setSelectedBedrooms(bedroom)}
                    className={`font-bold uppercase ${
                      selectedBedrooms === bedroom
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {bedroom === 0 ? "BEDSITTER" : `${bedroom} BEDROOM${bedroom > 1 ? "S" : ""}`}
                  </Button>
                ))}
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold uppercase">
                <Home className="w-5 h-5 text-primary" />
                <h2>PROPERTY TYPE</h2>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="filter"
                    onClick={() => setSelectedType("rental")}
                    className={`font-bold uppercase ${
                      selectedType === "rental"
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    KIRO/RENT
                  </Button>
                  <Button
                    variant="filter"
                    onClick={() => setSelectedType("furnished")}
                    className={`font-bold uppercase ${
                      selectedType === "furnished"
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    FURNISHED
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="filter"
                    onClick={() => setSelectedType("sale")}
                    className={`px-8 font-bold uppercase ${
                      selectedType === "sale"
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    HOMES FOR SALE
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              size="lg"
              className="w-full gap-2 text-lg h-14 font-bold uppercase"
            >
              <Search className="w-5 h-5" />
              SEARCH PROPERTIES
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
