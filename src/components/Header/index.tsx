import React from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

interface HeaderProps {
  imageUri: ImageSourcePropType;
}

const Header: React.FC<HeaderProps> = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      <Image source={imageUri} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
export default Header;
