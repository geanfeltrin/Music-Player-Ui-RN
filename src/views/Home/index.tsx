import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import Controlls from '../../components/Controlls';
import MusicTitle from '../../components/MusicTitle';
import ProgressBar from '../../components/ProgressBar';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicData, setMusicData] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus,
  );
  const soundObject = useMemo(() => new Audio.Sound(), []);

  useEffect(() => {
    soundObject
      .loadAsync(require('../../../assets/music.mp3'))
      .then(result => result)
      .catch(e => console.log(e));
  }, [soundObject]);

  const handlePlay = useCallback(async () => {
    try {
      await soundObject.playAsync();
      setMusicData(await soundObject.getStatusAsync());

      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  }, [soundObject]);

  const handlePause = useCallback(async () => {
    await soundObject.pauseAsync();
    setIsPlaying(false);
  }, [soundObject]);

  const handleChangeProgress = useCallback(
    async (value: number) => {
      soundObject
        .playFromPositionAsync(Number(value.toFixed(3)))
        .then(r => setMusicData(r));
    },
    [soundObject],
  );

  const getDuration = useCallback(() => {
    if (isPlaying) {
      soundObject.setOnPlaybackStatusUpdate(r => setMusicData(r));
    }
  }, [soundObject, isPlaying]);

  useEffect(() => {
    if (soundObject._loaded) {
      getDuration();
    }
  }, [
    isPlaying,
    getDuration,
    soundObject._loaded,
    soundObject.setOnPlaybackStatusUpdate,
    soundObject,
  ]);

  useEffect(() => {
    if (musicData.isLoaded === true) {
      if (musicData.didJustFinish) {
        setIsPlaying(false);
        soundObject.stopAsync();
      }
    }
  }, [soundObject, isPlaying, musicData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <Header imageUri={require('../../../assets/thumb1.jpg')} />
      </View>
      <View style={styles.contentPlayer}>
        <MusicTitle artist="Link Park" music="High Voltage" />
        <ProgressBar
          value={musicData.isLoaded === true ? musicData.positionMillis : 0}
          maximumValue={
            musicData.isLoaded === true ? musicData.durationMillis : 1
          }
          onValueChange={e => handleChangeProgress(e)}
        />
        <Controlls
          isPlaying={isPlaying}
          onPause={handlePause}
          onPlay={handlePlay}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  contentHeader: {
    flex: 2,
    height: '50%',
  },
  contentPlayer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
export default Home;
