import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
import {Display} from '@utils';
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackGround1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: Platform.OS === 'ios' ? '80%' : '90%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
  },
  modalContainer2: {
    width: Platform.OS === 'ios' ? '90%' : '90%',
    height: '68%',
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 20,
  },
  size: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  sizeS: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: collocation == 0 ? Colors.DEFAULT_R : Colors.DEFAULT_GREEN,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  size1: {
    width: '90%',
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  textOption: {
    fontSize: Display.setWidth(8) - 12,
    fontWeight: '600',
    color: Colors.DEFAULT_GREEN,
  },
  textOption1: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 10,
    color: Colors.DEFAULT_GREEN,
  },
  Header2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
  cartCard: {
    position: 'relative',
    height: Display.setWidth(22),
    width: Display.setWidth(80),
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  cartCard1: {
    height: Display.setHeight(70),
    width: Display.setWidth(80),

    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    // marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  Option: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});

export default styles;
