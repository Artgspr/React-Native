import { Text, View, StyleSheet} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import Button from '@/app/components/button';
import ImageViewer from '@/app/components/imageViewer';
import IconButton from '@/app/components/iconButton';
import CircleButton from '@/app/components/CircleButton';
import EmojiPicker from '@/app/components/EmojiPicker';
import EmojiList from '@/app/components/EmojiList';
import { ImageSourcePropType } from 'react-native';
import EmojiSticker from '@/app/components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const PlaceholderImage = require('@/assets/images/peixoto2.jpg')
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';



export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const onSaveImageAsync = async () => {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibrary.saveToLibraryAsync(localUri)
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
       </View>
      </View> 
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
      <View style={styles.footerContainer}>
        <h1 style={styles.h1}>JOGO DO PEIXOTO</h1>
        <h2 style={styles.h2}>PAGANDO MUITO!</h2>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
    </GestureHandlerRootView>
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
  
    optionsContainer: {
      position: 'absolute',
      bottom: 80,
  },
  optionsRow: {
      alignItems: 'center',
      flexDirection: 'row',
  
  },

  });
