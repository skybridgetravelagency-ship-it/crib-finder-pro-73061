import { Property } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Bed } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();
  
  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] cursor-pointer border-border">
      <div 
        onClick={() => navigate(`/property/${property.id}`)}
        className="aspect-[4/3] overflow-hidden bg-muted"
      >
        <img
          src={getImagePath(property.images[0])}
          alt={`${property.bedrooms} bedroom in ${property.location}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Bed className="w-4 h-4" />
          <span>{property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
        </div>
        <div className="text-2xl font-bold text-primary">
          {property.price}
        </div>
        <Button 
          onClick={() => navigate(`/property/${property.id}`)}
          className="w-full"
          size="lg"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
