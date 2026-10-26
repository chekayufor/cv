import avatar from "../images/profile-avatar.png";
import logoNess from "../images/logoNess.jpeg";
import logoElectro from "../images/logoElectroinginiring.png";
import logoPotato from "../images/logoPotatoHouse.png";
import logoDiit from "../images/logodiit.png";

export const profile = {
  name: "Elena Dubinsky",
  headline:
    "Head of Digital Analytics | Digital Strategy Consultant | Digital Transformation & AI Integration | Digital Analytics Mentor & Trainer | Leadership Development | Banking",
  roles: [
    "Head of Digital Analytics",
    "Digital Strategy Consultant",
    "AI Product Strategist",
    "Full Stack Developer"
  ],
  tagline:
    "Turning data, AI and strong product thinking into digital experiences that move the needle.",
  location: "Tel Aviv District, Israel",
  avatar,
  linkedinUrl: "https://www.linkedin.com/in/elena-dubinsky-bb5b39122",
  linkedinActivityUrl:
    "https://www.linkedin.com/in/elena-dubinsky-bb5b39122/recent-activity/all/",
  email: "dubinsky.cv@gmail.com",
  phone: "+972-58-783-8377"
};

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "6+", label: "Years at Ness Technologies" },
  { value: "4", label: "Languages spoken" }
];

export const about = [
  "I am a digital analytics leader, AI product strategist and professional Full Stack Developer with more than 15 years of experience in business analysis, project management and digital product development. I hold master's degrees in Civil Engineering and Economics, with a specialization in Banking. This background gives me strong analytical skills and a deep understanding of both technology and business. It helps me connect business goals, customer needs, data and technical solutions.",
  "Today, I lead a Digital Analytics department and advise some of Israel's largest enterprises, including banks, insurance companies and government organizations. I help organizations improve digital products, customer experience, analytics and business strategy. I work closely with product, UX, development and business teams. I analyze user behavior, identify growth opportunities and turn data into clear and practical recommendations. I also support digital strategy, product decisions, content and campaign optimization, and performance measurement.",
  "My technical background as a Full Stack Developer allows me to understand the full product development process, from business requirements and UX to architecture, development and implementation. This helps me communicate effectively with technical teams and turn business ideas into realistic digital solutions. I also work with AI Product Strategy and AI integration — identifying where AI can create real business value, defining practical AI use cases and connecting AI solutions with product, customer and business needs.",
  "I manage and mentor multidisciplinary teams and enjoy helping people grow professionally. I am known for my can-do attitude, fast learning and ability to explain complex topics in a simple way. My goal is to help organizations combine data, AI, technology and strong product thinking to build better digital experiences and achieve measurable business results."
];

