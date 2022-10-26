import { useState } from "react";
import { RadioButton } from "react-native-paper";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../style/index";

var contagem = 0

export default function quiz1({ navigation }) {
  const [value, setValue] = useState("first");

  return (



    <View style={styles.quiz1}>
      <View>
        <Text style={styles.text}>Quem é o papa?</Text>
      </View>

      <View>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButton.Item
            label="francisco"
            value="francisco"
            status={value === "first" ? "value" : "unvalue"}
            onPress={() => setValue("first")}
          />
          <RadioButton.Item
            label="jorge"
            value="jorge"
            status={value === "second" ? "value" : "unvalue"}
            onPress={() => setValue("second")}
          />

          <RadioButton.Item
            label="pedrin"
            value="pedrin"
            status={value === "three" ? "value" : "unvalue"}
            onPress={() => setValue("three")}
          />
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        style={styles.quiz1Button}
        onPress={() => {

          if (value == "francisco")
            contagem++

          navigation.navigate("quiz2", { contagem });

        }}
      >
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  )

}

console.log(contagem)