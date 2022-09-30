import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function telaLogin({ navigation }) {

    const img = require("../../../assets/saturn.png")

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [at, setAt] = useState(false)

    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        }
    ]

    const verificar = () => {
        {
            users.map(u => {
                if(email === u.email){
                    if(senha === u.senha){
                        navigation.navigate("Itens", {"id": u.id})
                    }
                } else {
                    setAt(true)
                }
            })
        }
    }

    return (
        <View style={styles.v}>

            <Image
                style={styles.Logo}
                source={img} />

            <TextInput style={{... styles.inp1, borderBottomWidth: at ? 4 : 2,borderColor: at ? "red" : "#7242F5" }} placeholder="E-mail" onChangeText={(email) => { setEmail(email)}} />
            <TextInput secureTextEntry={true} style={styles.inp2} placeholder="Senha" onChangeText={(senha) => { setSenha(senha)}} />

            <TouchableOpacity style={styles.btn} onPress={verificar}><Text style={styles.t}>Login</Text></TouchableOpacity>



        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#efefef"
    },
    Logo: {
        width: 150,
        height: 150
    },
    inp1: {
        height: 40,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginTop: 20,
        paddingLeft: 10,
    },
    inp2: {
        height: 40,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: "#7242F5",
        marginTop: 20,
        paddingLeft: 10
    },
    btn: {
        height: 40,
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7242f5",
        marginTop: 20,
        borderRadius: 5
    },
    t: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18
    }
});