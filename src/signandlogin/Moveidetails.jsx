import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Moveidetails() {
    let { imdbID } = useParams()  // Extracting imdbID from the URL params
    let pid = imdbID
    console.log(pid)

    let [moviedetails, setmoviedetails] = useState([])

    let hitapi = async () => {
        try {
            let { data:{Search} } = await axios.get(`http://www.omdbapi.com/?s=don&apikey=c9c2a901`)
            if (Search) {
                setmoviedetails(Search)
            } else {
                console.log(data.Error) 
            }
        } catch (error) {
            console.error('Error fetching movie details:', error)
        }
    }

    useEffect(() => {
        hitapi()
    }, [])

    let mdetails = moviedetails.find(({ imdbID }) => imdbID === pid)
    console.log(mdetails)

    return (
        <div>
            {mdetails &&
                <div >
                    <h1>{mdetails.Title} ({mdetails.Year})</h1>
                   <img src={mdetails.Poster}></img>
                </div>
            }
        </div>
    )
}

export default Moveidetails
