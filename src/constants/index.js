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
    uf,
    ipg,
    uhg,
    isa,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    python,
    pytorch,
    java,
    cpp,
    cs,
    dotnet,
    sqlserver,
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Researcher",
      icon: mobile,
    },
    {
      title: "Computer Science & Math Student",
      icon: backend,
    },
    {
      title: "Student Organization Leader",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: cs,
    },
    {
      name: ".NET",
      icon: dotnet,
    },
    {
      name: "SQL Server",
      icon: sqlserver
    },
    {
      name: "Java",
      icon: java,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Researcher",
      company_name: "University of Florida - Computational Reasoning Group",
      icon: uf,
      iconBg: "#F3F3F3",
      date: "Jan 2022 - Nov 2022",
      points: [
        "Optimized learning in a programming course by investigating student characteristics and behaviors.",
        "Developed a statistical model in Python using Pandas, NumPy, Matplotlib, and Seaborn that established a correlation between students' procrastination & their performance in the course (p = 0.0035).",
        "Published results and presented at Koli Calling 2022, an international computing education conference.",
      ],
    },
    {
      title: "IT Security Intern",
      company_name: "Intertape Polymer Group",
      icon: ipg,
      iconBg: "#F3F3F3",
      date: "May 2022 - Aug 2022",
      points: [
        "Managed employees’ cyber safety practices to ensure implementation of cybersecurity standards.",
        "Documented the company’s IT network infrastructure to more efficiently plan for cybersecurity threats.",
        "Constructed application network diagrams using Microsoft Visio.",
      ],
    },
    {
      title: "Director, Freshman Leadership Experience",
      company_name: "University of Florida - Indian Students Association",
      icon: isa,
      iconBg: "#F3F3F3",
      date: "June 2022 - May 2023",
      points: [
        "Helped a cohort of over 150 first-year college students across academic disciplines navigate university life & become student leaders.",
        "Planned and hosted a variety of informative meetings, socials, and profesisonal networking events over the year.",
        "Drove a 50% increase in membership and engagement from the previous year.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "UnitedHealth Group",
      icon: uhg,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Developed and maintained a custom identity and access management product that services 400,000+ employees.",
        "Built backend and database infrastructure to support data flow for new AI feature, streamlining access review process by 50%.",
        "Built and unit/regression tested features for .NET web APIs and console apps using C#, TypeScript, SQL Server, and Postman.",
        "Communicated ideas & suggestions in scrum ceremonies including sprint planning, daily stand-ups, and sprint review."
      ],
    },
    {
      title: "External Vice President",
      company_name: "University of Florida - Indian Students Association",
      icon: isa,
      iconBg: "#F3F3F3",
      date: "May 2023 - Present",
      points: [
        "Managed one of the largest student-run organizations at the University of Florida (over 400 members).",
        "Handled external relations, cultural programs, and event planning (over 1000 attendees).",
      ],
    },
    {
      title: "Machine Learning Researcher",
      company_name: "University of Florida - Smart Medical Informatics Learning & Evaluation Lab",
      icon: uf,
      iconBg: "#F3F3F3",
      date: "Jan 2023 - Present",
      points: [
        "Founded a project to improve deep learning models’ accuracy in Parkinson’s prediction with generative AI data augmentation.",
        "Achieved over 70% base accuracy in Parkinson’s disease prediction from retinal scans with machine learning classifiers.",
        "Distributed training and testing of models in PyTorch using the HiPerGator supercomputer at UF.",
        "Wrote research proposals and supplements to secure over $2,000 in funding for the lab."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
  
  export { services, technologies, experiences, testimonials, projects };