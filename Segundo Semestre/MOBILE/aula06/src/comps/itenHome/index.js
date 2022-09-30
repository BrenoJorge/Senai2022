import { Text, View } from 'react-native';

export default function Chamado(props) {
    const { ch } = props;

    console.log(ch)

    return (
        ch.chamados.map(c => {
            return (
                <View style={styles.chamado}>
                    <Text style={styles.t}>{c.titulo}</Text>
                    <Text style={styles.d}>{c.descricao}</Text>
                </View>
            )

        })
    )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    chamado: {
        width: 250,
        height: 80,
        borderWidth: 2,
        borderColor: "#7242F5",
        display: "flex",
        justifyContent: "center",
        padding: 20,
        margin: 25,
        borderRadius: 5
    },
    t: {
        fontSize: 15,
        fontWeight: "bold"
    },
    d: {
        fontSize: 10
    }
})