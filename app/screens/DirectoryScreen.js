import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {Container, Header, Left, Body, Right, Icon, Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'

import Slide from '../components/Swiper'


class DirectoryScreen extends Component{
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
                        {/* <Swiper style={{}}>
                        <View style={{flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#9DD6EB'}}>
                            <Text style={{color: '#fff',
                                            fontSize: 30,
                                            fontWeight: 'bold'}}>Hello Swiper</Text>
                        </View>

                        <View style={{flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#97CAE5'}}>
                            <Text style={{color: '#fff',
                                            fontSize: 30,
                                            fontWeight: 'bold'}}>Beautiful</Text>
                        </View>
                        <View style={{lex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#92BBD9'}}>
                            <Text style={{color: '#fff',
                                            fontSize: 30,
                                            fontWeight: 'bold'}}>And simple</Text>
                        </View>
                        </Swiper> */}

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