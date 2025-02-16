import React, { useState } from "react";
import { useAppContext } from "./context";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase_config";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import VerifiedIcon from "@mui/icons-material/Verified";
import ExportData from "./exportData";

const EMAILS = {
  cyberthon: {
    subject: "Registration Verified",
    body: `Dear {NAME},  
Thank you for registering for Cyberthon! We are thrilled to have you join us for this exciting event.  

Important Information:  
- Event Date: 1st Feb 2025 to 2nd Feb 2025 
- Venue: YuniQ, TIDEL building 4th floor
https://maps.app.goo.gl/fGkChGHEGTh8Dx3y8   
- Do join the WhatsApp group for further updates: https://chat.whatsapp.com/H7XYFJ0alf9ILSQ0C1S8r7

To ensure a smooth check-in process, we kindly request you to bring the following on the day of the event:  
1. Registration ID : {REGISTRATIONID}.  
2. Payment Confirmation Screenshot (as proof of payment).  

We will provide ID cards to all participants at the venue during check-in. Upon entry please show us your registration ID and payment screenshot to receive your ID card and access the event.  

If you have any questions or need further assistance, feel free to contact us at hello@cybercarnival.in or +91 9384918930.  

We look forward to seeing you at Cyberthon and sharing an incredible experience together!  

Best regards,  
CyberCarnival Team`,
  },
  capturetheflag: {
    subject: "Confirmation of Your CTF Ticket  for CyberCarnival’25",
    body: `Dear {NAME},  

Thank you for registering for the upcoming Capture The Flag (CTF) event! We're thrilled to have you join us for this exciting challenge. Here are the event details:  
    
Event Details:
    - Date: 20th February 2025  
    - Time: 10:00 AM to 1:00 PM  
    - Venue: BMS, 4th Floor Lab  

Here’s the whatsapp link to join our participants group: https://chat.whatsapp.com/LVolM3Ffat59y8zbJPLR3f
Here's the discord link to join our server for support and queries related to the CTF: https://discord.gg/6PXf5zFME8

Please arrive at least 15 minutes early to complete check-in and set up your equipment. Ensure you bring your laptop and any necessary tools/software to participate effectively.  

If you have any questions or require assistance, feel free to reply to this email.  

Looking forward to seeing you at the event and wishing you all the best for the challenge ahead!  

Best regards,  
CyberCarnival Team`,
  },
  bugbounty: {
    subject: "Confirmation of Your Ticket for the Bug Bounty Event",
    body: `Dear {NAME} 

Thank you for registering for the Bug Bounty event at CyberCarnival! We are thrilled to confirm your participation.  

Event Details:
- Date: 21st February 2025  
- Time: 10 AM - 1 PM 
Here's the whatsapp link to join our participants group: https://chat.whatsapp.com/JCNLUzsfA4mEqWFAawVJFp

Please ensure you arrive at least 15 minutes early to complete the check-in process. Bring a copy of this confirmation email or your registration ID for seamless entry.  

If you have any questions or require further assistance, feel free to reach out to us at hello@cybercarnival.in or +91 87774 97567.  

We look forward to seeing you there for an engaging and insightful experience!  

Best regards,
CyberCarnival Team`,
  },
  cyberconclave: {
    subject: "Your Ticket Confirmation for Cyber Conclave 2025",
    body: `Dear {NAME},  

We are thrilled to confirm your ticket for Cyber Conclave 2025! Get ready for an insightful and engaging session where we explore the latest trends in cybersecurity with security professionals.

📅 Date: 20th February 2025
📍 Venue: SRM Ramapuram
⏰ Time: 10:00 AM - 12:00 PM
Here's the whatsapp link to join our participants group: https://chat.whatsapp.com/E4CGfKE5Mqx83Sc1EU9dGz

Please present this email at the registration desk for smooth entry. If you have any questions, feel free to reach out us at hello@cybercarnival.in.

Looking forward to seeing you at Cyber Conclave 2025!

Best regards,
Team CyberCarnival`,
  },
  surviva: {
    subject: "Confirmation of Your Ticket for Shipwreck",
    body: `Dear {NAME},

Thank you for registering for the Shipwreck event! We're thrilled to confirm your participation.

Event Details:

Date: 21st February 2025
Time: 10:00 AM - 1:00 PM
Here’s our whatsapp link to join our participants group: https://chat.whatsapp.com/Ce5p7uG3VT35cYg4K4WFu0
Please arrive at least 15 minutes early for check-in to ensure a smooth start to the event.

Should you have any questions or require assistance, feel free to reach out to us at hello@cybercarnival.in or +91 8610307954.

We look forward to seeing you there for an unforgettable experience!

Best regards,
Cyber Carnival Team`,
  },
  title: {
    subject: "Confirmation of Your Ticket for the Title Event",
    body: `Dear {NAME},

Thank you for registering for the Title Event! We are excited to confirm your participation.

Event Details:
📅 Date: Friday, 21st February 2025
⏰ Time: 11:00 AM to 1:00 PM
Here’s the whatsapp link to join our participants group: https://chat.whatsapp.com/InHvZG5l3TNBWVCGItJGns

Please bring a copy of this email or your ticket for verification at the registration desk. Ensure you arrive at least 15 minutes before the event starts to complete the check-in process smoothly.

Should you have any questions or require further assistance, feel free to contact us at hello@cybercarnival.in or +91 9094562861.

We look forward to seeing you there!

Best regards,
CyberCarnival Team`,
  },
  paperpresentation: {
    subject: "Confirmation of Your Ticket for Paper Presentation",
    body: `Dear {NAME},
    
We are pleased to confirm your ticket for the Paper Presentation at [Event Name]. Below are the event details:

📅 Date: 20th February 2025
⏰ Time: 1:00 PM – 3:00 PM
📍 Venue for Presentation: BMS Classrooms
📍 Final Venue (Conference & Discussions): BMS 6th Floor Conference Room

Please ensure you arrive at least 15 minutes before the session begins for a smooth check-in process. If you have any queries, feel free to reach out.

Looking forward to your presentation!
Best regards,
Team CyberCarnival`,
  },
  startup: {
    subject: "Confirmation of Your Ticket for Startup Expo 2025",
    body: `Dear {NAME},
    
Thank you for registering for Startup Expo 2025! 🎉 We're excited to have you join us for an inspiring event filled with innovation, networking, and opportunities.

Event Details:
📅 Date: 20th February 2025
⏰ Time: 1:00 PM – 4:00 PM
📍 Venue: Hi-Tech Hall

Please present this email at the registration desk for a seamless check-in experience. If you have any questions, feel free to reach out.

We look forward to seeing you there!
Best regards,
Team CyberCarnival`,
  },
  techexpo: {
    subject:
      "Your Ticket for SecureTool Expo 2025 – Confirmation & Event Details",
    body: `Dear {NAME},

Congratulations! Your ticket for SecureTool Expo 2025 has been confirmed. We're excited to have you join us for this one-of-a-kind cybersecurity event where innovators like you will showcase their cutting-edge security tools to our esteemed panel of judges.

📅 Event Date: 20th February 2025
📍 Venue: SRMIST Ramapuram
Here's the whatsapp group link: https://chat.whatsapp.com/FxgzMEnfn1Y4U9vqsxIHT1

This is your opportunity to gain valuable feedback, and demonstrate your tool's impact in the field. Please ensure you arrive on time and bring any necessary materials for your presentation.

If you have any questions or require further details, feel free to reach out to us at hello@cybercarnival.in. We look forward to seeing you at SecureTool Expo 2025!

Best regards,
Team CyberCarnival`,
  },
  cinema: {
    subject: "Confirmation of Your Ticket for Cybersafe Cinema",
    body: `Dear {NAME},

Thank you for registering for Cybersafe Cinema! We're excited to have you join us for an insightful and engaging event.

📅 Date: 21st February 2025
📍 Venue: Gallery Hall
⏰ Time: 9:00 AM – 11:00 AM

Your ticket is confirmed, and we look forward to seeing you there. Be sure to arrive on time to make the most of the event!

If you have any questions or need further assistance, feel free to reach out to us at hello@cybercarnival.in or +91 72992 84940.

Best regards,
Team CyberCarnival`,
  },
  valorant: {
    subject: "Confirmation of Your Ticket for Valorush",
    body: `Dear {NAME},

Congratulations! Your ticket for Valorush is confirmed. 🎉

📅 Event Date: February 16, 2025
⏰ Time: 9:00 AM (IST)
📍 Venue: Online

Get ready for an action-packed experience! Stay tuned for further details, including access links and event instructions.

If you have any questions, feel free to reach out at hello@cybercarnival.in or +91 9150575341. See you at Valorush!

Best regards,
Team CyberCarnival`,
  },
  workshop1: {
    subject: "Confirmation: Ticket for Workshop 1 – Red Teaming",
    body: `Dear {NAME},

Thank you for registering for Workshop 1: Red Teaming! We're excited to have you join us for this hands-on session.

Workshop Details:
📍 Venue: Gallery Hall
📅 Date: 20th & 21st February 2025
⏰ Time: 10:00 AM – 4:00 PM

Please ensure you arrive at least 15 minutes early for check-in. Kindly present this email or your registration confirmation at the entrance.

If you have any questions, feel free to reach out. We look forward to seeing you there!

Best regards,
Team CyberCarnival`,
  },
  workshop2: {
    subject: "Confirmation of Your Ticket – Workshop 2: Digital Forensics",
    body: `Dear {NAME},
  
Thank you for registering for Workshop 2: Digital Forensics! We're excited to have you join us for this insightful session.

Workshop Details:
📍 Venue: Gallery Hall
📅 Date: 20th & 21st February 2025
⏰ Time: 10:00 AM – 4:00 PM

Please ensure you arrive at least 15 minutes early for seamless check-in. Kindly present this email at the registration desk for verification.

For any queries, feel free to reach out to us at hello@cybercarnival.in.

Looking forward to seeing you there!
  
Best regards,
Team CyberCarnival`,
  },
  freefire: {
    subject: "Confirmation of Your Freefire Ticket – Event Details Inside!",
    body: `Dear {NAME},
    
Congratulations! Your ticket for the Freefire Tournament has been confirmed. Get ready to battle it out and showcase your skills!

📍 Venue: BMS Classrooms
📅 Date: 20th & 21st February 2025
⏰ Time: 10:00 AM onwards

Please ensure you arrive on time and bring a valid ID for verification. Stay tuned for further updates, and feel free to reach out if you have any questions.

See you on the battleground!
Best regards,
Team CyberCarnival`,
  },
  surfing: { subject: "", body: "" },
  awareness: { subject: "", body: "" },
};

