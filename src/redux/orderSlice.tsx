import {createSlice} from '@reduxjs/toolkit';
export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const newOrder: never = action.payload.food;
      state.unshift(newOrder);
    },
    removeToWaitForGood: (state, action) => {
      return state.filter((item: any) => item[0].id !== action.payload.id);
    },
  },
});
export const {addOrder, removeToWaitForGood} = orderSlice.actions;
export default orderSlice.reducer;
