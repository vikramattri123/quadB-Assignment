import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../Css/Movies_Dashboard.module.css';
import { AiFillStar } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
const Movies_Dashboard = () => {

   const movies_data = useSelector((valuedata) => valuedata.Data_Val.Movie_Data);


  return (
    <> 
    <div className={styles.first_Div}>
    {
      
      movies_data.map((val)=>
      {
        return (
        <>
      
      <div className={styles.second_Div} key={Math.random()}>
          <NavLink to={`/movie_detail/${val.id}`} style={{textDecoration:'none',color:'black'}}>
        <img  src={val.image.medium}  />
       
        <div style={{gap:'2px',marginTop:'4px',display:'flex',flexDirection:'column',padding:'10px'}}>
          <div style={{color:'wheat',marginBottom:'20px'}}>
        <BsPlay style={{backgroundColor:'wheat',color:'black',fontSize:'25px'}} title='Open'/>
        </div>
            <p style={{fontSize:'14px',color:'white',border:'none',outline:'none',borderBottom:'none'}}>{val.name}</p>
            <div style={{display:'flex',flexDirection:'row',fontSize:'15px',gap:'6px'}}>
            {val.genres.map((genres_type) =><h4 style={{fontSize:'14px',fontWeight:'bold',color:'white'}}>{genres_type}</h4>
            )
      }

                  </div>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
            <AiFillStar style={{color:'white',fontSize:'16px',marginTop:'6px'}}/>
            <p style={{fontSize:'16px',color:'white'}}>{val.rating.average ? val.rating.average : 5}/10 IMDB</p>
            </div>
        </div>
        </NavLink>

    </div>
</>
        )
        })
      }
      </div>
    </>
  )
}

export default Movies_Dashboard