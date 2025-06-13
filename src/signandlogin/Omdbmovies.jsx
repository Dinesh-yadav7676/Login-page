import axios from 'axios';
import React, { useEffect, useState } from 'react'
import moviese from '../signandlogin/omdb.module.css'
import { Link, useNavigate } from 'react-router-dom';

function Omdbmovies() {
 let[movies,setmovies]=useState([]);
 let getmovies=async()=>{
    let {data:{Search}}=await axios.get("http://www.omdbapi.com/?s=don&apikey=c9c2a901")
    setmovies(Search);
    console.log(Search)
    


 }

 useEffect(()=>{
    getmovies()
},[])
let navigate=useNavigate()
 
let getdetails=()=>{
 navigate('/moviedetails')
}
  return (
    <div  className={moviese["movies"]}>
  
    {movies.map(({Title,Poster,Year,imdbID})=>{
        return <Link className={moviese["movi"]} key={imdbID} to={`/moviedetails/${imdbID}`} >
        <div className={moviese['img']}>
        <img src={Poster}></img>
        </div>
        <div className={moviese["details"]}>
        <h3>{imdbID}</h3>
            <h3>{Title.slice(0,20)}</h3>
            <h3>{Year}</h3>
            <button onClick={getdetails}>Show more</button>
            </div>
            </Link>
       
    })
    }
      
    </div>
  )
}

export default Omdbmovies
