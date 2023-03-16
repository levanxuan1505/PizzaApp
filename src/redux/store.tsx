import foodReducer from './foodSlice';
import coinReducer from './coinSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import voucherReducer from './voucherSlice';
import paymentReducer from './paymentSlice';
import bookmarkReducer from './bookmarkSlice';
import locationReducer from './locationSlice';
import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    food: foodReducer,
    coin: coinReducer,
    user: userReducer,
    order: orderReducer,
    voucher: voucherReducer,
    payment: paymentReducer,
    location: locationReducer,
    bookmark: bookmarkReducer,
    notification: notificationReducer,
  },
});
