import React, { useState, useEffect } from 'react'
import axios from '../axios';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const baseUrl ="http://image.tmdb.org/t/p/original/";




function Row({title , fetchUrl , isLargerow}) {

    const [movies , setMovies]=useState([]);
    const [trailerUrl ,setTrailer] = useState("");

    //A small piece of code running under a specific condition
    useEffect(()=>{
        //if [],run once when the row is loaded and then dont

        async function fetchData(){
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
        }
        fetchData();
    },[fetchUrl]) ;

    const opts = {
      height: "390",
      width: "100%",
      playerVars : {
        autoplay: 1,
      }
    }

    console.table(movies);

    const handleclick = (movie) =>{
      if(trailerUrl)
      {
        setTrailer('');
      }
      else {
        movieTrailer(movie?.name || "")
        .then(url =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailer(urlParams.get('v'));
        }).catch((error)=> console.log(error))
      }
    }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="poster">
        {movies.map(movie => (
            <img
            key={movie.id} 
            onClick={()=> handleclick(movie)}
            className={`row_poster ${isLargerow && "row_posterLarge"}`} 
            src={`${baseUrl}${isLargerow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row