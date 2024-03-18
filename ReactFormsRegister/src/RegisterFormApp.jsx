import React, { useState } from 'react';
import './index.css'
function RegisterFormApp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform registration logic here (e.g., send data to server)
      // For demo purposes, just showing a success message
      setSuccessMessage(`You have successfully registered, ${formData.username}`);
      // Clear the form after successful registration
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    }
  };

  const validateForm = () => {
    if (formData.username.trim() === '') {
      setErrorMessage('Please enter a username.');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const isValidEmail = (email) => {
    // Basic email validation using regular expression
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  return (
    <div className='forms'>
    <div className="registration-form">
      <div className='title'>
      <h1>Registration Form</h1>
      </div>
        
        {successMessage && <p style={{ color: 'green' , fontSize:'20px',fontWeight:"bolder"}} >{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    
      
      <hr />
      <form onSubmit={handleSubmit} >
        <label for="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder='Enter Username'
            required
          />
       
        <br />
        <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter Email'
            required
          />
        
        <br />
        <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Enter Password'
            required
          />
         <hr />
        <br />
        <button type="submit" class="registerbtn">Register</button>
       
        <br/>
        <div class="signin">
           <p>Already have an account? <a href="https://reactloginforms26.netlify.app/">Sign in</a>.</p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default RegisterFormApp;
