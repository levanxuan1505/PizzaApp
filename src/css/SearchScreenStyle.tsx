import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
import {Display} from '@utils';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: Display.setWidth(12),
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.DARK_FIVE,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  sortBtn: {
    height: Display.setWidth(12),
    width: Display.setWidth(12),
    marginLeft: 10,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  History: {
    marginVertical: 10,
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    // marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.53,
    // shadowRadius: 13.97,

    // elevation: 21,
  },
  history: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Display.setWidth(2.2),
    marginHorizontal: 15,
    borderBottomColor: Colors.DEFAULT_GREEN,
    borderBottomWidth: 0.5,
  },
  text: {
    marginLeft: 8,
    // marginVertical: 7,
    // paddingBottom: 5,
    fontSize: Display.setWidth(9.5) - 20,
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
  //
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '70%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
  },
  Header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});

export default styles;
