import EventCard from "../components/EventCard";

import React from "react";

function Events() {
  return (
    <div className="mt-32 w-full flex flex-wrap items-center justify-center ">
      <EventCard urlName="cyberconclave" />
      <EventCard urlName="capturetheflag" />
      <EventCard urlName="cyberthon" />
      <EventCard urlName="paperpresentation" />
      <EventCard urlName="bugbounty" />


      {/* <EventCard
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
        url="cyberthon"
      /> */}

      {/* <EventCard
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
      /> */}
    </div>
  );
}

export default Events;
