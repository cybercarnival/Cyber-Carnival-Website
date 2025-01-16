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
        <div className="flex flex-col h-48 w-80 border-2 border-gray-600 m-6 bg-neutral-800 rounded-xl p-5 text-white justify-center">
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
        {registrations?.map((row, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-9/12 my-1 px-1"
          >
            <>
              <div className="flex w-full border-2 border-black p-4 justify-between rounded-xl">
                <h1 className="text-xl font-mono w-1/6">{index + 1}</h1>
                <h1 className="text-xl font-mono w-1/6">{row.name}</h1>
                <h1 className="text-xl font-mono w-1/6">{row.email}</h1>
                <h1
                  className={`text-xl font-mono w-1/6 font-bold ${
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
                  className="text-xl font-extrabold font-sans"
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
                    <h1 className="text-xl font-mono">Phone: {row.phone}</h1>
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
                  </div>
                </motion.div>
              }
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
