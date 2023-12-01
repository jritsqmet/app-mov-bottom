import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Detalles from '../screens/Detalles';
import ListaImagenes from '../screens/ListaImagenes';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ Detalles } />
      <Tab.Screen name="Settings" component={ ListaImagenes } />
    </Tab.Navigator>
  );
}

export default function BottomNavigator (){

    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}