import {createSlice} from '@reduxjs/toolkit';
export const popUpOptionSlice = createSlice({
  name: 'popUp',
  initialState: [
    {
      isPopUp: false,
    },
  ],
  reducers: {
    changePopUp: (state, action) => {
      state[0].isPopUp = action.payload.isPopUp;
    },
  },
});
export const {changePopUp} = popUpOptionSlice.actions;
export default popUpOptionSlice.reducer;
