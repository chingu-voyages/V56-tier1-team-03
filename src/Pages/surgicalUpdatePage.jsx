import React, { useState, useContext, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PatientContext } from "../contexts/PatientContext";
import { STATUSES } from "../data/mockData";

const SurgicalUpdatePage = () => {
  const { patients, updatePatient } = useContext(PatientContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const patientId = searchParams.get("id");
  const patient = patients.find((p) => p.id === patientId);

  const [newStatus, setNewStatus] = useState("");

  const allowedStatuses = useMemo(() => {
    if (!patient) return [];
    const idx = STATUSES.indexOf(patient.currentStatus);
    const options = [];
    if (idx > 0) options.push(STATUSES[idx - 1]); // previous
    if (idx < STATUSES.length - 1) options.push(STATUSES[idx + 1]); // next
    return options;
  }, [patient]);

  if (!patient) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Patient not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newStatus) {
      alert("Please select a new status");
      return;
    }
    updatePatient(patient.id, {
      currentStatus: newStatus,
      lastUpdated: new Date().toISOString(),
    });
    navigate("/surgicalDashboard");
  };

  const statusColors = {
    "Checked In": "var(--status-checked-in)",
    "Pre-Procedure": "var(--status-pre-procedure)",
    "In-Progress": "var(--status-in-progress)",
    "Recovery": "var(--status-recovery)",
    "Complete": "var(--status-complete)",
    "Closing": "var(--status-closing)",
    "Dismissal": "var(--status-dismissal)",
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center p-6">
        Update Patient Status
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mb-20">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xl font-bold mb-3">Patient ID</label>
              <input
                type="text"
                value={patient.id}
                readOnly
                className="w-full border-2 border-gray-300 px-3 py-3 rounded-lg cursor-not-allowed"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xl font-bold mb-3">
                Current Status
              </label>
              <input
                type="text"
                value={patient.currentStatus}
                readOnly
                className="w-full border-2 border-gray-300 px-3 py-3 rounded-lg cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-xl font-bold mb-3">New Status</label>
            <select
              required
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full border-2 border-gray-300 px-3 py-3 rounded-lg"
            >
              <option value="">-- Select New Status --</option>
              {allowedStatuses.map((status) => (
                <option
                  key={status}
                  value={status}
                  style={{
                    backgroundColor: statusColors[status] || "white",
                    color: "#000",
                  }}
                >
                  {status}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="block mx-auto w-full text-lg bg-blue-500 font-medium text-white py-4 rounded-md hover:bg-blue-600 transition"
          >
            Update Status
          </button>
        </form>
      </div>
    </>
  );
};

export default SurgicalUpdatePage;