import {createSlice} from '@reduxjs/toolkit';
export const locationSlice = createSlice({
  name: 'location',
  initialState: [
    {
      id: '1',
      name: 'Lê Văn Xuân ',
      phone: '(+84) 97 517 95 46',
      dress: 'Số nhà 17 ngõ 75 Hồ Tùng Mậu,',
      title: 'Phường Mai Dịch, Quận Cầu Giấy, Hà Nội',
    },
  ],
  reducers: {
    changeLocation: (state, action) => {
      (state[0].id = action.payload.id),
        (state[0].name = action.payload.name),
        (state[0].phone = action.payload.phone),
        (state[0].dress = action.payload.dress),
        (state[0].title = action.payload.title);
    },
  },
});

export const {changeLocation} = locationSlice.actions;
export default locationSlice.reducer;
