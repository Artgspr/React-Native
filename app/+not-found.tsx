import { View, StyleSheet} from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{title: 'Oops! Rota Não Encontrada'}} />    
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
            <h2 style={styles.text}>Clique aqui para retornar</h2>
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
    backgroundColor: "#205781",
  },

  button: {
    fontSize: 20,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "#98D2C0",
    fontFamily: "Arial",

    
  }
})