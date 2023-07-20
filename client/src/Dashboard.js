import React from 'react';
import { useLocation , useNavigate} from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  function decodeUsernameFromEmail(email) {
    var parts = email.split("@");
    
    var username = parts[0];
    
    return decodeURIComponent(username);
  }
  
 const username = decodeUsernameFromEmail(state.email);

 const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/')
 }

  return (
    <div>
      <h1>Welcome, {username}  </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
