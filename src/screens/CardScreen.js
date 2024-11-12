import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardScreen = ({ route }) => {
  const { alunoData } = route.params; 

  return (
    <View style={styles.container} accessible={true} accessibilityLabel="Informações do aluno">
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`Nome Completo: ${alunoData.nomeCompleto}`}
      >
        Nome Completo: {alunoData.nomeCompleto}
      </Text>
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`Instituição: ${alunoData.instituicao}`}
      >
        Instituição: {alunoData.instituicao}
      </Text>
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`Curso: ${alunoData.curso}`}
      >
        Curso: {alunoData.curso}
      </Text>
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`Matrícula: ${alunoData.matricula}`}
      >
        Matrícula: {alunoData.matricula}
      </Text>
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`RG: ${alunoData.rg}`}
      >
        RG: {alunoData.rg}
      </Text>
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`Data de Nascimento: ${alunoData.dataNascimento}`}
      >
        Data de Nascimento: {alunoData.dataNascimento}
      </Text>
      <Text
        style={styles.info}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`CPF: ${alunoData.cpf}`}
      >
        CPF: {alunoData.cpf}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
});

export default CardScreen;
