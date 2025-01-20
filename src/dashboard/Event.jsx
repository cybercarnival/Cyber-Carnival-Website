import React, { useState } from "react";
import { useAppContext } from "./context";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase_config";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import VerifiedIcon from "@mui/icons-material/Verified";

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
  const registrations = data.allData?.filter(
    (event) => event.collection === id
  )[0].documents;

  const verifiedRegistrations = verifiedData.verifiedAllData?.filter(
    (event) => event.collection === id
  )[0].documents;
  let revenue = 0;
  let verifiedRevenue = 0;

  for (let i = 0; i < verifiedRegistrations?.length; i++) {
    verifiedRevenue += eventFees[id];
  }
  for (let i = 0; i < registrations?.length; i++) {
    revenue += eventFees[id];
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
  if (!user) {
    return <Navigate to={"/admin"} replace={true} />;
  }
  return (
    <div className="flex justify-start items-center flex-col bg-white min-h-screen">
      <div className="flex w-full items-center justify-center">
        <h1 className=" font-orbitron text-white text-4xl w-1/2 font-bold my-4 h-48 m-6 border-4 rounded-xl border-gray-600 bg-teal-800 flex items-center justify-center">
          {id}
        </h1>
        <div className="flex flex-col h-48 w-1/4 border-2 border-gray-600 m-6 bg-neutral-800 rounded-xl p-5 text-white justify-center">
          <h1 className="text-xl font-mono">
            Total Registrations: {registrations?.length}
          </h1>
          {AUTHORIZED.includes(user.email) ? (
            <h1 className="text-xl font-mono">Total Revenue: Rs.{revenue} </h1>
          ) : (
            <></>
          )}
          <div className="h-1 bg-gray-600 rounded-xl my-4"></div>
          <h1 className="text-xl font-mono">
            Verified Registrations:{" "}
            <span className="text-green-500">
              {verifiedRegistrations?.length}
            </span>
          </h1>
          {AUTHORIZED.includes(user.email) ? (
            <h1 className="text-xl font-mono">
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
          const subject = "Your Custom Email Subject";
          const body = `Dear <team name>,  

Thank you for registering for *Cyberthon*! We are thrilled to have you join us for this exciting event.  

Important Information:  
- Event Date: 1st Feb 2025 to 2nd Feb 2025 
- Venue: YuniQ, TIDEL building 4th floor
https://maps.app.goo.gl/fGkChGHEGTh8Dx3y8   

To ensure a smooth check-in process, we kindly request you to bring the following on the day of the event:  
1. Registration ID (provided at the time of registration).  
2. Payment Confirmation Screenshot (as proof of payment).  

We will provide ID cards to all participants at the venue during check-in. Upon entry please show us your registration ID and payment screenshot to receive your ID card and access the event.  

If you have any questions or need further assistance, feel free to contact us at hello@cybercarnival.in or +91 9384918930.  

We look forward to seeing you at Cyberthon and sharing an incredible experience together!  

Best regards,  
CyberCarnival Team
          `;

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
                  <h1 className="text-xl font-mono w-1/12">{index + 1}</h1>
                  <h1 className="text-xl font-mono ">{row.email}</h1>
                  <h1
                    className={`text-xl font-mono  font-bold ${
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
                    className="text-xl font-extrabold font-sans w-1/12"
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
                    className={`w-full border-2 border-black p-4 my-2 rounded-2xl relative max-h-[800px] justify-center`}
                  >
                    <div className="flex flex-col w-1/2 pr-8">
                      <img
                        src={row.screenshotUrl}
                        className="object-contain h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-xl font-mono ">
                        Registration ID: {row.id}
                      </h1>

                      {row.teamName && (
                        <h1 className="text-xl font-mono ">
                          Team Name: {row.teamName}
                        </h1>
                      )}

                      <h1 className="text-xl font-mono ">Name: {row.name}</h1>
                      {row.member2 && (
                        <h1 className="text-xl font-mono ">
                          Member 2: {row.member2}
                        </h1>
                      )}
                      {row.member3 && (
                        <h1 className="text-xl font-mono ">
                          Member 3: {row.member3}
                        </h1>
                      )}
                      {row.member4 && (
                        <h1 className="text-xl font-mono ">
                          Member 4: {row.member4}
                        </h1>
                      )}
                      {row.member5 && (
                        <h1 className="text-xl font-mono ">
                          Member 5: {row.member5}
                        </h1>
                      )}
                      <h1 className="text-xl font-mono ">Email: {row.email}</h1>
                      <h1 className="text-xl font-mono">
                        Phone: {row.phone || row.contact}
                      </h1>
                      <h1 className="text-xl font-mono">
                        Institution: {row.college}
                      </h1>
                      <h1 className="text-xl font-mono">
                        Transaction ID: {row.transactionID}
                      </h1>
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
