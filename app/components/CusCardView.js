import React,{Component} from 'react'
import {Text,View,Image} from'react-native'
import Star from 'react-native-star-view';



class CusCardView extends Component{
    render(){
        return(
            <View style={{width:120,height:210,marginRight:10}}>
                <Image source={this.props.image} style={{width:110,height:150}}/>
                <View style={{flexDirection:'column',marginTop:5}}>
                    <Text style={{fontFamily:'OpenSans-Bold',fontSize:12,color:'white'}}>{this.props.age}</Text>
                    <Text style={{fontFamily:'OpenSans-Bold',fontSize:14,color:'white'}}>{this.props.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Star score={this.props.star} style={{width: 60,height: 12,marginTop:1}} />
                        <Text style={{fontFamily:'OpenSans-Bold',fontSize:10,color:'white',marginLeft:3}}>{this.props.imdb}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default CusCardView


