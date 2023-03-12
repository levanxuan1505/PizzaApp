import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 25,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    marginHorizontal: 20,
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

    elevation: 11,
  },
  total: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingTop: 2,
    paddingBottom: 30,
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
