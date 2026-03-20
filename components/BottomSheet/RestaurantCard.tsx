import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StarIcon from './../../assets/images/star_icon.svg';
import HeartIcon from './../../assets/images/heart_icon.svg';
import { RestarauntCard } from '../../types/types';
const { width } = Dimensions.get('window');
const RestaurantCard = ({ item }: RestarauntCard) => {
  if (!item) {
    return null;
  }
  return (
    <View key={item.id} style={styles.container}>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.imageStyle}
        source={{ uri: item.image.url }}
        resizeMode="cover"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <HeartIcon width={16} height={16} fill="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image source={{ uri: item.logo.url }} style={styles.logoImage} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>{item.general_info.name}</Text>
        <View style={styles.ratingContainer}>
          <StarIcon width={16} height={16} fill="#FFD700" />
          <Text style={styles.rating}>
            {item.rating ? item.rating : 'Еще нет рейтинга'}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    gap: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    height: (193 / 393) * width,
  },
  imageStyle: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 16,
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  description: {
    width: '100%',
  },
  descriptionTitle: {
    fontFamily: 'GolosText-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    includeFontPadding: false,
    color: '#0C0C0C',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    fontFamily: 'GolosText-Regular',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: '#00000059',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RestaurantCard;
