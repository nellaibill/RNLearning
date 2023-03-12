import { View, StyleSheet } from 'react-native';
import ProductList from './src/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddProduct from './src/AddProduct';
import { useEffect } from 'react';
import { NotificationServices, requestUserPermission } from './src/utils/pushnotification';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './src/features/user'
import Login from './Login';
import UserProfile from './src/UserProfile';
const store = configureStore({
  reducer: {
    user: userReducer
  }
})
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}
const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
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