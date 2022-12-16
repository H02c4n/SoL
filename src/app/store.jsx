import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../features/articleSlice";




const store = configureStore({
    reducer:{
        article :articleReducer
    },
    devTools:process.env.NODE_ENV !== 'production',
})


export default store;