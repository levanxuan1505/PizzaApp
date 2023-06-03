import {createSlice} from '@reduxjs/toolkit';
export const deliveringSlice = createSlice({
  name: 'delivering',
  initialState: [],
  reducers: {
    addDelivering: (state, action) => {
      const addDeliveringFood: never = action.payload.items;
      state.unshift(addDeliveringFood);
    },
    removeToEvaluate: (state, action) => {
      return state.filter((item: any) => item[0].id !== action.payload.id);
    },
  },
});
export const {addDelivering, removeToEvaluate} = deliveringSlice.actions;
export default deliveringSlice.reducer;
