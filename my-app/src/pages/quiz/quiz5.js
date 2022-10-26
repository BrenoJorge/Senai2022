import * as React from "react";
import { RadioButton } from "react-native-paper";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../style/index";

export default function quiz5(navi) {

  let  { contagem } = navi.route.params;

  const [value, setValue] = React.useState("first");

  return (
    <View style={styles.quiz1}>
      <View>
        <Text style={styles.text}>essa fraze é dita por:</Text>
        <Text style={styles.text}>achou que eu estava brincando</Text>
      </View>

      <View>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item
            label="afonso"
            value="afonso"
            status={value === "first" ? "value" : "unvalue"}
            onPress={() => setValue("first")}
          />

          <RadioButton.Item
            label="Julius"
            value="Julius"
            status={value === "second" ? "value" : "unvalue"}
            onPress={() => setValue("second")}
          />

          <RadioButton.Item
            label="as branquelas"
            value="as branquelas"
            status={value === "three" ? "value" : "unvalue"}
            onPress={() => setValue("three")}
          />
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        style={styles.quiz1Button}
        onPress={() => {
          if (value == "as branquelas")
            contagem++

          navi.navigation.navigate("resultado", { contagem });
        }}
      >
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}