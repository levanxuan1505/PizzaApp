import {StyleSheet, Platform} from 'react-native';
import {Colors} from '@constants';

const styles = StyleSheet.create({
  header: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 30,
  },
  input: {
    height: 52,
    fontSize: Platform.OS === 'ios' ? 16 : 12,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 12,
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
  //   input: {
  //     height: 40,
  //     marginVertical: 8,
  //     borderBottomWidth: 0.2,
  //     // padding: 10,
  // },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  //   iconContainer: {
  //     backgroundColor: Colors.DEFAULT_WHITE,
  //     height: 50,
  //     width: 50,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 30,
  //   },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: Colors.DEFAULT_WHITE,
  },
  addRess: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
    paddingVertical: 4,
  },
  addressText: {
    fontSize: 18,
    color: Colors.DEFAULT_GREEN,
  },
});

export default styles;
