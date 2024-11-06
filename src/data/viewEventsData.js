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
      "Unmasking online scams and strengthening adequate cyber defenses",

    brief:
      "Cyber Conclave, where industry leaders converge to explore the latest trends in cybersecurity. Engage in expert discussions, hands-on workshops, and networking opportunities, all aimed at enhancing your knowledge and strategies for a safer digital future.",
    brief2:
      "The Cyber Conclave is a premier gathering that brings together experts, innovators, and thought leaders in the field of cybersecurity. This annual event features keynote speeches, panel discussions, and workshops focused on the latest trends, challenges, and solutions in the digital security landscape. Attendees can engage in networking opportunities, explore cutting-edge technologies, and participate in hands-on training sessions. With topics ranging from threat intelligence and data protection to regulatory compliance and ethical hacking, the Conclave aims to empower professionals with actionable insights. Additionally, it serves as a platform for collaboration, fostering partnerships between academia, industry, and government to enhance global cybersecurity resilience.",
    poster: cyberconclave,
    url: "cyberconclave",
    speakers: [
      ["Mr.Rajthilak.B.S", "Associate Vice president Standard chartered bank"],
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
      "Unmasking Online Scams and Strengthening Cyber Defenses focuses on the urgent need to counter the rising tide of cyber threats and scams affecting individuals and organizations. This year's Cyber Conclave will bring together experts to discuss strategies for enhancing cybersecurity through advanced threat detection and comprehensive awareness programs.",
    brief2:
      "A Capture the Flag (CTF) is a game designed to challenge participant's hacking skills, problem-solving abilities, and knowledge of security. In these competitions, teams must solve a series of challenges, each of which contains hidden flags that participants need to find and submit to earn points.",
    poster: ctf,
    url: "capturetheflag",
    facultyCoordinator: ["Dr.Surendar", "Dr.Sujatha"],
    studentCoordinator: ["Anshul Bagchi", "Adhish Mehta"],
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
    facultyCoordinator: ["Dr.Minu", "Dr.Subashka Ramesh"],
    studentCoordinator: ["Abdul Aleem", "Pranav Anand"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "24-25 Jan 2025",
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
    studentCoordinator: ["Jandhyala Venkata", "Alton D Almeida"],
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
    studentCoordinator: ["Swapna Gupta", "Rishit Chanda"],
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
    title_size: "text-5xl",
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
    rules: ["Pitch desk must", 
      "Must come in formal dress", 
      "Founders / participants must come in prior to establish themselves in the venue"],
  },

  freefire: {
    title: "Free Fire",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: " Battle Royale mode ",

    brief:
    "Free Fire is a popular battle royale game where players compete on an island, aiming to be the last one standing. It features fast-paced action, unique characters with special abilities, and various weapons and items for survival, offering an intense gaming experience.",
    brief2:
    "Join Us for the ultimate Free Fire tournament, where the top players around all colleges Battle for glory and prizes. Compete in intense matches filled with strategic gameplay, thrilling gunfights, and heart-pounding moments. Whether you're a seasoned pro or a passionate newcomer, this tournament promises action-packed gameplay and an unforgettable experience. Don’t miss your chance to showcase your skills and claim your spot in the Free Fire community!",
    poster: freefire,
    url: "freefire",
    facultyCoordinator: ["Ms.Sivasankari ", "Dr.Sasirekha"],
    studentCoordinator: ["Sanjeev", "Moulleshvarma "],
    eventDetails: {
      time: "-",
      date: "20 FEB 2025",
      fees: "300 per team",
      seats: "150 SEATS",
    },
    rules: ["Squad matches on the full Bermuda map; 2 matches, subject to time constraints. So make sure that the map is ready in your device and game.", 
      "Teams may use voice chat or world channel, but any forms of abusive language or harassment will incur penalties.", 
      "Players may rejoin ongoing matches if disconnected; if unable, teams continue without that player. So come with proper network connection and good phone for gameplay!",
      "Top 2 teams based on points qualify for finals, which will have different rules or challenges. And for the prices - Based on final leaderboard; distribution occurs within TBD after the tournament.",],
  },

  cinema: {
    title: "Cyber Safe Cinema",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Lights Camera Hacktion",

    brief:
"Lights On, an engaging event that showcases filmmakers of all backgrounds as they illuminate the screen with powerful stories. This platform features a selection of short films focused on cyber awareness, highlighting the impact of technology on our lives. As the lights shine bright, audiences will experience thought-provoking narratives that inspire curiosity and provoke discussion about the importance of staying informed in our digital world.",
    brief2:
"Lights On, an engaging event that showcases filmmakers of all backgrounds as they illuminate the screen with powerful stories. This platform features a selection of short films focused on cyber awareness, highlighting the impact of technology on our lives. As the lights shine bright, audiences will experience thought-provoking narratives that inspire curiosity and provoke discussion about the importance of staying informed in our digital world.",
    poster: cinema,
    url: "cinema",
    facultyCoordinator: ["Dr.Manju", "Ms.S.Nancy Lima"],
    studentCoordinator: ["Velu Aravind", "Yoshika"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["TEAM SIZE CAN BE MAXIMUM OF THREE",
       "FILM DURATION: STAY WITHIN THE TIME LIMIT OF 10 MINS TO MAINTAIN JUDGES ATTENTION.",
        "USE OF COPYRIGHTED MATERIAL IS PROHIBITED.",
      "SUBMISSIONS WILL BE EVALUATED BASED ON THE EFFECTIVENESS OF THE NOIR ATMOSPHERE.",
    "ANY FORM OF VULGARITY WILL LEAD TO IMMEDIATE DISQUALIFICATION.",
  "THEME:- CYBER AWARNESS"],
  },

  surfing: {
    title: "Channel surfing ",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
"Channel Surfing is about a team imitating the popular channels. The Judge will keep changing the channel and will give commands like (reverse, pause, play, fast-forward, slow motion) and the teams must perform accordingly. Cue will be given by judge to change the channel.",
    brief2:
"Performance must be changed immediately after that. According to the act points will be awarded. Categories of Channels: News, Sports, Movies-Hindi & English, Music-Hindi &English, Food Channels, Entertainment-National, Entertainment-International, Kids Channel, Lifestyle, Wildlife Channels, Science.",
    poster: surfing,
    url: "surfing",
    facultyCoordinator: ["Ms.Sajini", "Ms.S.Vaishnavi"],
    studentCoordinator: ["Praveen Bhalagee", "Vignesh"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["No props can be used ", 
      "No costume is to be used.", 
      "Do not use abusive words or actions in your Act.", 
      "Participants must refrain from opening their mouths or verbally stating the channel name during the game. ", 
      "Judge's decision is Final.", ],
  },

  awareness: {
    title: "Awareness",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "A cyber awareness campaign is a coordinated effort to educate individuals and organizations about cybersecurity risks, best practices, and how to protect themselves from cyber threats.Promote the use of strong, unique passwords and password managers.Explain the importance of protecting personal information and online privacy.Discuss the risks associated with mobile devices and best practices for secure usage.These event can provide detailed analytics on user behavior and campaign performance.",
    brief2:
      "A cyber awareness campaign is a coordinated effort to educate individuals and organizations about cybersecurity risks, best practices, and how to protect themselves from cyber threats.Promote the use of strong, unique passwords and password managers.Explain the importance of protecting personal information and online privacy.Discuss the risks associated with mobile devices and best practices for secure usage.These event can provide detailed analytics on user behavior and campaign performance.",
    poster: awareness,
    url: "awareness",
    facultyCoordinator: ["Dr.R.Sathya", "Mr.Kingsley Stephen "],
    studentCoordinator: ["Shruthi Raj", "Sanjay"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["Maintain decorum within the mass", "Bring your edible essentials", ],
  },

  surviva: {
    title: "Shipwreck",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Navigating life storm in shipwreck experience",

    brief:
"The shipwreck is a popular character-based debate competition. Participants take on roles of characters trapped on a sinking ship, arguing why their character deserves to be saved while contending why others should. It's a great way to develop observational skills, vocal presence, and persuasive abilities.",
    brief2:
"In a Shipwreck event, participants embody various characters—ranging from historical figures to fictional personas—who find themselves on a doomed ship. The scenario unfolds as the ship starts sinking, and each participant must convincingly argue why their character should be rescued by the limited lifeboats. The challenge lies in balancing the portrayal of their character’s traits, convincing others of their importance, and simultaneously discrediting the claims of their fellow shipmates. The event encourages creativity, sharpens debating skills, and demands quick thinking. While all characters plead their case, they must adapt to the evolving arguments and rebuttals from others, making it a dynamic and engaging exercise. It's a favorite in schools and colleges for its blend of drama, strategy, and humor.",
    poster: surviva,
    url: "surviva",
    facultyCoordinator: ["Ms.Kudiyarasudevi", "Dr.Tamilselvi"],
    studentCoordinator: ["Andrew Leo", "Priyanka G"],
    eventDetails: {
      time: "10AM - 11AM",
      date: "22 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
    },
    rules: ["Time for convincing the captain: 3 minutes", 
      "Rebuttal time: 1 minute", 
      "Totally 2 rounds will be conducted",
    "Any sort of vulgarity is prohibited",
  "There will be a negative marking if preparation time in exceeded",
"Participants will be judged on their humor, spontaneity and creativity",
"On the final round Judge's decision will remain final."],
  },
};
