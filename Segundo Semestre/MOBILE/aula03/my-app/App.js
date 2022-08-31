import { useState } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Text, View } from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState("")
  const [valor2, setValor2] = useState("")
  const [result, setResult] = useState("")

  return (
    <View style={styles.container}>
      <TextInput placeholder={"Digite um numero"} onChangeText={(val) => { setValor1(val) }}></TextInput>
      <TextInput placeholder={"Digite um outro numero"} onChangeText={(val) => { setValor2(val) }}></TextInput>
      <TouchableOpacity onPress={() => {
        setResult(Number(valor1) + Number(valor2))
      }}>
        <Text>Somar</Text>
      </TouchableOpacity>
      <TextInput value={result}></TextInput>
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
});
