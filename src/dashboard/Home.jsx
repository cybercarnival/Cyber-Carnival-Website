import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts";
import { useAppContext } from "./context";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase_config";
import { signOut } from "firebase/auth";
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
function Home() {
  const {
    data,
    dataset,
    totalRegistrations,
    totalRevenue,
    verifiedData,
    verifiedDataset,
    verifiedTotalRegistrations,
    verifiedTotalRevenue,
    user,
    setUser,
    AUTHORIZED,
  } = useAppContext();
  const { width, height } = useWindowSize();
  console.log(width);
  const nav = useNavigate();
  const chartSetting = {
    xAxis: [
      {
        label: "Registrations",
      },
    ],
    width: width < 850 ? 300 : 800,
    height: width < 850 ? 190 : 400,
  };

  function valueFormatter(value) {
    return `${value}`;
  }
  function handleLogout() {
    console.log("clicked");
    signOut(auth);
    setUser(null);
  }
  if (!user) {
    return <Navigate to={"/admin"} replace={true} />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <button
        onClick={() => handleLogout()}
        className="h-5 w-20 bg-slate-800 text-white absolute top-0 right-0 m-4 rounded-sm"
      >
        Logout
      </button>
      {AUTHORIZED.includes(user.email) ? (
        <h1 className="sm:text-xl md:text-2xl font-audiowide my-10">
          Overall Registrations and Revenue
        </h1>
      ) : (
        <></>
      )}

      <div className="flex items-center justify-center flex-wrap w-full px-24">
        {AUTHORIZED.includes(user.email) ? (
          <>
            <div className="flex flex-col items-center justify-center border-2 border-black rounded-xl bg-slate-200 m-2">
              <h2 className="my-4 text-3xl font-alumni font-bold">
                Total Registrations : {totalRegistrations}
              </h2>
              <BarChart
                colors={["navy"]}
                dataset={dataset}
                yAxis={[{ scaleType: "band", dataKey: "event" }]}
                sx={{}}
                margin={{ left: 100 }}
                series={[
                  {
                    dataKey: "registrations",
                    label: "Registrations",
                    valueFormatter,
                  },
                ]}
                layout="horizontal"
                grid={{ vertical: true }}
                {...chartSetting}
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border-2 bg-slate-200 m-2">
              <h2 className="my-4 text-3xl font-alumni font-bold">
                Total Revenue : Rs.{totalRevenue}
              </h2>
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: dataset[0]?.revenue,
                        label: width < 850 ? "Tech.." : "Technical",
                      },
                      {
                        id: 1,
                        value: dataset[1]?.revenue,
                        label: width < 850 ? "Non-T.." : "Non-Technical",
                      },
                      {
                        id: 2,
                        value: dataset[2]?.revenue,
                        label: width < 850 ? "Cybe.." : "Cyberthon",
                      },
                      {
                        id: 3,
                        value: dataset[3]?.revenue,
                        label: width < 850 ? "Work.." : "Workshops",
                      },
                      {
                        id: 4,
                        value: dataset[4]?.revenue,
                        label: width < 850 ? "Conc.." : "Conclave",
                      },
                      {
                        id: 5,
                        value: dataset[5]?.revenue,
                        label: width < 850 ? "Awar.." : "Awareness",
                      },
                    ],
                  },
                ]}
                width={width < 850 ? 300 : 500}
                height={width < 850 ? 200 : 200}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {AUTHORIZED.includes(user.email) ? (
        <h1 className="sm:text-xl md:text-2xl font-audiowide my-10">
          Verified Registrations and Revenue
        </h1>
      ) : (
        <></>
      )}
      <div className="flex items-center justify-center flex-wrap w-full px-24 my-8">
        {AUTHORIZED.includes(user.email) ? (
          <>
            <div className="flex flex-col items-center justify-center border-2 border-black rounded-xl bg-teal-100 m-2">
              <h2 className="my-4 text-3xl font-alumni font-bold text-green-800">
                Verified Registrations : {verifiedTotalRegistrations}
              </h2>
              <BarChart
                dataset={verifiedDataset}
                yAxis={[{ scaleType: "band", dataKey: "event" }]}
                sx={{}}
                margin={{ left: 100 }}
                series={[
                  {
                    dataKey: "registrations",
                    label: "Registrations",
                    valueFormatter,
                  },
                ]}
                layout="horizontal"
                grid={{ vertical: true }}
                {...chartSetting}
              />
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border-2 bg-teal-100 m-2">
              <h2 className="my-4 text-3xl font-alumni font-bold text-green-800">
                Verified Revenue : Rs.{verifiedTotalRevenue}
              </h2>
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: verifiedDataset[0]?.revenue,
                        label: width < 850 ? "Tech.." : "Technical",
                      },
                      {
                        id: 1,
                        value: verifiedDataset[1]?.revenue,
                        label: width < 850 ? "Non-T.." : "Non-Technical",
                      },
                      {
                        id: 2,
                        value: verifiedDataset[2]?.revenue,
                        label: width < 850 ? "Cybe.." : "Cyberthon",
                      },
                      {
                        id: 3,
                        value: verifiedDataset[3]?.revenue,
                        label: width < 850 ? "Work.." : "Workshops",
                      },
                      {
                        id: 4,
                        value: verifiedDataset[4]?.revenue,
                        label: width < 850 ? "Conc.." : "Conclave",
                      },
                      {
                        id: 5,
                        value: verifiedDataset[5]?.revenue,
                        label: width < 850 ? "Awar.." : "Awareness",
                      },
                    ],
                  },
                ]}
                width={width < 850 ? 300 : 500}
                height={width < 850 ? 200 : 200}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <div
        className={
          AUTHORIZED.includes(user.email)
            ? "w-full flex flex-col items-center justify-center my-10"
            : "w-full flex flex-col items-center justify-center my-1"
        }
      >
        <h1 className="text-2xl font-audiowide text-black m-4">
          Technical Events
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {data.Tecnical?.map((event) => (
            <div
              key={event.collection}
              onClick={() => nav(`event/${event.collection}`)}
              className="hover:scale-105 hover:shadow-teal-300 cursor-pointer shadow-xl shadow-teal-600 m-4 rounded-md flex items-center justify-center h-48 w-64 bg-teal-800 duration-300"
            >
              <h1 className="text-2xl font-mono text-white">
                {event.collection}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-audiowide text-black m-4">
          Non-Technical Events
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {data.NonTechnical?.map((event) => (
            <div
              key={event.collection}
              onClick={() => nav(`event/${event.collection}`)}
              className="hover:scale-105 hover:shadow-teal-300 cursor-pointer shadow-xl shadow-teal-600 m-4 rounded-md flex items-center justify-center h-48 w-64 bg-teal-800 duration-300"
            >
              <h1 className="text-2xl font-mono text-white">
                {event.collection == "title" ? "BGMI" : event.collection}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-audiowide text-black m-4">Workshops</h1>
        <div className="flex flex-wrap justify-center items-center">
          {data.Workshops?.map((event) => (
            <div
              key={event.collection}
              onClick={() => nav(`event/${event.collection}`)}
              className="hover:scale-105 hover:shadow-teal-300 cursor-pointer shadow-xl shadow-teal-600 m-4 rounded-md flex items-center justify-center h-48 w-64 bg-teal-800 duration-300"
            >
              <h1 className="text-2xl font-mono text-white">
                {event.collection}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-10">
        <h1 className="text-2xl font-audiowide text-black m-4">Other Events</h1>
        <div className="flex flex-wrap justify-center items-center">
          <div
            onClick={() => nav("event/cyberthon")}
            className="hover:scale-105 hover:shadow-teal-300 cursor-pointer shadow-xl shadow-teal-600 m-4 rounded-md flex items-center justify-center h-48 w-64 bg-teal-800 duration-300"
          >
            <h1 className="text-2xl font-mono text-white">Cyberthon</h1>
          </div>
          <div
            onClick={() => nav("event/awareness")}
            className="hover:scale-105 hover:shadow-teal-300 cursor-pointer shadow-xl shadow-teal-600 m-4 rounded-md flex items-center justify-center h-48 w-64 bg-teal-800 duration-300"
          >
            <h1 className="text-2xl font-mono text-white">Awareness</h1>
          </div>
          <div
            onClick={() => nav("event/cyberconclave")}
            className="hover:scale-105 hover:shadow-teal-300 cursor-pointer shadow-xl shadow-teal-600 m-4 rounded-md flex items-center justify-center h-48 w-64 bg-teal-800 duration-300"
          >
            <h1 className="text-2xl font-mono text-white">Conclave</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
