import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import cartReducer from './cartSlice';
import cartSumReducer from './cartSum';
import bookmarkReducer from './bookmarkSlice';
export default configureStore({
  reducer: {
    notification: notificationReducer,
    cart: cartReducer,
    sum: cartSumReducer,
    bookmark: bookmarkReducer,
  },
});
