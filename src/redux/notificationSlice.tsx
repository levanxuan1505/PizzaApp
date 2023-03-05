import {createSlice} from '@reduxjs/toolkit';
export const notificationSlice = createSlice({
  name: 'notification',
  initialState: [
    {
      id: '1',
      name: 'Pizza Company',
      title: 'Bạn có thể nhận được nhiều ưu đãi hơn',
      image: require('../assets/flashList/meatPizza.png'),
    },
    {
      id: '2',
      name: 'Trần Hương',
      title: 'Đơn hàng của bạn đã được chuyển đi sớm nhất có thể',
      image: require('../assets/flashList/cheesePizza.png'),
    },
    {
      id: '3',
      name: 'Thanh Tùng',
      title: 'Bạn nhận được ưu đãi lớn từ Pizza',
      image: require('../assets/flashList/chickenBurger.png'),
    },
    {
      id: '4',
      name: 'Quang Lê',
      title: 'Pizza hải sản được khuyến mãi mua 1 tặng 1 trong ngày hôm nay',
      image: require('../assets/flashList/sushiMakizushi.png'),
    },
    {
      id: '5',
      name: 'Trần Hoa',
      title: 'Thực hiện quét mã thông qua Zalo Pay để nhận thêm nhiều ưu đãi',
      image: require('../assets/flashList/meatPizza.png'),
    },
    {
      id: '6',
      name: 'Hữu Mạnh',
      title: 'Mua ngay để nhận nhiều ưu đãi từ của hàng mới trong hệ thống',
      image: require('../assets/flashList/cheesePizza.png'),
    },
    {
      id: '7',
      name: 'Thanh Thảo',
      title:
        'Booking bàn ăn để tổ chức sinh nhận cũng như nhiều dịp quan trọng của bạn và bạn bè',
      image: require('../assets/flashList/sushiMakizushi.png'),
    },
    {
      id: '8',
      name: 'Thuý Nga',
      title: 'Thể hiện độ tinh tế của bạn bằng món ăn thú vị cho người thân',
      image: require('../assets/flashList/chickenBurger.png'),
    },
    {
      id: '9',
      name: 'Trần Phan',
      title: 'Pizza Hawaii với những thức uống lúa mạch đến từ Đức',
      image: require('../assets/flashList/meatPizza.png'),
    },
  ],
  reducers: {
    deleteNotification: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});
export const {deleteNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
