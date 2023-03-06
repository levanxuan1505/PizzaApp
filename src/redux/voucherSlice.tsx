import {createSlice} from '@reduxjs/toolkit';
export const voucherSlice = createSlice({
  name: 'voucher',
  initialState: [
    {
      id: '0',
      name: 'Miễn phí vận chuyển',
      price: ' Voucher',
    },
  ],
  reducers: {
    addVoucher: (state, action) => {
      state[0].id = action.payload.id;
      state[0].name = action.payload.name;
      state[0].price = action.payload.price;
    },
  },
});
export const {addVoucher} = voucherSlice.actions;
export default voucherSlice.reducer;
