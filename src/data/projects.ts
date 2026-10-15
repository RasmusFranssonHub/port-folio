
import offertorImage from "../assets/pictures/offertor/offertor-main-pic.png";
import backOfficeImage from "../assets/pictures/back-office/shop-portal-main-pic.png";
import juniperImage from "../assets/pictures/juniper/juniper-main-pic.png";
import aiSvgLabImage from "../assets/pictures/ai-svg-lab/bullens-main-pic.png";
import bookApiImage from "../assets/pictures/book-api/book-main-pic.png";
import gbImage from "../assets/pictures/gb/GB-main-pic.png";

// Import images for project galleries

// for offertor project
import offertorGallery1 from "../assets/pictures/offertor/Figma.png";
import offertorGallery2 from "../assets/pictures/offertor/inloggad2.png";
import offertorGallery3 from "../assets/pictures/offertor/Landing-page.png";
import offertorGallery4 from "../assets/pictures/offertor/mobil2.png";
import offertorGallery5 from "../assets/pictures/offertor/mobil3.png";
import offertorGallery6 from "../assets/pictures/offertor/sektion1.png";
import offertorGallery7 from "../assets/pictures/offertor/sektion2.png";

// for back-office project
import backOfficeGallery1 from "../assets/pictures/back-office/e-shop-add-kategori.png";
import backOfficeGallery2 from "../assets/pictures/back-office/e-shop-add-product.png";
import backOfficeGallery3 from "../assets/pictures/back-office/e-shop-kategorier.png";
import backOfficeGallery4 from "../assets/pictures/back-office/e-shop-produkter.png";
import backOfficeGallery5 from "../assets/pictures/back-office/skärmklipp.png";

// for juniper project
import juniperGallery1 from "../assets/pictures/juniper/Skärmklipp.png";
import juniperGallery2 from "../assets/pictures/juniper/juniperImage.png";
import juniperGallery3 from "../assets/pictures/juniper/Footer.png";
import juniperGallery4 from "../assets/pictures/juniper/carousel-2.png";

// for ai-svg-lab project
import aiSvgLabGallery1 from "../assets/pictures/ai-svg-lab/Bullens-produktbild.png";
import aiSvgLabGallery2 from "../assets/pictures/ai-svg-lab/image-1.png";
import aiSvgLabGallery3 from "../assets/pictures/ai-svg-lab/mobile.png";
import aiSvgLabGallery4 from "../assets/pictures/ai-svg-lab/CHIPS-GUL.png";
import aiSvgLabGallery5 from "../assets/pictures/ai-svg-lab/CHIPS-RÖD.png";

// for book-api project
import bookApiGallery1 from "../assets/pictures/book-api/Skärmklipp.png";
import bookApiGallery2 from "../assets/pictures/book-api/book-info-recension.png";
import bookApiGallery3 from "../assets/pictures/book-api/book-logged-in.png";
import bookApiGallery5 from "../assets/pictures/book-api/book-admin.png";

// for gb project
import gbGallery1 from "../assets/pictures/gb/cookies.png";
import gbGallery2 from "../assets/pictures/gb/Footer.png";
import gbGallery3 from "../assets/pictures/gb/produkter.png";
import gbGallery4 from "../assets/pictures/gb/sektion.png";
import gbGallery5 from "../assets/pictures/gb/Skärmklipp.png";


