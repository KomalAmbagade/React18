import React, { useRef } from 'react';
import './index.css'
function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
  
    usernameRef.current.value='';
    passwordRef.current.value='';
     window.alert('Login successful!')
    console.log({ username, password });
  };

  return (
    <div  className='forms'>
    <form onSubmit={handleSubmit} className='content'>

     <div className="imgcontainer">
        <img src="https://th.bing.com/th/id/R.5522155776f935b968ee033b378c7dce?rik=oHI71v3KwMtjtA&riu=http%3a%2f%2fwww.w3schools.com%2fhowto%2fimg_avatar2.png&ehk=v5Am%2bIj3lmC1HosplNbkqiz5jntcbPnbQ%2bvttJpmDHA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Avatar" class="avatar" />
     </div>
      
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter Username" ref={usernameRef}  required />
      
      
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter Password" ref={passwordRef} required/>
     
      <button type="submit">Login</button>
  
    </form>
    </div>
  );
}

export default App;
