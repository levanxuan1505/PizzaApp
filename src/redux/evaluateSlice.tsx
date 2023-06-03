import {createSlice} from '@reduxjs/toolkit';
export const evaluateSlice = createSlice({
  name: 'evaluate',
  initialState: [],
  reducers: {
    addEvaluate: (state, action) => {
      const addEvaluateFood: never = action.payload.items;
      state.unshift(addEvaluateFood);
    },
    removeToComment: (state, action) => {
      return state.filter((item: any) => item[0].id !== action.payload.id);
    },
  },
});
export const {addEvaluate, removeToComment} = evaluateSlice.actions;
export default evaluateSlice.reducer;
