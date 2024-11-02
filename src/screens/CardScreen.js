import React from 'react';
import { View, Text } from 'react-native';

const CardScreen = ({ route }) => {
  const { alunoData } = route.params; // Obter os dados do aluno

  return (
    <View>
      <Text>Nome Completo: {alunoData.nomeCompleto}</Text>
      <Text>Instituição: {alunoData.instituicao}</Text>
      <Text>Curso: {alunoData.curso}</Text>
      <Text>Matrícula: {alunoData.matricula}</Text>
      <Text>RG: {alunoData.rg}</Text>
      <Text>Data de Nascimento: {alunoData.dataNascimento}</Text>
      <Text>CPF: {alunoData.cpf}</Text>
    </View>
  );
};

export default CardScreen;
