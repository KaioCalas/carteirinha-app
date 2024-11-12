import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AccessibilityButton from '../components/AcessibiliyButton'
import { useAccessibility } from '../context/AccessibilityContext';

export default function HomeScreen({ navigation }) {
  const { fontSize, isHighContrast } = useAccessibility(); // Acessando o contexto de acessibilidade

  return (
    <View style={[styles.container, isHighContrast && styles.highContrast]}>
      <Image
        source={require('../../public/images/logo.png')}
        style={styles.logo}
        accessible={true}
        accessibilityLabel="Logotipo da instituição"
      />
      <Text
        style={[styles.title, { fontSize }]} // Aplicando o tamanho da fonte do contexto
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel="Carteirinha Institucional"
      >
        Carteirinha Institucional
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Acessar Carteirinha"
        accessibilityHint="Toque para acessar sua carteirinha institucional"
      >
        <Text style={[styles.buttonText, { fontSize }]}>Acessar Carteirinha</Text>
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
  logo: {
    width: 300, 
    height: 300, 
    marginBottom: 20,
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32a852', 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#32a852',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
