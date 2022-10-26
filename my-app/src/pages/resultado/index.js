import * as React from "react";
import {Text, View, TouchableOpacity } from "react-native";
import styles from '../../style/index'

export default function resultado( navi ) {

  let  { contagem } = navi.route.params;
  console.log(contagem)

  return (
    <View style={styles.quiz1}>
      <View>
        <Text style={styles.text}>parabens vc acertou um total de: { contagem }</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navi.navigation.navigate("home");
        }}
      >
        <Text>pagina inicial</Text>
      </TouchableOpacity>
    </View>
  );
}
