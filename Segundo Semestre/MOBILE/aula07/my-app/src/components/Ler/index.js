import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Ler() {

    const [dadoLocalStorage, setdadoLocalStorage] = useState("")

    const ler = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('dado')
            setdadoLocalStorage(JSON.parse(jsonValue))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <TouchableOpacity title="ler" onPress={() => { ler() }}><Text style={styles.btn} >LER</Text></TouchableOpacity>
            <Text style={styles.inp} >{dadoLocalStorage.nome}</Text>
            <Text style={styles.inp} >{dadoLocalStorage.cargo}</Text>
            <Text style={styles.inp} >{dadoLocalStorage.salario}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inp: {
        height: 40,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginTop: 20,
        paddingLeft: 10,
    },
    btn: {
        height: 40,
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7242f5",
        color: "white",
        marginTop: 20,
        borderRadius: 5
    },
});
