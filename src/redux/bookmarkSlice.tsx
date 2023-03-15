import {createSlice, nanoid} from '@reduxjs/toolkit';
export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addToBookmark: (state, action) => {
      const newToBookmark = {
        id: nanoid(),
        name: action.payload.name,
        ingredients: action.payload.ingredients,
        price: action.payload.price,
        image: action.payload.image,
        title: action.payload.title,
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
