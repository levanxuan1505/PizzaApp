import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 25,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  wallet: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.DEFAULT_GREEN,
    paddingVertical: 25,
  },
  options: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    paddingVertical: 8,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.DEFAULT_GREEN,
  },
  bell: {
    color: Colors.DEFAULT_GREEN,
    position: 'absolute',
    right: 10,
  },
  icon: {
    color: Colors.DEFAULT_GREEN,
  },
  logOut: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
