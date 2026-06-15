import { StyleSheet } from 'react-native';

export const CORES = {
    fundo: '#000000',
    primario: '#1E90FF',
    secundario: '#FF6347',
    textoPrimario: '#FFFFFF',
    textoSecundario: '#C4C4CC',
    inputFundo: '#121214',
    borda: '#29292E',
}

const estilo = StyleSheet.create({

    textoTeste: {
        color: CORES.textoPrimario,
    },

    container: {
        background: CORES.fundo,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTextInput: {
        width: '100%',
        marginBottom: 20,
    },

    labelTextInput: {
    color: CORES.textoSecundario,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
    },

    input: {
        backgroundColor: CORES.inputFundo,
        color: CORES.textoPrimario,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 8,
        fontSize: 18,
        borderWidth: 1,
        borderColor: CORES.borda,
        textAlign: 'center',
    },

    botaocustom: {
        backgroundColor: CORES.primario,
        width: '100%',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    

});

export default estilo;