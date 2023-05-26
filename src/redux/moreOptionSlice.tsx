import {createSlice} from '@reduxjs/toolkit';
export const moreOptionSlice = createSlice({
  name: 'moreOption',
  initialState: [{option: 100}],
  reducers: {
    chooseMoreOption: (state, action) => {
      state[0].option = action.payload.option;
    },
  },
});
export const {chooseMoreOption} = moreOptionSlice.actions;
export default moreOptionSlice.reducer;
