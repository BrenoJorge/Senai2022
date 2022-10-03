import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

import chamado from '../../comps/itenHome'
import Chamado from '../../comps/itenHome';

export default function telaHome({ route }) {
    var id = route.params
    const [busca, setBusca] = useState("")

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

    const chamadosFiltrados = useMemo(() => {
        const lowerBusca = busca.toLowerCase();
        return chamados.filter((chamado) =>
            chamado.titulo.toLowerCase().startsWith(lowerBusca)
        );
    }, [busca])
        
    return (
        <View style={styles.v}>
            <TextInput style={{... styles.inp1}} placeholder="Buscar manutenção" onChangeText={(value) => { setBusca(value)}}></TextInput>
            {
                chamadosFiltrados.map((c,i) => {
                        console.log("entrou")
                        return (
                            <Chamado key={i} ch={c}/>
                        )
                })
            }
        </View>
    )
}



const styles = StyleSheet.create({
    inp1: {
        height: 40,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginTop: 20,
        paddingLeft: 10,
        borderColor: "#7242F5",
        borderBottomWidth: 3
    },
    v: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 80,
        backgroundColor: "#fff"
    }
    
});