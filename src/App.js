import React, { useState } from "react";
import Papa from "papaparse";
import FileUpload from "./Components/FileUpload";
import AssignmentTable from "./Components/AssignmentTable";
import ErrorMessage from "./Components/ErrorMessage";
import { generateSecretSanta } from "./Utils/AssignmentLogic";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [lastYear, setLastYear] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  const parseCSV = (file, callback) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => callback(results.data),
      error: (err) => setError("Error parsing CSV: " + err.message),
    });
  };

  const handleEmployeeUpload = (e) => {
    if (e.target.files[0]) parseCSV(e.target.files[0], setEmployees);
  };

  const handleLastYearUpload = (e) => {
    if (e.target.files[0]) parseCSV(e.target.files[0], setLastYear);
  };

  const handleGenerate = () => {
    if (!employees.length) {
      setError("Please upload employee list first.");
      return;
    }

    const emails = employees.map((e) => e.Employee_EmailID);
    if (new Set(emails).size !== emails.length) {
      setError("Duplicate email IDs found. Emails must be unique.");
      return;
    }

    const { success, assignments, error } = generateSecretSanta(employees, lastYear);
    if (success) {
      setAssignments(assignments);
      setError(null);
    } else {
      setError(error);
    }
  };

  const downloadCSV = () => {
    const csv = Papa.unparse(assignments);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "secret_santa_assignments.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 grid gap-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🎁 Secret Santa Assignment</h1>

      <FileUpload label="Upload Employees CSV:" onUpload={handleEmployeeUpload} />
      <FileUpload label="Upload Last Year's Assignments (optional):" onUpload={handleLastYearUpload} />

      <button onClick={handleGenerate} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Generate Assignments
      </button>

      {error && <ErrorMessage message={error} />}
      {assignments.length > 0 && <AssignmentTable assignments={assignments} onDownload={downloadCSV} />}
    </div>
  );
}