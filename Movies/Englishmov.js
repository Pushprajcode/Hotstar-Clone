import React from 'react';
import {
    View,
    Image,
    FlatList,
    TouchableOpacity

}from 'react-native';
const data=[
    
      {
          src:require('../src/assets/images/cash.jpg')
        },
        {
            src:require('../src/assets/images/pyaar.jpg')
          },
          {
              src:require('../src/assets/images/daddy.jpg')
            },
            {
                src:require('../src/assets/images/sangram.jpg')
              },
              {
                src:require('../src/assets/images/south.jpg')
              },
              
              
     
]
const Englishmov=()=>{
    const renderItem=({item})=>{
        return(
            <View>
                <TouchableOpacity>

                <Image style={{borderRadius:5,height:160,width:150,margin:7}}
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
export default Englishmov;

