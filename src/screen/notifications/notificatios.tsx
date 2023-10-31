// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Notificatios = () => {
//   return (
//     <View>
//       <Text>Notificatios</Text>
//     </View>
//   )
// }

// export default Notificatios

// const styles = StyleSheet.create({})

// AppContent.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/reducers/toastSlice';

const Notificatios: React.FC = () => {
  const dispatch = useDispatch();

  const showSuccessToast = () => {
    dispatch(showToast({ message: 'Login sucessfully!', type: 'success' }));
  };

  const showErrorToast = () => {
    dispatch(showToast({ message: 'Error!', type: 'error' }));
  };

  const showPendingToast = () => {
    dispatch(showToast({ message: 'Pending...', type: 'pending' }));
  };

  return (
    <View>
      <Button title="Show Success Toast" onPress={showSuccessToast} />
      <Button title="Show Error Toast" onPress={showErrorToast} />
      <Button title="Show Pending Toast" onPress={showPendingToast} />
    </View>
  );
};

export default Notificatios;
