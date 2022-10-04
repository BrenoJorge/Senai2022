import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Salvar() {
  const [nome, setNome] = useState(null)
  const [cargo, setCargo] = useState(null)
  const [salario, setSalario] = useState(null)
  const [btnText, setBtnText] = useState("SALVAR")
  const [mensagem, setMensagem] = useState(null)

  const salvar = async () => {
    let info = {
      "nome": nome,
      "cargo": cargo,
      "salario": salario
    }

    try {
      const jsonValue = JSON.stringify(info)
      await AsyncStorage.setItem("dado", jsonValue)
      setNome("")
      setCargo("")
      setSalario("")
      setBtnText("REESCREVER")
      setMensagem("Salvo com sucesso")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput value={nome} style={styles.inp} placeholder="Digite o nome" onChangeText={(value) => { setNome(value) }}></TextInput>
      <TextInput value={cargo} style={styles.inp} placeholder="Digite o cargo" onChangeText={(value) => { setCargo(value) }}></TextInput>
      <TextInput value={salario} style={styles.inp} placeholder="Digite o salario" keyboardType='numeric' onChangeText={(value) => { setSalario(value) }}></TextInput>
      <TouchableOpacity title="salvar" onPress={() => { salvar() }}><Text  style={styles.btn} > {btnText} </Text></TouchableOpacity>
      <Text> {mensagem} </Text>
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
  inp: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
  },
  btn: {
    height: 40,
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7242f5",
    color: "white",
    marginTop: 20,
    borderRadius: 5
  },
});
