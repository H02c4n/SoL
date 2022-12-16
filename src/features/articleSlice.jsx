import { createSlice } from '@reduxjs/toolkit'

const initialState = {
articles:null,
error:false,
loading:false
}

const articleSlice = createSlice({
  name: "aricle",
  initialState,
  reducers: {
    start:(state) =>{
        state.error = false;
        state.loading = true;
    },
    fail:(state)=>{
        state.loading = false;
        state.error = true;
    },
    success:(state, {payload}) =>{
        state.articles = payload;
    }
  }
});

export const {start, fail, success} = articleSlice.actions

export default articleSlice.reducer