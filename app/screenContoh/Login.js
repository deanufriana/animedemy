import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { GET_VIDEO, ALL_VIDEOS } from '../actions/video';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(ALL_VIDEOS())
    }

    listVideo = () => {
        if (this.props.video.isLoading) {
            return <Text>Loading</Text>
        } else if (this.props.video.isError) {
            return <Text>Tidak Ada Koneksi Internet</Text>
        } else {
            return this.props.video.results.map(
                (data) => {
                    return (
                        <TouchableOpacity key={data.id} onPress={() => this.props.navigation.navigate('Home', {
                            id: data.id
                        })}>
                            <Text>{data.title}</Text>
                        </TouchableOpacity>
                    )
                }
            )
        }
    }

    render() {
        return (
            <View>
                {this.listVideo()}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    video: state.videoReducers,
})

export default connect(mapStateToProps)(Login)