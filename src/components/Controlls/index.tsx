import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  PauseIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipForwardIcon,
  PlayIcon,
} from '../../../assets/Sound';
import SkipBackIcon from '../../../assets/Sound/skipBack';

interface ControllsProps {
  isPlaying?: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const Controlls: React.FC<ControllsProps> = ({
  isPlaying = false,
  onPlay,
  onPause,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <RepeatIcon />
      </TouchableOpacity>
      <View style={styles.contentPlayer}>
        <TouchableOpacity>
          <SkipBackIcon />
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity onPress={onPause}>
            <PauseIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPlay}>
            <PlayIcon />
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <SkipForwardIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <ShuffleIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  contentPlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Controlls;
