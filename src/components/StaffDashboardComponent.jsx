import { useContext } from "react";
import { Link } from "react-router-dom";
import { PatientContext } from "../contexts/PatientContext";
import { AuthContext } from "../contexts/AuthContext"; // import AuthContext

const statusStyles = {
  "Checked In": "bg-blue-100 text-blue-600",
  "Pre-Procedure": "bg-yellow-100 text-yellow-600",
  "In-Progress": "bg-green-100 text-green-600",
  "Recovery": "bg-purple-100 text-purple-600",
  "Complete": "bg-gray-100 text-gray-600",
};

const StaffDashboardComponent = () => {
  const { patients } = useContext(PatientContext);
  const { user } = useContext(AuthContext); // get current user
  const isSurgical = user?.role?.toLowerCase() === "surgical";

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10 relative">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Staff Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">
          Interactive patient management for hospital staff
        </p>

        {/* Table */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
              <tr>
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Procedure</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Updated</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              {patients.map((patient) => (
                <tr key={patient.id} className="border-t">
                  {/* Patient Name + ID */}
                  <td className="px-6 py-4">
                    <div className="font-semibold">{patient.name}</div>
                    <div className="text-xs text-gray-500">{patient.id}</div>
                  </td>

                  {/* Procedure */}
                  <td className="px-6 py-4">{patient.procedure}</td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusStyles[patient.currentStatus] ||
                        "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {patient.currentStatus}
                    </span>
                  </td>

                  {/* Last Updated */}
                  <td className="px-6 py-4">
                    {new Date(patient.lastUpdated).toLocaleString()}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 space-x-3">
                    {/* Hide Edit if surgical */}
                    {!isSurgical && (
                      <Link
                        to={`/admin/edit-patient?id=${patient.id}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Edit
                      </Link>
                    )}
                    <Link
                      to={`/admin/update-status?id=${patient.id}`}
                      className="text-green-600 hover:underline font-medium"
                    >
                      Update Status
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Add Patient Button - hide if surgical */}
      {!isSurgical && (
         <div className="max-w-6xl mx-auto mt-6 flex justify-end">
      <Link
        to="/admin/add-patient"
        className="bg-blue-500 text-white px-6 py-4 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-900 transition"
      >
        <span className="text-2xl">+</span>
        <span className="font-semibold text-sm">Add patient</span>
      </Link>
    </div>
      )}
    </div>
  );
};

export default StaffDashboardComponent;
