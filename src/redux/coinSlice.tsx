import {createSlice} from '@reduxjs/toolkit';
export const coinSlice = createSlice({
  name: 'coin',
  initialState: [
    {
      price: 0,
    },
  ],
  reducers: {
    changeCoin: (state, action) => {
      state[0].price = action.payload.price;
    },
  },
});
export const {changeCoin} = coinSlice.actions;
export default coinSlice.reducer;
