import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

import chamado from '../../comps/itenHome'
import Chamado from '../../comps/itenHome';

export default function telaHome({ route }) {
    var id = route.params

    console.log(id)

    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo": "Manutenção de Roteador",
                    "descricao": "Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo": "Mudança de Endereço",
                    "descricao": "Fazer a instalação na nova instalação"
                },
                {
                    "titulo": "Recolher equipamento",
                    "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
                }
            ]
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo": "Recolher equipamento",
                    "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo": "Mudança de Endereço",
                    "descricao": "Fazer a instalação na nova instalação"
                },
                {
                    "titulo": "Manutenção de Roteador",
                    "descricao": "Cliente reclamou que está sem internet, possível troca"
                }
            ]
        }
    ]

    return (
        <View style={styles.v}>
            {
                chamados.map((c, indice) => {
                    if (c.user_id == id.id) {

                        return (
                            <Chamado key={indice} ch={c}/>
                        )
                    }
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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 80,
        backgroundColor: "#fff"
    },
    
});