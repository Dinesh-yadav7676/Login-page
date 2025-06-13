import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './signandlogin/Signup'
import Login from './signandlogin/Login'
import Omdbmovies from './signandlogin/Omdbmovies';
import Moveidetails from './signandlogin/Moveidetails';

function App() {
  let [LoggedIn, setLoggedIn] = useState(false);
  let [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element=
    {<Navigate to={"/signup"}/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      

      <Route path='/Login' element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
      <Route path='/omdbmovies' element={<Omdbmovies/>}/>
      <Route path='/moviedetails/:imdbID' element={<Moveidetails/>}/>
      
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
