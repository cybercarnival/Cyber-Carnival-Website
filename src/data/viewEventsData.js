import cyberconclave from "../assets/cyberConclave.png";
import ctf from "../assets/ctf.png";
import cyberthon from "../assets/Cyberthon.png";
import paperpresentation from "../assets/paperpresentation.png";
import bugbounty from "../assets/bugbounty.png";
import techexpo from "../assets/techexpo.jpg";
import techexpoQR from "../assets/techexpoQR.png";
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
import ChannelSurfingQR from "../assets/SurfingQR.png";
import CyberSafeCinemaQR from "../assets/CyberSafeCinemaQR.png";
import FreeFireQR from "../assets/FreeFireQR.png";
import ShipwreckQR from "../assets/ShipwreckQR.png";
import BGMIQR from "../assets/BGMIQR.png";
import BGMI from "../assets/BGMI.jpeg";
import ValoQR from "../assets/ValoQR.png";
import workshop2QR from "../assets/workshop2QR.png";

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
      "The Cyber Conclave is all about bringing people together to talk cybersecurity. It’s a place to learn from each other, share ideas, and discuss the latest challenges in digital security. You’ll hear from experts, join in on interesting talks, and meet others who care about cybersecurity. Whether you're into hacking, protecting data, or just curious about how it all works, there’s something for everyone. If you want to learn, connect, and be part of shaping the future of cybersecurity, this event is for you.",
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
      fees: "200 per head",
      seats: "200 seats",
      qr: ConclaveQR,
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
      "Dive into an exciting Capture the Flag challenge! In this cybersecurity-focused event, participants will uncover vulnerabilities, solve intricate puzzles, and develop strategies to combat online scams and threats. Guided by industry experts, you'll learn how to identify advanced threats and create innovative solutions to strengthen digital security. Whether you're an expert or a beginner, this event promises an engaging, action-packed experience. ",
    poster: ctf,
    url: "capturetheflag",
    facultyCoordinator: ["Dr.Surendar", "Dr.Sujatha"],
    studentCoordinator: [
      "Anshul Bagchi +91 8272941906",
      "Adhish Mehta +91 6266362445",
    ],
    eventDetails: {
      time: "10 AM - 1 PM",
      date: "20 FEB 2025",
      fees: "200 per team",
      seats: "180 seats",
      qr: CTFQR,
    },
    rules: [
      "Teams can have up to 1 - 3 members.",
      "The goal is simple: solve as many challenges as you can within the time limit.",
      "There are five different categories of challenges, and each one has questions ranging from super easy to really tough.",
      "You’ll earn points based on the difficulty of the question—harder ones mean more points.",
      "Sharing flags with other teams isn’t allowed. Let’s keep it fair for everyone!",
      "If a team is caught cheating, they’ll be disqualified. Play fair and have fun!",
    ],
  },

  cyberthon: {
    title: "Cyberthon",
    title_font: "font-jersey",
    title_size: "text-7xl",
    description: "Gear up to Unleash your Hacking Process",

    brief:
      "Get ready to dive into the thrilling world of cybersecurity with Cyberthon, the national-level hackathon organized by the cybersecurity. ",
    brief2:
      "Get ready to dive into the thrilling world of cybersecurity with Cyberthon, the national-level hackathon organized by the cybersecurity. Showcase your exceptional cyber skills and earn recognition for your expertise in this intense 24-hour challenge! This is your chance to leave a lasting impact, to make waves in the cybersecurity community, and to carve out your place among the best and brightest in the field.",
    poster: cyberthon,
    url: "cyberthon",
    facultyCoordinator: ["Dr.Minu", "Dr.Subashka Ramesh"],
    studentCoordinator: [
      "Vignesh Muraleedharan +91 98221 28899",
      "Gokul R +91 9384918930",
    ],
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
      "Bring your innovative ideas and research to life in the Paper Presentation event! Participants will share insights, theories, and practical applications in the fields of cybersecurity, data science, and emerging technologies. With an audience of peers and industry experts, it’s a perfect platform for collaboration, learning, and inspiration. Gain feedback, network with like-minded individuals, and leave with new perspectives.  ",

    poster: paperpresentation,
    url: "paperpresentation",
    facultyCoordinator: ["Dr.Sabitha", "Dr.Gowri"],
    studentCoordinator: [
      "J. Karthikeya +91 8074849211",
      "Alton D Almeida +91 9380468719",
    ],
    eventDetails: {
      time: "11AM - 1 PM",
      date: "20 Feb 2025",
      fees: "Phase 1: FREE",
      seats: "80 SEATS",
      qr: PaperPresentationQR,
    },
    rules: [
      "This event is conducted in 2 Phases.",
      "Phase 1 (No Fee) :",
      "Submit your paper in the IEEE format, and make sure it’s no longer than 4 pages.",
      "Team must consist of up to 1 – 4 members.",
      "No plagiarism allowed – your paper must be your own creation.",
      "After Phase1, the selected teams will be notified(via email).",
      "Selected teams can proceed with the payment.",
      "Phase 2 (Rs.150 per Team for the shortlisted teams) :",
      "Presentation time will be around 5 minutes.",
      "If the paper is a group effort, each member may be required to present a portion of the paper.",
      "Bring a backup copy of the presentation (on USB or cloud storage).",
      "The judges’ decisions will be final, so let your work speak for itself.",
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
      "Bug Bounty challenges participants to explore systems, identify vulnerabilities, and patch flaws while showcasing their ingenuity and technical prowess. It's a creative and competitive platform for ethical hackers and cybersecurity enthusiasts to demonstrate their skills. Whether you're a professional or a beginner, this event will keep you on your toes as you uncover hidden risks and propose solutions.",
    poster: bugbounty,
    url: "bugbounty",
    facultyCoordinator: ["Ms.J.Arthy", "Mrs.S.Sridevi"],
    studentCoordinator: [
      "Swapna Gupta +91 9002995954",
      "Rishit Chanda +91 8777497567",
    ],
    eventDetails: {
      time: "10 AM - 01 PM",
      date: "21 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
      qr: BugBountyQR,
    },
    rules: [
      "Teams can have 1 - 3 members, and participants must bring their own laptops, software, and resources.",
      "No sharing! Don’t share the flags or bugs you find with anyone. Sharing will lead to instant disqualification.",
      "Stick to the scope—don’t test on third-party systems or services.",
      "Respect privacy. Avoid accessing, processing, or destroying personal data.",
      "Don’t try to break into user accounts or access private data unless the challenge specifically allows it.",
      "No out-of-scope attacks.",
      "No Technical Attacks: Do not attempt any form of technical attack. Focus on the challenges and follow the testing boundaries.",
      "In case of a tie, the team that finishes the challenges the fastest will win.",
    ],
  },

  techexpo: {
    title: "Secure Tool Expo",
    title_font: "font-jersey",
    title_size: "text-5xl",
    description: "Showcase your cyber innovation in a secure manner",

    brief:
      "Think you can build the next big cybersecurity tool? At Secure Tool Expo, you'll get the chance to design and showcase a tool you've created. It could be anything from protecting data to keeping systems running smoothly. Bring your coding skills and creativity—we can't wait to see what you come up with!",
    brief2: "Registrations Closed. For Queries contact - +91 9042876394",
    poster: techexpo,
    url: "techexpo",
    facultyCoordinator: ["Dr.Suganthi", "Dr.Revathy", "Dr.J.Nithisha"],
    studentCoordinator: ["Dhivyan +91 9042876394", "Jonathan +91 9150662333"],
    eventDetails: {
      time: "1 PM - 3 PM",
      date: "20 FEB 2025",
      fees: "150 PER TEAM",
      seats: "150 SEATS",
      qr: techexpoQR,
    },
    rules: [
      "Registration: Teams can have 1 - 3 members, and participants must bring their own laptops, software, and resources.",
      "Participants must build the cyber tool before the event day and present it during the exhibition time.",
      "Each team will have 3-5 minutes for their presentation.",
      "The presentation must include a PPT covering the following: description of the tool, novelty and innovative solution proposed, and a functional demo.",
      "Tool development categories include Network Security, Cryptography, Web Application Security, Incident Response, and Digital Forensics.",
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
      "Discover the future at The Startup Expo! Entrepreneurs will pitch their unique ideas and innovative solutions to a panel of investors and an enthusiastic audience. This event is the perfect opportunity to explore creative projects, learn about emerging trends, and connect with visionaries shaping tomorrow. Whether you’re an aspiring entrepreneur or simply curious, this expo offers inspiration and networking opportunities.",
    poster: startup,
    url: "startup",
    facultyCoordinator: ["Dr.Visnudharsini", "Dr.Azhagiri"],
    studentCoordinator: [
      "Vrajesh RS +91 9384025353",
      "Joshika Sathish +91 7845845124",
    ],
    eventDetails: {
      time: "10 AM - 4 PM",
      date: "20 FEB 2025",
      fees: "FREE",
      seats: "8 Startups",
    },
    rules: [
      "Bring a pitch deck that clearly presents your idea.",
      "Founders or participants should arrive early to get settled and ready for the event.",
      "Each startup gets 5 minutes to pitch, followed by a Q&A session.",
      "Your pitch should highlight your innovation, feasibility, and market potential.",
      "Make sure your presentation materials follow the provided guidelines.",
    ],
  },

  freefire: {
    title: "Free Fire",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: " Battle Royale mode ",

    brief:
      "Free Fire is a thrilling video game battle royale game where players face off on an island, players striving to be the last one standing. With fast-paced action, a cast of unique characters boasting special abilities, and a wide range of weapons and survival items, it delivers an intense and exciting gaming experience that keeps you on the edge of your seat.",
    brief2:
      "Get ready for the ultimate Free Fire tournament! Join top players from colleges everywhere as they battle it out for glory and cool prizes. Dive into intense matches packed with strategy, epic gunfights, and heart-pounding moments. Whether you're a seasoned pro or just love the game, this tournament is your chance to experience action-packed gameplay and create unforgettable memories. Don’t miss out the opportunity to show off your skills and claim your place in the Free Fire community!",
    poster: freefire,
    url: "freefire",
    facultyCoordinator: ["Ms.Sivasankari AP/CSE", "Dr.Sasirekha AP/CSE"],
    studentCoordinator: [
      "Sanjeev +91 6382079788",
      "Moulleshvarma +91 9840440702",
    ],
    eventDetails: {
      time: "10 AM - 1 PM",
      date: "20 FEB 2025",
      fees: "200 per team",
      seats: "150 SEATS",
      qr: FreeFireQR,
    },
    rules: [
      "Full Bermuda map squad matches; 2 matches, time dependent. So make sure that the map is prepared on your device and game.",
      "Players may use voice chat but abusive languages or harassment are strictly penalized.",
      "If the player gets disconnected, they can join back the match, otherwise the team plays without that player. So come with proper network connection and a good phone for gameplay!",
      "The top 2 teams based on points qualify for the finals, which will have unique rules or challenges. Regarding prizes, they are distributed right after the tourney Based on the final leaderboard.",
    ],
  },

  cinema: {
    title: "Cyber Safe Cinema",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Lights Camera Hacktion",

    brief:
      "Cyber Safe Cinema is a showcase of various filmmakers telling strong stories. This event features short films on cyber awareness, emphasizing the impact of technology. Audiences will be exposed to thought-provoking narratives that inspire curiosity and discussion on digital knowledge.",
    brief2:
      "Cyber Safe Cinema is an electrifying event, bringing filmmakers of different backgrounds onto the screen as they light it up with strong stories. The event features short films on cyber awareness, showing how technology is changing our lives. As lights shine bright, viewers will witness stories that make them think and talk about why staying informed in this digital world matters.",
    poster: cinema,
    url: "cinema",
    facultyCoordinator: ["Dr. Manju AP/CSE", "Ms. S.Nancy Lima Christy AP/CSE"],
    studentCoordinator: [
      "Velu Aravind +91 7299284940",
      "Akshayraj +91 7550248083",
    ],
    eventDetails: {
      time: "9 AM - 11 AM",
      date: "21 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
      qr: CyberSafeCinemaQR,
    },
    rules: [
      "Team size can be maximum of four",
      "Registrations are subject to preliminary screening",
      "Film duration: Stay within the time limit of 10 mins to maintain the judges attention.",
      "Use of copyrighted material is prohibited.",
      "Submissions will be evaluated based on the effectiveness of the noir atmosphere.",
      "Any form of vulgarity will lead to immediate disqualification.",
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
      "Channel Surfing is a mimicry of popular channels by a team. The Judge changes the channel and gives commands in reverse, pause, play, fast-forward, and slow motion, which teams are supposed to follow. The judge cues the team to switch channels.Performance must be changed immediately after that. According to the act points will be awarded. Categories of Channels: News, Sports, Movies-Hindi & English, Music-Hindi & English, Food Channels, Entertainment-National,Entertainment-International, Kids Channel, Lifestyle, Wildlife Channels, Science.",
    poster: surfing,
    url: "surfing",
    facultyCoordinator: ["Ms.Sajini AP/CSE", "Ms.S.Vaishnavi AP/CSE"],
    studentCoordinator: [
      "Praveen Bhalagee +91 9884224568",
      "Vignesh +91 9176027957",
    ],
    eventDetails: {
      time: "9 AM - 11 AM",
      date: "21 FEB 2025",
      fees: "200 per team",
      seats: "150 SEATS",
      qr: ChannelSurfingQR,
    },
    rules: [
      "No props can be used.",
      "No costume is to be used.",
      "Do not use abusive words or actions in your Act.",
      "Participants must refrain from opening their mouths or verbally stating the channel name during the game.",
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
      "A cyber awareness campaign is an organized process that educates individuals and organizations on cybersecurity risks, best practices, and ways of protecting them against cyber threats. Promote the use of strong, unique passwords and password managers. Raise awareness about protecting personal information and online privacy. Talk about the risks associated with mobile devices and how to properly use these devices. These campaigns can offer fine-grained analytics regarding user behavior and campaign effectiveness.",
    poster: awareness,
    url: "awareness",
    facultyCoordinator: ["Dr.R.Sathya", "Mr.Kingsley Stephen "],
    studentCoordinator: ["Shruthi Raj +91 7358451891", "Sanjay +91 9363581924"],
    eventDetails: {
      time: "10 AM - 11 AM",
      date: "21 FEB 2025",
      fees: "FREE",
    },
    rules: [
      "Maintain decorum within the mass.",
      "Bring your edible essentials.",
    ],
  },

  surviva: {
    title: "Shipwreck",
    title_font: "font-saira",
    title_size: "text-4xl",
    description: "Navigating life storm in shipwreck experience",

    brief:
      "This is a character-based debate competition in which people argue why a particular character should be saved, and not other characters, who are on board a sinking ship. It trains the players to observe facts, use strong voices, and persuade others, among other attributes.",
    brief2:
      "In a Shipwreck event, participants play various characters-from historical to totally fictional-on a sinking ship. Each participant has to argue why their character deserves to be included in the limited lifeboats. They balance character portrayal with convincing others about their importance and discrediting fellow shipmates at the same time. It is creative, homes debating skills, and demands quick thinking. One has to keep changing arguments and rebuttals - very dynamic and entertaining. It's popular in schools and colleges because of the drama, strategy, and humor it brings into a debate.",
    poster: surviva,
    url: "surviva",
    facultyCoordinator: ["Ms.Kudiyarasudevi AP/CSE ", "Dr.Tamilselvi AP/CSE"],
    studentCoordinator: [
      "Andrew Leo +91 8610307954",
      "Priyanka G +91 7305051592",
    ],
    eventDetails: {
      time: "11 AM - 1 PM",
      date: "21 FEB 2025",
      fees: "100 per head",
      seats: "150 SEATS",
      qr: ShipwreckQR,
    },
    rules: [
      "Time for convincing the captain: 3 minutes",
      "Rebuttal time: 1 minute",
      "2 rounds will be conducted in total.",
      "Any sort of vulgarity is prohibited.",
      "There will be a negative marking if preparation time in exceeded.",
      "Participants will be judged on their humor, spontaneity and creativity.",
      "On the final round Judge's decision will remain final.",
    ],
  },
  title: {
    title: "BGMI",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "Battle it out in Erangel, survive, dominate, and claim your Chicken Dinner!",

    brief:
      "Get ready for an intense BGMI (Battlegrounds Mobile India) tournament!  This event is your chance to showcase your skills, teamwork, and strategy in Erangel. Compete against top players, survive till the end, and claim victory!",
    brief2:
      "Welcome to the ultimate Battle Ground! This competition is all about teamwork, coordination, and the relentless pursuit of that coveted Chicken Dinner.From the moment you drop into the map, your squad's synergy will be put to the test. Every decision, from loot choices to movement strategies, must be made with precision and mutual trust. Engage in heart-pounding firefights, overcome challenging situations, and adapt to shifting battle conditions—all while relying on your teammates to have your back. As the circle closes and the intensity ramps up, only the team with the best communication and strategy will survive until the very end.",
    poster: BGMI,
    url: "title",
    facultyCoordinator: ["Ms. Sujeetha AP/CSE", ""],
    studentCoordinator: [
      "Shadrach P - +91 9094562861",
      "Aathish P - +91 7395807187",
    ],
    eventDetails: {
      time: "10 AM - 3 PM",
      date: "21 FEB 2025",
      fees: "200 per team",
      seats: "200 SEATS",
      qr: BGMIQR,
    },
    rules: [
      "Team Size: 1 to 4 players per team.",
      "Map: Erangel.",
      "Internet & Device: Players must use their own mobile/tablet and internet. The organizers are not responsible for network issues. ",
      "No emulators allowed.",
      "Fair Play: No cheating, hacking, or third-party software. Violators will be disqualified.",
      "Behavior: Toxicity, abusive language, or any misconduct will lead to a ban.",
    ],
  },
  valorant: {
    title: "Valorush",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "REGISTRATIONS FOR VALORUSH IS CLOSED. ANY FURTHER PAYMENT MADE WILL NOT BE VALID AND WONT COUNT TOWARDS THE EVENT",

    brief:
      "REGISTRATIONS FOR VALORUSH IS CLOSED. ANY FURTHER PAYMENT MADE AFTER THIS WILL NOT BE VALID TOWARDS THE EVENT.",
    brief2:
      "VALORUSH REGISTRATIONS ARE CLOSED. REGISTRATIONS MADE AFTER THIS POINT WILL NOT BE VALID FOR THE DURATION OF THE EVENT.",
    poster: valo,
    url: "valorant",
    facultyCoordinator: ["Dr.D. Deva hema AP/CSE", "Ms.J. Juslin Sega AP/CSE"],
    studentCoordinator: [
      "Anand Paul - +91 9150575341",
      "Vigneshwaran B - +91 7845891735",
    ],
    eventDetails: {
      time: "9 AM - 12 PM",
      date: "20 FEB 2025",
      fees: "250 per team",
      seats: "150 SEATS",
      qr: ValoQR,
    },
    rules: [
      "Each team must consist of exactly 5 players.",
      "The tournament follows a 16-team single-elimination format. Losing a match means immediate elimination.",
      "Swiftplay mode will be used for all knockout matches (no overtime). The final match will be played in standard mode between the two teams, with overtime enabled and a 'win by two' rule applied.",
      "Teams must report on time for their matches. Late or unavailable teams will be disqualified.",
      "Teams will be assigned through random shuffling for the first knockout round.",
      "Organizers will not be responsible for any connectivity issues.",
      "No toxic behavior or abusive language allowed.",
      "Bugs, hacks, scripts, or any external software violations are strictly prohibited. Violators will be disqualified.",
      "Maps will be chosen randomly for each match, so teams should be prepared to play on any map.",
      "In case of any contradiction or disputes during the game, the coordinators' decision will be final and binding.",
    ],
  },

  workshop2: {
    title: "Cyber Forensics and Digital Forensics",
    title_font: "font-saira",
    title_size: "text-2xl text-center",
    description:
      "Interactive cybersecurity workshop handled by industry experts with doubt clearing session",

    brief:
      "This cybersecurity workshop provides an essential introduction to digital security for both beginners and professionals. Covering core topics like threat detection, vulnerability assessment, and network protection, the workshop guides participants through the fundamentals of safeguarding digital assets.",
    brief2:
      "This cybersecurity workshop serves as a simple introduction to the digital security environment for beginners as well as professional users. Its core topics focus on threat detection, vulnerability assessment, and network protection, helping students understand the principles of protecting their digital assets. These include identifying phishing attempts and responding accordingly, effective mechanisms for defense, and best practices in data security. Hands-on sessions will immerse participants in real-world scenarios to allow them to practice incident response and risk mitigation in real time.",
    poster: workshop2,
    url: "workshop2",
    facultyCoordinator: [
      "Ms.Jayalakshmi AP/CSE",
      "Dr.Ramya AP/CSE",
      "Ms.Sivasankari AP/CSE",
    ],
    studentCoordinator: [
      "Vijay K - +91 9843352754",
      "Manav Raitani - +91 7570025877",
    ],
    eventDetails: {
      time: "10 AM - 4 PM",
      date: "20 & 21 FEB",
      fees: "300 PER head",
      seats: "150 SEATS",
      qr: workshop2QR,
    },
    rules: [],
  },
  workshop1: {
    title: "Cyber Security and Network Security",
    title_font: "font-saira",
    title_size: "text-2xl text-center",
    description:
      "Interactive cybersecurity workshop handled by industry experts with doubt clearing session",

    brief:
      "This cybersecurity workshop covers online security fundamentals, threat detection, and protection techniques. Participants will learn to secure networks and implement best practices to protect digital assets. Ideal for beginners and professionals looking to enhance their cybersecurity skills.",
    brief2:
      "A cybersecurity workshop covering fundamentals of online security, threat detection, and protection techniques. Participants will learn about securing networks, and implementing best practices to safeguard digital assets. Ideal for beginners and professionals aiming to enhance their cybersecurity skills.This cybersecurity workshop provides a comprehensive introduction to the essentials of digital security.",
    poster: workshop1,
    url: "workshop1",
    facultyCoordinator: ["Dr.S.Menaka AP/CSE", "Dr.Jospin Jeya AP/CSE"],
    studentCoordinator: [
      "Arunkumar J +91 7397588467",
      "Samrakshan P.B +91 8825876646",
    ],
    eventDetails: {
      time: "10 AM - 4 PM",
      date: "20 & 21 FEB",
      fees: "500 PER head",
      seats: "150 SEATS",
      qr: WorkshopQR,
    },
    rules: [],
  },
};
