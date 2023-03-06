import {createSlice} from '@reduxjs/toolkit';
export const paymentSlice = createSlice({
  name: 'payment',
  initialState: [
    {
      name: 'Chọn phương thức thanh toán',
      image: require('../assets/payment/default.jpeg'),
    },
  ],
  reducers: {
    choosePayment: (state, action) => {
      state[0].name = action.payload.name;
      state[0].image = action.payload.image;
    },
  },
});

export const {choosePayment} = paymentSlice.actions;
export default paymentSlice.reducer;
