export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  fullDetails: string;
  applications: string[];
  handlingInfo: string[];
  keyHighlights: string[];
}

export const productList: ProductItem[] = [
  {
    id: "kewda-ruh",
    name: "Kewda Ruh",
    category: "Aromatic Essential Extract",
    image: "/images/kewda-ruh.jpg",
    description:
      "Premium Kewda Ruh sourced with attention to fragrance, purity and quality, suitable for international buyers seeking authentic Indian aromatic products.",
    fullDetails:
      "Kewda Ruh (Pandanus odorifer extract) is one of India's most prized natural aromatic concentrates, distilled traditionally from fragrant male screwpine flowers in Odisha's coastal belt. Recognized globally for its enchanting botanical aroma, high purity, and long-lasting scent profile.",
    keyHighlights: [
      "100% Pure Natural Steam Distilled Extract",
      "Authentic Odisha Geographical Origin Sourcing",
      "Rich Floral Aroma Profile for High-End Perfumery",
      "Free from Artificial Additives or Synthetics"
    ],
    applications: [
      "Natural Perfumery & Fine Fragrance",
      "Attar & Traditional Fragrance Formulations",
      "Aromatherapy & Premium Cosmetic Formulations",
      "Culinary & Confectionery Flavoring"
    ],
    handlingInfo: [
      "Packaged in airtight, food-grade aluminum bottles or amber glass vials.",
      "Stored in cool, dry climate-controlled environments to preserve aroma profile.",
      "Sealed with tamper-evident export packaging."
    ]
  },
  {
    id: "frozen-chicken",
    name: "Frozen Chicken",
    category: "Poultry & Cold-Chain Supply",
    image: "/images/frozen-chicken.jpg",
    description:
      "Reliable frozen chicken products sourced and handled with a focus on hygiene, quality and dependable cold-chain supply.",
    fullDetails:
      "Our frozen chicken exports are processed in modern, hygienic food facilities adhering strictly to international food safety and veterinary standards. We offer whole dressed chicken, breast fillets, drumsticks, and wings tailored to commercial buyer specifications.",
    keyHighlights: [
      "Dressed & Cut Dressed Poultry Options",
      "Hygienically Processed Under Cold Chain Controls",
      "Clean, Skin-On and Skin-Off Custom Cuts Available",
      "Zero Added Water Weight / Blast Frozen Quality"
    ],
    applications: [
      "Wholesale Foodservice Distributors",
      "Commercial Restaurant & Catering Operations",
      "Hotel & Institutional Culinary Supply",
      "Retail & Supermarket Butchery Chains"
    ],
    handlingInfo: [
      "Blast frozen at -35°C to preserve cellular integrity and texture.",
      "Stored & shipped at continuous sub-zero temperatures (-18°C or colder).",
      "Export packed in heavy-duty food grade poly-bags and corrugated master cartons."
    ]
  },
  {
    id: "seafood",
    name: "Seafood",
    category: "Fresh & Frozen Marine Produce",
    image: "/images/seafood.jpg",
    description:
      "Quality seafood products prepared for international trade with careful sourcing, handling and packaging requirements.",
    fullDetails:
      "Sourced from the pristine waters of Odisha's coastline and sustainable aquaculture farms, our seafood export portfolio includes premium White Prawns (Vannamei), Black Tiger Shrimp, Indian Pomfret, and ocean-fresh catches. Harvested with care to ensure natural flavor and firm texture.",
    keyHighlights: [
      "Fresh Coastal & Farm-Raised Prawn Varieties",
      "Individually Quick Frozen (IQF) & Block Frozen",
      "Careful Sorting by Count, Weight & Grade",
      "Rigorous Sensory & Temperature Quality Checks"
    ],
    applications: [
      "International Seafood Importers & Distributors",
      "Seafood Specialty Restaurants & Hotel Chains",
      "Food Processing & Value-Add Manufacturing",
      "Supermarket Seafood Counters"
    ],
    handlingInfo: [
      "Quick frozen immediately after harvesting to retain peak fresh taste.",
      "Shipped in temperature-monitored refrigerated marine containers (Reefers).",
      "Protected by protective water glaze to prevent freezer burn during long voyages."
    ]
  }
];

export function getProductById(id: string): ProductItem | undefined {
  return productList.find((p) => p.id === id);
}
