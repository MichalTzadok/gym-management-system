import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminDashboard from './components/Admin/AdminDashboard';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const Home: React.FC = () => (
  <div>
    <h1>Welcome to our service</h1>
    <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
  </div>
);

export default App;
