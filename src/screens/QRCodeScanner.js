import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import { useCameraPermissions } from 'expo-camera';

const mockData = {
  '12345': {
    nomeCompleto: 'João da Silva',
    instituicao: 'Universidade Exemplo',
    curso: 'Engenharia da Computação',
    matricula: '20230001',
    rg: '12.345.678-9',
    dataNascimento: '1999-01-01',
    cpf: '123.456.789-00',
  },
};

export default function QRCodeScanner({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>QR Code Scanner</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Solicitar Permissões</Text>
        </Pressable>
        <TouchableOpacity disabled={!isPermissionGranted} style={styles.button}  onPress={() => navigation.navigate('QRScanner')}>
          <Text style={[styles.buttonText, !isPermissionGranted && styles.buttonDisabled]}>
            Scan Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32a852', 
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 20,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#32a852', 
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});
