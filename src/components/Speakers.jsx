import React from "react";
import con1 from "../assets/con1.png";
import con2 from "../assets/con2.png";
import con3 from "../assets/con3.png";
import con4 from "../assets/con4.png";
import con5 from "../assets/con5.png";
import con6 from "../assets/con6.png";
import con7 from "../assets/con7.png";
import con8 from "../assets/con8.jpg";
import con9 from "../assets/con9.jpg";
import con10 from "../assets/con10.jpg";
import con11 from "../assets/con11.jpg";
import con12 from "../assets/con12.jpg";
function Speakers() {
  const contributors = [
    {
      name: "Panchi Samuthirakani",
      title: "Founder and Managing Director – YesPanchi Tech Services",
      image: con1,
    },
    {
      name: "Dr. Mahesh Kalyanaraman",
      title: "Associate Vice President Risk and Compliance - HCL Technologies",
      image: con2,
    },
    {
      name: "Mr. Ramu Para",
      title: "Associate Director - Cybersecurity - HTC Global Services",
      image: con3,
    },
    {
      name: "Mr. Abhishek Kokate",
      title: "Clients Advisor Digital Risk Management Kanoo Elite",
      image: con4,
    },
    {
      name: "Balachandar Natarajan",
      title: "Platform Engineering Manager - Ford Motor Company",
      image: con5,
    },
    {
      name: "Suresh Vedakumar",
      title: "Associate Vice President & Lead - ITSM Mphasis",
      image: con6,
    },
    {
      name: "Mr. Bharani Ramasamy",
      title: "Senior Director Global Networks & Security Virtusa Corporation",
      image: con7,
    },
    {
      name: "Mr. Ganesh S",
      title: "Strategic Engineering Leade TransUnion Chicago, Illinois, U.S.",
      image: con8,
    },
    {
      name: "Mr. Bharani Ramasamy",
      title: "Senior Director Global Networks and Securit Virtusa corporation",
      image: con9,
    },
    {
      name: "Mr. Rajkumar Kalaimani",
      title: "Senior Engineer Altimetrik Chennai",
      image: con10,
    },
    {
      name: "Mr. Ranjith Kumar",
      title: "Cyber Security Professional Infosys",
      image: con11,
    },
    {
      name: "Mr. Deep Chanda",
      title: "  Vice President -Compliance and Audit , Network Intelligence Pvt. Ltd",
      image: con12,
    },
  ];
  return (
    <>
      <h1 className="text-5xl  sm:text-4xl md:text-5xl font-semibold flex flex-col justify-center items-center text-cyan-300 font-alumni tracking-wide my-5">
        Conclave Speakers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 w-80 mx-auto"
          >
            <img
              src={contributor.image}
              alt={contributor.name}
              className="w-36 h-36 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-center text-xl font-semibold text-emerald-400">
                {contributor.name}
              </p>
              <p className="text-center text-sm font-semibold">
                {contributor.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Speakers;
