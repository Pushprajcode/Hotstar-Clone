import React, { Component } from "react";
import { StyleSheet,  View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class Iplads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        
        require('../src/assets/images/Rr.jpg'),
        require('../src/assets/images/Lucknow.jpg'),
        require('../src/assets/images/punjab.jpg'),
        require('../src/assets/images/Hydrabad.jpg') 
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          autoplay
        
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:15
  }
});