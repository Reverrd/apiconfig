import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useContext, useState } from 'react';
import { AuthContext } from '../apiconfig/AuthContext';
export default function App() {
  const { register } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [achievement, setAchievement] = useState('');
  const [investmentExperience, setInvestmentExperience] = useState('');
  const [occupation, setOccupation] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    register(fullName, username, phoneNumber, email, dateOfBirth, placeOfBirth, achievement, investmentExperience, occupation, walletAddress, password, confirmPassword);
  };

  return (
    <View style={styles.container}>
      
      <View>
        <Text>Full Name:</Text>
        <TextInput
        style={styles.input}
        value={fullName}
        placeholder='fullname'
        onChangeText={text=>setFullName(text)}
        />
        <Text>username:</Text>
        <TextInput
        style={styles.input}
        value={username}
        placeholder='username'
        onChangeText={text=>setUsername(text)}
        />
        <Text>phoneNumber</Text>
        <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder='phone number'
        onChangeText={text=>setPhoneNumber(text)}
        />
        <Text>email</Text>
        <TextInput
        style={styles.input}
        value={email}
        placeholder='fullname'
        onChangeText={text=>setEmail(text)}
        />
        <Text>Full Name:</Text>
        <TextInput
        style={styles.input}
        value={fullName}
        placeholder='fullname'
        onChangeText={text=>setFullName(text)}
        />
        <Text>Full Name:</Text>
        <TextInput
        style={styles.input}
        value={fullName}
        placeholder='fullname'
        onChangeText={text=>setFullName(text)}
        />
        <Button title="Register" onPress={handleRegistration} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  }
});
