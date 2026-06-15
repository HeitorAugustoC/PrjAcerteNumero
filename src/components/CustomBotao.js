import React from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import estilo, { CORES } from  '../style/estilo';

export default function CustomButton({ title, onPress, type = 'primary', disabled }) {

    const estadobotao = [
    estilo.botaocustom,
    type === 'secundario' && { backgroundColor: CORES.secundario },
    disabled && { opacity: 0.5 }
    ];

    return (
    
    <TouchableOpacity 
        style={estadobotao} 
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled}
    >
    <Text style={estilo.textoBotao}>{title}</Text>
    </TouchableOpacity>

    )

}