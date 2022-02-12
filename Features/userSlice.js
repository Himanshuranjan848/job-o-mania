import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser : (state , action)=>{
      state.username = action.payload.username
    },
    setUserLogout : (state) =>{
      state.username = null
    }
  },
});

export const {setActiveUser , setUserLogout} = userSlice.actions;

export const selectUsername = (state) =>{
  console.log(state)
  return state.username
}

export default userSlice.reducer;
