import  { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from "react-router-dom";

const LoginComponent = () => {
    const {login, error} = useContext(AuthContext);
    const [identityNumber, setidentityNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(identityNumber, password);
    }

  return (
    <div className='w-full h-screen flex pt-5'>
      {/* Left Side of the Page */}
      <div className='w-1/2 bg-white flex flex-col justify-center items-center p-16'>
        <div className="w-full max-w-md">
          <h2 className='text-5xl text-gray-800 mb-6'>
            <span className="text-blue-500 font-bold">Login</span> Hospital Staff
          </h2>
        <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
          <input className="w-full font-bold px-4 py-3 bg-gray-100 rounded-md focus:outline-none" value={identityNumber} onChange={(e) => setidentityNumber(e.target.value)} type='text' placeholder='Enter your staff ID'/>
          <input className="w-full font-bold px-4 py-3 bg-gray-100 rounded-md focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password' /> 
          <div className="text-base font-black text-center text-gray-500 hover:underline cursor-pointer">
            Forgot your password?
          </div>
          <button type='submit' className="block mx-auto w-1/2 text-xl bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
          {error && <p className='text-red-500 mt-4'>{error}</p>} 
        </form>
        </div>
        
      </div>

      {/* Right Side of the Page */}
      <div className="w-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 text-white flex flex-col justify-center items-center p-16 rounded-l-[300px]">
        <div className="w-full max-w-md text-center z-10">
          <h3 className="text-5xl font-semibold mb-2 pb-10">Not a staff member..</h3>
          <p className="text-xl mb-6">Search for the patient?</p>
          <Link to="/search-patient"> {/* Just added a route to the SearchPatientPage */}
          <button className="border-2 font-bold text-xl p-12 border-white px-20 py-6 rounded-md hover:bg-white hover:text-blue-600 transition">
            View Patient
          </button>
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default LoginComponent