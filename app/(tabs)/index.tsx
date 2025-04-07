import { Text, View, StyleSheet} from "react-native";

import ImageViewer from '@/app/components/imageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <h1 style={styles.h1}>JOGO DO PEIXOTO</h1>
      <h2 style={styles.h2}>PAGANDO MUITO!</h2>
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
  h1: {
    color: "#98D2C0",
    fontFamily: "Arial",
  },

  h2: {
    color: "#F6F8D5",
    fontFamily: "Arial",
  },

  button: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
  },

  imageContainer:{
    flex: 1,
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }

})