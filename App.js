import { StyleSheet, Text, View } from 'react-native';
import AppNavegacao from './components/AppNavegacao';

export default function App() {
  return (
    <AppNavegacao />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
