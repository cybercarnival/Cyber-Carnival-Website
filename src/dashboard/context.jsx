import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase_config.js";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AUTHORIZED = [
    "yogavelanbj@gmail.com",
    "vigneshmuraleedharan848@gmail.com",
    "sm1680@srmist.edu.in",
    "abdulaleem.a.official@gmail.com",
    "vr1813@srmist.edu.in",
    "ka2964@srmist.edu.in",
    "shinyduj@srmist.edu.in",
  ];

  const [data, setData] = useState({});
  const [dataset, setDataset] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [verifiedData, setVerifiedData] = useState({});
  const [verifiedDataset, setVerifiedDataset] = useState([]);
  const [verifiedTotalRevenue, setVerifiedTotalRevenue] = useState(0);
  const [verifiedTotalRegistrations, setVerifiedTotalRegistrations] =
    useState(0);
  const [verifiedList, setVerifiedList] = useState([]);
  const [toggle, setToggle] = useState(true);

  const eventFees = {
    cyberconclave: 200,
    capturetheflag: 300,
    cyberthon: 750,
    paperpresentation: 0,
    bugbounty: 250,
    techexpo: 150,
    startup: 0,
    freefire: 200,
    cinema: 250,
    surfing: 250,
    surviva: 150,
    awareness: 0,
    workshop1: 500,
    workshop2: 500,
    title: 150,
    valorant: 250,
  };

  async function getEvents() {
    const collections = [
      "cyberconclave",
      "capturetheflag",
      "cyberthon",
      "paperpresentation",
      "bugbounty",
      "techexpo",
      "startup",
      "surviva",
      "freefire",
      "cinema",
      "surfing",
      "awareness",
      "workshop1",
      "workshop2",
      "title",
      "valorant",
    ];

    const allData = [];
    const Tecnical = [];
    const NonTechnical = [];
    const Cyberthon = [];
    const Workshops = [];
    const Conclave = [];
    const Awareness = [];

    const verifiedAllData = [];
    const verifiedTecnical = [];
    const verifiedNonTechnical = [];
    const verifiedCyberthon = [];
    const verifiedWorkshops = [];
    const verifiedConclave = [];
    const verifiedAwareness = [];

    const newDataset = [
      { registrations: 0, revenue: 0, event: "Technical" },
      { registrations: 0, revenue: 0, event: "Non-Technical" },
      { registrations: 0, revenue: 0, event: "Cyberthon" },
      { registrations: 0, revenue: 0, event: "Workshops" },
      { registrations: 0, revenue: 0, event: "Conclave" },
      { registrations: 0, revenue: 0, event: "Awareness" },
    ];
    const newVerifiedDataset = [
      { registrations: 0, revenue: 0, event: "Technical" },
      { registrations: 0, revenue: 0, event: "Non-Technical" },
      { registrations: 0, revenue: 0, event: "Cyberthon" },
      { registrations: 0, revenue: 0, event: "Workshops" },
      { registrations: 0, revenue: 0, event: "Conclave" },
      { registrations: 0, revenue: 0, event: "Awareness" },
    ];

    const verifiedRef = collection(db, "verified");
    const verifiedSnapshot = await getDocs(verifiedRef);
    const verifiedData = verifiedSnapshot.docs.map((doc) => doc.id);

    for (const col of collections) {
      const colRef = collection(db, col);
      const colSnapshot = await getDocs(colRef);
      const colData = colSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const verifiedDocs = colData.filter((doc) =>
        verifiedData.includes(doc.id)
      );

      if (col === "cyberthon") {
        newDataset[2].registrations += colSnapshot.docs.length;
        newDataset[2].revenue = 26500;

        newVerifiedDataset[2].registrations += verifiedDocs.length;
        newVerifiedDataset[2].revenue = 26500;

        Cyberthon.push({ collection: col, documents: colData });
        verifiedCyberthon.push({ collection: col, documents: verifiedDocs });
      } else if (col === "workshop1" || col === "workshop2") {
        newDataset[3].registrations += colSnapshot.docs.length;
        newDataset[3].revenue += colSnapshot.docs.length * eventFees[col];
        newVerifiedDataset[3].registrations += verifiedDocs.length;
        newVerifiedDataset[3].revenue += verifiedDocs.length * eventFees[col];

        Workshops.push({ collection: col, documents: colData });
        verifiedWorkshops.push({ collection: col, documents: verifiedDocs });
      } else if (col === "awareness") {
        newDataset[5].registrations += colSnapshot.docs.length;
        newDataset[5].revenue += colSnapshot.docs.length * eventFees[col];
        newVerifiedDataset[5].registrations += verifiedDocs.length;
        newVerifiedDataset[5].revenue += verifiedDocs.length * eventFees[col];
        Awareness.push({ collection: col, documents: colData });
        verifiedAwareness.push({ collection: col, documents: verifiedDocs });
      } else if (col === "cyberconclave") {
        newDataset[4].registrations += colSnapshot.docs.length;
        newDataset[4].revenue += colSnapshot.docs.length * eventFees[col];

        newVerifiedDataset[4].registrations += verifiedDocs.length;
        newVerifiedDataset[4].revenue += verifiedDocs.length * eventFees[col];
        Conclave.push({ collection: col, documents: colData });
        verifiedConclave.push({ collection: col, documents: verifiedDocs });
      } else if (
        col === "title" ||
        col === "valorant" ||
        col === "freefire" ||
        col === "cinema" ||
        col === "surfing" ||
        col === "surviva"
      ) {
        newDataset[1].registrations += colSnapshot.docs.length;
        newDataset[1].revenue += colSnapshot.docs.length * eventFees[col];

        newVerifiedDataset[1].registrations += verifiedDocs.length;
        newVerifiedDataset[1].revenue += verifiedDocs.length * eventFees[col];

        NonTechnical.push({ collection: col, documents: colData });
        verifiedNonTechnical.push({ collection: col, documents: verifiedDocs });
      } else if (
        col === "startup" ||
        col === "techexpo" ||
        col === "paperpresentation" ||
        col === "bugbounty" ||
        col === "capturetheflag"
      ) {
        newDataset[0].registrations += colSnapshot.docs.length;
        newDataset[0].revenue += colSnapshot.docs.length * eventFees[col];

        newVerifiedDataset[0].registrations += verifiedDocs.length;
        newVerifiedDataset[0].revenue += verifiedDocs.length * eventFees[col];
        Tecnical.push({ collection: col, documents: colData });
        verifiedTecnical.push({ collection: col, documents: verifiedDocs });
      }
      allData.push({ collection: col, documents: colData });
      verifiedAllData.push({ collection: col, documents: verifiedDocs });
    }

    let TotalRevenue = 0;
    let TotalRegistrations = 0;
    let verifiedTotalRevenue = 0;
    let verifiedTotalRegistrations = 0;

    for (let j of newDataset) {
      TotalRevenue += j.revenue;
      TotalRegistrations += j.registrations;
    }
    for (let j of newVerifiedDataset) {
      verifiedTotalRevenue += j.revenue;
      verifiedTotalRegistrations += j.registrations;
    }
    setVerifiedList(verifiedData);
    setDataset(newDataset);
    setVerifiedDataset(newVerifiedDataset);
    setData({
      allData,
      Tecnical,
      NonTechnical,
      Cyberthon,
      Workshops,
      Conclave,
      Awareness,
    });
    setVerifiedData({
      verifiedAllData,
      verifiedTecnical,
      verifiedNonTechnical,
      verifiedCyberthon,
      verifiedWorkshops,
      verifiedConclave,
      verifiedAwareness,
    });
    setTotalRevenue(TotalRevenue);
    setVerifiedTotalRevenue(verifiedTotalRevenue);
    setTotalRegistrations(TotalRegistrations);
    setVerifiedTotalRegistrations(verifiedTotalRegistrations);
  }

  useEffect(() => {
    getEvents();
  }, [toggle]);

  return (
    <AppContext.Provider
      value={{
        data,
        verifiedData,
        eventFees,
        dataset,
        verifiedDataset,
        totalRegistrations,
        verifiedTotalRegistrations,
        totalRevenue,
        verifiedTotalRevenue,
        verifiedList,
        setToggle,
        user,
        setUser,
        AUTHORIZED,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
