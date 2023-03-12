import {StyleSheet, Platform, Dimensions} from 'react-native';
import {Colors} from '@constants';
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
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.DARK_FIVE,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  addToCartBtn: {
    top: -8,
    height: 40,
    width: 40,
    borderRadius: 20,
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
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalContainer1: {
    width: '70%',
    height: 140,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
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
    // paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
  // modal
});
export default styles;
