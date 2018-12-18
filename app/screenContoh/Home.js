import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text> Ini Adalah Beranda {this.props.navigation.getParam('id', 'nodata')} </Text>
            </View>
        )
    }
}