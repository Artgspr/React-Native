import { Text, View, StyleSheet} from "react-native";


export default function Index() {
  return (
    <View style={styles.container}
    >
      <h2 style={styles.text}>Hello World</h2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  text: {
    color: "black",
    fontFamily: "Arial",

    
  },
  button: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
  }

})