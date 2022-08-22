import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.primeira}>
        <Text>Ola mundo</Text>
      </View>
      <View style={styles.segunda}>
        <Text style={styles.primeira.innerText}>Ola mundo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  primeira :{
    flex: 1,
    backgroundColor: "red",
    margin: '1px',
    innerText: {
      color: 'red'
    }
  },
  segunda:{
    flex: 1,
    backgroundColor: "green",
    color: 'yellow'
  }
})