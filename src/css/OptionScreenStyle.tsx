import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    marginTop: Platform.OS === 'ios' ? 300 : 180,
    height: 240,
    width: 376,
  },
  buttonHome: {
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: 40,
    marginVertical: 25,
    height: 70,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_YELLOW,
    marginHorizontal: 40,
    height: 70,
    borderRadius: 50,
  },
  buttonText: {
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7,
    color: '#ffff',
  },
});

export default styles;
