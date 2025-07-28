// src/context/PatientsContext.jsx
import React, { createContext, useContext, useState } from "react";
import patientData from "../data/patients.json";

// Create a context for the patient data
const PatientsContext = createContext();

// Allowed statuses
export const allowedStatuses = [
  "Checked In",
  "Pre-Procedure",
  "In-progress",
  "Closing",
  "Recovery",
  "Complete",
  "Recovery completed",
  "Dismissal"
];

// Context provider component
export const PatientsProvider = ({ children }) => {
  // Initialize state with JSON data
  const [patients, setPatients] = useState(patientData);

  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientsContext.Provider>
  );
};

// Hook to use patients in any component
export const usePatients = () => useContext(PatientsContext);