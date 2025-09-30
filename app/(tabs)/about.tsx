import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Peixoto Esportes!</Text>
        <Text style={styles.paragraph}>
          Seu portal definitivo para o mundo dos esportes. Somos apaixonados por
          tudo que envolve competição, superação e a emoção do jogo.
        </Text>
        <Text style={styles.paragraph}>
          Nosso objetivo é trazer para você as últimas notícias, análises
          aprofundadas, resultados em tempo real e conteúdos exclusivos sobre
          suas modalidades favoritas.
        </Text>

        <Text style={styles.subtitle}>No Peixoto Esportes, você encontra:</Text>
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>• Notícias atualizadas</Text>
          <Text style={styles.featureItem}>• Cobertura completa</Text>
          <Text style={styles.featureItem}>• Comunidade interativa</Text>
        </View>

        <Text style={styles.paragraph}>
          Nosso compromisso é oferecer uma experiência de alta qualidade, com
          informações precisas e um design intuitivo. Agradecemos por fazer
          parte da nossa comunidade!
        </Text>

        <Text style={styles.directs}>
          © 2025 Jogo do Peixoto. Todos os direitos reservados.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#205781",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F6F8D5",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#A2D5F2",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#E0E0E0",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 15,
  },
  featureList: {
    alignItems: "flex-start",
  },
  featureItem: {
    fontSize: 16,
    color: "#E0E0E0",
    lineHeight: 24,
  },
  directs: {
    fontSize: 12,
    color: "#A2D5F2",
    fontStyle: "italic",
    marginTop: 30,
    textAlign: "center",
  },
});