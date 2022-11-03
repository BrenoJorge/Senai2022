import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../../style/index";

export default function home({ navigation }) {
  return (
    <View style={styles.start}>
      <View>
        <Text style={styles.text}>QUIZ</Text>

        <TouchableOpacity style={styles.startButton}
          onPress={() => {
            navigation.navigate("quiz1");
          }}
        >
          <Text style={styles.text}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
