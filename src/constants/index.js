import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sushi,
  mit,
  nagarra,
  codegen,
  rootcode,
  unilever,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Networking opportunities",
    icon: web,
  },
  {
    title: "Job opportunities",
    icon: mobile,
  },
  {
    title: "Industry insights",
    icon: backend,
  },
  {
    title: "Professional Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: nagarra,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const schedule = [
  {
    title: "Day 1 | 25th April",
    company_name: "Computing ",
    icon: mit,
    iconBg: "#383E56",
    date: "25th April 2023",
    points: [
      "MillenniumIT ESP",
      "Nagarro",
      "CodeGen International (Pvt) Ltd",
      "Rootcode",
      "Infomate",
      "Hemas Pharmaceuticals (Pvt) Ltd & Hemas Surgicals & Diagnostics (Pvt) Ltd",
    ],
    logo: [mit, nagarra, codegen, rootcode, ],
  },
  {
    title: "Day 2 | 26th April",
    company_name: "Engineering | Business | Humanity & Sc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "26th April 2023",
    points: [
      "Hemas",
      "Unilever ",
      "Nestle ",
    ],
    logo: [unilever],
  },
];

const testimonials = [
  {
    testimonial:
      "Attending the Career Expo provided me with valuable opportunities for career exploration and networking. As the project manager, I gained experience in event planning and execution. I also secured an opportunity at MAS Holdings as a student participant. Overall, I highly recommend the Career Expo for professional development.",
    name: "Shashini Hewadewa",
    designation: "Executive - Talent Management",
    company: "MAS Holdings",
    image: sushi,
  },
  {
    testimonial:
      "Attending the Career Expo provided me with valuable opportunities for career exploration and networking. As the project manager, I gained experience in event planning and execution. I also secured an opportunity at MAS Holdings as a student participant. Overall, I highly recommend the Career Expo for professional development.",
    name: "Shashini Hewadewa",
    designation: "Executive - Talent Management",
    company: "MAS Holdings",
    image: sushi,
  },
  {
    testimonial:
      "Attending the Career Expo provided me with valuable opportunities for career exploration and networking. As the project manager, I gained experience in event planning and execution. I also secured an opportunity at MAS Holdings as a student participant. Overall, I highly recommend the Career Expo for professional development.",
    name: "Shashini Hewadewa",
    designation: "Executive - Talent Management",
    company: "MAS Holdings",
    image: sushi,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const memories = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
];

export { services, technologies, schedule, testimonials, projects, memories };
