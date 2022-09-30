import { Image, StyleSheet, Text, View } from 'react-native';


export default function telaInfo({ route }) {
    var { descricao } = route.params
    return (
        <View style={styles.v}>
            <View style={styles.v2}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: descricao.img,
                    }}
                />
                <View style={styles.infoT}>
                    <Text style={styles.info}> {descricao.end} </Text>
                    <Text style={styles.info}> Localização : {descricao.localization} </Text>
                    <Text style={styles.info}> {descricao.telefone} </Text>
                </View>
            </View>
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
        backgroundColor: "#402B8C"
    },
    v2: {
        height: "50%",
        width: "60%",
        borderWidth: 5,
        borderColor: "#fff",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        boxShadow: "0 0 10px black",
    },
    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius: "100%"
    },
    infoT: {
        width: 200,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    info: {
        height: 20,
        width: 200,
        margin: 15,
        fontFamily: 'Inter-SemiBoldItalic'
    }
});