import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
import {Display} from '@utils';
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? -10 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 250,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    marginHorizontal: Display.setWidth(3),
    paddingHorizontal: Display.setWidth(3),
    flexDirection: 'column',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  cartCardDetail: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    marginHorizontal: Display.setWidth(3),
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
});
export default styles;
