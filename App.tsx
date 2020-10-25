/* eslint-disable global-require */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Home from './src/views/Home';

const App: React.FC = () => {
  const [loaded] = useFonts({
    SFProDisplay: require('./assets/fonts/SFProDisplay.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar />
      <Home />
    </>
  );
};

export default App;
