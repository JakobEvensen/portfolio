export const profile = {
  name: "Jakob Evensen",
  role: "Currently | IT-student at OsloMet",
  headline: "Jakob Evensen",
  intro:
    "I am building a strong foundation in software development, system development, databases and cloud technologies with a focus on continuous learning and growth.",
  imageAlt: "Jakob Evensen",
  availability: "Available for opportunities",
};

export const heroStats = [
  { value: "03", label: "Featured builds" },
  { value: "Cloud", label: "Growing interest" },
  { value: "2026", label: "Portfolio updated" },
];

export const projects = [
  {
    title: "Amesto Aces Customer Portal",
    slug: "amesto-aces-customer-portal",
    category: "Bachelor's project / Full-stack development",
    year: "2026",
    description:
      "A customer portal for Amesto Aces built to present candidates in a more professional and structured way for business customers. A bachelor's project developed in collaboration with three other students.",
    impact:
      "Gained experience in full-stack development, user experience design, and collaborative project management.",
    stack: [".NET", "C#", "Deployment", "Collaboration", "Group project"],
    websiteLink: "",
    githubLink: "",
    accessNote: "Code and live access are private due to confidentiality.",
    accent: "from-emerald-300 to-teal-500",
    details: {
      overview:
        "This project was developed as a bachelor's project in collaboration with Amesto Aces. The goal was to explore how a customer portal could make candidate presentation more structured, professional and useful for business customers.",
      role:
        "I contributed as part of a student team where we worked together on planning, user testing and shaping the solution around real client needs. My main technical contribution was backend API development and database work.",
      learned:
        "I learned more about working in a team on a larger project, translating customer needs into practical features, planning development work and understanding how frontend, backend and deployment choices fit together in a full solution.",
      challenges:
        "A key challenge was balancing ambition with the time and scope of a bachelor project, especially while working with a real company context and confidentiality limitations.",
      improvements:
        "If I continued the project, I would focus on improving the candidate presentation flow, strengthening user feedback loops and refining the technical structure for long-term maintainability.",
      screenshots: [
        {
          src: "/project-images/amestoLanding.png",
          alt: "Amesto Aces landing page",
          caption: "Initial landing page for the customer portal.",
        },
        
        {
          src: "/project-images/amestoPlanning_1.png",
          alt: "Planning view",
          caption: "Initial planning and design phase for the customer portal using Figma.",
        },
        {
          src: "/project-images/amestoPlanning_2.png",
          alt: "Planning view",
          caption: "Further planning and design iterations for the customer portal using Figma.",
        },
        {
          src: "/project-images/amestoFlowchart.png",
          alt: "Admin flowchart",
          caption: "Flowchart outlining the admin user flow for managing candidates and customer interactions.",
        },
      ],
    },
  },
  {
    title: "Cypher Translator",
    slug: "cypher-translator",
    category: "Utility / coursework tool",
    year: "2025",
    description:
      "An encoder and decoder for classical ciphers, created to get a clean, ad-free tool for coursework and repeat use.",
    impact:
      "A recurring challenge during studying turned into a practical tool while practicing structure, logic and deployment.",
    stack: ["React", "JavaScript", "Deployment", "Problem solving"],
    websiteLink: "https://ciphertranslator.netlify.app",
    githubLink: "https://github.com/JakobEvensen/cipher-translator.git",
    accent: "from-cyan-300 to-blue-500",
    details: {
      overview:
        "Cypher Translator started as a practical study tool. I wanted a simple place to encode and decode classical ciphers without ads, clutter or unnecessary friction.",
      role:
        "I built the project independently, including the interface, cipher logic, testing through manual examples and deployment.",
      learned:
        "I practiced quickly developing a tool to solve a specific problem. ",
      challenges:
        "The main challenge was making the UI flexible enough for different ciphers while keeping the user experience as simple and straightforward as possible.",
      improvements:
        "Future improvements could include more cipher types, clearer examples, better validation and a small explanation section for how each cipher works.",
      screenshots: [
        {
          src: "/project-images/caesarCipher.png",
          alt: "Caesar cipher interface",
          caption: "Logic for encoding and decoding Caesar ciphers.",
        },
        {
          src: "/project-images/vigenereCipher.png",
          alt: "Vigenère cipher interface",
          caption: "Logic for encoding and decoding Vigenère ciphers.",
        },
      ],
    },
  },
  {
    title: "UnionPizza.no",
    slug: "unionpizza",
    category: "Course project / systems practice",
    year: "2025",
    description:
      "A course project for Union Pizza Drammen focused on presenting the restaurant clearly and designing around real customer needs.",
    impact:
      "Learned project planning, customer-focused thinking and the basics of full-stack development.",
    stack: ["Frontend", "Project planning", "Customer needs", "Full-stack basics", "OsloMet"],
    websiteLink: "https://unionpizza.no",
    githubLink: "https://github.com",
    accent: "from-emerald-300 to-teal-500",
    details: {
      overview:
        "UnionPizza.no was a course project built around a real restaurant context. The project focused on presenting key information clearly and understanding what customers would need from the solution.",
      role:
        "I worked this project alone so i did everyting from planning to coding every individual line. I also gained exposure to how a broader full-stack solution could be planned.",
      learned:
        "I learned more about understanding customer needs, planning a project, making design decisions for real users and connecting frontend work to a broader system idea.",
      challenges:
        "One challenge was deciding what the project should include and what should be left out. We explored an ordering system, but the scope changed due to in-store hardware limitations so the final work focused more on presentation and customer information.",
      improvements:
        "If I revisited the project, I would improve the content structure, polish the mobile experience and make the project scope clearer from the beginning.",
      screenshots: [],
    },
  },
];

export const skillGroups = [
  {
    title: "Software foundations",
    description: "Core programming, problem solving and readable implementation across different technologies.",
    skills: ["Java", "Python", "JavaScript", "C#", ".NET", "Git"],
  },
  {
    title: "Systems and data",
    description: "Practical foundations for databases, application structure and maintainable technical workflows.",
    skills: ["SQL", "Databases", "System design", "APIs", "Data modeling", "Documentation"],
  },
  {
    title: "Cloud direction",
    description: "Developing interest in cloud computing, deployment, infrastructure and reliable services.",
    skills: ["Cloud concepts", "Deployment", "Networking basics", "Security basics", "Testing basics"],
  },
];

export const education = [
  {
    degree: "Bachelor's degree in Information Technology",
    school: "OsloMet - Oslo Metropolitan University",
    period: "2023 - 2026",
    status: "Final year",
    description:
      "Currently completing a bachelor's degree focused on software development, databases, systems and practical IT project work.",
  },
];

export const certifications = [
  {
    title: "Cloud certification",
    provider: "Planned",
    status: "Upcoming",
    timeline: "2026",
    description:
      "Planning to pursue a foundational cloud certification to strengthen knowledge of cloud services, infrastructure and deployment practices.",
  },
  {
    title: "Security or networking fundamentals",
    provider: "Exploring options",
    status: "Researching",
    timeline: "Next step",
    description:
      "Interested in building a stronger base in the concepts that support reliable cloud systems, including networking and security fundamentals.",
  },
];

export const contact = {
  email: "jakob.evensen@icloud.com",
  linkedin: "https://www.linkedin.com/in/jakob-evensen-27229529b",
  location: "Oslo / Drammen, Norway",
  focus: "Software development, systems, databases and cloud computing",
  headline: "Looking for a developer who's curious, driven, and ready to grow?",
  pitch:
    "I am open to internships, junior developer opportunities and technical environments where I can keep growing across software engineering, systems and cloud computing.",
};
