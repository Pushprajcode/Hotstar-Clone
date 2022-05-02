import React from 'react';
import {
    View,
    Image,
    FlatList,
    TouchableOpacity

}from 'react-native';
const data=[
    {
      src:require('../src/assets/images/pixar.jpg')
    },
    {
        src:require('../src/assets/images/ecanto.jpg')
      },
      {
        src:require('../src/assets/images/bear.jpg')
      },
      {
          src:require('../src/assets/images/cash.jpg')
        },
        {
            src:require('../src/assets/images/pyaar.jpg')
          },
          {
              src:require('../src/assets/images/humdo.jpg')
            },
            {
                src:require('../src/assets/images/lasttep.jpg')
              }
             
     
]
const Newond=()=>{
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
export default Newond;

