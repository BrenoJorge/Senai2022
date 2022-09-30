import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function Home({ route }) {

    // let cod = route.params.cod;

    var {matricula, nomeFunc} = route.params

    const [funcs, setFunc] = useState([
        {
            "nome": "Felipe",
            "cargo": "Testeeee"
        }
    ])

    const [val1, setVal1] = useState("")
    const [val2, setVal2] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.cadastro}>
                <Text>{cod}</Text>
                <TextInput style={styles.input} placeholder="Nome funcionário" onChangeText={(val1) => { setVal1(val1) }}></TextInput>
                <TextInput style={styles.input} placeholder="Cargo" onChangeText={(val1) => { setVal2(val1) }}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => { setFunc(funcs => [...funcs, { "nome": val1, "cargo": val2 }]) }}><Text>cadastrar</Text></TouchableOpacity>
            </View>
            <SafeAreaView style={styles.areaView}>
                <ScrollView style={styles.contScroll}>
                    {funcs.map((func, indice) => {
                        return (
                            <Aniorario key={indice}>
                                <Text style={styles.nome}>{func.nome}</Text>
                                <Text>{func.cargo}</Text>
                            </Aniorario>)
                    })}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

function Aniorario(props) {
    return (
        <View style={styles.aniori}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: 60,
        backgroundColor: "#373276"
    },
    cadastro: {
        width: "100%",
        gap: "10px"
    },
    btn: {
        borderWidth: "2px",
        borderColor: "#000",
        borderRadius: "7px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5A4EF9"
    },
    input: {
        borderWidth: "1px",
        backgroundColor: "#8278FF",
        borderRadius: "5px",
    },
    contScroll: {
        flex: 1,
        width: "70vw",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "15px",
        maxHeight: "1000px"
    },
    areaView: {
        flex: 1,
    },
    aniori: {
        marginTop: "20px",
        marginLeft: "18px",
        backgroundColor: "#fff",
        borderWidth: "2px",
        borderColor: "grey",
        maxWidth: "85%",
        borderRadius: "4px",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 0
    },
    nome: {
        color: "#8278FF",
        fontWeight: "bold",
        fontSize: "15px"
    }
});
