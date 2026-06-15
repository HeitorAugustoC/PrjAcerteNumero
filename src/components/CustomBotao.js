import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { CORES } from  '../style/estilo';

export default function CustomButton({ title, onPress, type = 'primary', disabled }) {

    const estadobotao = [
    styles.button,
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
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>

    )

}