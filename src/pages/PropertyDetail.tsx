import { useParams, useNavigate } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Bed, Check, MessageCircle } from "lucide-react";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  const handleCallNow = () => {
    window.location.href = `tel:${property.contactPhone}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${property.bedrooms} bedroom property in ${property.location} listed at ${property.price}`
    );
    window.open(`https://wa.me/${property.contactPhone.replace(/\s+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-10">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6 md:py-8 space-y-6">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
            <img
              src={getImagePath(property.images[currentImageIndex])}
              alt={`${property.bedrooms} bedroom property in ${property.location}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-video overflow-hidden rounded-lg transition-[var(--transition-smooth)] ${
                  currentImageIndex === index
                    ? "ring-2 ring-primary"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={getImagePath(image)}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {property.bedrooms} Bedroom Property
              </h1>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {property.price}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span className="text-lg">
                  {property.bedrooms} Bedroom{property.bedrooms > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="default"
              className="w-full gap-2 text-lg h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Button>
            <Button
              onClick={handleCallNow}
              size="lg"
              variant="accent"
              className="w-full gap-2 text-lg h-14"
            >
              <Phone className="w-5 h-5" />
              Call Now: {property.contactPhone}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDetail;
