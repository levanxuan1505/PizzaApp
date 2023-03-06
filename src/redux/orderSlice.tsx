import {createSlice} from '@reduxjs/toolkit';
export const orderSlice = createSlice({
  name: 'order',
  initialState: [
    {
      order: 0,
    },
  ],
  reducers: {
    addOrder: (state, action) => {
      state[0].order = action.payload.order;
    },
  },
});
export const {addOrder} = orderSlice.actions;
export default orderSlice.reducer;
