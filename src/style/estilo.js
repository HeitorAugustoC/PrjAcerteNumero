import { StyleSheet } from 'react-native';

export const CORES = {
    fundo: '#000000',
    fundogradiente: '#1c2129',
    surface: '#202024',
    primario: '#1E90FF',
    secundario: '#FF6347',
    textoPrimario: '#FFFFFF',
    textoSecundario: '#C4C4CC',
    inputFundo: '#121214',
    borda: '#29292E',
}

const estilo = StyleSheet.create({

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

    textoBotao: {
    color: CORES.textoPrimario,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    },

    gradienteTela: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },


    cardTela: {
    backgroundColor: CORES.surface,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CORES.borda,
    },

    tituloTela: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CORES.textoPrimario,
    marginBottom: 16,
    textAlign: 'center',
    },

    mensagemTela: {
    fontSize: 16,
    color: CORES.textoSecundario,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
    },

    tentativasrestantesTexto: {
    color: CORES.textoSecundario,
    fontSize: 14,
    marginBottom: 16,
    },
    
    destacar: {
    color: CORES.secundario,
    fontWeight: 'bold',
    },

    containerFimDeJogo: {
    width: '100%',
    alignItems: 'center',
    },

    numeroRevelado: {
    fontSize: 18,
    color: CORES.textoPrimario,
    marginBottom: 20,
    },

    destacarNumero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CORES.primario,
    },

    containerApp: {
    flex: 1,
    backgroundColor: CORES.fundo,
    },
});

export default estilo;