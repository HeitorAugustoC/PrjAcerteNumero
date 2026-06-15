import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
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