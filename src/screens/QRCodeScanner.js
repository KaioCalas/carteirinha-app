import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import AccessibilityButton from '../components/AcessibiliyButton';
import { useAccessibility } from '../context/AccessibilityContext';

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

  const { fontSize, isHighContrast } = useAccessibility(); // Acessando o contexto de acessibilidade

  return (
    <SafeAreaView style={[styles.container, isHighContrast && styles.highContrast]}>
      <Text style={[styles.title, { fontSize }]} accessibilityRole="header">
        QR Code Scanner
      </Text>

      <View style={styles.buttonContainer}>
        <Pressable onPress={requestPermission} style={styles.button} accessible={true} accessibilityLabel="Solicitar Permissão para Câmera">
          <Text style={[styles.buttonText, { fontSize }]}>Solicitar Permissões</Text>
        </Pressable>

        <TouchableOpacity
          disabled={!isPermissionGranted}
          style={[styles.button, !isPermissionGranted && styles.buttonDisabled]}
          onPress={() => navigation.navigate('QRScanner')}
          accessible={true}
          accessibilityLabel="Escanear QR Code"
          accessibilityHint="Toque para iniciar o scanner de QR Code"
        >
          <Text style={[styles.buttonText, { fontSize }, !isPermissionGranted && styles.buttonDisabled]}>
            Scan Code
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botão de acessibilidade */}
      <AccessibilityButton />
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
  highContrast: {
    backgroundColor: '#000000',
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
