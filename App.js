import { StyleSheet } from 'react-native';
import ProductList from './src/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTask from './src/AddTask';
import { useEffect } from 'react';
import { NotificationServices, requestUserPermission } from './src/utils/pushnotification';
import { Provider } from 'react-redux';
import Login from './Login';
import UserProfile from './src/UserProfile';
import MovieScreen from './src/screens/MovieScreen';
import store from './store';
import MovieDetails from './src/screens/MovieDetails';
import MovieList from './src/screens/MovieList';
import QuotesScreen from './src/screens/QuotesScreen';
import ActionItems from './src/ActionItems';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
      <Stack.Screen name="MovieList" component={MovieList} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
      <Stack.Screen name="QuotesScreen" component={QuotesScreen} />
      <Stack.Screen name="ActionItems" component={ActionItems} />
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