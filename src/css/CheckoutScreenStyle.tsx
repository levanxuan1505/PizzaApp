import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 25,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    position: 'relative',
  },
  location: {
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
    paddingLeft: 10,
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
  payment: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
    marginTop: 5,
    justifyContent: 'center',
    marginHorizontal: 8,
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
  voucher: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
    justifyContent: 'center',
    marginHorizontal: 8,
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

  warning: {
    borderRadius: 10,
    height: 80,
    marginBottom: Platform.OS === 'ios' ? 145 : 210,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
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
  money: {
    flexDirection: 'row',
  },
  moneyText: {
    fontSize: 26,
    fontWeight: 700,
    paddingRight: 5,
    color: Colors.DEFAULT_GREEN,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
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

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: Platform.OS === 'ios' ? '80%' : '90%',
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
