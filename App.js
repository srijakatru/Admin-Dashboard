import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';  // Import Link from react-router-dom
import './App.css';  // Import CSS for styling
import Users from './pages/Users';  // Import Users component
import Roles from './pages/Roles';  // Import Roles component
import Permissions from './pages/Permissions';  // Import Permissions component

function App() {
  return (
    <div>
      <Routes>  {/* Define routes */}
        <Route path="/" element={<MainPage />} />  {/* Default route (MainPage) */}
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </div>
  );
}

// MainPage component displaying 3 boxes (User, Role, Permission)
function MainPage() {
  return (
    <div className="container">
      <div className="box">
        <Link to="/users">
          <div className="box-content">
            <img src="/user-icon.jpg" alt="User Management" className="box-image" />
            <h3>User Management</h3>
          </div>
        </Link>
      </div>
      <div className="box">
        <Link to="/roles">
          <div className="box-content">
            <img src="/role.jpg" alt="Role Management" className="box-image" />
            <h3>Role Management</h3>
          </div>
        </Link>
      </div>
      <div className="box">
        <Link to="/permissions">
          <div className="box-content">
            <img src="/per.jpg" alt="Permission Management" className="box-image" />
            <h3>Permission Management</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
