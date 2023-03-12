import { View, StyleSheet } from 'react-native';
import ProductList from './src/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddProduct from './src/AddProduct';
import { useEffect } from 'react';
import { NotificationServices, requestUserPermission } from './src/utils/pushnotification';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
}
const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, [])
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App