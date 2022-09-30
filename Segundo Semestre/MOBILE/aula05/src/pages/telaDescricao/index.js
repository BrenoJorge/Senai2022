import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

import BtnDes from '../../components/infoDes'

export default function telaCompromisso({ route }) {

    const { id } = route.params;

    console.log(id)

    const data = [
        {
            "id_compromisso": 1,
            "descricao": "- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes": "",
        },
        {
            "id_compromisso": 4,
            "descricao": "",
            "observacoes": "Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao": "- Pão.\n- Presunto.\n- Queijo.",
            "observacoes": "Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao": "Consulta de retorno.",
            "observacoes": "Levar os exames.",
        },
    ]

    var c

    data.forEach(co => {
        if (co.id_compromisso === id) {
            c = co
        }
    })

    return (

        <View style={styles.v}>


            <View style={styles.info}>
                <Text style={styles.des}>Descricão:</Text>
                <View style={styles.in}>
                    <Text style={styles.t1}>{c.descricao}</Text>
                </View>

                <Text style={styles.obser}>Observações:</Text>
                <View style={styles.in}>
                    <Text style={styles.t1}>{c.observacoes}</Text>
                </View>
            </View>


            <BtnDes></BtnDes>

        </View>



    )
}

const styles = StyleSheet.create({
    v: {
        flex: 1,
        backgroundColor: "#3A3A3A"
    },
    obser: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: '1.8rem',
    },
    info: {
        width: "100vw",
        height: 10
    },
    in: {
        width: "100vw",
        height: "20vh",
        padding: 10
    },
    des: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: '1.8rem',
    },
    t1: {
        color: '#FFF',
        fontSize: '1.1rem',
    }

})
