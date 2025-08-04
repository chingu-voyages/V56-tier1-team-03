import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import LoginPage from './pages/LoginPage';
import PublicDashboardPage from './Pages/PublicDashboardPage';
import GuestStatusPage from './Pages/GuestStatusPage';
import StaffDashboardPage from './Pages/StaffDashboardPage';
import SearchPatientPage from './Pages/SearchPatientPage'; //Created a Page and a route
import AddPatientPage from './Pages/admin/AddPatientPage';
import Footer from './components/Layout/Footer'
import ErrorPage from './Pages/ErrorPage'


function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/waiting-room" element={<PublicDashboardPage />} />
          <Route path="/status/:patientId" element={<GuestStatusPage />} />
          <Route path="/dashboard" element={<StaffDashboardPage />} />
          <Route path="/search-patient" element={<SearchPatientPage />} />
          <Route path="/admin/add-patient" element={<AddPatientPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;