import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import BottomTabNavitaion from '../bottom-navigation/bottom-tab-navitaion';
import Header from '../../screen/header';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={BottomTabNavitaion} options={{
        headerShown: false
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation