
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function telaCarrinho({ navigation }) {

    const [dadoLocalStorage, setdadoLocalStorage] = useState("")
    var dadosJSON = new Array()

    const ler = async () => {
        try {
            let aux = ""
            const jsonValue = await AsyncStorage.getItem('dado')
            dadosJSON = JSON.parse(jsonValue)
            dadosJSON.map((item, index) => {
                aux += item.nome + " - " + item.descricao + "\n\r"
            })
            setdadoLocalStorage(aux)
        } catch (err) {
            console.log(err)
        }
    }

    const deletar = async () => {
        try {
            await AsyncStorage.removeItem("dado", )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <TouchableOpacity title="ler" onPress={() => { ler() }}><Text style={styles.btn} >LER</Text></TouchableOpacity>
            <Text>{dadoLocalStorage}</Text>
            <TouchableOpacity title="deletar" onPress={() => { deletar() }}><Text style={styles.btn} >DELETAR</Text></TouchableOpacity>
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