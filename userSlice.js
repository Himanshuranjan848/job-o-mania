import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username:null,
    companyname:null,
    email:null,
    img: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser : (state , action)=>{
      state.username = action.payload.username
      state.companyname = action.payload.companyname
      state.email = action.payload.email
      state.img = action.payload.img
    },
    setUserLogout : (state) =>{
      state.username = null
      state.companyname = null
      state.email = null
      state.img = null
    }
  },
});

export const {setActiveUser , setUserLogout} = userSlice.actions;

export const selectUsername = (state) =>{
  return state;
}


export default userSlice.reducer;