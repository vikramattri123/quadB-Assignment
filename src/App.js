import logo from './logo.svg';
import './App.css';
import Movies_Navbar from './Components/Movies_Navbar';
import { useEffect } from 'react';
import Movies_Dashboard from './Components/Movies_Dashboard';
import { useDispatch } from 'react-redux';
import { Movies_Data_Action } from './Global_State_Management/Movie_Store';
import { Route, Routes } from 'react-router-dom';
import Movies_Summary from './Components/Movies_Summary';


function App() {

  const dispatch = useDispatch();

useEffect(() =>
{
   const FetchData = async() =>
   {
        const response  =  await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
       for(let i=0;i<data.length;i++)
       {
         dispatch(Movies_Data_Action.AddMovie({
         data:data[i].show
         }));
       }

   }
   FetchData();
},[])

  return (
   <>
   <Movies_Navbar/>
   <Routes>
     <Route path="/" element={<Movies_Dashboard/>} exact></Route>
     <Route path="/movie_detail/:movie_id" element={<Movies_Summary/>} exact></Route>
  
   </Routes>
   </>
  );
}

export default App;
