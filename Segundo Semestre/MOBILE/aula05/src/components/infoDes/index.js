import { Text, TouchableOpacity } from 'react-native';

export default function InfoDes(props) {
    const { obs } = props;


    return (

        <TouchableOpacity style={styles.btn}>Finalizar Compromisso</TouchableOpacity>

    )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    btn: {
        width: "80%",
        height: "10vh",
        margin: "10%",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        backgroundColor: "green",
        borderRadius: "10px"
    }

})