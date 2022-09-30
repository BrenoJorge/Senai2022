import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

import BtnComp from '../../components/btnComp'

export default function telaCompromisso({ navigation }) {

    const data = [
        {
            "id":1,
            "tipo":2,
            "nome":"Escola",
            "horario":"07:30 - 11:30"
        },
        {
            "id":2,
            "tipo":1,
            "nome":"Consulta Médica",
            "horario":"13:00 - 13:40"
        },
        {
            "id":3,
            "tipo":3,
            "nome":"Ir ao mercado",
            "horario":"16:30 - 17:00"
        },
        {
            "id":4,
            "tipo":4,
            "nome":"Ir ao cinema",
            "horario":"20:00 - 22:30"
        },
    ]
    return (
        <View style={styles.v}>
            {
                data.map((comp, indice) => {
                    return (

                        <BtnComp key={indice} comp={comp} onPress={() => { navigation.navigate("Descricao", {"id": comp.id}) }}></BtnComp>

                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#3A3A3A"
    },
});