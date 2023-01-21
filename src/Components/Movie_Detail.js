import React from 'react'
import { AiFillStar } from "react-icons/ai";
import Book_Button from './Book_Button';
const Movie_Detail = ({val}) => {


  const Summary_Data = val.summary.replace( /(<([^>]+)>)/ig, '');
  return (
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'center',gap:'50px'}}> 
     <div >
     <img  src={val.image.medium}  />
     <div style={{backgroundColor:'black',color:'white',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
        {val.status}
     </div>
       </div>
       <div style={{color:'white',marginTop:'10px'}}>
          <h4 style={{fontSize:'28px',fontWeight:'bold'}}>{val.name}</h4>

          <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
          <AiFillStar style={{color:'white',fontSize:'16px',marginTop:'6px'}}/>
          <p style={{fontSize:'16px',color:'white'}}>{val.rating.average ? val.rating.average : 5}/10 IMDB</p>
          </div>
          
          <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
           <div style={{backgroundColor:'rgb(229, 229, 229)',gap:'11px',padding:'2px',display:'flex',flexDirection:'row',color:'black'}} >
           {val.genres.map((genres_type) =><h5 key={Math.random()}>{genres_type}</h5>
)
}
           </div>
           <div style={{backgroundColor:'rgb(229, 229, 229)',padding:'2px',color:'black'}}>
          <h5>{val.language.toUpperCase()}</h5>
          </div>
          </div>
         <div style={{marginTop:'16px',display:'flex',flexDirection:'column',gap:'16px'}}>
          <h6>Duration : {val.averageRuntime} / Min</h6>

          { val.webChannel === null ? <h6>Country : {val.network.country.name} / {val.network.country.code}</h6> : <h6>Country : {val.webChannel.country.name} / {val.webChannel.country.code}</h6> }

          </div>

          <Book_Button   value="Book Ticket" Data={val}></Book_Button>

     </div>
     </div>
     <div style={{marginTop:'30px',color:'white'}}>
        <h2>About the Movie</h2>
        {Summary_Data}

     </div>
     </> 
  )
}

export default Movie_Detail