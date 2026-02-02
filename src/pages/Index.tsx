import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LOCATIONS, BEDROOMS } from "@/data/properties";
import { MapPin, Bed, Search, Home } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-property.jpg";

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
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern luxury apartment building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Find Your Perfect Home
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover quality properties across Nairobi
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container max-w-4xl mx-auto px-4 -mt-16 md:-mt-20 relative z-10 pb-16">
        <Card className="p-6 md:p-8 shadow-[var(--shadow-hover)] border-border">
          <div className="space-y-8">
            {/* Location Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <MapPin className="w-5 h-5 text-primary" />
                <h2>Select Location</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {LOCATIONS.map((location) => (
                  <Button
                    key={location}
                    variant="filter"
                    onClick={() => setSelectedLocation(location)}
                    className={
                      selectedLocation === location
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Bed className="w-5 h-5 text-primary" />
                <h2>Number of Bedrooms</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BEDROOMS.map((bedroom) => (
                  <Button
                    key={bedroom}
                    variant="filter"
                    onClick={() => setSelectedBedrooms(bedroom)}
                    className={
                      selectedBedrooms === bedroom
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {bedroom} Bedroom{bedroom > 1 ? "s" : ""}
                  </Button>
                ))}
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Home className="w-5 h-5 text-primary" />
                <h2>Property Type</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="filter"
                  onClick={() => setSelectedType("rental")}
                  className={
                    selectedType === "rental"
                      ? "border-primary bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  Kiro/Rental
                </Button>
                <Button
                  variant="filter"
                  onClick={() => setSelectedType("furnished")}
                  className={
                    selectedType === "furnished"
                      ? "border-primary bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  Furnished
                </Button>
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              size="lg"
              className="w-full gap-2 text-lg h-14"
            >
              <Search className="w-5 h-5" />
              Search Properties
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
