import foodReducer from './foodSlice';
import coinReducer from './coinSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import voucherReducer from './voucherSlice';
import paymentReducer from './paymentSlice';
import optionSizeReducer from './optionSizeSlice';
import moreOptionReducer from './moreOptionSlice';
import bookmarkReducer from './bookmarkSlice';
import popUpOptionReducer from './popUpOptionSlice';
import locationReducer from './locationSlice';
import evaluateReducer from './evaluateSlice';
import waitForGoods from './waitForGoods';
import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import deliveringSlice from './deliveringSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    food: foodReducer,
    coin: coinReducer,
    user: userReducer,
    order: orderReducer,
    delivering: deliveringSlice,
    evaluate: evaluateReducer,
    voucher: voucherReducer,
    moreOption: moreOptionReducer,
    waitForGood: waitForGoods,
    size: optionSizeReducer,
    payment: paymentReducer,
    location: locationReducer,
    bookmark: bookmarkReducer,
    popUp: popUpOptionReducer,
    notification: notificationReducer,
  },
});
