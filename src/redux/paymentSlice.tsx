import {createSlice} from '@reduxjs/toolkit';
export const paymentSlice = createSlice({
  name: 'payment',
  initialState: [
    {
      name: 'Chọn phương thức thanh toán',
      image: require('../assets/payment/default.jpeg'),
      title: 'Dễ dàng thanh toán với nhiều lựa chọn',
    },
  ],
  reducers: {
    choosePayment: (state, action) => {
      state[0].name = action.payload.name;
      state[0].image = action.payload.image;
      state[0].title = action.payload.title;
    },
  },
});

export const {choosePayment} = paymentSlice.actions;
export default paymentSlice.reducer;
