import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MusicTitleProps {
  artist: string;
  music: string;
}

const MusicTitle: React.FC<MusicTitleProps> = ({ artist, music }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.artist}>{artist}</Text>
      <Text style={styles.music}>{music}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'column',
    height: 80,
  },
  artist: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 20,
    color: '#6979F8',
  },
  music: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 34,
    lineHeight: 41,
    color: '#151522',
  },
});

export default MusicTitle;
