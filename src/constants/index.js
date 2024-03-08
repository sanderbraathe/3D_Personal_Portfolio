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
    braathe,
    NTNU,
    forsvaret,
    portrett,
    portrettAI,
    copilot,
    obos,
    linkedIN,
    linkedINlogo,
    linked,
    github,
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Digital Transfromation & Project Managment ",
      icon: backend,
    },
    {
      title: "AI-Strategy for Business value",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
  
  const experiences = [
    {
      title: "Board Memeber",
      company_name: "Housing association Klaebuveien 47-49",
      icon: obos,
      iconBg: "#ffffff",
      date: "August 2022 - Present",
      points: [
        "Active Budget Oversight and Expense Monitoring: Participate in budget planning, review expenses, and identify cost-saving opportunities while ensuring alignment with association goals.",
        "Strategic Decision-Making: Actively participate in shaping theassociation’s strategic direction, ensuring effective governanceand long-term planning.",
        "Implementing infrastructure projects: In my time we have upgraded to wired-network connection, switched to a more cost-effective provider. We are currently renewing our fire-installation.",
        "Tenant Support and Growth: I collaborate with fellow boardmembers to enhance tenant experiences, address challenges,and contribute to the association’s growth and well-being.",
      ],
    },
    {
      title: "BS.c Digital Business-development",
      company_name: "Norges teknisk-naturvitenskapelige universitet-NTNU",
      icon: NTNU, 
      iconBg: "#FFFFFF",
      date: "Aug 2021 - Aug 2024 ",
      points: [
        "Bachelor degree that combines subjects in informatics, economics & managment in their teching and cources.",
        "Under this section I have developed some 3D-balls representing technologies I have encoutered during my 3 years at NTNU."
      ], 
    },
    {
      title: "IT-Support Agent",
      company_name: "Braathe AS",
      icon: braathe,
      iconBg: "#FFFFFF",
      date: "Feb 2021 - May 2021",
      points: [
        "Delivered technical support: Provided prompt assistance to clients via phone, email, and in-person, resolving software and hardware issues effectively.",
        "Remote Control: Ensured smooth user support of systems by troubleshooting issues and maintaining proper documentation in our support system. I used TeamViewer and Kaseya as tools for remote control.",
      ],
    },
    {
      title: "Norwegian Military Service",
      company_name: "Norwegian Armed Forces",
      icon:forsvaret,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Jan 2021",
      points: [
        "Served as a Frontier-Guard at the Norwegian border on behalf of 'Jegerbataljonen GSV'. This is the border where Norway, Finland & Russia meets.",
        "Completed all requirements for a norwegian soldier to serve and assert Norwegian sovereignty on the border.",
        "I was educated as a patrol member in a team of 4, with the resposibility for all communication tools in service, and in combat-training.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Testimonials and references will be provided when asked for.",
      name: "Sander Aune Braathe",
      designation: "Student",
      company: "NTNU",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
      image: portrett,
    },
    {
      testimonial:
      "Testimonials and references will be provided when asked for.",
      name: "Sander Aune Braathe",
      designation: "Student",
      company: "NTNU",
      image: portrett,
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Testimonials and references will be provided when asked for",                                  
      name: "Sander Aune Braathe",
      designation: "Student",
      company: "NTNU",
      image: portrett
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Draft Landing-page",
      description:
        "Draft for a landing page for Braathe AS in connection with the launch of MS Copilot. I utilized the companys own typography, logos and color combinations. I used React.js and TailwindCss- both of wich they had not used before- in my sketch proposal.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: copilot,
      source_code_link: "https://prosjektcopilot.com/",
    },
    {
      name: "3D Portfolio",
      description:
        "Check how I created this 3D Portfolio-website, that uses grapichs and animations to bring your personal portfolio to life.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/sanderbraathe?tab=repositories",
    },
    {
      name: "Your project?",
      description:
        "Eager to develop more experience and participate in Real World Projects. Click on top-right icon for my linkedIn profile.",
      tags: [
        {
          name: "???",
          color: "blue-text-gradient",
        },
        {
          name: "???",
          color: "green-text-gradient",
        },
        {
          name: "???",
          color: "pink-text-gradient",
        },
      ],
      image: linked,
      source_code_link: "https://www.linkedin.com/in/sander-aune-braathe-853948207/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };