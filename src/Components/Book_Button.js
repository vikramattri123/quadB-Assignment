import React from 'react'
import { useState } from 'react';
import Form_Modal from './Form_Modal';
const Book_Button = ({value,Data}) => {

  console.log(Data.schedule);
  const [form_status,setform] = useState(false);

    const Submit_Data = (e) =>
    {
        e.preventDefault();
        // onSubmitHandler()
        setform(true);
    }

    const Change_Form_Status = () =>
    {
      setform(!form_status);
    }
  return (
    <>
    <div >
    <button onClick={Submit_Data} style={{width:'150px',borderRadius:'13px',marginTop:'16px',height:'50px',color:'whitesmoke',backgroundColor:'red',border:'0px'}}>{value}</button>
    </div>
   {form_status && <Form_Modal Movie_name={Data.name} Movie_Image={Data.image.medium} Movie_Duration={Data.schedule.time} Movie_Day={Data.schedule.days} Movie_Language={Data.language} onConfirm={Change_Form_Status}></Form_Modal>}
    </>
    
  )
}

export default Book_Button