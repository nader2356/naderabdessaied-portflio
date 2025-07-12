import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nader Abdessaied",
  initials: "RF",
  url: "https://chaima.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Développeur Web Full-Stack ",
  summary:
    "Développeur full-stack titulaire d'un diplôme d'ingénieur logiciel et doté d'une expertise reconnue dans la création d'applications web hautes performances. Maîtrisant Python, Angular, je maitrise aussi  dans l'extraction de données avancées et les systèmes d'intégration sécurisés. Mon expérience couvre tout ce qui est JavaScript ou TypeScript, l'optimisation de bases de données et le déploiement évolutif à l'aide d'outils modernes. Passionné et rigoureux, je m'épanouis dans des environnements dynamiques et stimulants et m'engage à promouvoir l'innovation numérique.",
  avatarUrl: "/DSC_1271.jpg",
  skills: [
    "Python",
    "ReactJS",
    "NodeJS",
    "VueJS",
    "Java",
    "JEE",
    "Spring Boot",
    "MongoDB",
    "RESTful API",
    "NextJS",
    "NestJS",
    "MySQL", 
    "Angular",
    "JavaScript", 
    "Typescript", 
    "HTML5", 
    "CSS3", 
    "Bootstrap", 
    "Wordpress",
    "Php",
    "Git&GitHub", 
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "naderabdessaied8@gmail.com",
    tel: "+216 50 409 085",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nader2356",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nader-abdessaied-952bb9177/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [

     {
      company: "GPRO Consulting",
      href: "",
      badges: [],
      location: "On-site",
      title: "Déveloper Fullstack Web ",
      logoUrl: "GPRO Consulting",
      start: "Juillet 2024",
      end: "aujourd'hui",

    },

     {
      company: "Billcom Consulting",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Déveloper Fullstack Web",
      logoUrl: "/Biilcom Consulting.jpg",
      start: "mai 2023",
      end: "Jui 2024",
      
    },

    {
      company: "Devokt",
      href: "",
      badges: [],
      location: "On-site",
      title: " Déveloper Fullstack Web",
      logoUrl: "/Devokt.png",
      start: "Juillet 2023",
      end: "avril 2023",
    },

   

   
  ],


  education: [
    {
      school: "École Pluridisciplinaire de Sousse (EPI)",
      href: "https://isetso.rnu.tn/",
      degree: "Licence applique en développement web et multimédia",
      logoUrl: "/téléchargement.jpeg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Institut Supérieur des Études Technologiques de Sousse (IsetSo)",
      href: "https://www.episup.com/fr",
      degree: "Ingénierie logicielle",
      logoUrl: "/1280px-Logo_EPI_Sousse.png",
      start: "2020",
      end: "2023",
    },

  ],



  projects: [
     {
      title: "Grattoir à voiture",
      href: "https://www.autoprix.tn",
      dates: "Jan 2024 - jun 2024",
      active: true,
      description: "Nous avons conçu une solution robuste qui automatise la récupération des voitures et ces details sur plusieurs sites et intègre parfaitement les données à une plateforme personnalisée avec MySQL. Doté d'une interface de configuration basée sur ReactJS, d'une sécurité LDAP et d'une automatisation des tâches cron nocturnes, ce projet est déployé sur un VPS évolutif utilisant Gunicorn et Nginx..",    
  technologies: [
        "Python",
        "Flask",
        "Angular",
        "MySQL",
        "Gunicorn",
        "Nginx",
      ],
      links: [
        {
          type: "Website",
          href: "http://213.130.144.156/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/jobScrapDemo.mp4",
    },



     {
      title: "leboncoin",
      href: "https://www.leboncoin.fr",
      dates: "Janvier 2024 - Mai 2024",
      active: true,
      description: "",
      technologies: [
        "ReactJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.leboncoin.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Captureleboncoin.png",
      video: "",
    },


     {
      title: "site workly",
      href: "https://workly.io/en",
      dates: "Juin 2024 - Novembre 2024",
      active: true,
      description: "",
      technologies: [
        "ReactJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://workly.io/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CaptureWorkly.png",
      video: "",
    },



    {
      title: "site Elzei Portage ",
      href: "https://elzei-uat.esy.es",
      dates: "Décembre 2024 - Juin 2025",
      active: true,
      description: "",
      technologies: [
        "ReactJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://elzei-uat.esy.es",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/elzeiPortageWebsite.png",
      video:
        "",
    },


  


  ],


  hackathons: [
   
    {
      title: "Coursera - Introduction to DevOps",
      dates: "Sep 2024",
      location: "",
      description: "Completed the 'Introduction to DevOps' course on Coursera, covering key concepts such as CI/CD, automation, infrastructure as code (IaC), monitoring, and collaboration between development and operations teams.",
      image: "/coursera-logo.png",
      win: "",
      mlh: "",
      links: [
  
      ],
    },


    {
      title: "Machine Learning Bootcamp Certification",
      dates: "Jan 2022", 
      location: "IEEE ISSAT Sousse Student Branch",
      description: "Certified for participating in the Machine Learning Bootcamp Weekend, covering fundamental concepts and practical applications of machine learning.",
      image: "/ieee.jpg", 
      mlh: "",
      links: [
        
      ],
    },

    {
      title: "Microsoft Club Web Development Certification",
      dates: "2021",
      location: "Microsoft ISSAT Sousse Student Club",
      description: "Certified for completing a year-long training on web development fundamentals, including HTML, CSS, and JavaScript, organized by the Microsoft Student Club.",
      image: "/mic.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },

  ],



  clubs: [

    {
      name: "ARSII  - EPI Sousse",
      description: "",
      logoUrl: "/ARSII.jpg",
      start: "2020",
      end: "2022",
      role: "Member",
      
    },

    {
      name: "Google Developer Student Clubs - ISSET Sousse",
      description: "",
      logoUrl: "/gdsc.png",
      start: "2017",
      end: "2018",
      role: "Member",
      
    },

  ],
} as const;

