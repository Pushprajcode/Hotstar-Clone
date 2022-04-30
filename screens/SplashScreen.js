import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('DNav');
  }, 1000);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://secure-media.hotstar.com/web-assets/prod/images/Disney+Hotstar.jpg',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#142661',
  },
  image: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    marginTop: 200,
  },
});
