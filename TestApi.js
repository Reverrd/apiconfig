import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAuth } from './AuthContext';

const TestScreen = () => {
  const { register, login, transactionCurrencies } = useAuth();

  useEffect(() => {
    // Test register function
    register('John Doe', 'johndoe', '1234567890', 'john@example.com', /* other parameters */);

    // Test login function
    login('clientId', 'clientSecret');

    // Test transactionCurrencies function
    transactionCurrencies();
  }, []);

  return (
    <View>
      <Text>Testing API Calls</Text>
    </View>
  );
};

export default TestScreen;
