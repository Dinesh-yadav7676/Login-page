import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signup from '../signandlogin/signup.module.css';

function Signup() {
  let [inputdata, setinputdata] = useState({ name: "", password: "", email: "", phone: "" });
  const navigate = useNavigate(); 

  let inputchange = ({ target: { value, name } }) => {
    setinputdata({ ...inputdata, [name]: value });
  };

  let submitdata = (e) => {
    
   let user=  JSON.parse(localStorage.getItem('users')) || [];

   user.push(inputdata)

   

    localStorage.setItem('users', JSON.stringify(user));
    alert('User registered successfully!');
    navigate('/login'); 
  };

  return (
    <div>
      <form onSubmit={submitdata} className={signup["signup"]}>
        <h1>Signup</h1>
        <div className={signup["inp"]}>
          <input type='text' name='name' placeholder='Enter name' onChange={inputchange} />
          <br />
          <input type='password' name='password' placeholder='Enter password' onChange={inputchange}  />
          <br />
          <input type='email' name='email' placeholder='Enter email' onChange={inputchange}  />
          <br />
          <input type='phone' name='phone' placeholder='Enter mobile number' onChange={inputchange} />
          <br />
          <select name="profession" onChange={inputchange}>
            <option value="">Select Profession</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
