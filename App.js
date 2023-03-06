import { View, StyleSheet } from 'react-native';
import ProductList from './src/ProductList';
const App = () => {
  return (
    <View>
      <ProductList></ProductList>
    </View >
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