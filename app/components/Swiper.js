import React, { Component } from 'react'
import { View,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'

const { width } = Dimensions.get('window')

const Slider = props => (
  <View style={styles.container}>

    <ImageBackground style={styles.image} source={props.uri}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        {/* <View style={{width:'100%',height:80, backgroundColor:'white'}}>

          </View> */}
        <LinearGradient colors={['rgba(0,0,0,0)', '#1A222E']} style={{ height: 80, width: '100%' }}>

        </LinearGradient>


      </View>

    </ImageBackground>
  </View>
)


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSlider: [
        require('../assets/img/slider1.jpg'),
        require('../assets/img/slider2.jpg'),
        require('../assets/img/slider3.jpg')

      ]
    }
  }

  render() {
    return (
      <View>
        <Swiper
          autoplay
          height={240}
          paginationStyle={{
            bottom: -80
          }}
        >{
            this.state.imageSlider.map((item, i) => <Slider
              uri={item}
              key={i}
            />)
          }

        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width,



  }
})