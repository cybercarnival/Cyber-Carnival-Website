import cyberconclave from "../assets/cyberConclave.png";
import ctf from "../assets/ctf.png";
import cyberthon from "../assets/Cyberthon.png";
import paperpresentation from "../assets/paperpresentation.png";
import bugbounty from "../assets/bugbounty.png";
import techexpo from "../assets/techexpo.png";
import startup from "../assets/startup.png";
import freefire from "../assets/freefire.png";
import cinema from "../assets/cinema.png";
import surfing from "../assets/surfing.png";
import awareness from "../assets/awareness.png";
import surviva from "../assets/surviva.png";

export const data = {
  cyberconclave: {
    title: "Cyber Conclave",
    title_font: "font-orbitron",
    title_size: "text-3xl",
    description:
      "Dive into the Details of leading experts converging in a panel discussion",

    brief:
      "At the Cyber Conclave, leading experts converge in a dynamic panel discussion, offering a comprehensive dive into the intricate details of cybersecurity. This exclusive event brings together thought leaders, industry pioneers, and tech innovators to explore emerging trends, best practices, and pressing challenges facing the digital landscape.",
    brief2:
      "In today’s digital age, the proliferation of online scams and cyber threats poses a significant risk to individuals and organizations alike. The alarming rise in these incidents has sparked a pressing need for robust discussions and actionable strategies among professionals across various sectors. To address these challenges, we invite you to participate in the upcoming",
    poster: cyberconclave,
    url: "cyberconclave",
    speakers: [
      ["Name", "Designation"],
      ["Name", "Designation"],
      ["Name", "Designation"],
    ],
    eventDetails: {
      time: "8 AM - 9:30 AM",
      date: "21 FEB 2025",
      fees: "50 per head",
      seats: "200 seats",
    },
    discussion: [
      "Unmasking online scams and strengthening adequate cyber defenses",
    ],
  },

  capturetheflag: {
    title: "Capture The Flag",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "Unmasking Online Scams and Strengthening Cyber Defenses focuses on the urgent need to counter the rising tide of cyber threats and scams affecting individuals and organizations. This year’s Cyber Conclave will bring together experts to discuss strategies for enhancing cybersecurity through advanced threat detection, multi-layered defenses, and comprehensive awareness programs to build a safer digital ecosystem.",
    brief2:
      "A Capture the Flag (CTF) is a game designed to challenge participant's hacking skills, problem-solving abilities, and knowledge of security. In these competitions, teams must solve a series of challenges, each of which contains hidden flags that participants need to find and submit to earn points.",
    poster: ctf,
    url: "capturetheflag",
    facultyCoordinator: ["Dr.Surendar", "Dr.Sujatha"],
    studentCoordinator: [
      "Anshul Bagchi - +91 82729 41906",
      "Adhish Mehta - +91 62663 62445",
    ],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "180 seats",
    },
    rules: [
      " A team can consist of 1 to 3 members.",
      "Solve as many challenges as possible within the given time frame.",
      "The CTF is based on 5 different domains, with each domain with questions ranging from easy to hard difficulty",
      "Flags are worth different points based on the difficulty of the question.",
      "Sharing flags with other teams is strictly prohibited",
      "Teams which are found engaging in unfair means will be disqualified.",
    ],
  },

  cyberthon: {
    title: "Cyberthon",
    title_font: "font-jersey",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: cyberthon,
    url: "cyberthon",
    facultyCoordinator: [
      "Dr.Minu",
      "Dr.Subashka Ramesh",
      "Dr.Antony Vigil",
      "Dr.Sudhan",
      "Mr.Hariharan",
    ],
    studentCoordinator: [
      "Abdul Aleem - +91 9150738865",
      "Pranav Anand - +91 63693 38337",
    ],
    eventDetails: {
      time: "10AM - 11AM",
      date: "24 Jan - 25 Jan 2025",
      fees: "750 per team",
      seats: "200 seats",
    },
    rules: [
      "Each team must consist of 2 to 4 members.",
      "Changes in team members are not entertained.",
      "The project must be developed entirely during the event. Pre-existing projects or partial work will lead to disqualification.",
      "Teams are required to bring their own laptops, devices, and accessories for development.",
      "Any team found to be violating the rules, including inappropriate behavior or unethical practices, will be disqualified.",
      "Decisions made by the organizing committee are final.",
      "All projects developed during the hackathon remain the intellectual property of the respective teams, but the organizers reserve the right to showcase the projects for promotional purposes.",
    ],
  },

  paperpresentation: {
    title: "Paper Presentation",
    title_font: "font-jersey",
    title_size: "text-4xl",
    description:
      "Unveil Innovations, Elevate Ideas: Where Knowledge Meets Discovery!",

    brief:
      "Join us for an enlightening event where innovation meets academia! The Research Paper Presentation is a platform for students, professionals, and researchers to showcase their latest research and ideas in the fields of technology, cybersecurity, data science, and beyond.",
    brief2:
      "Paper Presentation encourages the exploration of cutting-edge topics, fostering a collaborative environment for sharing knowledge and receiving valuable feedback. Whether you're a seasoned researcher or a budding enthusiast, this is the perfect stage to discuss groundbreaking concepts, refine your research skills, and gain recognition for your work.",
    poster: paperpresentation,
    url: "paperpresentation",
    facultyCoordinator: ["Dr.Sabitha", "Dr.Gowri"],
    studentCoordinator: [
      "Jandhyala Venkata - +91 9444025334",
      "Alton D Almeida - +91 93804 68719",
    ],
    eventDetails: {
      time: "10AM - 11AM",
      date: "21st Feb 2025",
      fees: "300 per team",
      seats: "80 SEATS",
    },
    rules: [
      "Submit the Full Paper in IEEE format. It should not exceed 4 pages.",
      "Paper must be an original work and not previously submitted in any platform.",
      "Team size can be minimum of 1 and maximum of 4 members.",
    ],
  },

  bugbounty: {
    title: "Bug Bounty",
    title_font: "font-rubik",
    title_size: "text-4xl",
    description: "Embark on a quest to find the bugs and retrieve the flag!",

    brief:
      "Join our Bug Bounty event, an exciting challenge where participants will test their cybersecurity skills in a real-world scenario. Your mission is to uncover hidden vulnerabilities and find the elusive flag. The challenge is open-ended—how you approach it is entirely up to you!",
    brief2:
      "Whether you're a seasoned ethical hacker or just starting out, this event offers the perfect platform to showcase your problem-solving abilities, learn new techniques, and contribute to a safer digital environment. Compete, grow, and earn recognition and rewards for your efforts. Do you have what it takes to find the flag?",
    poster: bugbounty,
    url: "bugbounty",
    facultyCoordinator: ["Ms.J.Arthy", "Mrs.S.Sridevi"],
    studentCoordinator: [
      "Swapna Gupta - +91 90029 95954",
      "Rishit Chanda - +91 877 749 7567",
    ],
    eventDetails: {
      time: "10AM - 12PM",
      date: "21 FEB 2025",
      fees: "150 per head",
      seats: "150 SEATS",
    },
    rules: [
      `No Sharing: Don't share the flags or bugs you find with anyone else. Sharing will lead to instant disqualification.`,
      `You are not allowed to test on third-party services or systems.`,
      "Be careful not to access, process, or destroy any personal data. Always respect privacy when working.",
      "5. Account Access: Don't try to access any user's account or private data unless it's part of the challenge you're working on.",
      "6. No Technical Attacks: Do not attempt any form of technical attack that is outside the scope of the challenge. Stick to the defined boundaries of testing and problem-solving.",
      "8. Tie-Breaker: If two or more teams have the same points, the team that completed the challenges in the least amount of time will win.",
    ],
  },

  techexpo: {
    title: "Secure Tool Expo",
    title_font: "font-jersey",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "SecureSec Tool is an exciting event where students will design, develop, and demonstrate their own cybersecurity tool to ensure Confidentiality, Integrity, and Availability (CIA) of digital information. Participants will showcase their creativity, programming skills, and knowledge of cybersecurity principles to create innovative solutions.",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: techexpo,
    url: "techexpo",
    facultyCoordinator: ["Dr.Suganthi", "Dr.Revathy"],
    studentCoordinator: ["Dhivyan", "Jonathan"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "21 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: [
      "Indigenous built tools are only allowed",
      "Plagiarism isn't allowed",
      "rule 3",
    ],
  },

  startup: {
    title: "Startup Expo",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Startup Expo is here, showcasing a dynamic lineup of innovative new startups ready to transform industries and inspire change. This event offers entrepreneurs the perfect platform to pitch groundbreaking ideas, network with investors, and connect with a community eager to shape the future. Whether you're looking to discover the next big thing or introduce your venture to the world, the Startup Expo is the place to be",
    brief2:
      "The Startup Expo is here, showcasing a dynamic lineup of innovative new startups ready to transform industries and inspire change. This event offers entrepreneurs the perfect platform to pitch groundbreaking ideas, network with investors, and connect with a community eager to shape the future. Whether you're looking to discover the next big thing or introduce your venture to the world, the Startup Expo is the place to be!",
    poster: startup,
    url: "startup",
    facultyCoordinator: ["Dr.Visnudharsini", "Dr.Azhagiri"],
    studentCoordinator: ["Vrajesh RS", "Akshayraj"],
    eventDetails: {
      time: "10AM - 12AM",
      date: "21 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["rule 1", "rule 2", "rule 3"],
  },

  freefire: {
    title: "Free Fire",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: freefire,
    url: "freefire",
    facultyCoordinator: ["Ms.Sivasankari ", "Dr.Sasirekha"],
    studentCoordinator: ["Sanjeev", "Moulleshvarma "],
    eventDetails: {
      time: "10AM - 11AM",
      date: "20 FEB 2025",
      fees: "300 per team",
      seats: "150 SEATS",
    },
    rules: ["rule 1", "rule 2", "rule 3"],
  },

  cinema: {
    title: "Cinema",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: cinema,
    url: "cinema",
    facultyCoordinator: ["faculty name 1", "faculty name 2"],
    studentCoordinator: ["student name 1", "student name 2"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["rule 1", "rule 2", "rule 3"],
  },

  surfing: {
    title: "Surfing",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: surfing,
    url: "surfing",
    facultyCoordinator: ["faculty name 1", "faculty name 2"],
    studentCoordinator: ["student name 1", "student name 2"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["rule 1", "rule 2", "rule 3"],
  },

  awareness: {
    title: "Awareness",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: awareness,
    url: "awareness",
    facultyCoordinator: ["faculty name 1", "faculty name 2"],
    studentCoordinator: ["student name 1", "student name 2"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["rule 1", "rule 2", "rule 3"],
  },

  surviva: {
    title: "Surviva",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: surviva,
    url: "surviva",
    facultyCoordinator: ["faculty name 1", "faculty name 2"],
    studentCoordinator: ["student name 1", "student name 2"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["rule 1", "rule 2", "rule 3"],
  },
};
