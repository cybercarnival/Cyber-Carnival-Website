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
      ed.push([
        i.teamName,
        i.name,
        i.member2,
        i.member3,
        i.member4,
        i.email,
        i.contact,
        i.screenshotUrl,
        i.transactionID,
      ]);
    }

    setExcelData(ed);
  }, [verifiedData]);

  const handleExport = () => {
    setIsSubmitting(true);

    const headers = [
      "Team Name",
      "Team Leader",
      "Member 2",
      "Member 3",
      "Member 4",
      "Email",
      "Contact",
      "URL",
      "Transaction ID",
    ];

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
