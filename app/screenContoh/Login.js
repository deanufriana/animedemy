import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { GET_VIDEO, ALL_VIDEOS } from '../actions/video';
import Video from 'react-native-video'
import { Container, Icon } from 'native-base';

class Login extends Component {

    state = {
        pause: true
    }

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

    onBuffer = () => {
        return (
            <Container>
                <Text> Loading </Text>
            </Container>
        )
    }

    onError = () => {
        return (
            <Text>Kesalahan</Text>
        )
    }

    press = () => this.setState({ pause: !this.state.pause })

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.press}>
                    <Video source={{ uri: "https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8" }}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}
                        fullscreen={true}
                        resizeMode={"stretch"}
                        paused={this.state.pause}
                        control={true}
                        // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                    />
                    <Icon name='person' style={{color: 'white'}} />
                </TouchableOpacity>


                {/* {this.listVideo()} */}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: null, 
        height: 170
    },
})

const mapStateToProps = (state) => ({
    video: state.videoReducers,
})

export default connect(mapStateToProps)(Login)