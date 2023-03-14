import {createSlice} from '@reduxjs/toolkit';
export const foodSlice = createSlice({
  name: 'food',
  initialState: [{id: 0}],
  reducers: {
    addFood: (state, action) => {
      state[0].id = action.payload.id;
    },
  },
});
export const {addFood} = foodSlice.actions;
export default foodSlice.reducer;
