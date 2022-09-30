import { TouchableOpacity, Text, Image, View } from 'react-native';

export default function BtnComp(props) {
    const { onPress, comp } = props;

    var i

    switch (comp.id) {
        case 1:
            i = require("../../../assets/medico.png")
            break;
        case 2:
            i = require("../../../assets/escola.png")
            break;
        case 3:
            i = require("../../../assets/mercado.png")
            break;
        case 4:
            i = require("../../../assets/cinema.png")
            break;
        default:
            break;
    }

    return (
        <TouchableOpacity style={styles.button} onPress={() => { onPress() }}>
            <View style={styles.img}>
                <Image
                    style={styles.tinyLogo}
                    source={i} />
            </View>
            <View style={styles.inf}>
                <Text style={styles.text}>{comp.nome}</Text>
                <Text style={styles.text2}>{comp.horario}</Text>
            </View>
        </TouchableOpacity>
    )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: "100vw",
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

    },
    img: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20vw",
        height: "9vh",
        borderRadius: "100%",
        backgroundColor: "#fff"
    },
    tinyLogo: {
        width: "14vw",
        height: "14vw",
        backgroundColor: "#fff"
    },
    inf: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "70vw",
        height: "10vh",
        borderBottomWidth: "2px",
        borderColor: "#53693C"
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: '1.1rem',
    },
    text2: {
        color: '#FFF',
        fontSize: '1.1rem',
    }
})