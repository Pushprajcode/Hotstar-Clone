import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
const SeachList = () => {
  return (
    <View>
      <Text style={styles.popular}>{'Popular'}</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../src/assets/images/koffewith.jpg')}
        />
        <Text style={styles.text}>{'Koffee With Karan'}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../src/assets/images/anupma.jpg')}
        />
        <Text style={styles.text}>{'Anupama'}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../src/assets/images/moon.jpg')}
        />
        <Text style={styles.text}>{'Moon Knight'}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../src/assets/images/pixar.jpg')}
        />
        <Text style={styles.text}>{'Pixar Popcorn'}</Text>
      </View>
    </View>
  );
};
export default SeachList;
const styles = StyleSheet.create({
  popular: {
    color: 'grey',
    left: 9,
    marginTop: 29,
    fontSize: 18,
  },
  container: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 50,
    borderRadius: 5,
    margin: 9,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    left: 8,
  },
});
