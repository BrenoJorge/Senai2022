import * as React from "react";
import { RadioButton } from "react-native-paper";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../style/index";

export default function quiz4( navi ) {
  
  let  { contagem } = navi.route.params;

  const [value, setValue] = React.useState("first");

  return (
    <View style={styles.quiz1}>
      <View>
        <Text style={styles.text}>para os fans de sol:</Text>
        <Text style={styles.text}>qual a cor do sol?</Text>
      </View>

      <View>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item
            label="laranja"
            value="laranja"
            status={value === "first" ? "value" : "unvalue"}
            onPress={() => setValue("first")}
          />

          <RadioButton.Item
            label="vermelho"
            value="vermelho"
            status={value === "second" ? "value" : "unvalue"}
            onPress={() => setValue("second")}
          />

          <RadioButton.Item
            label="branca"
            value="branca"
            status={value === "three" ? "value" : "unvalue"}
            onPress={() => setValue("three")}
          />
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        style={styles.quiz1Button}
        onPress={() => {
          if (value == "vermelho")
            contagem++

          navi.navigation.navigate("quiz5", { contagem });
        }}
      >
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}
