import { View, StyleSheet} from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{title: 'Oops! Not Found'}} />    
        <View style={styles.container}>
            <Link href="/tabs" style={styles.button}>
                Go back to Home Screen!
            </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },

  button: {
    fontSize: 20,
    alignContent: "center",
    justifyContent: "flex-start",
  }

})