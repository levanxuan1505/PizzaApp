import {createSlice, nanoid} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newToCart: never = {
        // id: action.payload.id,
        id: nanoid(),
        name: action.payload.name,
        ingredients: action.payload.ingredients,
        image: action.payload.image,
        title: action.payload.title,
        price: action.payload.price,
        priceTotal: action.payload.priceTotal,
        toping1: action.payload.toping1,
        toping2: action.payload.toping2,
        toping3: action.payload.toping3,
        value1: action.payload.value1,
        value2: action.payload.value2,
        value3: action.payload.value3,
        size: action.payload.size,
        toping1Check: action.payload.toping1Check,
        toping2Check: action.payload.toping2Check,
        toping3Check: action.payload.toping3Check,
        numberOfToping: action.payload.numberOfToping,
        value1Check: action.payload.value1Check,
        value2Check: action.payload.value2Check,
        value3Check: action.payload.value3Check,
      };

      state.unshift(newToCart);
    },
    changeFoodInCart(state, action) {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        // ✅ CORRECT: This object is still wrapped in a Proxy, so we can "mutate" it
        todo.name = action.payload.name;
        todo.ingredients = action.payload.ingredients;
        todo.image = action.payload.image;
        todo.title = action.payload.title;
        todo.price = action.payload.price;
        todo.priceTotal = action.payload.priceTotal;
        todo.toping1 = action.payload.toping1;
        todo.toping2 = action.payload.toping2;
        todo.toping3 = action.payload.toping3;
        todo.value1 = action.payload.value1;
        todo.value2 = action.payload.value2;
        todo.value3 = action.payload.value3;
        todo.size = action.payload.size;
        todo.toping1Check = action.payload.toping1Check;
        todo.toping2Check = action.payload.toping2Check;
        todo.toping3Check = action.payload.toping3Check;
        todo.numberOfToping = action.payload.numberOfToping;
        todo.value1Check = action.payload.value1Check;
        todo.value2Check = action.payload.value2Check;
        todo.value3Check = action.payload.value3Check;
      }
    },

    removeCart: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
  },
});
export const {addToCart, removeCart, changeFoodInCart} = cartSlice.actions;
export default cartSlice.reducer;
