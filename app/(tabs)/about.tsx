import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}
    >
      <h3 style={styles.text}>Este jogo é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. Não nos responsabilizamos por quaisquer danos diretos, indiretos ou consequenciais resultantes do uso deste software. Todas as marcas e conteúdos pertencem aos seus respectivos proprietários.Este jogo é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. Não nos responsabilizamos por quaisquer danos diretos, indiretos ou consequenciais resultantes do uso deste software. Todas as marcas e conteúdos pertencem aos seus respectivos proprietários.</h3>
      <p style={styles.directs}><b><i>Todos os direitos reservados para Jogo do Peixoto © 2025.</i></b></p>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#205781",
  },
  text: {
    color: "#4F959D",
    fontFamily: "Arial",

    
  },

  directs: {
    color:'#F6F8D5',
  },

  img: {
    width: 100,
    height: 100,
  }

})