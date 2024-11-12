import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AccessibilityButton from '../components/AcessibiliyButton';
import { useAccessibility } from '../context/AccessibilityContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { fontSize, isHighContrast } = useAccessibility(); // Acessando o contexto de acessibilidade

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={[styles.container, isHighContrast && styles.highContrast]}>
      <Text
        style={[styles.title, { fontSize }]}
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel="Tela de login"
      >
        Login
      </Text>

      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="E-mail institucional"
        placeholderTextColor="#8c8c8c"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        accessible={true}
        accessibilityLabel="Campo de E-mail"
        accessibilityHint="Digite seu e-mail institucional"
      />

      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="Senha"
        placeholderTextColor="#8c8c8c"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        accessible={true}
        accessibilityLabel="Campo de Senha"
        accessibilityHint="Digite sua senha"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QRCode')}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Botão de Entrar"
        accessibilityHint="Toque para fazer login e ir para a tela do QR Code"
      >
        <Text style={[styles.buttonText, { fontSize }]}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de acessibilidade */}
      <AccessibilityButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highContrast: {
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#32a852',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  button: {
    width: '80%',
    backgroundColor: '#32a852',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
