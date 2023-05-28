import {createSlice} from '@reduxjs/toolkit';
export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addToBookmark: (state, action) => {
      const newToBookmark: never = {
        id: action.payload.id,
        name: action.payload.name,
        ingredients: action.payload.ingredients,
        price: action.payload.price,
        image: action.payload.image,
        title: action.payload.title,
        toping1: action.payload.toping1,
        toping2: action.payload.toping2,
        toping3: action.payload.toping3,
        value1: action.payload.value1,
        value2: action.payload.value2,
        value3: action.payload.value3,
      };
      state.unshift(newToBookmark);
    },
    deleteBookmark: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
  },
});
export const {addToBookmark, deleteBookmark} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
