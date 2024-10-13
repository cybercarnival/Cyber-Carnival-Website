import EventCard from "../components/EventCard";
import cyberConclave from "../assets/cyberConclave.png";
import cyberthon from "../assets/Cyberthon.png";
import bugBounty from "../assets/bugbounty.png";
import captureTheFlag from "../assets/ctf.png";
import React from "react";

function Events() {
  return (
    
    <div className="mt-32 w-full flex flex-wrap items-center justify-center ">
      <EventCard
        image={cyberConclave}
        title={"Cyber Conclave"}
        title_font={"font-orbitron"}
        title_size={"text-3xl"}
        description={
          "Dive into the Details of leading experts converging in a panel discussion"
        }
        date={"21 FEB 2025"}
        time={"9AM - 2PM"}
        fees={"RS 50"}
        seats={"150 SEATS"}
        brief={
          "At the Cyber Conclave, leading experts converge in a dynamic panel discussion, offering a comprehensive dive into the intricate details of cybersecurity. This exclusive event brings together thought leaders, industry pioneers, and tech innovators to explore emerging trends, best practices, and pressing challenges facing the digital landscape."
        }
      />

      <EventCard
        image={cyberthon}
        title={"Cyberthon"}
        title_font={"font-jersey"}
        title_size={"text-6xl"}
        description={"Gear up to Unleash your Hacking Prowess"}
        date={"21 FEB 2025"}
        time={"9AM - 2PM"}
        fees={"RS 50"}
        seats={"150 SEATS"}
        brief={
          "Get ready for an intense, exciting, and collaborative coding marathon! Our 36-Hour Hackathon is the ultimate platform for tech enthusiasts, innovators, and problem-solvers to come together and turn ideas into reality."
        }
      />

      <EventCard
        image={captureTheFlag}
        title={"Cyber Conclave"}
        title_font={"font-saira"}
        title_size={"text-4xl"}
        description={"Embark on a quest to seize the victory flags!"}
        date={"21 FEB 2025"}
        time={"9AM - 2PM"}
        fees={"RS 50"}
        seats={"150 SEATS"}
        brief={
          "The Capture the Flag (CTF) Event is back, offering participants an intense, fast-paced competition designed to test your problem-solving, coding, and cybersecurity expertise. Whether you're a beginner or an experienced hacker, this event is the perfect opportunity to dive into real-world challenges and show off your skills!"
        }
      />
      <EventCard
        image={bugBounty}
        title={"Bug Bounty"}
        title_font={"font-rubik"}
        title_size={"text-4xl"}
        description={
          "Uncover, Report, and Win - Hack the Code, Secure the Future!"
        }
        date={"21 FEB 2025"}
        time={"9AM - 2PM"}
        fees={"RS 50"}
        seats={"150 SEATS"}
        brief={
          "The Bug Bounty Event is your chance to put your hacking skills to the test and help make the digital world a safer place! This thrilling event invites cybersecurity enthusiasts to identify and report vulnerabilities in real-world systems, with exciting rewards up for grabs."
        }
      />

      <EventCard
        image={cyberConclave}
        title={"Cyber Conclave"}
        title_font={"font-orbitron"}
        title_size={"text-3xl"}
        description={
          "Dive into the Details of leading experts converging in a panel discussion"
        }
        date={"21 FEB 2025"}
        time={"9AM - 2PM"}
        fees={"RS 50"}
        seats={"150 SEATS"}
        brief={
          "At the Cyber Conclave, leading experts converge in a dynamic panel discussion, offering a comprehensive dive into the intricate details of cybersecurity. This exclusive event brings together thought leaders, industry pioneers, and tech innovators to explore emerging trends, best practices, and pressing challenges facing the digital landscape."
        }
      />
    </div>
  );
}

export default Events;
