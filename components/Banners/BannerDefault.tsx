import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { BannerType } from '../../types/types';

interface BannerProps {
  // Вариант 1: передать весь объект баннера (как в HeroBanner)
  banner?: BannerType;

  // Вариант 2: передать отдельные пропсы
  imageUrl?: string | ImageSourcePropType;

  // Дополнительные стили
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;

  // Режим отображения изображения
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

  // Дочерние элементы (для контента поверх изображения)
  children?: React.ReactNode;
}

const BannerDefault = ({
  banner,
  imageUrl,
  containerStyle,
  imageStyle,
  resizeMode = 'contain',
  children,
}: BannerProps) => {
  const getImageSource = (): ImageSourcePropType => {
    if (banner?.media?.url) {
      return { uri: banner.media.url };
    }
    if (typeof imageUrl === 'string') {
      return { uri: imageUrl };
    }
    return (imageUrl as ImageSourcePropType) || { uri: '' };
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <ImageBackground
        source={getImageSource()}
        style={[styles.image, imageStyle]}
        resizeMode={resizeMode}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BannerDefault;
