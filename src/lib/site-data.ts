import transportImg from "@/assets/biz-transport.jpg";
import coldstoreImg from "@/assets/biz-coldstore.jpg";
import farmsImg from "@/assets/biz-farms.jpg";

export const CONTACT = {
  phone: "+233-248-332-200",
  phoneHref: "tel:+233248332200",
  altPhone: "024-833-2200",
  email: "business@evanyag.com",
  address: "Accra, Ghana",
  hours: "Monday to Saturday: 9:00 am – 6:00 pm",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Businesses", href: "#businesses" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Reach", href: "#reach" },
  { label: "Contact", href: "#contact" },
];

export const BUSINESSES = [
  {
    index: "01",
    name: "ECL Transport",
    sector: "Logistics & Haulage",
    description:
      "Our fleet of lowbed trailers, flatbed trailers, and heavy-duty vehicles provides reliable transportation of goods, mining equipment, and heavy machinery across Ghana and into Mali, Burkina Faso, Côte d’Ivoire, etc.",
    image: transportImg,
    href: "#businesses",
    external: false,
  },
  {
    index: "02",
    name: "ECL Cold Store",
    sector: "Cold Chain & Frozen Foods",
    description:
      "We import and distribute quality frozen food products — including fish, chicken, and other meat products to wholesalers, retailers, and individual consumers across Ghana’s Eastern, Ashanti, and Greater Accra regions.",
    image: coldstoreImg,
    href: "https://eclcoldstore.com/",
    external: true,
  },
  {
    index: "03",
    name: "ECL Farms",
    sector: "Agriculture & Farming",
    description:
      "ECL Farms focuses on cattle rearing, guinea fowl farming, and pineapple cultivation — contributing to food security and sustainable agricultural development in Ghana.",
    image: farmsImg,
    href: "#businesses",
    external: false,
  },
];

export const CAPABILITIES = [
  "Heavy Haulage & Transport",
  "Mining Equipment Logistics",
  "Frozen Food Supply",
  "Cold Chain Logistics",
  "Cattle & Livestock Farming",
  "Guinea Fowl Production",
  "Pineapple Cultivation",
  "Food Security & Agriculture",
  "Cross-Border Freight",
  "Wholesale & Retail Distribution",
];

export const PROCESS = [
  {
    step: "01",
    title: "Connect With Us",
    body: "Reach out via phone, email, or our website to tell us what you need, whether it’s frozen food supplies, logistics, or farming produce.",
  },
  {
    step: "02",
    title: "We Plan Together",
    body: "Our team assesses your requirements and prepares a tailored service plan with clear timelines, routes, or delivery schedules.",
  },
  {
    step: "03",
    title: "Operations Begin",
    body: "Our trained staff and equipped fleet get to work, loading, processing, transporting, or harvesting with care and efficiency.",
  },
  {
    step: "04",
    title: "Delivery & Satisfaction",
    body: "Your order is delivered reliably and on time. We follow up to ensure quality standards are met and you are fully satisfied.",
  },
];

export const WHY_US = [
  "100% Ghanaian-owned and operated",
  "Trusted across Ghana and West Africa",
  "Fleet equipped for all terrain and cargo types",
  "Consistent cold-chain integrity for frozen goods",
  "Experienced agricultural and farming teams",
  "Customer-first approach at every touchpoint",
];

export const STATS = [
  { value: 80, label: "Completed Delivery" },
  { value: 80, label: "Satisfied Clients" },
  { value: 80, label: "Awards Winner" },
  { value: 80, label: "Team Members" },
];

export const CORRIDORS = ["Ghana", "Mali", "Burkina Faso", "Côte d’Ivoire"];

export const REGIONS = ["Eastern Region", "Ashanti Region", "Greater Accra"];

export const FOOTER_SERVICES = [
  "Haulage & Logistics",
  "Heavy Equipment Transport",
  "Frozen Food Distribution",
  "Cattle & Livestock Supply",
  "Agricultural Produce",
];

export const FOOTER_SECTORS = [
  "Transport & Haulage",
  "Mining Equipment Logistics",
  "Cold Chain & Food Supply",
  "Agricultural Production",
  "Cross-Border West Africa Logistics",
];
