import {createSlice, nanoid} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    {
      id: '1',
      name: 'Pizza hải sản',
      ingredients: 'Seafood Pizza',
      price: '189',
      image: require('../assets/flashList/meatPizza.png'),
      title:
        'Ngon mê ly với món pizza hải sản đầy ụ nhân này. Mùi phô mai nướng lên hòa lẫn với mùi thơm của hải sản, các loại rau củ sẽ khiến bạn phải phát thèm. Đế bánh mỏng, nóng giòn, kết hợp với phần sốt cà chua đậm đà, tôm và mực tươi ngon, chắc thịt. Thêm vào đó một chút giòn giòn, ngọt ngọt của ớt chuông. Tất cả hải sản và rau củ ngập trong phô mai béo ngậy, tan chảy cực thích. Bạn sẽ không cưỡng lại sức hấp dẫn của món bánh này đâu.',
    },
  ],
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
      state.push(newToCart);
    },
    removeCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});
export const {addToCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;
