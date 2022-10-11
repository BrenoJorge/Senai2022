import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function telaHome({ navigation }) {

    var pizzaria = [{
        "nome": "calabresa",
        "descricao": "de ontem"
    },
    {
        "nome": "Portuguesa",
        "descricao": "do cristiano"
    },
    {
        "nome": "Queijo",
        "descricao": "mussarela alemã"
    }
    ]

    const addCarrinho = async (i) => {
        try {
            let pizzas = new Array()

            if (localStorage.hasOwnProperty("dado")) {
                pizzas = JSON.parse(localStorage.getItem("dado"))
            }

            pizzas.push({ nome: pizzaria[i].nome, descricao: pizzaria[i].descricao })

            await AsyncStorage.setItem("dado", JSON.stringify(pizzas))

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.v}>
            {pizzaria.map((pizza, i) => {
                return (
                    <View>
                        <Text>{pizza.nome}</Text>
                        <Text>{pizza.descricao}</Text>
                        <TouchableOpacity onPress={() => { addCarrinho(i) }}><Text>+</Text></TouchableOpacity>
                    </View>
                )
            })}
            <TouchableOpacity onPress={() => { navigation.navigate("Carrinho") }}><Text>Carrinho</Text></TouchableOpacity>
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