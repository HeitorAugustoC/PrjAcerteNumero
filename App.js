import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import estilo from './src/style/estilo';
import { CORES } from './src/style/estilo';
import TelaJogo from '../PrjAcerteNumero/src/screens/TelaJogo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TelaJogo />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },
});