import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}
    >
      <h2 style={styles.text}>About Screen</h2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  text: {
    color: "white",
    fontFamily: "Arial",

    
  },
  img: {
    width: 100,
    height: 100,
  }

})