import React, { useState } from 'react'
import login from '../signandlogin/login.module.css'
import { useNavigate } from 'react-router-dom';

function Login({setLoggedIn,setUser}) {
  let [logindata, setlogindata] = useState({
    name: '',
    password: ''
  });
  let getlogindata=({target:{name,value}})=>{
    setlogindata({...logindata,[name]:value})
  }
  let navigate=useNavigate()
  
  let getdata = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let registeredUser = users.find(user => 
      user.name === logindata.name && 
      user.password === logindata.password
    );

    
    if (registeredUser &&
      registeredUser.name === logindata.name &&
      registeredUser.password === logindata.password) {
      setLoggedIn(true);
      setUser(registeredUser);
      alert("login succesfull")
      navigate('/omdbmovies')
    } else {
      alert('Invalid Credentials');
    }
  }

  return (
    <div>
       <form onSubmit={getdata}  className={login["login"]}>
      <h2>Login</h2>
      <div  className={login["lgn"]}>
      <input type="text" name="name" placeholder="enter your name" onChange={getlogindata} value={logindata.name}  required />
      <br/>
      <input type="password" name="password" placeholder="Password" onChange={getlogindata}  value={logindata.password}  required />
      </div>
      <br/>
      <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login
