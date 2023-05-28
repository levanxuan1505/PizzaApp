import {StyleSheet, Platform, Dimensions} from 'react-native';
import {Colors} from '@constants';
import {Display} from '@utils';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 20 : 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: Display.setWidth(12),
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.DARK_FIVE,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: Display.setWidth(12),
    height: Display.setWidth(12),
    marginLeft: 10,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: Display.setHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: Platform.OS === 'ios' ? 25 : 35,
    borderRadius: 15,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    position: 'relative',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  addToCartBtn: {
    position: 'absolute',
    right: -11,
    top: -22,
    height: 52,
    width: 52,
    borderRadius: 30,
    backgroundColor: Colors.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // modal
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    elevation: 20,
  },
  modalContainer1: {
    width: '85%',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
  },
  Header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Header2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});
export default styles;
