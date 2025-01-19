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
import workshop1 from "../assets/workshop1.jpeg";
import workshop2 from "../assets/workshop2.jpeg";
import title from "../assets/title.jpeg";
import valo from "../assets/valorant.jpeg";
import ConclaveQR from "../assets/ConclaveQR.png";
import CTFQR from "../assets/CTFQR.png";
import PaperPresentationQR from "../assets/PaperPresentationQR.png";
import WorkshopQR from "../assets/WorkshopQR.png";
import BugBountyQR from "../assets/BugBountyQR.png";
import ChannelSurfingQR from "../assets/ChannelSurfingQR.png";
import CyberSafeCinemaQR from "../assets/CyberSafeCinemaQR.png";
import FreeFireQR from "../assets/FreeFireQR.png";
import ShipwreckQR from "../assets/ShipwreckQR.png";
import TitleEventQR from "../assets/TitleEventQR.png";
import ValoQR from "../assets/ValoQR.png";


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
      "The Cyber Conclave is a premier gathering that brings together experts, innovators, and thought leaders in the field of cybersecurity. This annual event features keynote speeches, panel discussions focused on the latest trends, challenges, and solutions in the digital security landscape. Attendees can engage in networking opportunities, explore cutting-edge technologies. With topics ranging from threat intelligence and data protection to regulatory compliance and ethical hacking, the Conclave aims to empower professionals with actionable insights. ",
    poster: cyberconclave,
    url: "cyberconclave",
    speakers: [
      ["Mr.Rajthilak.B.S", "Associate Vice-President, Standard Chartered Bank"],
      [
        "Mr.Iniya Nehru",
        "Deputy Director General, National Informatics Centre Chennai",
      ],
      ["Mr.Joel Ganesan ", "Technical Trainer, Microsoft"],
      ["Mr.Vinayak Shrivaishnav ", "Security Solutions Engineer, Rapid7"],
      [
        "Mr.Jason Charles",
        "Leading Fortinet's NetOps Business, India & SAARC Region.",
      ],
    ],
    eventDetails: {
      time: "10 AM - 11:30 AM",
      date: "20 FEB 2025",
      fees: "150 per head",
      seats: "200 seats",
      qr: ConclaveQR
    },
    discussion: ["Unmasking Online Scams and Strengthening Digital Defenses"],
  },

  capturetheflag: {
    title: "Capture The Flag",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Embark on a quest to seize the victory flags!",

    brief:
      "Online scams and cyber threats are a huge problem today. This event is all about figuring out how we can fight back and make our digital world safer. Experts will share their tips on spotting advanced threats and creating programs to help people stay safe. Come join us and learn how to stay ahead of scammers!",
    brief2:
      "A Capture the Flag (CTF) is a game designed to challenge participant's hacking skills, problem-solving abilities, and knowledge of security. In these competitions, teams must solve a series of challenges, each of which contains hidden flags that participants need to find and submit to earn points.",
    poster: ctf,
    url: "capturetheflag",
    facultyCoordinator: ["Dr.Surendar", "Dr.Sujatha"],
    studentCoordinator: ["Anshul Bagchi", "Adhish Mehta"],
    eventDetails: {
      time: "10 AM - 1 PM",
      date: "20 FEB 2025",
      fees: "300 per team",
      seats: "180 seats",
      qr: CTFQR,
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
    title_size: "text-7xl",
    description: "Gear up to Unleash your Hacking Prowess",

    brief:
      "Get ready to dive into the thrilling world of cybersecurity with Cyberthon, the national-level hackathon organized by the cybersecurity. ",
    brief2:
      "Get ready to dive into the thrilling world of cybersecurity with Cyberthon, the national-level hackathon organized by the cybersecurity .Showcase your exceptional cyber skills and earn recognition for your expertise in this intense 24-hour challenge! This is your chance to leave a lasting impact, to make waves in the cybersecurity community, and to carve out your place among the best and brightest in the field.",
    poster: cyberthon,
    url: "cyberthon",
    facultyCoordinator: ["Dr.Minu", "Dr.Subashka Ramesh"],
    studentCoordinator: ["Abdul Aleem", "Pranav Anand"],
    eventDetails: {
      time: "-",
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
      "Got an idea or a research project you’re passionate about? The Research Paper Presentation is where you can share your work with others in the tech, cybersecurity, and data science fields. It’s a great place to learn from each other and get inspired—don’t miss it!",
    brief2:
      "Paper Presentation encourages the exploration of cutting-edge topics, fostering a collaborative environment for sharing knowledge and receiving valuable feedback. Whether you're a seasoned researcher or a budding enthusiast, this is the perfect stage to discuss groundbreaking concepts, refine your research skills, and gain recognition for your work.",

    poster: paperpresentation,
    url: "paperpresentation",
    facultyCoordinator: ["Dr.Sabitha", "Dr.Gowri"],
    studentCoordinator: ["J. Karthikeya", "Alton D Almeida"],
    eventDetails: {
      time: "11AM - 1 PM",
      date: "21 Feb 2025",
      fees: "100 per head",
      seats: "80 SEATS",
      qr: PaperPresentationQR, 
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
    description: "Uncover, Report, and Win – Hack the Code, Secure the Future!",

    brief:
      "If you love a good challenge, our Bug Bounty event is perfect for you! Your job? Find the vulnerabilities and uncover hidden flaws. There’s no one right way to do it—it’s all about using your creativity and problem-solving skills. Ready to dive in and show what you've got?",
    brief2:
      "Whether you're a seasoned ethical hacker or just starting out, this event offers the perfect platform to showcase your problem-solving abilities, learn new techniques, and contribute to a safer digital environment. Compete, grow, and earn recognition and rewards for your efforts. Do you have what it takes to find the flag?",
    poster: bugbounty,
    url: "bugbounty",
    facultyCoordinator: ["Ms.J.Arthy", "Mrs.S.Sridevi"],
    studentCoordinator: ["Swapna Gupta", "Rishit Chanda"],
    eventDetails: {
      time: "9 AM - 11 AM",
      date: "21 FEB 2025",
      fees: "150 per head",
      seats: "150 SEATS",
      qr: BugBountyQR,
    },
    rules: [
      `No Sharing: Don't share the flags or bugs you find with anyone else. Sharing will lead to instant disqualification.`,
      `You are not allowed to test on third-party services or systems.`,
      "Be careful not to access, process, or destroy any personal data. Always respect privacy when working.",
      "Account Access: Don't try to access any user's account or private data unless it's part of the challenge you're working on.",
      "No Technical Attacks: Do not attempt any form of technical attack that is outside the scope of the challenge. Stick to the defined boundaries of testing and problem-solving.",
      "Tie-Breaker: If two or more teams have the same points, the team that completed the challenges in the least amount of time will win.",
    ],
  },

  techexpo: {
    title: "Secure Tool Expo",
    title_font: "font-jersey",
    title_size: "text-5xl",
    description: "Showcase your cyber innovation in a secure manner",

    brief:
      "Think you can build the next big cybersecurity tool? At SecureSec, you'll get the chance to design and showcase a tool you've created. It could be anything from protecting data to keeping systems running smoothly. Bring your coding skills and creativity—we can't wait to see what you come up with!",
    brief2:
      "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!",
    poster: techexpo,
    url: "techexpo",
    facultyCoordinator: ["Dr.Suganthi", "Dr.Revathy"],
    studentCoordinator: ["Dhivyan", "Jonathan"],
    eventDetails: {
      time: "10 AM - 12 PM",
      date: "21 FEB 2025",
      fees: "FREE",
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
    description:
      "Engage the audience and get a great opportunity to showcase your startup!",

    brief:
      "If you're into fresh ideas and innovation, the Startup Expo is where you'll want to be. Entrepreneurs are pitching their ideas, investors are looking for the next big thing, and everyone's excited to connect. Whether you want to get inspired or just check out what's coming next, this event has something for everyone!",
    brief2:
      "The Startup Expo is here, showcasing a dynamic lineup of innovative new startups ready to transform industries and inspire change. This event offers entrepreneurs the perfect platform to pitch groundbreaking ideas, network with investors, and connect with a community eager to shape the future. Whether you're looking to discover the next big thing or introduce your venture to the world, the Startup Expo is the place to be!",
    poster: startup,
    url: "startup",
    facultyCoordinator: ["Dr.Visnudharsini", "Dr.Azhagiri"],
    studentCoordinator: ["Vrajesh RS", "Akshayraj"],
    eventDetails: {
      time: "10 AM - 4 PM",
      date: "20 & 21 FEB",
      fees: "FREE",
      seats: "150 SEATS",
    },
    rules: [
      "Pitch desk must",
      "Must come in formal dress",
      "Founders / participants must come in prior to establish themselves in the venue",
    ],
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
      time: "10 AM - 1 PM",
      date: "20 FEB 2025",
      fees: "200 per team",
      seats: "150 SEATS",
      qr: FreeFireQR,
    },
    rules: [
      "Squad matches on the full Bermuda map; 2 matches, subject to time constraints. So make sure that the map is ready in your device and game.",
      "Teams may use voice chat or world channel, but any forms of abusive language or harassment will incur penalties.",
      "Players may rejoin ongoing matches if disconnected; if unable, teams continue without that player. So come with proper network connection and good phone for gameplay!",
      "Top 2 teams based on points qualify for finals, which will have different rules or challenges. And for the prices - Based on final leaderboard; distribution occurs within  after the tournament.",
    ],
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
      time: "9 AM - 12 PM",
      date: "FEB 2025",
      fees: "300 per team",
      seats: "150 SEATS",
      qr: CyberSafeCinemaQR,
    },
    rules: [
      "TEAM SIZE CAN BE MAXIMUM OF THREE",
      "FILM DURATION: STAY WITHIN THE TIME LIMIT OF 10 MINS TO MAINTAIN JUDGES ATTENTION.",
      "USE OF COPYRIGHTED MATERIAL IS PROHIBITED.",
      "SUBMISSIONS WILL BE EVALUATED BASED ON THE EFFECTIVENESS OF THE NOIR ATMOSPHERE.",
      "ANY FORM OF VULGARITY WILL LEAD TO IMMEDIATE DISQUALIFICATION.",
      "THEME:- CYBER AWARNESS",
    ],
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
      time: "11 AM - 1 PM",
      date: "20 FEB 2025",
      fees: "300 per team",
      seats: "150 SEATS",
      qr: ChannelSurfingQR,
    },
    rules: [
      "No props can be used ",
      "No costume is to be used.",
      "Do not use abusive words or actions in your Act.",
      "Participants must refrain from opening their mouths or verbally stating the channel name during the game. ",
      "Judge's decision is Final.",
    ],
  },

  awareness: {
    title: "Cyber Awareness",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "A cyber awareness campaign is a coordinated effort to educate individuals and organizations.",

    brief:
      "A cyber awareness campaign is a coordinated effort to educate individuals and organizations about cybersecurity risks, best practices, and how to protect themselves from cyber threats.Promote the use of strong, unique passwords and password managers.Explain the importance of protecting personal information and online privacy.Discuss the risks associated with mobile devices and best practices for secure usage.These event can provide detailed analytics on user behavior and campaign performance.",
    brief2:
      "A cyber awareness campaign is a coordinated effort to educate individuals and organizations about cybersecurity risks, best practices, and how to protect themselves from cyber threats.Promote the use of strong, unique passwords and password managers.Explain the importance of protecting personal information and online privacy.Discuss the risks associated with mobile devices and best practices for secure usage.These event can provide detailed analytics on user behavior and campaign performance.",
    poster: awareness,
    url: "awareness",
    facultyCoordinator: ["Dr.R.Sathya", "Mr.Kingsley Stephen "],
    studentCoordinator: ["Shruthi Raj", "Sanjay"],
    eventDetails: {
      time: "10 AM - 11 AM",
      date: "20 FEB 2025",
      fees: "FREE",
    },
    rules: ["Maintain decorum within the mass", "Bring your edible essentials"],
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
      time: "11 AM - 1 PM",
      date: "21 FEB 2025",
      fees: "150 per head",
      seats: "150 SEATS",
      qr: ShipwreckQR,
    },
    rules: [
      "Time for convincing the captain: 3 minutes",
      "Rebuttal time: 1 minute",
      "Totally 2 rounds will be conducted",
      "Any sort of vulgarity is prohibited",
      "There will be a negative marking if preparation time in exceeded",
      "Participants will be judged on their humor, spontaneity and creativity",
      "On the final round Judge's decision will remain final.",
    ],
  },
  title: {
    title: "Title Event",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "Join us for an electrifying Cyber Carnival, where technology meets creativity",

    brief:
      " In Last One Standing: The Battle for the Title, fierce contenders clash in a high-stakes competition where only the strongest will prevail. This intense event pushes participants to their limits as they battle for the coveted champion title.",
    brief2:
      "Every move is strategic, and each decision is crucial as they navigate challenges and obstacles. As the tension mounts and contenders are eliminated, the fight for supremacy intensifies, leaving just one victor. 'Last One Standing' is a testament to resilience and the relentless pursuit of greatness. Join us for this ultimate test of strength and spirit.",
    poster: title,
    url: "title",
    facultyCoordinator: ["--", "--"],
    studentCoordinator: [" Shadrach P - 9094562861"],
    eventDetails: {
      time: "11 AM - 1 PM",
      date: "21 FEB 2025",
      fees: "150 per head",
      seats: "200 SEATS",
      qr: TitleEventQR,
    },
    rules: [
      "Multiple elimination rounds",
      "Winner Recieves the title Mr/Ms. Cyber Carnival",
    ],
  },
  valorant: {
    title: "Valorant",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "Gear up for the ultimate Valorant showdown - where skill, strategy, and adrenaline collide!",

    brief:
      "Prepare for an action-packed Valorant event, bringing together skilled players and fans for intense, strategic battles in the ultimate test of teamwork and precision. Whether you're competing for victory or cheering on your favorite teams, this event promises heart-pounding gameplay, thrilling highlights, and a vibrant community atmosphere.",
    brief2:
      "Get ready for an electrifying Valorant event, where top players and avid fans unite for a high-stakes showdown filled with strategy, skill, and adrenaline. Watch as teams go head-to-head in intense, tactical battles, showcasing their mastery of the game and pushing the limits of teamwork and precision. With immersive viewing experiences, fan activities, and plenty of highlights, this event is a must for anyone who lives for the thrill of competition. Don’t miss out on the excitement, camaraderie, and unforgettable moments that only Valorant can deliver!",
    poster: valo,
    url: "valorant",
    facultyCoordinator: ["--", "--"],
    studentCoordinator: ["--", "--"],
    eventDetails: {
      time: "9 AM - 12 PM",
      date: "22 FEB 2025",
      fees: "150 per head",
      seats: "150 SEATS",
      qr: ValoQR,
    },
    rules: [
      "Teams of 5 players each",
      "Single elimination bracket",
      "Best of 3 rounds for each match",
      "No toxic behavior or abusive language allowed",
      "Use of any cheats, hacks, or external assistance is strictly prohibited",
      "Players must join 10 minutes before their scheduled match time",
      "Server choice is based on mutual agreement; if not, default server is used",
      "All participants must have stable internet connection to avoid delays",
      "Winning team advances to the next round",
      "Prize for MVP of the tournament",
    ],
  },

  workshop2: {
    title: "Workshop 2",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "Interactive cybersecurity workshop handled by industry experts with doubt clearing session",

    brief:
      "This cybersecurity workshop provides an essential introduction to digital security for both beginners and professionals. Covering core topics like threat detection, vulnerability assessment, and network protection, the workshop guides participants through the fundamentals of safeguarding digital assets.",
    brief2:
      "This cybersecurity workshop provides an essential introduction to digital security for both beginners and professionals. Covering core topics like threat detection, vulnerability assessment, and network protection, the workshop guides participants through the fundamentals of safeguarding digital assets. Attendees will learn to identify and respond to phishing attempts, implement effective defense mechanisms, and follow best practices for data security. Hands-on sessions will immerse participants in real-world scenarios, allowing them to practice incident response and risk mitigation in real time. ",
    poster: workshop2,
    url: "workshop2",
    facultyCoordinator: ["Ms.Jayalakshmi ", "Dr.Ramya"],
    studentCoordinator: ["Vijay K", "Manav Raitani"],
    eventDetails: {
      time: "10 AM - 4 PM",
      date: "20 & 21 FEB 2025",
      fees: "500 PER head",
      seats: "150 SEATS",
      qr: WorkshopQR,
    },
    rules: [],
  },
  workshop1: {
    title: "Workshop 1",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "Interactive cybersecurity workshop handled by industry experts with doubt clearing session",

    brief:
      "A cybersecurity workshop covering fundamentals of online security, threat detection, and protection techniques. Participants will learn about securing networks, and implementing best practices to safeguard digital assets. Ideal for beginners and professionals aiming to enhance their cybersecurity skills.",
    brief2:
      "A cybersecurity workshop covering fundamentals of online security, threat detection, and protection techniques. Participants will learn about securing networks, and implementing best practices to safeguard digital assets. Ideal for beginners and professionals aiming to enhance their cybersecurity skills.This cybersecurity workshop provides a comprehensive introduction to the essentials of digital security.",
    poster: workshop1,
    url: "workshop1",
    facultyCoordinator: ["Ms.Menaka", "Dr.Jospin Jeya"],
    studentCoordinator: ["Arunkumar J", "Sanrakshan P.B"],
    eventDetails: {
      time: "10 AM - 4 PM",
      date: "20 & 21 FEB 2025",
      fees: "500 PER head",
      seats: "150 SEATS",
      qr: WorkshopQR,
    },
    rules: [],
  },
};
