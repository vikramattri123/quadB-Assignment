import { createSlice } from "@reduxjs/toolkit";

const initialstate = { Movie_Data : [] , My_Movie_Show : []};


export const Store_Data = createSlice({
    name:'Movies',
    initialState:initialstate,
    reducers:
    {
        AddMovie(state,action)
        {
           const GET_DATA =  action.payload.data;
           const NEW_DATA= state.Movie_Data.find((val) => val.id === GET_DATA.id);
           if(!NEW_DATA)
           {
            state.Movie_Data.push(GET_DATA);
           }
        },
        Book_Movie_Show(state,action)
        {
         const GET_DATA =  action.payload;
           const NEW_DATA= state.My_Movie_Show.find((val) => val.id === GET_DATA.id);
           if(!NEW_DATA)
           {
            state.My_Movie_Show.push(GET_DATA);
            
           }
           localStorage.setItem("myshows",JSON.stringify(state.My_Movie_Show));
        }
      
     }
})

export const Movies_Data_Action = Store_Data.actions;

