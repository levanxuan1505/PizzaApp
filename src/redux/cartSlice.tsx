import {createSlice, nanoid} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newToCart = {
        // id: action.payload.id,
        id: nanoid(),
        name: action.payload.name,
        ingredients: action.payload.ingredients,
        price: action.payload.price,
        image: action.payload.image,
        title: action.payload.title,
      };

      state.unshift(newToCart);
    },
    removeCart: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
  },
});
export const {addToCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;
