export interface Property {
  id: string;
  location: string;
  bedrooms: number;
  price: string;
  images: string[];
  description: string;
  amenities: string[];
  contactPhone: string;
}

export const LOCATIONS = [
  "Parklands",
  "Eastleigh",
  "Fedha",
  "Donholm",
  "South C",
  "South B",
  "Karen",
  "Syokimau",
] as const;

export const BEDROOMS = [1, 2, 3, 4] as const;

export const properties: Property[] = [
  {
    id: "1",
    location: "Parklands",
    bedrooms: 2,
    price: "KSh 45,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Modern 2-bedroom apartment in the heart of Parklands. Features spacious living areas, contemporary kitchen, and excellent natural lighting throughout.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "2",
    location: "Karen",
    bedrooms: 4,
    price: "KSh 120,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Luxurious 4-bedroom house in Karen with spacious compound and modern amenities. Perfect for families seeking comfort and security.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "3",
    location: "South C",
    bedrooms: 3,
    price: "KSh 65,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Beautiful 3-bedroom apartment in South C with great access to major roads and amenities. Features modern finishes and ample parking.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "4",
    location: "Eastleigh",
    bedrooms: 2,
    price: "KSh 35,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Affordable 2-bedroom apartment in Eastleigh with excellent transport links and proximity to shopping centers.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "5",
    location: "South B",
    bedrooms: 3,
    price: "KSh 55,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Spacious 3-bedroom unit in quiet South B neighborhood. Well-maintained building with modern amenities.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "6",
    location: "Syokimau",
    bedrooms: 3,
    price: "KSh 48,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Modern 3-bedroom apartment near SGR station. Perfect for commuters with great transport connectivity.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "7",
    location: "Donholm",
    bedrooms: 2,
    price: "KSh 38,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Cozy 2-bedroom apartment in Donholm, close to schools and shopping centers. Great for small families.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "8",
    location: "Fedha",
    bedrooms: 1,
    price: "KSh 25,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Compact 1-bedroom apartment in Fedha, perfect for singles or young couples. Affordable and well-maintained.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "9",
    location: "Karen",
    bedrooms: 3,
    price: "KSh 95,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Elegant 3-bedroom townhouse in Karen with private garden and modern finishes throughout.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
  {
    id: "10",
    location: "Parklands",
    bedrooms: 1,
    price: "KSh 32,000/month",
    images: ["property-1.jpg", "property-1.jpg", "property-1.jpg"],
    description: "Stylish 1-bedroom apartment in Parklands with modern amenities and excellent security.",
    amenities: ["Water Available", "Duqsi Available", "Lift Available", "Parking Available"],
    contactPhone: "+254116733496",
  },
];
