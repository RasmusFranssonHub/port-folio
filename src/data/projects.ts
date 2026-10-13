import offertorImage from "../assets/pictures/offertor/offertorImage.png";
import backOfficeImage from "../assets/pictures/back-office/backOfficeImage.png";
import juniperImage from "../assets/pictures/juniper/juniperImage.png";
import aiSvgLabImage from "../assets/pictures/ai-svg-lab/aiSvgLabImage.png";
import bookApiImage from "../assets/pictures/book-api/bookAPIImage.png";
import gbImage from "../assets/pictures/gb/GBImage.png";

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
  technologies: string[];
  about: string;
  role: string;
  process: string;
  gallery: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "offertor",
    number: "01",
    title: "Offertor",
    description: "En webbapplikation för offerthantering.",
    image: offertorImage,
    alt: "Förhandsvisning av Offertor",
    technologies: ["React", "TypeScript"],
    about: "Beskriv projektets syfte och vilken målgrupp det riktar sig till.",
    role: "Beskriv din roll och vad du själv utvecklade.",
    process: "Beskriv arbetsprocessen, utmaningarna och hur du löste dem.",
    gallery: [],
  },
  {
    slug: "back-office",
    number: "02",
    title: "Back-office",
    description: "Ett gränssnitt för administration och hantering.",
    image: backOfficeImage,
    alt: "Förhandsvisning av Back-office",
    technologies: ["React", "TypeScript"],
    about: "Beskriv vad projektet används till.",
    role: "Beskriv ditt ansvar i projektet.",
    process: "Beskriv hur du byggde lösningen och vilka problem du löste.",
    gallery: [],
  },
  {
    slug: "juniper",
    number: "03",
    title: "Juniper",
    description: "En digital presentation av produkter.",
    image: juniperImage,
    alt: "Produktpresentation för Juniper",
    technologies: ["React", "CSS"],
    about: "Beskriv konceptet och vad webbplatsen ska uppnå.",
    role: "Beskriv vad du ansvarade för.",
    process: "Beskriv designarbetet och den tekniska lösningen.",
    gallery: [],
  },
  {
    slug: "ai-svg-lab",
    number: "04",
    title: "AI SVG Lab",
    description: "Ett projekt med fokus på AI och SVG.",
    image: aiSvgLabImage,
    alt: "Förhandsvisning av AI SVG Lab",
    technologies: ["TypeScript", "API"],
    about: "Beskriv projektets funktion och syfte.",
    role: "Beskriv vilka delar du utvecklade.",
    process: "Beskriv hur AI eller SVG används och vilka utmaningar du mötte.",
    gallery: [],
  },
  {
    slug: "book-api",
    number: "05",
    title: "Book API",
    description: "Ett projekt för att arbeta med bokdata via ett API.",
    image: bookApiImage,
    alt: "Förhandsvisning av Book API",
    technologies: ["TypeScript", "REST API"],
    about: "Beskriv API:ets funktion och vilken data det hanterar.",
    role: "Beskriv vad du byggde och implementerade.",
    process: "Beskriv hur API-anrop, datahantering och eventuell felhantering fungerar.",
    gallery: [],
  },
  {
    slug: "gb",
    number: "06",
    title: "GB",
    description: "En digital kampanj eller presentation för GB.",
    image: gbImage,
    alt: "Förhandsvisning av GB-projektet",
    technologies: ["JavaScript", "CSS"],
    about: "Beskriv projektets mål och tänkta användare.",
    role: "Beskriv din insats i projektet.",
    process: "Beskriv hur du arbetade med design och utveckling.",
    gallery: [],
  },
];
