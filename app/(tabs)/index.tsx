import { Text, View, StyleSheet} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/app/components/button';
import ImageViewer from '@/app/components/imageViewer';

const PlaceholderImage = require('@/assets/images/peixoto2.jpg')


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <h1 style={styles.h1}>JOGO DO PEIXOTO</h1>
        <h2 style={styles.h2}>PAGANDO MUITO!</h2>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
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

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    marginBottom: 200,
    },
  });
