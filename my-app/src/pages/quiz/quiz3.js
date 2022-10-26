import * as React from "react";
import { RadioButton } from "react-native-paper";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../style/index";

export default function quiz3( navi ) {

  let  { contagem } = navi.route.params;
  
  const [value, setValue] = React.useState("first");

  return (
    <View style={styles.quiz1}>
      <View>
        <Text style={styles.text}>Continue a msc:</Text>
        <Text style={styles.text}>minha mãe mandou eu escolher esse daqui</Text>
      </View>

      <View>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item
            label="mas como eu sou"
            value="mas como eu sou"
            status={value === "first" ? "value" : "unvalue"}
            onPress={() => setValue("first")}
          />

          <RadioButton.Item
            label="nutela branca"
            value="nutela branca"
            status={value === "second" ? "value" : "unvalue"}
            onPress={() => setValue("second")}
          />

          <RadioButton.Item
            label="talvez eu vá"
            value="talvez eu vá"
            status={value === "three" ? "value" : "unvalue"}
            onPress={() => setValue("three")}
          />
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        style={styles.quiz1Button}
        onPress={() => {
          if (value == "nutela branca")
            contagem++

          navi.navigation.navigate("quiz4", { contagem });
        }}
      >
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}