function Event() {
  const menuVariants = {
    open: {
      display: "flex",
      opacity: 1,
      y: "0",
    },
    closed: {
      display: "none",
      opacity: 0,
      y: "-10%",
    },
  };
  const {
    data,
    dataset,
    verifiedDataset,
    eventFees,
    verifiedList,
    setToggle,
    verifiedData,
    user,
    AUTHORIZED,
  } = useAppContext();
  const { id } = useParams();
  const [currentOpen, setCurrentOpen] = useState(null);
  const nav = useNavigate();
  const registrations = data.allData
    ?.filter((event) => event.collection === id)[0]
    .documents.sort((a, b) => {
      return (
        a.createdAt.seconds - b.createdAt.seconds ||
        a.createdAt.nanoseconds - b.createdAt.nanoseconds
      );
    });
  const verifiedRegistrations = verifiedData.verifiedAllData?.filter(
    (event) => event.collection === id
  )[0].documents;
  let revenue = 0;
  let verifiedRevenue = 0;

  if (id == "cyberthon") {
    revenue = 25750;
    verifiedRevenue = 25750;
  } else {
    for (let i = 0; i < verifiedRegistrations?.length; i++) {
      verifiedRevenue += eventFees[id];
    }
    for (let i = 0; i < registrations?.length; i++) {
      revenue += eventFees[id];
    }
  }
  const handleVerification = async (id) => {
    try {
      await setDoc(doc(db, "verified", id), {});
      alert("Registration Verified");
      setToggle((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleDeletion = async (row) => {
    try {
      await setDoc(doc(db, "deleted", row.id), row);
      await deleteDoc(doc(db, id, row.id));
      alert("Registration Deleted");
      setToggle((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }
  };
  if (!user) {
    return <Navigate to={"/admin"} replace={true} />;
  }
  return (
    <div className="flex justify-start items-center flex-col bg-white min-h-screen">
      {<ExportData event={id} />}

      <div className="flex w-full items-center justify-center">
        <h1 className=" font-orbitron text-white text-sm sm:text-4xl w-1/3 sm:w-1/2 font-bold my-4 h-52 sm:h-48 m-1 sm:m-6 border-4 rounded-xl border-gray-600 bg-teal-800 flex items-center justify-center">
          {id}
        </h1>
        <div className="flex flex-col h-52 sm:h-48 w-6/12 sm:w-1/4 border-2 border-gray-600 m-1 sm:m-6 bg-neutral-800 rounded-xl p-5 text-white justify-center">
          <h1 className="sm:text-sm md:text-xl font-mono">
            Total Registrations: {registrations?.length}
          </h1>
          {AUTHORIZED.includes(user.email) ? (
            <h1 className="sm:text-sm md:text-xl font-mono">
              Total Revenue: Rs.{revenue}{" "}
            </h1>
          ) : (
            <></>
          )}
          <div className="h-1 bg-gray-600 rounded-xl sm:my-2 md:my-4"></div>
          <h1 className="sm:text-sm md:text-xl font-mono">
            Verified Registrations:{" "}
            <span className="text-green-500">
              {verifiedRegistrations?.length}
            </span>
          </h1>
          {AUTHORIZED.includes(user.email) ? (
            <h1 className="sm:text-sm md:text-xl font-mono">
              Verified Revenue:{" "}
              <span className="text-green-500">Rs.{verifiedRevenue} </span>
            </h1>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mb-10">
        {registrations?.map((row, index) => {
          const variables = {
            REGISTRATIONID: row.id,
            NAME: row.teamName || row.name,
          };
          const subject = EMAILS[id]["subject"];
          const body = EMAILS[id]["body"].replace(
            /{(.*?)}/g,
            (_, key) => variables[key] || `{${key}}`
          );
          const encodedBody = encodeURIComponent(body);
          const mailtoLink = `https://mail.google.com/mail/u/cybercarnivalsrmrmp@gmail.com/?view=cm&to=${
            row.email
          }&su=${encodeURIComponent(subject)}&body=${encodedBody}`;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-9/12 my-1 px-1"
            >
              <>
                <div className="flex w-full border-2 border-black justify-between p-4 rounded-xl">
                  <h1 className="text-xs sm:text-xl font-mono w-1/12">
                    {index + 1}
                  </h1>
                  <h1 className="text-xs sm:text-xl font-mono hidden sm:block">
                    {row.email}
                  </h1>
                  <h1
                    className={`text-xs sm:text-xl font-mono  font-bold ${
                      !verifiedList.includes(row.id)
                        ? "text-red-700"
                        : "text-green-800"
                    }`}
                  >
                    {verifiedList.includes(row.id) ? (
                      <span>
                        Verified
                        <VerifiedIcon />
                      </span>
                    ) : (
                      <span>
                        Not-Verified
                        <NewReleasesIcon />
                      </span>
                    )}
                  </h1>
                  <button
                    className="text-xs sm:text-xl font-extrabold font-sans w-1/12"
                    onClick={() =>
                      setCurrentOpen((prev) => (prev == index ? null : index))
                    }
                  >
                    {currentOpen == index ? (
                      <KeyboardDoubleArrowUpIcon />
                    ) : (
                      <KeyboardDoubleArrowDownIcon />
                    )}
                  </button>
                </div>
                {
                  <motion.div
                    animate={currentOpen == index ? "open" : "closed"}
                    variants={menuVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-full border-2 flex flex-col sm:block sm:flex-row border-black p-4 my-2 rounded-2xl relative max-h-[900px] justify-center items-center`}
                  >
                    <div className="flex flex-col w-[90%] md:w-1/3 pr-8 h-full">
                      <img
                        src={row.screenshotUrl}
                        className="object-contain self-center"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-sm sm:text-xl font-mono ">
                        Registration ID: {row.id}
                      </h1>

                      {row.teamName && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Team Name: {row.teamName}
                        </h1>
                      )}
                      {row.startup && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Startup Name: {row.startup}
                        </h1>
                      )}
                      {row.registration && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Startup Registration: {row.registration}
                        </h1>
                      )}

                      <h1 className="text-sm sm:text-xl font-mono ">
                        Name: {row.name}
                      </h1>
                      {row.member2 && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Member 2: {row.member2}
                        </h1>
                      )}
                      {row.member3 && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Member 3: {row.member3}
                        </h1>
                      )}
                      {row.member4 && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Member 4: {row.member4}
                        </h1>
                      )}
                      {row.member5 && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Member 5: {row.member5}
                        </h1>
                      )}
                      {row.eventmode && (
                        <h1 className="text-sm sm:text-xl font-mono ">
                          Opted Mode: {row.eventmode}
                        </h1>
                      )}
                      <h1 className="text-sm sm:text-xl font-mono ">
                        Email: {row.email}
                      </h1>
                      <h1 className="text-sm sm:text-xl font-mono">
                        Phone: {row.phone || row.contact}
                      </h1>
                      <h1 className="text-sm sm:text-xl font-mono">
                        Institution: {row.college}
                      </h1>
                      {row.transactionID && (
                        <h1 className="text-sm sm:text-xl font-mono">
                          Transaction ID: {row.transactionID}
                        </h1>
                      )}
                      <button
                        disabled={verifiedList.includes(row.id)}
                        className={`w-full h-10 ${
                          verifiedList.includes(row.id)
                            ? "bg-green-700"
                            : "bg-red-600"
                        } rounded-xl my-4 text-white text-lg`}
                        onClick={() => handleVerification(row.id)}
                      >
                        {verifiedList.includes(row.id)
                          ? "Verified"
                          : "Add to Verified"}
                      </button>
                      <button
                        className={`w-full h-10  rounded-xl my-4 text-white bg-red-600 text-lg`}
                        onClick={() => handleDeletion(row)}
                      >
                        Delete
                      </button>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={mailtoLink}
                        className={`w-full h-10 ${
                          verifiedList.includes(row.id)
                            ? "bg-green-700"
                            : "bg-red-600"
                        } rounded-xl text-white text-lg text-center flex justify-center items-center`}
                        aria-label={`Send email to ${row.name}`}
                      >
                        Send Mail
                      </a>
                    </div>
                  </motion.div>
                }
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Event;
