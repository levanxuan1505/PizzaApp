import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import cartReducer from './cartSlice';
import cartSumReducer from './cartSum';
import bookmarkReducer from './bookmarkSlice';
import locationReducer from './locationSlice';
import paymentReducer from './paymentSlice';
import voucherReducer from './voucherSlice';
export default configureStore({
  reducer: {
    notification: notificationReducer,
    cart: cartReducer,
    sum: cartSumReducer,
    bookmark: bookmarkReducer,
    location: locationReducer,
    payment: paymentReducer,
    voucher: voucherReducer,
  },
});
