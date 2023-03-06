import {createSlice} from '@reduxjs/toolkit';
export const cartSum = createSlice({
  name: 'sum',
  initialState: 189,
  reducers: {
    addToSum: (state, action) => {
      return state + action.payload.price;
    },
  },
});
export const {addToSum} = cartSum.actions;
export default cartSum.reducer;
