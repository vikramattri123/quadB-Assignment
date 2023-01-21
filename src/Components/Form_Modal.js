import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import classes from '../Css/Form_Modal.module.css';
import { Movies_Data_Action } from '../Global_State_Management/Movie_Store';
const Backdrop = (props) =>
{
   return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) =>
{
  const [First_Name , setFirstName] = useState(''); 
  const [Last_Name , setLastName] = useState(''); 

  const [date,setdate] = useState('');

  const [booking_message,setmessage] = useState('');

  const dispatch =useDispatch();


  const Time = props.Movie_Duration.slice(0,2);
  const Time_Zone = Time >= 12 ? 'PM' :'AM';

  const Movie_Time = props.Movie_name;

  const Movie_Language = props.Movie_Language;


  const Booking_Show =(e) =>
  {
   e.preventDefault();

   const user_data = {
    id:Math.random(),
    First_Name,
    Last_Name,
    date,
    Movie_Time,
    Movie_Language
   }
   dispatch(Movies_Data_Action.Book_Movie_Show(user_data));
   setmessage('Ticket Booked successfully')
  }
   return (
    <div className={classes.modal}>
        <header className={classes.header}>
            <div style={{display:'flex',gap:'20px',flexDirection:'row',width:'500px',fontSize:'13px'}}>
               <img src={props.Movie_Image} width="120px" height="180px"/>
         
               <form style={{width:'500px'}}>
  <div class="form-row">
    <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
    <div class="col-sm-6 mb-4">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}  required/>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" onChange={(e)=> setLastName(e.target.value)} required/>
    </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
    <div class="col-sm-5 mb-5">
      <label for="validationDefault01">Movie name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="Movie name" value={props.Movie_name} required/>
    </div>
    <div class="col-sm-5 mb-3">
      <label for="validationDefault02">Show Time</label>
      <input type="date" class="form-control" id="validationDefault02" placeholder="Last name" value={date} onChange={(e) => setdate(e.target.value)} required/>
    </div>
    <div class="col-sm-5 mb-3">
      <label for="validationDefault02">Language</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value={props.Movie_Language} required/>
    </div>
    </div>
    
  </div>
  <button class="btn btn-primary"  onClick={Booking_Show} style={{backgroundColor:'red'}}>Book Ticket</button>
    <p style={{color:'green',marginTop:'20px'}}>{booking_message}</p>


</form>
            
</div>
        </header>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Close</button>
        </footer>
      </div>
   )
}

const Form_Modal = (props) => {
  console.log("e"+props.Movie_Duration);
  return (
   <>
   {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
   {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} Movie_Day={props.Movie_Day} Movie_Duration={props.Movie_Duration} Movie_Image={props.Movie_Image} Movie_name={props.Movie_name} Movie_Language={props.Movie_Language}/>,document.getElementById('overlay-root'))}
   </>
  )
}

export default Form_Modal