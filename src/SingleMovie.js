import React,{useState, useEffect } from 'react';
import { NavLink, useParams} from "react-router-dom";
import {API_URL} from "./contex";

const SingleMovie = () => {
  const {id}=useParams();
    const [isLoading, setIsLoading]= useState(true);
    const [movie, setMovie] = useState([]);

    const getMovies = async (url) => {
        try {
            const res =await fetch(url);
            const data =await res.json();
            console.log(data);
            if(data.Response ==="True"){
                setIsLoading(false);
                setMovie(data);
            // }else{
            //     setIsError({
            //         show: "true",
            //         msg: data.Error, 
            //     });
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, 500);

        return () => clearTimeout(timerOut); 
    },[id]);

    if(isLoading) {
      return(
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      );
    }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt=" "/>
        </figure>
        <div className="card-content">
          <p classname="title">{movie.Title}</p>
          <p classname="card-text">{movie.Released}</p>
          <p classname="card-text">{movie.Genre}</p>
          <p classname="card-text">{movie.imdbRating}</p>
          <p classname="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go BAck</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie