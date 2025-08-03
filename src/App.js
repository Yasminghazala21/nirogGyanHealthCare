import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"
import DoctorProfilePage from "./pages/DoctorProfilePage"
import BookAppointmentPage from "./pages/BookAppointmentPage"
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/book/:id" element={<BookAppointmentPage />} />
      </Routes>
    </Router>
  )
}

export default App
