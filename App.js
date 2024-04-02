import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import RegisterScreen from './registerSreen';
import { AuthProvider } from './AuthContext';
export default function App() {
  
  return (
    <View style={styles.container}>
      <AuthProvider>
      <RegisterScreen />
      </AuthProvider>
      <StatusBar style="auto" />
    </View>
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
