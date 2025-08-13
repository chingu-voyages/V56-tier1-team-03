import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const GuestStatusPage = () => {
  const { patientId } = useParams();
  const location = useLocation();
  const patient = location.state?.patient;

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'in-progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'pre-procedure':
      return 'bg-blue-100 text-blue-800';
    case 'recovery':
      return 'bg-purple-100 text-purple-800';
    case 'complete':
      return 'bg-green-100 text-green-800';
    case 'checked in':
      return 'bg-indigo-100 text-indigo-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-sky-100 px-4 pt-8">
      <h1 className="text-3xl font-bold mb-2">Patient Status</h1>
      <p className="mb-6 text-gray-600">Showing status for Patient ID: {patientId}</p>

      {patient ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl text-center">
          {/* Patient Name */}
          <p className="text-2xl font-semibold mb-3">{patient.name}</p>

          {/* Patient ID */}
          <p className="text-base text-gray-500 mb-3">Patient ID: {patientId}</p>

          {/* Procedure */}
          <p className="text-base font-semibold text-gray-700">Procedure:</p>
          <p className="text-lg text-gray-600 mb-6">{patient.procedure}</p>

          {/* Status Badge */}
          <p className="text-base font-semibold text-gray-700">Status:</p>
          <span
            className={`inline-block px-6 py-2 rounded-full text-base font-medium ${getStatusColor(
              patient.currentStatus
            )}`}
          >
            {patient.currentStatus}
          </span>

          {/* Last Updated */}
          <p className="mt-6 text-sm text-gray-500">
            Last Updated: {patient.lastUpdated}
          </p>
        </div>
      ) : (
        <p className="mt-4 text-red-500">
          No patient details available — please search again.
        </p>
      )}
    </div>
  );
};

export default GuestStatusPage;