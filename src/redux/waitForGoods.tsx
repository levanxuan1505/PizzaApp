import {createSlice} from '@reduxjs/toolkit';
export const waitForGoodSlice = createSlice({
  name: 'waitForGood',
  initialState: [],
  reducers: {
    addForGood: (state, action) => {
      const waitForGood: never = action.payload.items;
      state.unshift(waitForGood);
    },
    removeToDelivery: (state, action) => {
      return state.filter((item: any) => item[0].id !== action.payload.id);
    },
  },
});
export const {addForGood, removeToDelivery} = waitForGoodSlice.actions;
export default waitForGoodSlice.reducer;
