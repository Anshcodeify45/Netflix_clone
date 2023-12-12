import request from '../request';
import React, { useState,useEffect } from 'react'
import axios from '../axios';
import "./Banner.css"




function Banner() {
    const [movie ,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
                 const rqst= await axios.get(request.fetchNetflixOriginals)
                setMovie(rqst.data.results[
                    Math.floor(Math.random() * rqst.data.results.length - 1)
                ]);
                return rqst;
        }
        fetchData()
    },[]);
    console.log(movie);

    //if description is more than 500 it will hide
    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "...":str;
    }

  return (
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}
    >
        <div className="banner_content">


            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>


            <div className='banner_btn'>
                <button className="btn">Play</button>
                <button className="btn">My List</button>
            </div>


                <h1 className="banner_decp">
                    {truncate(movie?.overview,150)}
                </h1>
        </div>

        <div className="bnr_fadebottom"></div>
    </header>
  )
}

export default Banner