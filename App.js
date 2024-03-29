import { StyleSheet } from 'react-native';
import ProductList from './src/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTask from './src/AddTask';
import { useEffect } from 'react';
import { NotificationServices, requestUserPermission } from './src/utils/pushnotification';
import { Provider, useSelector } from 'react-redux';
import Login from './Login';
import UserProfile from './src/components/UserProfile';
import MovieScreen from './src/screens/MovieScreen';
import store from './store';
import MovieDetails from './src/screens/MovieDetails';
import QuotesScreen from './src/screens/QuotesScreen';
import ActionItems from './src/ActionItems';
import MapScreen from './src/screens/MapScreen';
import ErrorBoundary from './src/utils/ErrorBoundary';
const Stack = createStackNavigator();

function AuthStack() {

  const { isLoggedIn } = useSelector(state => state.movie);
  return isLoggedIn ? <SignInStack /> : <SignOutStack />
}
function SignInStack() {
  return (
    <Stack.Navigator initialRouteName='UserProfile'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}
function SignOutStack() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
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
        <ErrorBoundary>
          <AuthStack />
        </ErrorBoundary>
      </NavigationContainer>
    </Provider>
  )
}

export default App