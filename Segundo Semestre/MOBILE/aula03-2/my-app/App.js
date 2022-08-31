import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, button } from 'react-native';

export default function App() {

  const [valor1, setValor] = useState("")
  const [valor2, setValor2] = useState("")
  const [result, setResult] = useState("")

  return (
    <View style={styles.container}>

      <View style={styles.cardConta}>
        <TextInput placeholder="Primeiro Valor" onChangeText={(val) => setValor(val)} style={styles.input}></TextInput>
        <TextInput placeholder="Segundo Valor" onChangeText={(val) => setValor2(val)} style={styles.input}></TextInput>

        <View style={styles.cardButton}>
          <button onClick={() => { setResult(Number(valor1) + Number(valor2)) }} style={styles.button}>+</button>
          <button onClick={() => { setResult(Number(valor1) - Number(valor2)) }} style={styles.button}>-</button>
          <button onClick={() => { setResult(Number(valor1) / Number(valor2)) }} style={styles.button}>/</button>
          <button onClick={() => { setResult(Number(valor1) * Number(valor2)) }} style={styles.button}>*</button>
        </View>

      </View>
      <View>
        <TextInput value={result} style={styles.cardResult}></TextInput>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  cardButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  cardResult: {
    border: '5px solid black',
    height: '250px',
    width: '250px',
    fontSize: '100px',
    textAlign: 'center'
  },

  button: {
    fontWeight: 'bold',
    border: '5px solid black',
    fontSize: 50,
    margin: '2%',
    alignText: 'center'
  },

  input: {
    height: '50px',
    width: '100%',
    marginBottom: '10%',
    border: '5px solid black',
    fontSize: 30,
    textAlign: 'center',
    outlineColor: "red"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
