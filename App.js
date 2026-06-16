import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import estilo from './src/style/estilo';
import { CORES } from './src/style/estilo';
import TelaJogo from './src/screens/TelaJogo';

export default function App() {
  return (
    <SafeAreaView style={estilo.containerApp}>
      <TelaJogo />
    </SafeAreaView>
  );
}