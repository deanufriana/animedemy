import React,{Component} from 'react'
import {Text,View,StyleSheet,ScrollView,Image} from 'react-native'
import {Container, Header, Left, Body, Right, Icon, Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

import Slide from '../components/Swiper'
import CusCardView from '../components/CusCardView'


class DirectoryScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            Best:[{
                image : require('../assets/img/baku.jpg'),
                age :'13+',
                title : 'Baku Matsu',
                star:4.2,
                imdb : '8.0'

            },
            {
                image : require('../assets/img/baku.jpg'),
                age :'13+',
                title : 'Baku Matsu',
                star:4.2,
                imdb : '8.0'

            },
            {
                image : require('../assets/img/baku.jpg'),
                age :'13+',
                title : 'Baku Matsu',
                star:4.2,
                imdb : '8.0'

            },
            {
                image : require('../assets/img/baku.jpg'),
                age :'13+',
                title : 'Baku Matsu',
                star:4.2,
                imdb : '8.0'

            }
        ]
        }
    }

    render(){
        return(
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <Header style={{backgroundColor:'#010101'}}>
                        <Left style={{flex:1,marginLeft:5}}>
                            <Icon name='md-menu' style={{color:'white'}}/>
                        </Left>
                        <Body style={{flex:8,alignItems:'center'}}>
                            <Text style={{fontFamily:'Roboto-Medium',fontSize:14,color:'white'}}>
                                Discovery
                            </Text>
                        </Body>
                        <Right style={{flex:1,marginRight:5}}>
                            <Icon name='md-search' style={{color:'white'}}/>
                        </Right>
                    </Header>
                    <Content>
                        <Slide/>
                        <View> 
                            <View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:20}}>
                                <Text style={{fontFamily:'OpenSans-Bold',fontSize:18,color:'#00C0C1'}}>
                                    New Release
                                </Text>
                                
                            </View>
                            <ScrollView horizontal style={{marginLeft:20,marginTop:10}} showsHorizontalScrollIndicator={false}>
                                {this.state.Best.map((item,key)=>(
                                    <CusCardView
                                        image={item.image}
                                        age={item.age}
                                        title = {item.title}
                                        star = {item.star}
                                        imdb ={item.imdb}
                                        key={key}
                                        />
                                ))}

                            </ScrollView>

                        </View>

                        <View> 
                            <View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:20}}>
                                <Text style={{fontFamily:'OpenSans-Bold',fontSize:18,color:'#00C0C1'}}>
                                    Best Popular
                                </Text>
                                
                            </View>
                            <ScrollView horizontal style={{marginLeft:20,marginTop:10,marginBottom:10}} showsHorizontalScrollIndicator={false}>
                                {this.state.Best.map((item,key)=>(
                                    <CusCardView
                                        image={item.image}
                                        age={item.age}
                                        title = {item.title}
                                        star = {item.star}
                                        imdb ={item.imdb}
                                        key={key}
                                        />
                                ))}

                            </ScrollView>

                        </View>
                        
                        

                    </Content>
                    
                
                
                </LinearGradient>

            </Container>
        )
    }
}

export default DirectoryScreen

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    
    }})