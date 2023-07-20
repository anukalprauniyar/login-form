import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { useNavigate} from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    // POST request data to backend
    try {
      const response = await fetch('http://localhost:5000/login', {

        method: 'POST',
        // crossDomain: true,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })

      });
  
      const data = await response.json();

    if (response.ok) {
      const token = data.token;
      localStorage.setItem('token',token);
      navigate('/dashboard',
      {
        state: {
          email 
        }
      });
    } else {
        window.alert("Invalid Credentials");

    }
  } catch (error) {
    console.log(error)
  }
  };

  return (
  <div className='container'>
     <div className='sign-in'>
       <form action='submit' method='POST'>
         <h1>Login</h1>
         <div className='social-container'>
          <div className='social'><FontAwesomeIcon icon={faFacebookF} /></div>
          <div className='social'><FontAwesomeIcon icon={faTwitter} /></div>
          </div> 

          <p>or use your account</p>
        
           <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateEmail(e.target.value)}
            placeholder='Email'
            />
           {emailError && <p>{emailError}</p>}
        
        
          
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => validatePassword(e.target.value)}
            placeholder='Password'
          />
          {passwordError && <p>{passwordError}</p>}

          <p>Forget Password</p>
        
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
    
    <div className='model-container'>
      <div className='model-right'>
        <h1>HTML CSS LOGIN FORM</h1>
        <p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used</p>
      </div>
    </div>
  </div>
  );
};

export default Login;