export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  role: string;
  technologies: string[];
  type: string;
  gallery: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "offertor",
    number: "01",
    title: "Offertor",
    description: 
      "Ett pågående designprojekt i Figma med fokus på att skapa ett tydligt och användarvänligt offertverktyg för hantverkare. Fokus ligger på ökad försäljning med hjälp av en intuitiv design och användarupplevelse.",
    image: offertorImage,
    alt: "Designskisser och gränssnitt för Offertor i Figma",
    role: "UI/UX-design",
    technologies: [
      "Design", 
      "Figma",
      "UI/UX",
      "SVG"
    ],
    type: "Designprojekt",
    gallery: [
      { src: offertorGallery1, alt: "Figma-design för Offertor" },
      { src: offertorGallery2, alt: "Inloggad vy i Offertor" },
      { src: offertorGallery3, alt: "Landingssida för Offertor" },
      { src: offertorGallery4, alt: "Mobilvy 1 för Offertor" },
      { src: offertorGallery5, alt: "Mobilvy 2 för Offertor" },
      { src: offertorGallery6, alt: "Sektion 1 för Offertor" },
      { src: offertorGallery7, alt: "Sektion 2 för Offertor" }
    ],
    githubUrl: "https://github.com/RasmusFranssonHub/offertor"
  },
  {
    slug: "back-office",
    number: "02",
    title: "Back-office",
    description:
      "Ett administrativt gränssnitt för en e-handel, där produkter, kategorier och ordrar hanteras via ett REST API. Projektet kombinerar en backend med Node.js, Express och MySQL med ett React-baserat frontend under utveckling.",
    image: backOfficeImage,
    alt: "Förhandsvisning av Shop Portal Back-office",
    role: "Fullstack-utveckling",
    technologies: [
      "React", 
      "TypeScript", 
      "Node.js", 
      "Express", 
      "MySQL", 
      "REST API", 
      "Design",
      "Figma",
      "UI/UX",
      "SVG",
      "CSS",
      "HTML",
      "SCSS",
      "JavaScript",
      "MongoDB"
    ],
    type: "Webbapplikation",
    gallery: [
      { src: backOfficeGallery1, alt: "Huvudvy i Shop Portal" },
      { src: backOfficeGallery2, alt: "Produktvy i Shop Portal" },
      { src: backOfficeGallery3, alt: "Ordrar i Shop Portal" },
      { src: backOfficeGallery4, alt: "Kategorier i Shop Portal" },
      { src: backOfficeGallery5, alt: "Lägg till produkt i Shop Portal" }
    ],
    githubUrl: "https://github.com/RasmusFranssonHub/api-db-e-shop"
  },
  {
    slug: "juniper",
    number: "03",
    title: "Juniper",
    description: 
      "Ett grupprojekt med fokus på UI/UX-design, produktutveckling och användarvänliga webbgränssnitt. Given design av annan grupp, med fokus på att implementera designen i en fungerande webbapplikation.",
    image: juniperImage,
    alt: "Gränssnittsdesign och vyer från projektet Juniper",
    role: "UI/UX-design och frontendutveckling",
    technologies: [
      "JavaScript", 
      "CSS", 
      "Design", 
      "Figma",
      "UI/UX",
      "SVG",
      "HTML",
      "SCSS",
      "JavaScript",
      "TypeScript",
    ],
    type: "Webbapplikation",
    gallery: [
      { src: juniperGallery1, alt: "Huvudvy i Juniper" },
      { src: juniperGallery2, alt: "Produktvy i Juniper" },
      { src: juniperGallery3, alt: "Ordrar i Juniper" },
      { src: juniperGallery4, alt: "Kategorier i Juniper" }
    ],
    githubUrl: "https://github.com/RasmusFranssonHub/grafiska-vektyg-given-design"
    
  },
  {
    slug: "ai-svg-lab",
    number: "04",
    title: "AI SVG Lab",
    description:
      "En kampanjsida som kombinerar AI-genererad grafik med animerad SVG för en interaktiv visuell upplevelse. Projektet utforskar möjligheterna med AI-genererade bilder och animationer för att skapa en unik och engagerande webbupplevelse.",
    image: aiSvgLabImage,
    alt: "AI-genererad kampanjbild för Bullens Pilsnerchips med neonljus och TV-shop-tema",
    role: "Design och frontendutveckling",
    technologies: [
      "HTML", 
      "SCSS", 
      "JavaScript", 
      "SVG", 
      "GSAP",
      "Figma",
      "Design",
      "UI/UX",
      "CSS"
    ],
    type: "Webbplats",
    gallery: [
      { src: aiSvgLabGallery1, alt: "Chips AI design" },
      { src: aiSvgLabGallery2, alt: "Figma flow" },
      { src: aiSvgLabGallery3, alt: "Bakgrund AI design" },
      { src: aiSvgLabGallery4, alt: "Logo figma design gul" },
      { src: aiSvgLabGallery5, alt: "Logo figma design röd" }
    ],
    githubUrl: "https://github.com/RasmusFranssonHub/ai-svg-lab"
  },
  {
    slug: "book-api",
    number: "05",
    title: "Book API",
    description:
      "Ett grupprojekt där vi utvecklade ett REST API för bokhantering med MongoDB, autentisering och stöd för recensioner. Projektet fokuserade på backendutveckling och säker hantering av data, med en frontend som konsumerar API:et.",
    image: bookApiImage,
    alt: "Förhandsvisning av Book API och dess bokhantering",
    role: "Backend-utveckling och autentisering",
    technologies: [
      "TypeScript",
      "REST API",
      "MongoDB",
      "Node.js",
      "Express",
      "JavaScript",
      "CSS",
      "HTML",
      "SCSS",
      "UI/UX",
      "Design",
      "Figma"
    ],
    type: "API",
    gallery: [
      { src: bookApiGallery1, alt: "Login vy" },
      { src: bookApiGallery2, alt: "Bok informationssida med recensioner" },
      { src: bookApiGallery3, alt: "Startsida med alla böcker" },
      { src: bookApiGallery5, alt: "Admin panel" }
    ],
    githubUrl: "https://github.com/RasmusFranssonHub/api-book-group"
  },
  {
    slug: "gb",
    number: "06",
    title: "GB",
    description:
      "Ett grupprojekt där vi tog fram ett nytt produktkoncept och skapade en komplett UI/UX-design i Figma för ett digitalt kampanjkoncept. Projektet fokuserade på att utveckla en användarvänlig och visuellt tilltalande design.",
    image: gbImage,
    alt: "Förhandsvisning av GB:s digitala kampanjkoncept",
    role: "UI/UX-design och konceptutveckling",
    technologies: [
      "Figma",
      "UI/UX",
      "Design",
      "SVG"
    ],
    type: "Design",
    gallery: [
      { src: gbGallery1, alt: "Cookies" },
      { src: gbGallery2, alt: "Footer" },
      { src: gbGallery3, alt: "Produkter" },
      { src: gbGallery4, alt: "Sektion" },
      { src: gbGallery5, alt: "Skärmklipp" }
    ],
    githubUrl: "https://github.com/RasmusFranssonHub/grafiska-vektyg"
  },
];

