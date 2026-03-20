import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolation,
} from 'react-native-reanimated';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import RestaurantCard from './RestaurantCard';
import {
  RestarauntCard,
  useAppDispatch,
  useAppSelector,
} from '../../types/types';
import {RootState} from '../../redux/store';
import {getVendorsListThunk} from '../../redux/VendorsSlice';

const BottomSheetComponent = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispatch();
  const {vendorsList} = useAppSelector((state: RootState) => state.vendors);
  const animatedIndex = useSharedValue(0);
  useEffect(() => {
    dispatch(getVendorsListThunk());
  }, [dispatch]);
  const animatedContainerStyle = useAnimatedStyle(() => {
    const radius = interpolate(
      animatedIndex.value,
      [0, 1],
      [32, 0],
      Extrapolation.CLAMP,
    );

    return {
      borderTopLeftRadius: withTiming(radius, {duration: 100}),
      borderTopRightRadius: withTiming(radius, {duration: 100}),
    };
  });

  return (
    <View style={styles.containerWrapper}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['50%', '100%']}
        handleComponent={null}
        backgroundStyle={styles.bottomSheetBackground}
        animatedIndex={animatedIndex}
        onChange={(index: number) => console.log(index)}>
        <Animated.View style={[styles.container, animatedContainerStyle]}>
          <BottomSheetFlatList
            data={vendorsList}
            renderItem={(item: RestarauntCard) => <RestaurantCard {...item} />}
            keyExtractor={(item: RestarauntCard) => item.id.toString()}
            ListHeaderComponent={
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Недалеко от вас</Text>
              </View>
            }
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={10}
            initialNumToRender={5}
          />
        </Animated.View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  bottomSheetBackground: {
    backgroundColor: '#f2f3f7',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0C0C0C',
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 24,
    paddingBottom: 32,
    backgroundColor: '#ffffff',
  },
});

export default BottomSheetComponent;
