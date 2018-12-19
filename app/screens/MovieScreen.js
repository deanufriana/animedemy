import React,{Component} from 'react'
import {Text,View,StyleSheet,Dimensions,ImageBackground,TouchableOpacity} from 'react-native'
import { Container, Content, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Star from 'react-native-star-view';
import TryTab from '../components/TryTab'

const {width} = Dimensions.get('window')


class MovieScreen extends Component{
    render(){
        return(
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    
                    <View style={styles.container}>
                        <ImageBackground style={styles.image} source={require('../assets/img/slider1.jpg')}>
                            <TouchableOpacity>
                                <View style={{marginLeft:10,marginTop:10, borderRadius:150/2,backgroundColor:'white',height:40,width:40,alignItems:'center',justifyContent:'center'}}>
                                    <Icon name='md-arrow-back'style={{color:'#00C0C1'}}/>
                                </View>
                            </TouchableOpacity>
                            
                            <View style={{flex:1,justifyContent:'flex-end'}}>
                                <LinearGradient colors={['rgba(0,0,0,0)', '#1A222E']} style={{height:80,width:'100%'}}>
                                    <View style={{justifyContent:'center',flex:1,marginLeft:16}}>
                                        <Text style={{fontSize:18,color:'white',fontFamily:'OpenSans-Bold'}}>Boruto Next Generation</Text>
                                    </View>
                                    <View style={{flexDirection:'row',flex:1,marginLeft:16}}>
                                        <View style={{flex:1,marginTop:3,borderRightColor:'white',borderRightWidth:3,height:35}}>
                                            <Text style={{fontFamily:'Open-Sans-Bold',fontSize:14,color:'white'}}>
                                                13+
                                            </Text>
                                        </View>
                                        <View style={{flexDirection:'row',flex:9,marginTop:1,marginLeft:10}}>
                                            <Star score={4.5} style={{width: 90,height: 16,marginTop:3}} />
                                            <Text style={{fontFamily:'OpenSans-Bold',fontSize:16,color:'white',marginLeft:5}}>8.0</Text>
                                        </View>
                                    </View>  
                                </LinearGradient>


                            </View>
            
                        </ImageBackground>
                    </View>
                    <View style={{flex:1,backgroundColor:'#1A222E'}}>
                        <TryTab/>
                        
                
                    </View>
                    

                    </LinearGradient>
                
            </Container>
        )
    }
}

export default MovieScreen

const styles = StyleSheet.create({
    container:{
        
        justifyContent:'center',
        height:180
      
    },
    image:{
      flex:1,
      width,
      height:180

    },
    linearGradient: {
        flex: 1,
      
      }
  })