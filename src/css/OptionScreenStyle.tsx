import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';
import {Display} from '@utils';

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
    marginTop: Platform.OS === 'ios' ? Display.setHeight(20) : 180,
    height: Display.setWidth(51),
    width: Display.setWidth(80),
  },
  buttonHome: {
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: Display.setWidth(10),
    marginVertical: Display.setWidth(5),
    height: 70,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSignIn: {
    backgroundColor: Colors.DEFAULT_YELLOW,
    marginHorizontal: Display.setWidth(10),
    marginVertical: Display.setWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderRadius: 50,
  },
  buttonText: {
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: Display.setWidth(6),
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7,
    color: '#ffff',
  },
});

export default styles;
