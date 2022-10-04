import { StyleSheet, View} from 'react-native';
import Salvar from './src/components/Salvar'
import Ler from './src/components/Ler'

export default function App() {
 
  return (
    <View style={styles.container}>
      <Salvar/>
      <Ler/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "200px",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
