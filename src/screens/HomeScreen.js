import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../public/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Carteirinha Institucional</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Acessar Carteirinha</Text>
      </TouchableOpacity>
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
  logo: {
    width: 300, // largura da logo
    height: 300, // altura da logo
    marginBottom: 20,
    resizeMode: 'contain', // ajusta a imagem para não cortar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32a852', // verde claro
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
