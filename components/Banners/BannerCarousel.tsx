import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { getBannersThunk } from '../../redux/BannerSlice';
import { useAppDispatch, useAppSelector } from '../../types/types';
import { RootState } from '../../redux/store';
import HeroBanner from './HeroBanner';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import Skeleton from './Skeleton';
import AnimatedDot from './AnimatedDot';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const BannerCarousel = () => {
  const { banners, loading, error } = useAppSelector(
    (state: RootState) => state.banners,
  );
  const dispatch = useAppDispatch();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  useEffect(() => {
    dispatch(getBannersThunk());
  }, [dispatch]);

  const onPressPagination = useCallback(
    (index: number) => {
      ref.current?.scrollTo({
        count: index - progress.value,
        animated: true,
      });
    },
    [progress.value],
  );

  const renderDot = useCallback(
    ({ item }: { item: { index: number } }) => (
      <AnimatedDot
        index={item.index}
        progress={progress}
        onPress={onPressPagination}
      />
    ),
    [progress, onPressPagination],
  );

  const keyExtractor = useCallback(
    (item: { index: number }) => `dot-${item.index}`,
    [],
  );

  const dotData = useMemo(
    () => banners?.map((_, index) => ({ index })) || [],
    [banners],
  );

  if (loading) {
    return <Skeleton />;
  }

  if (!banners || banners.length === 0) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        ref={ref}
        height={height / 2 - 22}
        data={banners}
        onProgressChange={progress}
        renderItem={({ item }) => <HeroBanner banner={item} />}
      />

      {/* Пагинация */}
      <View style={styles.paginationContainer}>
        <FlatList
          data={dotData}
          renderItem={renderDot}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.paginationContent}
          scrollEnabled={false}
          removeClippedSubviews={false}
          maxToRenderPerBatch={banners.length}
          initialNumToRender={banners.length}
        />
      </View>

      <LinearGradient
        colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 1)']}
        locations={[0, 1]}
        style={styles.gradientBottom}
        pointerEvents="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  paginationContainer: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    padding: 4,
    borderRadius: 9999,
    zIndex: 2,
  },
  paginationContent: {
    gap: 8,
    paddingHorizontal: 4,
  },
  gradientBottom: {
    position: 'absolute',
    bottom: -120,
    left: 0,
    right: 0,
    height: 120,
  },
});

export default BannerCarousel;
