import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Container, Content, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Star from 'react-native-star-view';
import TryTab from '../components/TryTab'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation'

const { width } = Dimensions.get('window')

class MovieScreen extends Component {

    state = {
        pause: true,
        fullscreen: false
    }

    componentDidMount() {
        Orientation.lockToPortrait()
    }

    fullscreen = () => {
        this.setState({ fullscreen: !this.state.fullscreen })
        if (!this.state.fullscreen) {
            Orientation.lockToLandscape()
        } else {
            Orientation.lockToPortrait()
        }
    }

    press = () => this.setState({ pause: !this.state.pause })

    controlButton = () => {
        if (this.state.pause) {
            return (
                <ImageBackground source={require('../assets/img/slider1.jpg')} style={styles.image}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View style={{ alignSelf: 'flex-start', marginLeft: 10, marginTop: 10, borderRadius: 150 / 2, backgroundColor: 'white', height: 30, width: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='md-arrow-back' style={{ color: '#00C0C1' }} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Icon name='skip-backward' style={{ color: 'white', marginHorizontal: 50 }} />

                            <Icon onPress={this.press} name='play' style={{ color: 'white', marginHorizontal: 50 }} />

                            <Icon name='skip-forward' style={{ color: 'white', marginHorizontal: 50 }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <LinearGradient colors={['rgba(0,0,0,0)', '#1A222E']} style={{ height: 80, width: '100%' }}>
                                <View style={{ justifyContent: 'center', flex: 1, marginLeft: 16 }}>
                                    <Text style={{ fontSize: 18, color: 'white', fontFamily: 'OpenSans-Bold' }}>Boruto Next Generation</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, marginLeft: 16 }}>
                                    <View style={{ flex: 1, marginTop: 3, borderRightColor: 'white', borderRightWidth: 3, height: 20 }}>
                                        <Text style={{ fontFamily: 'Open-Sans-Bold', fontSize: 14, color: 'white' }}>
                                            13+
                                            </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', flex: 8, marginTop: 1, marginLeft: 10 }}>
                                        <Star score={4.5} style={{ width: 90, height: 16, marginTop: 3 }} />
                                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 16, color: 'white', marginLeft: 5 }}>8.0</Text>
                                    </View>

                                    <View style={{ alignSelf: 'flex-end', margin: 10, }}>
                                        <Icon style={{ color: 'white' }} name={this.state.fullscreen ? "phone-portrait" : "phone-landscape"} onPress={this.fullscreen} />
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                </ImageBackground>
            )
        }
    }

    render() {
        //  alert(this.props.navigation.getParam('id', 'nodata'))
        return (
            <Container>
                <View style={styles.container}>

                    <TouchableOpacity style={{ justifyContent: 'space-between', flex: 1 }} onPress={this.press}>
                        <Video source={{ uri: "https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8" }}   // Can be a URL or a local file.
                            ref={(ref) => {
                                this.player = ref
                            }}
                            poster={"http://cdn56.picsart.com/175939569000202.gif"}
                            posterResizeMode={'cover'}                                // Store reference
                            onBuffer={this.Buffer}                // Callback when remote video is buffering
                            onError={this.videoError}
                            fullscreen={this.state.fullscreen}
                            resizeMode={"stretch"}
                            paused={this.state.pause}
                            // Callback when video cannot be loaded
                            style={styles.backgroundVideo}
                        />

                        {this.controlButton()}
                    </TouchableOpacity>


                </View>
                {
                    this.state.fullscreen ||
                    <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                        <View style={{ flex: 2, backgroundColor: '#1A222E' }}>
                            <TryTab />
                        </View>
                    </LinearGradient>
                }
            </Container>
        )
    }
}

export default MovieScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 180

    },
    image: {
        flex: 1,
        width,
        height: 180

    },
    linearGradient: {
        flex: 1,

    }
})