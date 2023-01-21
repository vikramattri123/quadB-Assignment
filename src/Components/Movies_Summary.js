import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../Css/Movie_Summary.module.css';
import { AiFillStar } from "react-icons/ai";
import Book_Button from './Book_Button';
import Movie_Detail from './Movie_Detail';
const Movies_Summary = () => {


  //getting params from the url;
    const param = useParams();
    const movie_id = parseInt(param.movie_id);


    // Find the movie from  the params provided in the url ;

    const ALL_Movie_Data = useSelector((data) => data.Data_Val.Movie_Data);
    const Find_Movie = ALL_Movie_Data.filter((val) => val.id === movie_id);

  return (
    <>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',padding:'60px'}}>

    {
        Find_Movie.map((val) =>
        <Movie_Detail val={val} key={val.id}/>)
    }     </div>
    </>
  )
}

export default Movies_Summary