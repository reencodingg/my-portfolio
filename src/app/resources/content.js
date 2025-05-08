import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Nurazreen",
  lastName: "Saidin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring IT Professional",
  avatar: "/images/avatar.jpg",
  email: "nutzreen@gmail.com",
  location: "Asia/Kuala_Lumpur", // IANA time zone identifier for Rawang, Selangor
  languages: ["English", "Malay"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/reencodingg",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/nurazreen-saidin",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning Data Into Decisions</>,
  featured: {
    display: true,
    title: <>Recent activity: <strong className="ml-4">UM Cybersecurity Summit 2025</strong></>,
    href: "/blog/um-cybersecurity-summit",
  },
  subline: (
    <>
      I'm Azreen, an Information Systems student at University of Malaya, driven by curiosity. I tinker with tech, design with intention, and build what matters.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Azreen is an Information Systems student at the University of Malaya, driven by curiosity to transform 
        complex problems into intuitive, user-centric solutions. Her focus is on bridging technology and design, 
        creating impactful digital experiences and innovative tech solutions.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          {
            id: "fly-1",
            content: <>
              Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
              engagement and 30% faster load times.
            </>
          },
          {
            id: "fly-2",
            content: <>
              Spearheaded the integration of AI tools into design workflows, enabling designers to
              iterate 50% faster.
            </>
          }
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9
          }
        ]
      }
    ]
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Malaya",
        description: <>Bachelor of Information Systems (Honours) Information Systems Engineering</>,
        timeframe: "2022 - Present"
      },
      {
        name: "SMK Seri Garing",
        description: <>Science Stream (Biology)</>,
        timeframe: "2017 - 2021"
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, Java, JavaScript, HTML, CSS</>,
        images: []
      },
      {
        title: "Web Development",
        description: <>React, Next.js, Node.js, Express.js</>,
        images: []
      },
      {
        title: "Database",
        description: <>MySQL, MongoDB, PostgreSQL</>,
        images: []
      },
      {
        title: "Tools & Others",
        description: <>Git, Figma, VS Code, Jira</>,
        images: []
      }
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Activities",
  title: `Activities – ${person.name}`,
  description: `Activities and experiences of ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Work – ${person.name}`,
  description: `Work and projects of ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
};

export { person, newsletter, social, home, about, blog, work };
