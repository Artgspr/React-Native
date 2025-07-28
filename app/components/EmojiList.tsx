import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emojis] = useState<ImageSourcePropType[]>([
        require('@/assets/images/futebol.png'),
        require('@/assets/images/romario.png'),
        require('@/assets/images/peixoto.jpg'),
        require('@/assets/images/notas.webp'),
        require('@/assets/images/basket.webp'),
        require('@/assets/images/peixoto.webp'),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emojis}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}>
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
});