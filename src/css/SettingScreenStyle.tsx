import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? -10 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.DEFAULT_GREEN,
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '95%',
    height: 150,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 15,
    elevation: 20,
  },
  Header2: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});

export default styles;
