import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
import {Display} from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(71),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 16 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  button: {
    width: 80,
    height: 80,
    bottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: Display.setWidth(1),
    paddingHorizontal: Display.setWidth(8),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  gettingStartedButtonText: {
    fontSize: 32,
    fontWeight: '500',
    color: Colors.DEFAULT_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 8 : 3,
    paddingHorizontal: 50,
  },
});
export default styles;
