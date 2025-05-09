import { Logo } from "@/once-ui/components";
import { Flex, Tag, Column, Text } from "@/once-ui/components";
import SkillItem from "@/components/SkillItem";
import { baseURL } from "@/app/resources";

const person = {
  firstName: "Nurazreen",
  lastName: "Saidin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring IT Professional",
  avatar: "/images/avatar.jpeg",
  email: "nutzreen@gmail.com",
  location: "Asia/Kuala_Lumpur", // IANA time zone identifier for Rawang, Selangor
  languages: ["English", "Malay"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
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
    link: "https://www.linkedin.com/in/nurazreen-saidin",
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
    link: "https://drive.google.com/file/d/1vBpKbR78krwSCWDqL7sDnX7Lhtk4fnTP/view?usp=sharing",
    label: "View Resume"
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
        description: (
          <>
            Bachelor of Computer Science (Information Systems)
            <br />
            Latest GPA: 3.8
            <br />
            Current CGPA: 3.3
          </>
        ),
        timeframe: "Oct 2023 - Present"
      },
      {
        name: "University of Malaya",
        description: (
          <>
            Foundation in Life Sciences
            <br />
            CGPA: 3.78
            <br />
            Dean's List Award for Semester 2
            <br />
            Muet Band: 4.5
          </>
        ),
        timeframe: "Aug 2022 - Jun 2023"
      },
      {
        name: "MRSM Tun Ghafar Baba",
        description: (
          <>
            Science
            <br />
            SPM: 3A+ 6A
            <br />
            Young Teacher: Chemistry, Physics, Mathematics
          </>
        ),
        timeframe: "Jan 2020 - Apr 2022"
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <Flex wrap gap="12" style={{ marginTop: '16px' }}>
            <SkillItem icon="/images/skills/java.svg" name="Java" level="Intermediate" />
            <SkillItem icon="/images/skills/python.svg" name="Python" level="Intermediate" />
            <SkillItem icon="/images/skills/sql.svg" name="SQL" level="Intermediate" />
            <SkillItem icon="/images/skills/cpp.svg" name="C++" level="Basic" />
          </Flex>
        ),
        images: []
      },
      {
        title: "Web & App Development",
        description: (
          <Flex wrap gap="12" style={{ marginTop: '16px' }}>
            <SkillItem icon="/images/skills/android-studio.svg" name="Android Studio" level="Intermediate" />
            <SkillItem icon="/images/skills/firebase.svg" name="Firebase" level="Intermediate" />
            <SkillItem icon="/images/skills/javascript.svg" name="JavaScript" level="Intermediate" />
            <SkillItem icon="/images/skills/flutter.svg" name="Flutter" level="Basic" />
          </Flex>
        ),
        images: []
      },
      {
        title: "UI/UX & Design Tools",
        description: (
          <Flex wrap gap="12" style={{ marginTop: '16px' }}>
            <SkillItem icon="/images/skills/figma.svg" name="Figma" level="Proficient" />
            <SkillItem icon="/images/skills/illustrator.svg" name="Adobe Illustrator" level="Intermediate" />
            <SkillItem icon="/images/skills/canva.svg" name="Canva" level="Proficient" />
          </Flex>
        ),
        images: []
      },
      {
        title: "Tools & Platforms",
        description: (
          <Flex wrap gap="12" style={{ marginTop: '16px' }}>
            <SkillItem icon="/images/skills/git.svg" name="Git" level="Intermediate" />
            <SkillItem icon="/images/skills/aws.svg" name="AWS" level="Basic" />
            <SkillItem icon="/images/skills/word.svg" name="Microsoft Word" level="Proficient" />
            <SkillItem icon="/images/skills/excel.svg" name="Microsoft Excel" level="Intermediate" />
          </Flex>
        ),
        images: []
      },
      {
        title: "Concepts & Methodologies",
        description: (
          <Flex wrap gap="12" style={{ marginTop: '16px' }}>
            <SkillItem name="OOP" level="" />
            <SkillItem name="Data Structures" level="" />
            <SkillItem name="Networking" level="" />
            <SkillItem name="Agile Methodologies" level="" />
          </Flex>
        ),
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
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects and portfolio of ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
};

export { person, newsletter, social, home, about, blog, work, contact };
