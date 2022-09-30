import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';


export default function App() {
  const funcionario = [
    { 
      img: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      nome:"Fulano",
      cargo:"Pedreiro"
    },
    {
      img: "https://equilibriovita.com.br/wp-content/uploads/2021/05/img-pessoa-parallax2.png",
      nome:"Adalgamir",
      cargo:"Earpinteiro"
    },
    {
      img: "https://cdn140.picsart.com/263680829000201.png?to=crop&type=webp&r=310x310&q=50",
      nome:"Xurastei Durango",
      cargo:"(GPV)"
    }];

  return (
    // <View style={styles.container}>

    //   <View style={styles.primeira}>
    //     <Text>Bem vindo</Text>
    //     <StatusBar style="auto"/>
    //     <TextInput style={styles.input} placeholder="Fetey"/>
    //     <TouchableOpacity></TouchableOpacity>
    //     {
    //       nomes.map(nome => {
    //         return(
    //           <TouchableOpacity>
    //             <Text>{`${nome.nome} - ${nome.matricula}`}</Text>
    //           </TouchableOpacity>
    //         )
    //       })
    //     }
    //   </View>
    //   <View style={styles.segunda}>
    //     <Image source={img} style={styles.imgp}/>
    //   </View>
    // </View>

    funcionario.map(funci => {
              return(
                <View style={styles.container}>
                  <View style={styles.row}>
                    <Image source={funci.img} style={styles.imgp}/>
                    <Text>{funci.nome}</Text>
                    <Text>{funci.cargo}</Text>
                  </View>
                </View>
              )
            })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33a3d6',
    alignItems: 'center'
  },
  imgp: {
    height: 50,
    width: 50,
  },
  row: {
    flex: 1,
    maxHeight: 100,
    width: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1faef0',
    marginTop: 40,
    borderRadius: 20,
    border: '1px solid #0b82b8',
  }
});
