import {createSlice} from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: [
    {
      userName: '',
    },
  ],
  reducers: {
    changeName: (state, action) => {
      state[0].userName = action.payload.userName;
    },
  },
});
export const {changeName} = userSlice.actions;
export default userSlice.reducer;
