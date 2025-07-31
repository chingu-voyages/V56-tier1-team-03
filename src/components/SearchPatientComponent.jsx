import { useState } from 'react';
import { FaUsers } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { mockPatients } from '../data/mockData';


/* This Component searches through Patients mockData, and if the id is correct it navigates to the GuestStatusPage (Which still displays nothing) 
It still nedds a few fixes as:
The Need Help? & Learn how to get access to your Patient Id 
Still do nothing
*/


const SearchPatientComponent = () => {
  const [patientId, setPatientId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundPatient = mockPatients.find(
      (patient) => patient.id.toLowerCase() === patientId.toLowerCase()
    );

    if (foundPatient) {
      setError(null);
      navigate('/guest-status', { state: { patient: foundPatient } });
    } else {
      setError('Patient not found. Please check your ID and try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[90%] max-w-6xl h-[80vh] flex shadow-lg rounded-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-tl from-blue-600 to-blue-400 text-white flex flex-col justify-center items-center p-16 rounded-r-[300px]">
          <div className="w-full max-w-md text-center z-10">
            <h3 className="text-5xl font-semibold mb-6">Are you hospital staff?</h3>
            <p className="text-xl font-bold mb-10">Welcome back</p>
            <Link to="/" className="inline-block">
              <button className="border-2 font-bold text-xl px-20 py-6 rounded-md hover:bg-white hover:text-blue-600 transition">
                Staff Login
              </button>
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-16">
          <div className="w-full max-w-md">
            <div className="flex justify-center items-center mb-6">
              <FaUsers className="text-blue-600 w-[80px] h-[80px]" />
            </div>

            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
              <span className="text-teal-500">Find </span>Your Patient
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Enter Patient ID (e.g., A312F2)"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="w-full font-bold px-4 py-3 bg-gray-100 rounded-md focus:outline-none"
              />

              <button
                type="submit"
                className="block mx-auto w-1/2 text-xl bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Patient Status
              </button>

              <div className="text-base font-black text-center text-gray-500 hover:underline cursor-pointer">
                Need Help?
              </div>

              <div className="text-base font-black text-center text-gray-500 hover:underline cursor-pointer">
                Learn how to get access to your Patient ID
              </div>

              {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPatientComponent;
