import React from 'react';
import {
    View,
    Image,
    FlatList

}from 'react-native';
import Header from '../Home/header';
const data=[
    {
      src:require('../src/assets/images/asianet.jpg')
    },
    {
        src:require('../src/assets/images/abcstudios.jpg')
      },
      {
        src:require('../src/assets/images/foxlife.jpg')
      },
      {
        src:require('../src/assets/images/selectpics.jpg')
      },
      {
        src:require('../src/assets/images/showtime.jpg')
      },
      {
        src:require('../src/assets/images/starbhart.jpg')
      },
      {
        src:require('../src/assets/images/starhindi.jpg')
      },
      {
        src:require('../src/assets/images/starmarathi.jpg')
      },
      {
        src:require('../src/assets/images/starpravah.jpg')
      },
     
      {
        src:require('../src/assets/images/starutsav.jpg')
      },
      {
        src:require('../src/assets/images/starworld.jpg')
      },
]
const Channels=()=>{
    const renderItem=({item})=>{
        return(
            <View>
                <Image style={{height:150,width:180,margin:8,borderRadius:5,}}
                source={item.src}/>
            </View>
        )
    }
       return(
    <View style={{flex:1,backgroundColor:'black'}}>
         <Header/>
        <FlatList data={data}
        renderItem={renderItem} 
        horizontal={false}
        numColumns={3}
        />
    </View>
       )
}
export default Channels;

