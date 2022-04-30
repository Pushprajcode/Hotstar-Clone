import React from 'react';
import {
    View,
    FlatList,
    Image


} from 'react-native';

const images = [
  {
    src: require('./src/assets/images/anupma.jpg'),
  },
  {
    src: require('./src/assets/images/badai.jpg'),
  },
  {
    src: require('./src/assets/images/bolopencil.jpg'),
  },
 
  {
    src: require('./src/assets/images/hudala.jpg'),
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
