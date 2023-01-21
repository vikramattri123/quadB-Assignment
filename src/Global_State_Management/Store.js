import { configureStore } from "@reduxjs/toolkit";
import { Store_Data } from "./Movie_Store";

export const store = configureStore({
    reducer:{
        Data_Val : Store_Data.reducer
    }
})
