import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function telaRestaurante({ navigation }) {

    const produtos = [
        {
            "nomeRes": "Premium",
            "avaliacao": 4.8,
            "descricao": {
                "img": "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/51b795bc-5624-4f4e-b70a-fc25459de029/201910240858_U3uU_i.jpg",
                "end": "Mingui & Aliche",
                "telefone": "+55 (19) 9890-0956",
                "localization" : "Jaguariuna"
            }
        },
        {
            "nomeRes": "Intermediario",
            "avaliacao": 4.1,
            "descricao": {
                "img": "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/edf1a32f-711c-4ac9-a307-9d882ec05056/201903211158_image.jpg",
                "end": "Ponto da Esfiha",
                "telefone": "+55 (19) 9890-0956",
                "localization" : "Jaguariuna"
            }
        },
        {
            "nomeRes": "Custo Beneficio",
            "avaliacao": 3.9,
            "descricao": {
                "img": "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/6b097e51-bd3d-4d99-a52b-9e3c33f0ac4d/201912181846_LoKz_i.jpg",
                "end": "Pizzeria Don Vitorine",
                "telefone": "+55 (19) 9890-0956",
                "localization" : "Jaguariuna"
            }
        }
    ]

    return (
        <View style={styles.v}>
            {
                produtos.map((produto, indice) => {
                    return (
                        <TouchableOpacity style={styles.infoRes} key={indice} onPress={() => { navigation.navigate("Lista de restaurantes", { "descricao": produto.descricao }) }}>
                            <Text style={styles.text}>{produto.nomeRes}</Text>
                            <Text style={styles.text}>
                                {produto.avaliacao}
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: "https://cdn-icons-png.flaticon.com/512/616/616489.png",
                                    }}
                                />
                            </Text>
                        </TouchableOpacity>
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
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#402B8C"
    },
    tinyLogo: {
        width: 20,
        height: 20
    },
    infoRes: {
        height: 150,
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px black"
    },
    text: {
        fontFamily: 'Inter-SemiBoldItalic',
        fontSize: 30
    }
});