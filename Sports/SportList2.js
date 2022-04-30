import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const data = [
  {src: require('../src/assets/images/cricket(1).jpg')},
  {
    src: require('../src/assets/images/football.jpg'),
  },
  {
    src: require('../src/assets/images/farmula.jpg'),
  },
  {
    src: require('../src/assets/images/tennis.jpg'),
  },
  {
    src: require('../src/assets/images/athelits.jpg'),
  },
];

const PopularSport = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={item.src} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  );
};
export default PopularSport;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 4,
    marginTop: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 7,
    margin: 0,
  },
});