// Experience is grouped by company, the way LinkedIn displays consecutive
// roles held at the same employer.
export const experience = [
  {
    company: "Ness Technologies",
    logo: logoNess,
    totalDuration: "6 yrs 4 mos",
    roles: [
      {
        title: "Head of the Digital Analytics Department",
        period: "Oct 2025 - Present",
        duration: "1 yr 1 mo",
        location: "Tel Aviv District, Israel",
        bullets: [
          "Leading the Digital Analytics domain across multiple enterprise clients and internal teams.",
          "Managing a multidisciplinary team of analysts and consultants, responsible for end-to-end digital insights delivery — from data collection architecture and product analytics to UX optimization and business decision support.",
          "Driving strategic use of analytics platforms (Glassbox, GA4, Power BI, and custom dashboards) to improve conversion, retention, and customer experience KPIs.",
          "Collaborating with senior management, sales, and R&D to scale the analytics function as a business growth engine.",
          "Define and implement digital analytics strategy across clients and products.",
          "Manage and mentor a team of analysts, ensuring high-quality deliverables.",
          "Lead analytics innovation: automation, segmentation, and predictive analysis.",
          "Partner with product and UX teams to translate data into actionable insights.",
          "Represent Ness in strategic discussions with clients and executives."
        ]
      },
      {
        title: "Digital Consultant / Business Product Analyst and Team Leader",
        period: "Nov 2021 - Oct 2025",
        duration: "4 yrs",
        location: "Tel Aviv District, Israel",
        bullets: []
      },
      {
        title: "Digital Analyst / Business product analyst",
        period: "Mar 2021 - Oct 2025",
        duration: "4 yrs 8 mos",
        location: "Tel Aviv District, Israel",
        bullets: []
      }
    ]
  },
  {
    company: "GlassBox",
    logo: null,
    roles: [
      {
        title: "New Product Introduction Specialist",
        period: "Jul 2020 - Mar 2021",
        duration: "9 mos",
        location: "Tel Aviv District, Israel",
        bullets: ["Customer support and training for ERP."]
      }
    ]
  },
  {
    company: "Freelance (Self-employed)",
    logo: null,
    roles: [
      {
        title: "Web Developer (Full Stack)",
        period: "Jan 2018 - Nov 2021",
        duration: "3 yrs 11 mos",
        location: "Tel Aviv District, Israel",
        bullets: ["Web sites development (Full Stack)."]
      }
    ]
  },
  {
    company: "Electroengeniring",
    logo: logoElectro,
    roles: [
      {
        title: "Head of Logistics and Product Innovation Integration",
        period: "Feb 2008 - Feb 2016",
        duration: "8 yrs 1 mo",
        location: "Ukraine",
        bullets: [
          "Managed logistics, procurement, inventory, business analysis and internal processes.",
          "Managed suppliers, purchasing, stock and deliveries.",
          "Performed business analysis and identified process improvement opportunities.",
          "Worked with ERP systems, reports and business requirements.",
          "Analyzed sales, inventory and financial data.",
          "Coordinated work between sales, logistics, finance and suppliers.",
          "Prepared management reports and supported business decisions.",
          "Trained employees and supported ERP users.",
          "Helped improve and automate business processes."
        ]
      }
    ]
  },
  {
    company: "Restaurant POTATO'S HOUSE",
    logo: logoPotato,
    roles: [
      {
        title: "Project Manager",
        period: "Dec 2003 - Jan 2008",
        duration: "4 yrs 2 mos",
        location: "Ukraine",
        bullets: [
          "Managed restaurant launch projects from planning to opening.",
          "Managed new restaurant openings and coordinated all project stages.",
          "Worked with contractors and suppliers, including contracts, budgets and quality control.",
          "Managed project finances and monitored costs.",
          "Prepared financial reports and analyzed business performance.",
          "Coordinated equipment purchasing, construction and operational readiness.",
          "Recruited employees and supported team setup for new locations.",
          "Identified operational issues and improved processes."
        ]
      }
    ]
  }
];

export const education = [
  {
    school: "Udacity",
    logo: null,
    degree: "Industrial and Product Design",
    period: "Mar 2022 - Jun 2022"
  },
  {
    school: "Netcraft Academy",
    logo: null,
    degree: "Full Stack Development, React",
    period: "2019"
  },
  {
    school: "she codes;",
    logo: null,
    degree: "Frontend Developer",
    period: "2018"
  },
  {
    school:
      "Dnipropetrovsk National University of Railway Transport, named after academician V. Lazaryan",
    logo: logoDiit,
    degree: "Specialist, Economist, Auditor, Finance Analyst",
    period: "2001 - 2003"
  },
  {
    school:
      "Dnipropetrovsk National University of Railway Transport, named after academician V. Lazaryan",
    logo: logoDiit,
    degree: "Specialist, Civil Engineer",
    period: "1998 - 2003"
  }
];

export const topSkills = [
  "Marketing Automation & CRM",
  "Conversion & UX Optimization",
  "Product & Business Analysis",
  "Data Visualization & Programming"
];

export const tools = [
  "GA4",
  "Power BI",
  "Glassbox",
  "React",
  "Full Stack Development",
  "Python"
];

export const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Ukrainian", level: "Full Professional" },
  { name: "Russian", level: "Native or Bilingual" },
  { name: "Hebrew", level: "Full Professional" }
];

export const certifications = [
  "Introduction to Python for Data Science",
  "Course React Front To Back (2019)",
  "Digital Marketing Foundations"
];

export const publications = [
  "Presentation of my personal website at the SheCodes congress"
];

// TODO: Add your LinkedIn posts from the last two weeks here.
// Each post needs: date, text (excerpt is fine) and the direct link to the
// post on LinkedIn so visitors can open it there.
// Example shape:
// {
//   date: "October 14, 2026",
//   text: "Excited to share that our team just launched a new analytics dashboard...",
//   url: "https://www.linkedin.com/posts/elena-dubinsky-bb5b39122_activity-123456789-abcd"
// }
export const posts = [];
