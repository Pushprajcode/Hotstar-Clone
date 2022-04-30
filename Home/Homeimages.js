import React from 'react';
import {
    View,
    FlatList,
    Image


} from 'react-native';

const images = [
  {
    src: require('../src/assets/images/anupma.jpg'),
  },
  {
    src: require('../src/assets/images/badai.jpg'),
  },
  {
    src: require('../src/assets/images/bolopencil.jpg'),
  },
  {
    src: require('../src/assets/images/confuson.jpg'),
  },
  {
    src: require('../src/assets/images/heaven.jpg'),
  },
  {
    src: require('../src/assets/images/hudala.jpg'),
  },
  {
    src: require('../src/assets/images/ifa.jpg'),
  },
  {
    src: require('../src/assets/images/judge.jpg'),
  },
  {
    src: require('../src/assets/images/kitab.jpg'),
  },
  {
    src: require('../src/assets/images/pencil.jpg'),
  },
  {
    src: require('../src/assets/images/sketch.jpg'),
  },
  {
    src: require('../src/assets/images/song.jpg'),
  },
  {
    src: require('../src/assets/images/zid.jpg'),
  },
  {
    src: require('../src/assets/images/day.jpg'),
  },
];

const Homeimages =()=> {
    const renderItem=({item})=>{
        return(
            <View>
                <Image source={item.src}/>

            </View>
        )
    }

    <FlatList 
    data={images}
    renderItem={renderItem}
    numColumns={3}/>


};
export default Homeimages;
