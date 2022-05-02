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
    src: require('../src/assets/images/atarangi.jpg'),
    
  },
  {
    src: require('../src/assets/images/bolopencil.jpg'),
  },
  {
    src: require('../src/assets/images/badai.jpg'),
    
  },
  {
    src: require('../src/assets/images/super.jpg'),
  },
  {
    src: require('../src/assets/images/mangal.jpg'),
    
  },

  {
    src: require('../src/assets/images/moon.jpg'),
  },
  {
    src: require('../src/assets/images/sundram.jpg'),
    
  },
  {
    src: require('../src/assets/images/tanji.jpg'),
  },
  {
    src: require('../src/assets/images/badai.jpg'),
    
  },

  {
    src: require('../src/assets/images/anupma.jpg'),
  },
  {
    src: require('../src/assets/images/mangal.jpg'),
    
  },
  
  
  
];

const Homeimages =()=> {
    const renderItem=({item})=>{
        return(
            <View>
                <Image
                 style={{height:180,width:130,resizeMode:'cover',margin:5}}
                 source={item.src}/>

            </View>
        )
    }
   
    return(
    <View style={{flex:1,backgroundColor:'black'}}>
    <FlatList 
    data={images}
    renderItem={renderItem}
    horizontal={false}
    numColumns={3}
    
     

   
   />
   </View>
    )


};
export default Homeimages;
