import * as React from "react";
import { RadioButton } from "react-native-paper";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../style/index";

export default function quiz2( navi ) {
  let  { contagem } = navi.route.params;
  const [value, setValue] = React.useState("first");

  return (
    <View style={styles.quiz1}>
      <View>
        <Text style={styles.text}>quem é esse pokemon?</Text>
      </View>

      <View>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item
            label="bubazauro"
            value="bubazauro"
            status={value === "first" ? "value" : "unvalue"}
            onPress={() => setValue("first")}
          />

          <RadioButton.Item
            label="pikaku"
            value="pikaku"
            status={value === "second" ? "value" : "unvalue"}
            onPress={() => setValue("second")}
          />

          <RadioButton.Item
            label="neandertal"
            value="neandertal"
            status={value === "three" ? "value" : "unvalue"}
            onPress={() => setValue("three")}
          />
        </RadioButton.Group>
      </View>
      <TouchableOpacity  style={styles.quiz1Button}
        onPress={() => {
          if (value == "neandertal")
            contagem++

            navi.navigation.navigate("quiz3", { contagem });
        }}
      >
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}