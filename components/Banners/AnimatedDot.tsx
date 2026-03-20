import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface AnimatedDotProps {
  index: number;
  progress: SharedValue<number>;
  onPress: (index: number) => void;
}
const AnimatedDot = ({ index, progress, onPress }: AnimatedDotProps) => {
  const animationProgress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const isActive = Math.floor(progress.value + 0.5) === index;

    animationProgress.value = withTiming(isActive ? 1 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });

    return {
      width: interpolate(animationProgress.value, [0, 1], [4, 16]),
      backgroundColor: interpolateColor(
        animationProgress.value,
        [0, 1],
        ['#B5B9CC', '#FFFFFF'],
      ),
    };
  });

  return (
    <Animated.View
      style={[styles.dot, animatedStyle]}
      onTouchEnd={() => onPress(index)}
    />
  );
};
const styles = StyleSheet.create({
  dot: {
    height: 4,
    borderRadius: 2,
  },
});

export default AnimatedDot;
