import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import cartReducer from './cartSlice';
import bookmarkReducer from './bookmarkSlice';
import locationReducer from './locationSlice';
import paymentReducer from './paymentSlice';
import voucherReducer from './voucherSlice';
import coinReducer from './coinSlice';
import orderReducer from './orderSlice';
import userReducer from './userSlice';
import foodReducer from './foodSlice';
export default configureStore({
  reducer: {
    notification: notificationReducer,
    cart: cartReducer,
    bookmark: bookmarkReducer,
    location: locationReducer,
    payment: paymentReducer,
    voucher: voucherReducer,
    coin: coinReducer,
    order: orderReducer,
    user: userReducer,
    food: foodReducer,
  },
});
