import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface ProgressBarProps {
  maximumValue?: number;
  value: number;
  onValueChange?: (value: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  maximumValue,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <Slider
        maximumTrackTintColor="#9BA6FA"
        minimumTrackTintColor="#6979F8"
        thumbTintColor="#CDD2FD"
        maximumValue={maximumValue}
        value={value}
        onSlidingComplete={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 24,
  },
});

export default ProgressBar;
