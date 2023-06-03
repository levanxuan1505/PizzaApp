import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
import {Display} from '@utils';
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? -10 : 25,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  modalBackGround1: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // paddingBottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer2: {
    width: Platform.OS === 'ios' ? '90%' : '90%',
    height: Display.setWidth(149),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 20,
  },
  cartCard: {
    height: Display.setWidth(24),
    width: Display.setWidth(90),
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,

    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  total: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingTop: 2,
    paddingBottom: Display.setWidth(10) - 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  actionBtn: {
    width: 80,
    height: 34,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 30,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
});
export default styles;
