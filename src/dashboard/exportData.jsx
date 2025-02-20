import React, { useEffect, useState } from "react";
import { useAppContext } from "./context";
import * as XLSX from "xlsx";

function ExportData({ event }) {
  const { verifiedData } = useAppContext();

  const [excelData, setExcelData] = useState();
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let mapped = verifiedData.verifiedAllData.filter(
      (e) => e.collection == event
    );
    let ed = [];
    for (let i of mapped[0]?.documents) {
      if (event == "cyberconclave") {
        ed.push([
          i.teamName,
          i.name,
          i.member2,
          i.member3,
          i.member4,
          i.college,
          i.email,
          i.contact,
          i.screenshotUrl,
          i.transactionID,
        ]);
      } else if (
        event == "capturetheflag" ||
        event == "bugbounty" ||
        event == "techexpo"
      ) {
        ed.push([
          i.teamName,
          i.name,
          i.member2,
          i.member3,
          i.college,
          i.email,
          i.phone,
          i.screenshotUrl,
          i.transactionID,
        ]);
      } else if (event == "paperpresentation") {
        ed.push([
          i.teamName,
          i.name,
          i.member2,
          i.member3,
          i.member4,
          i.college,
          i.email,
          i.phone,
        ]);
      } else if (event == "startup") {
        ed.push([
          i.startup,
          i.registration,
          i.name,
          i.college,
          i.email,
          i.phone,
        ]);
      } else if (
        event == "surviva" ||
        event == "workshop1" ||
        event == "workshop2" ||
        event == "cyberconclave"
      ) {
        ed.push([
          i.name,
          i.email,
          i.phone,
          i.college,
          i.screenshotUrl,
          i.transactionID,
        ]);
      } else if (event == "freefire" || event == "cinema" || event == "title") {
        ed.push([
          i.teamName,
          i.name,
          i.member2,
          i.member3,
          i.member4,
          i.college,
          i.email,
          i.phone,
          i.screenshotUrl,
          i.transactionID,
        ]);
      } else if (event == "valorant" || event == "surfing") {
        ed.push([
          i.teamName,
          i.name,
          i.member2,
          i.member3,
          i.member4,
          i.member5,
          i.college,
          i.email,
          i.phone,
          i.screenshotUrl,
          i.transactionID,
        ]);
      } else if (event == "awareness") {
        ed.push([i.name, i.email, i.phone, i.college]);
      }
    }

    setExcelData(ed);
  }, [verifiedData]);

  const handleExport = () => {
    setIsSubmitting(true);

    let headers = [];
    if (event == "cyberconclave") {
      headers = [
        "Team Name",
        "Team Leader",
        "Member 2",
        "Member 3",
        "Member 4",
        "Institution",
        "Email",
        "Contact",
        "URL",
        "Transaction ID",
      ];
    } else if (
      event == "capturetheflag" ||
      event == "bugbounty" ||
      event == "techexpo"
    ) {
      headers = [
        "Team Name",
        "Team Leader",
        "Member 2",
        "Member 3",
        "Institution",
        "Email",
        "Contact",
        "URL",
        "Transaction ID",
      ];
    } else if (event == "paperpresentation") {
      headers = [
        "Team Name",
        "Team Leader",
        "Member 2",
        "Member 3",
        "Member 4",
        "Institution",
        "Email",
        "Contact",
      ];
    } else if (event == "startup") {
      headers = [
        "Startup Name",
        "Registration Type",
        "Name",
        "Institution",
        "Email",
        "Contact",
      ];
    } else if (
      event == "surviva" ||
      event == "workshop1" ||
      event == "workshop2" ||
      event == "cyberconclave"
    ) {
      headers = [
        "Team Name",
        "Email",
        "Contact",
        "Institution",
        "URL",
        "Transaction ID",
      ];
    } else if (event == "freefire" || event == "cinema" || event == "title") {
      headers = [
        "Team Name",
        "Team Leader",
        "Member 2",
        "Member 3",
        "Member 4",
        "Institution",
        "Email",
        "Contact",
        "URL",
        "Transaction ID",
      ];
    } else if (event == "valorant" || event == "surfing") {
      headers = [
        "Team Name",
        "Team Leader",
        "Member 2",
        "Member 3",
        "Member 4",
        "Member 5",
        "Institution",
        "Email",
        "Contact",
        "URL",
        "Transaction ID",
      ];
    } else if (event == "awareness") {
      headers = ["Team Name", "Email", "Contact", "Institution"];
    }

    // Add headers to the data
    const sheetData = [headers, ...excelData];

    // Create a new workbook and worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Teams");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, `${event}.xlsx`);

    setIsSubmitting(false);
  };

  return (
    <button
      onClick={handleExport}
      className="w-24 h-10 bg-blue-400 text-white m-2 p-2 border border-blue-950 rounded-xl"
    >
      Export Data
    </button>
  );
}

export default ExportData;
