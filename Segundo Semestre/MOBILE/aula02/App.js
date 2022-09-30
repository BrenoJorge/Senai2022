import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

export default function App() {

  const [val1, setVal1] = useState("")
  const [val2, setVal2] = useState("")
  const [result, setResult] = useState("")
  const [op, setOp] = useState("")

  const calcular = () => {
    if(op == "+"){
      setResult(parseInt(val1) + parseInt(val2))
    } else if(op == "-"){
      setResult(parseInt(val1) - parseInt(val2))
    } else if(op == "*"){
      setResult(parseInt(val1) * parseInt(val2))
    } else if(op == "/"){
      setResult(parseInt(val1) / parseInt(val2))
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.calc}>

        <View style={styles.inp}>

          <TextInput style={styles.num} value={val1} placeholder={"Valor 1"} onChangeText={(val1) => { setVal1(val1)}}/>
          <TextInput style={styles.num} value={val2} placeholder={"Valor 2"} onChangeText={(val2) => { setVal2(val2)}}/>
          
          <View style={styles.exec}>
            <TouchableOpacity style={styles.btn} onPress={() => {setOp("+")}}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {setOp("-")}}><Text>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {setOp("*")}}><Text>x</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {setOp("-")}}><Text>÷</Text></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.but} onPress={() => {
            calcular()
          }}>
            <Text>Executar</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.result}>
        <Text>{result}</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calc:{
    height: 400,
    width: 250,
    borderWidth: '3px',
    borderColor: 'black',
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inp: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: 200,
    width: 200,
    top: 20,
    borderWidth: '3px',
    borderColor: 'black',
  },
  but:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    top: 30,
    borderWidth: '2px',
    borderColor: 'black',
    width: 100
  },
  num:{
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  exec:{
    display: 'flex',
    flexDirection: 'row'
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: "center",
    backgroundColor: '#fff',
    width: '20px',
    height: '20px',
    marginTop: '20px',
    marginLeft: '10px'
  },
  result:{
    marginTop: '30px',
    height: '150px',
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '3px',
    borderColor: 'black',
  }
})
