import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen: React.FC<any> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Preencha todos os campos.');
      return;
    }

    if (username === 'admin' && password === '12345') {
      Alert.alert('Login bem-sucedido!');
      navigation.navigate('Home'); // Navega para a tela Home
    } else {
      Alert.alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de Volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#9B59B6"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#9B59B6"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, buttonPressed ? styles.buttonPressed : null]}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#8E44AD',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#696969',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#9B59B6',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#32CD32',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: '#2E8B57', // Tom mais escuro de verde quando pressionado
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
