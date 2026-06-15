import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Keyboard, Alert } from 'react-native';
import { COERS, CORES } from '../style/estilo';
import estilo from '../style/estilo';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomBotao';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function TelaJogo() {

    const [numeroAleatorio, setNumeroAleatorio] = useState('');
    const [chute, setChute] = useState('');
    const [tentativas, setTentativas] = useState(0);
    const [estadoJogo, setEstadoJogo] = useState('jogando'); // Vai mudar de acordo com o estado do jogo, se ele ganhou, perdeu ou esta jogando
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        começarNovoJogo();
    }, []);

    const começarNovoJogo = () => {
        const numero = Math.floor(Math.random() * 10).toString();
        setNumeroAleatorio(numero);
        setTentativas(3);
        setChute('');
        setEstadoJogo('jogando');
        setMensagem('Começando novo jogo! Tente adivinhar o número entre 0 e 9.');
    }

    const manejarChute = () => {
        Keyboard.dismiss();

        //Validar se o chute é um número entre 0 e 9
        const numeroChutado = parseInt(chute);
        if (isNaN(numeroChutado) || numeroChutado < 0 || numeroChutado > 9) {
            Alert.alert('Entrada inválida', 'Por favor, insira um número entre 0 e 9.');
            return;
        }
        if (chute === numeroAleatorio) {
            setEstadoJogo('ganhou');
            setMensagem(`Parabéns! Você acertou o número secreto em ${3 - tentativas + 1} tentativas!`); // o ${3 - tentativas + 1} permite fazer um calculo matematico diretamente dentro do texto
        }
        else {
            const tentativasRestantes = tentativas - 1;
            setTentativas(tentativasRestantes);

                if (tentativasRestantes === 0) {
                    setEstadoJogo('perdeu');
                    setMensagem(`Você perdeu! O número secreto era ${numeroAleatorio}.`);
                }
                else {
                    const dica = chute > numeroAleatorio ? 'menor' : 'maior'; //É basicamente um if só que resumido, onde se a condição for verdadeira ele retorna o primeiro menor, se for falsa ele retorna o segundo maior
                    setMensagem(`Errado! O número secreto é ${dica} que ${chute}. Você ainda tem ${tentativasRestantes} tentativas restantes.`);
            }
        }

        
        setChute('');
    }

        return (
        <LinearGradient
        colors={[CORES.fundo, CORES.fundogradiente]}
        style={estilo.gradienteTela}>
                        <View style={estilo.cardTela}>
                <Text style={[
                        estilo.mensagemTela, 
                        estadoJogo === 'ganhou' && { color: CORES.primario },
                        estadoJogo === 'perdeu' && { color: CORES.secundario }
                        ]}>
                        {mensagem}
                        </Text>
                        {estadoJogo === 'jogando' ? (
                            <>
                            <CustomTextInput 
                            label= "Seu palpite"
                            placeHolder="Digite aqui..."
                            value={chute}
                            onChangeText={setChute}/>

                            <Text style={estilo.tentativasrestantesTexto}>
                                Tentativas Restante: <Text style={estilo.destacar}>{tentativas}</Text>
                            </Text>

                            <CustomButton title="Enviar Chute" onPress={manejarChute}/>
                            </>
                            ) : (
                                    <View style={estilo.containerFimDeJogo}>
                                        <Text style={estilo.numeroRevelado}>{numeroAleatorio}</Text>
                                    <CustomButton title="Jogar de novo" onPress={começarNovoJogo}
                                    type={estadoJogo === 'ganhou' ? 'primario' : 'secundario'}/>
                                    </View>
                                )
                        } 
            </View>
        </LinearGradient>
        );

        // A

}