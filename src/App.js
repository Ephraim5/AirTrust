// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './screen/nav'; // Import Navbar
import Home from './pages/home';
import Auth from './pages/auth';
import { AuthProvider } from './AuthContext';
import ForgotPassword from './pages/forgot';
import Service from './pages/service';
import Mtn from './pages/mtn';
import Glo from './pages/glo';
import Mobile9 from './pages/mobile9';
import Airtel from './pages/airtel';
import ErrorBoundary from './error';
function App() {
  return (
    <AuthProvider>

    <Router>


      {/* Navbar is displayed on all pages */}
      <Navbar />
      
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Additional pages */}
        <Route path="/service" element={<Service/>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/MTN" element={<Mtn />} />
        <Route path="/Glo" element={<Glo />} />
        <Route path="/9mobile" element={<Mobile9 />} />
        <Route path="/Airtel" element={<Airtel />} />
      </Routes>

    </Router>
    </AuthProvider>
  );
}

export default App;
