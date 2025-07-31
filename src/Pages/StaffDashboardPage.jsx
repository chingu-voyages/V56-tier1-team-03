import React from 'react';
import { mockPatients } from '../data/mockData';

const StaffDashboardPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Staff Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Interactive list of all patients currently in the system.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Procedure</th>
              <th className="px-4 py-2 border-b">Current Status</th>
              <th className="px-4 py-2 border-b">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {mockPatients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{patient.id}</td>
                <td className="px-4 py-2 border-b">{patient.name}</td>
                <td className="px-4 py-2 border-b">{patient.procedure}</td>
                <td className="px-4 py-2 border-b">{patient.currentStatus}</td>
                <td className="px-4 py-2 border-b">{patient.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffDashboardPage;