import {createSlice} from '@reduxjs/toolkit';
export const optionSizeSlice = createSlice({
  name: 'size',
  initialState: [{size: 0}],
  reducers: {
    chooseSize: (state, action) => {
      state[0].size = action.payload.size;
    },
  },
});
export const {chooseSize} = optionSizeSlice.actions;
export default optionSizeSlice.reducer;
