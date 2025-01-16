import React, { useState } from "react";
import { useAppContext } from "./context";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase_config";

function Event() {
  const { data, eventFees, verifiedList, setToggle, verifiedData, user } =
    useAppContext();
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
      <h1 className="text-4xl font-mono font-bold my-4">{id}</h1>
      <div>
        <div className="flex">
          <div className="m-10">
            <h1 className="text-3xl font-mono">
              Total Registrations: {registrations?.length}
            </h1>
            <h1 className="text-3xl font-mono">
              Total Revenue : Rs.{revenue}{" "}
            </h1>
          </div>
          <div className="m-10">
            <h1 className="text-3xl font-mono">
              Verified Registrations: {verifiedRegistrations?.length}
            </h1>
            <h1 className="text-3xl font-mono">
              Verified Revenue : Rs.{verifiedRevenue}{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {registrations?.map((row, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full my-1 px-1"
          >
            <>
              <div className="flex w-full border-2 border-black p-4 justify-between">
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
                  {verifiedList.includes(row.id) ? "Verified" : "Not-Verified"}
                </h1>
                <button
                  className="text-xl font-extrabold font-sans"
                  onClick={() => setCurrentOpen(index)}
                >
                  V
                </button>
              </div>
              {currentOpen === index && (
                <div className="flex w-full border-2 border-black p-4 my-2 rounded-2xl relative max-h-[800px] justify-center">
                  <button
                    onClick={() => setCurrentOpen(null)}
                    className="absolute top-0 right-0 m-4 text-xl font-extrabold font-sans"
                  >
                    X
                  </button>
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
                      className={`w-full h-10 bg-green-900 text-white rounded-xl`}
                      onClick={() => handleVerification(row.id)}
                    >
                      {verifiedList.includes(row.id)
                        ? "Verified"
                        : "Add to Verified"}
                    </button>
                  </div>
                </div>
              )}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
