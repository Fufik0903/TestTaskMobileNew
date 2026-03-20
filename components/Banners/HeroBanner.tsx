import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerType } from '../../types/types';
import BannerDefault from './BannerDefault';
import LinearGradient from 'react-native-linear-gradient';

interface HeroBannerProps {
  banner: BannerType;
  onButtonPress?: () => void;
}
const HeroBanner = ({ banner, onButtonPress }: HeroBannerProps) => {
  return (
    <View style={styles.wrapper}>
      <BannerDefault
        banner={banner}
        containerStyle={styles.container}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <View style={styles.contentContainer}>
            {banner.title && <Text style={styles.title}>{banner.title}</Text>}

            {banner.button_text && (
              <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{banner.button_text}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </BannerDefault>
      <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
        locations={[0, 1]}
        style={styles.gradientTop}
        pointerEvents="none"
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        locations={[0, 1]}
        style={styles.gradientBottom}
        pointerEvents="none"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 240,
  },
  gradientBottom: {
    position: 'absolute',
    bottom: -44,
    left: 0,
    right: 0,
    height: 120,
  },
  image: { width: '100%', height: '100%' },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 2,
    elevation: 2,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 12,
  },
  title: {
    fontFamily: 'GolosText-SemiBold',
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'GolosText-SemiBold',
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },
});
export default HeroBanner;
