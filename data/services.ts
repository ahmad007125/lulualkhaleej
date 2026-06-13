export type Service = {
  slug: string;
  title: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
};

export const services: Service[] = [
  {
    slug: "boom-truck-rental",
    title: "Boom Truck Rental",
    image: "/images/services/boom-truck.jpg",
    description:
      "Reliable boom trucks for lifting and transportation projects.",
    longDescription:
      "Our boom truck rental service provides versatile lifting and material handling solutions for construction sites, industrial facilities, and infrastructure projects. Each unit is maintained to the highest standards and operated by certified professionals to ensure safe and efficient performance.",
    features: [
      "Certified operators available",
      "Multiple capacity options",
      "Daily, weekly, and monthly rental",
      "24/7 emergency support",
    ],
    applications: [
      "Construction lifting",
      "Utility pole installation",
      "Industrial maintenance",
      "Oil & gas field support",
    ],
  },
  {
    slug: "flatbed-transportation",
    title: "Flatbed Transportation",
    image: "/images/services/flat-bed.jpg",
    description: "Safe transportation of equipment and materials.",
    longDescription:
      "We offer dependable flatbed transportation for oversized loads, construction materials, and industrial equipment across Saudi Arabia. Our fleet is equipped for secure loading, route planning, and timely delivery to project sites.",
    features: [
      "Secure load fastening",
      "Experienced drivers",
      "Nationwide coverage",
      "GPS-tracked fleet",
    ],
    applications: [
      "Steel and pipe transport",
      "Construction materials",
      "Industrial machinery",
      "Project site logistics",
    ],
  },
  {
    slug: "lowbed-transportation",
    title: "Lowbed Transportation",
    image: "/images/services/low-bed.jpg",
    description: "Heavy machinery transportation across Saudi Arabia.",
    longDescription:
      "Our lowbed trailers are designed for transporting heavy and oversized machinery including excavators, cranes, and industrial equipment. We handle permits, route surveys, and escort coordination when required.",
    features: [
      "Heavy-duty lowbed trailers",
      "Permit assistance",
      "Route planning support",
      "Escort coordination",
    ],
    applications: [
      "Excavator transport",
      "Crane relocation",
      "Mining equipment",
      "Power plant machinery",
    ],
  },
  {
    slug: "forklift-rental",
    title: "Forklift Rental",
    image: "/images/services/fork-lift.jpg",
    description: "Material handling solutions for industrial operations.",
    longDescription:
      "Rent forklifts for warehouses, construction yards, and industrial sites. We provide well-maintained units with flexible rental terms to match your operational requirements and project timelines.",
    features: [
      "Various tonnage capacities",
      "Diesel and electric options",
      "Short and long-term rental",
      "On-site delivery available",
    ],
    applications: [
      "Warehouse operations",
      "Construction yards",
      "Port and logistics",
      "Manufacturing facilities",
    ],
  },
  {
    slug: "crane-rental",
    title: "Crane Rental",
    image: "/images/services/crane.jpg",
    description: "Heavy lifting services for construction projects.",
    longDescription:
      "From mobile cranes to heavy-lift solutions, our crane rental services support complex lifting operations in construction, oil & gas, and industrial sectors. All equipment is inspected and operated under strict safety protocols.",
    features: [
      "Mobile and truck-mounted cranes",
      "Certified crane operators",
      "Lift planning assistance",
      "Safety compliance guaranteed",
    ],
    applications: [
      "Building construction",
      "Plant maintenance",
      "Infrastructure projects",
      "Oil & gas installations",
    ],
  },
  {
    slug: "dump-truck-rental",
    title: "Dump Truck Rental",
    image: "/images/services/dump-truck.jpg",
    description:
      "Efficient transport of sand, gravel and construction materials.",
    longDescription:
      "Our dump truck fleet supports earthmoving, road construction, and material hauling projects throughout the Eastern Province and beyond. Reliable units with experienced drivers keep your project on schedule.",
    features: [
      "Multiple payload capacities",
      "Experienced operators",
      "Fleet availability",
      "Flexible contract terms",
    ],
    applications: [
      "Earthmoving projects",
      "Road construction",
      "Sand and aggregate hauling",
      "Site clearance operations",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
