import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './src/views/Home';

const App: React.FC = () => {
  return (
    <View>
      <StatusBar />
      <Home />
    </View>
  );
};

export default App;
