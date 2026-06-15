import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { CORES } from  '../style/estilo';
import estilo from '../style/estilo';

export default function CustomTextInput({ label, ...rest }) {

    return (
        <View style={estilo.containerTextInput}>
            {label && <Text style={estilo.labelTextInput}>{label}</Text>}
            <TextInput
                style={estilo.input}
                placeholderTextColor={CORES.textoSecundario}
                keyboardType="numeric"
                maxLength={1} // Limita o texto a no maximo 1 digito
                {...rest}
            />
        </View>
    )
}