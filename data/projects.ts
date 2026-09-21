export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  gallery: string[];
  featured: boolean;
  status: string;
  client?: string;
  link?: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: "001",
    title: "Uplifted Timeless Concept",
    slug: "uplifted-timeless-concept",
    category: "E-Commerce Website",
    year: "2026",

    description:
      "A modern e-commerce website developed for a fashion and branding company.",

    longDescription:
      "Uplifted Timeless Concept is a fashion and branding platform designed to give the business a professional online presence and provide customers with a convenient way to explore products and services.",

    technologies: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    image:
      "/images/projects/uplifted-timeless-concept.jpg",

    gallery: [
      "/images/projects/uplifted-timeless-concept.jpg",
    ],

    featured: true,
    status: "Live Project",

    client: "Uplifted Timeless Concept",

    link: "https://upliftedtimelessconcept.com",

    role:
      "Web Developer / Full-Stack Developer",
  },

  {
    id: "002",
    title: "Richies Rider",
    slug: "richies-rider",
    category: "Mobile & Web Application",
    year: "2026",

    description:
      "A parcel delivery application designed to support digital delivery operations.",

    longDescription:
      "Richies Rider is a digital parcel-delivery solution created to provide customers and delivery operators with technology-driven tools for managing delivery services.",

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Android",
      "Web",
    ],

    image:
      "/images/projects/richies-rider.jpg",

    gallery: [
      "/images/projects/richies-rider.jpg",
    ],

    featured: true,
    status: "Completed",

    role:
      "Mobile App Developer / Full-Stack Developer",
  },

  {
    id: "003",
    title: "Ferdexi",
    slug: "ferdexi",
    category: "FinTech / Investment Platform",
    year: "2026",

    description:
      "A digital investment platform with account and investment management functionality.",

    longDescription:
      "Ferdexi is a digital financial platform developed with features for user accounts, investment plans and financial operations.",

    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API",
    ],

    image:
      "/images/projects/ferdexi.jpg",

    gallery: [
      "/images/projects/ferdexi.jpg",
    ],

    featured: true,
    status: "Completed",

    link: "https://ferdexi.com",

    role:
      "Full-Stack Developer",
  },

  {
    id: "004",
    title: "Business Website Solutions",
    slug: "business-website-solutions",
    category: "Web Development",
    year: "2024 - 2026",

    description:
      "Responsive websites developed for businesses and entrepreneurs.",

    longDescription:
      "A collection of websites created for different businesses and professional brands, focusing on responsive design, usability and strong digital presentation.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "WordPress",
    ],

    image:
      "/images/projects/business-websites.jpg",

    gallery: [
      "/images/projects/business-websites.jpg",
    ],

    featured: false,
    status: "Multiple Projects",

    role:
      "Web Developer",
  },

  {
    id: "005",
    title: "FinTech Platform Solutions",
    slug: "fintech-platform-solutions",
    category: "FinTech / Software",
    year: "2024 - 2026",

    description:
      "Custom digital platforms designed around financial and business operations.",

    longDescription:
      "A range of software projects involving financial workflows, wallets, payments, account management and business administration systems.",

    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API",
    ],

    image:
      "/images/projects/fintech-platform.jpg",

    gallery: [
      "/images/projects/fintech-platform.jpg",
    ],
       
    featured: false,
    status: "Multiple Projects",

    role:
      "Full-Stack Developer",
  },
{
    id: "006",
    title: "VTU Platform",
    slug: "fintech-platform-solutions",
    category: "FinTech / Software",
    year: "2024 - 2026",

    description:
      "Custom digital platforms designed around financial and business operations.",

    longDescription:
      "A range of software projects involving financial workflows, wallets, payments, account management and business administration systems.",

    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API",
    ],

    image:
      "/images/projects/vtu-platform.jpg",

    gallery: [
      "/images/projects/vtu-platform.jpg",
    ],


    featured: false,
    status: "Multiple Projects",

    role:
      "Full-Stack Developer",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}