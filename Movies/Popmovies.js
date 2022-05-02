import React from 'react';
import {
    View,
    Image,
    FlatList,
    TouchableOpacity

}from 'react-native';
const data=[
    {
      src:require('../src/assets/images/indu.jpg')
    },
    {
        src:require('../src/assets/images/mangal.jpg')
      },
      {
        src:require('../src/assets/images/maqbul.jpg')
      },
      {
          src:require('../src/assets/images/masan.jpg')
        },
        {
            src:require('../src/assets/images/moon.jpg')
          },
          {
              src:require('../src/assets/images/neeraja.jpg')
            },
            {
                src:require('../src/assets/images/panga.jpg')
              },
              {
                  src:require('../src/assets/images/pink.jpg')
                },
     
]
const Popmovies=()=>{
    const renderItem=({item})=>{
        return(
            <View>
                <TouchableOpacity>

                <Image style={{borderRadius:5,height:160,width:120,margin:7}}
                source={item.src}/>
                </TouchableOpacity>
            </View>
        )
    }
       return(
    <View>
        <FlatList data={data}
        renderItem={renderItem} 
       horizontal={true}
        />

    </View>
       )
}
export default Popmovies;

