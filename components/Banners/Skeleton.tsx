import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const { width } = Dimensions.get('window');

const SkeletonBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <SkeletonPlaceholder backgroundColor="#E1E9EE" highlightColor="#dee1e4">
          <SkeletonPlaceholder.Item
            width={width * 0.9}
            height="100%"
            borderRadius={16}
          />
        </SkeletonPlaceholder>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  containerWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SkeletonBanner;
