import React, { useEffect, useState } from 'react'
import './Banner.css';
import instance from '../instance';
import requests from '../request';

function Banner() {


    const [movie, setMovie] = useState({})

    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData=async()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        setMovie(response.data.results[
            Math.floor(Math.random()*response.data.results.length)
        ]);
    }
    console.log(movie);

useEffect(()=>{
    fetchData()
},[])

  return (
    <div
    className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}${movie.backdrop_path})`
    }}
    >Banner</div>
  )
}

export default Banner