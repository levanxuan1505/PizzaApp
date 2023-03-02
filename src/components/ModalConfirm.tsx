/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
// import {
//   StyleSheet,
//   Modal,
//   View,
//   Image,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';
// export default function ModalConfirm({visible}: any) {
//   const [showModal, setShowModal] = React.useState(visible);
//   const scaleValue = React.useRef(new Animated.Value(0)).current;
//   React.useEffect(() => {
//     toggleModal();
//   }, [visible]);
//   const toggleModal = () => {
//     if (visible) {
//       setShowModal(true);
//       Animated.spring(scaleValue, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setTimeout(() => setShowModal(false), 200);
//       Animated.timing(scaleValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };
//   return (
//     <Modal transparent visible={showModal}>
//       <View style={styles.modalBackGround}>
//         <View style={{alignItems: 'center'}}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => setShowModal(false)}>
//               <Image
//                 source={require('../assets/images/deliver.jpeg')}
//                 style={{height: 30, width: 30}}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../assets/images/discover.jpeg')}
//             style={{height: 150, width: 150, marginVertical: 10}}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   modalBackGround: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     borderRadius: 20,
//     elevation: 20,
//   },
//   header: {
//     width: '100%',
//     height: 40,
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//   },
// });



const [visible, setVisible] = useState(false);

  const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        // setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 300);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

<ModalPoup visible={visible}>
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    <View style={[styles.Header, {borderBottomColor: Colors.DEFAULT_WHITE}]}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: Colors.DEFAULT_GREEN,
          paddingTop: 10,
        }}>
        Xác nhận
      </Text>
    </View>
    <View style={[styles.Header, {top: -10, paddingBottom: 10}]}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: '500',
          color: Colors.DEFAULT_GREEN,
        }}>
        Thêm món ăn vào giỏ hàng
      </Text>
    </View>
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: -10,
      }}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Text
          style={{
            color: Colors.DEFAULT_GREEN,
            fontSize: 20,
            fontWeight: '600',
          }}>
          Thêm vào
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Text
          style={{
            color: Colors.DEFAULT_RED,
            fontSize: 20,
            fontWeight: '600',
          }}>
          Huỷ bỏ
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</ModalPoup>;



modalBackGround: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContainer: {
  width: '70%',
  height: 140,
  backgroundColor: 'white',
  // paddingHorizontal: 20,
  // paddingVertical: 30,
  borderRadius: 15,
  elevation: 20,
},
Header: {
  // paddingTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  // paddingVertical: 20,
  borderBottomWidth: 0.17,
  borderColor: Colors.DEFAULT_GREEN,
  width: '100%',
},