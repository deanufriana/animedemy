import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Content } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

import Slide from '../components/Swiper'
import CusCardView from '../components/CusCardView'
import { ALL_VIDEOS } from '../actions/video';
import { connect } from 'react-redux'

class DirectoryScreen extends Component {

    componentDidMount() {
        this.props.dispatch(ALL_VIDEOS())
    }

    constructor(props) {
        super(props)
        this.state = {
            Best: [{
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            }
            ]
        }
    }

    ScrollView = () => {
        if (this.props.video.isLoading) {
            return <Text style={{color: 'white'}}>Loading</Text>
        } else if (this.props.video.isError) {
            return <Text style={{color: 'white'}}>Eror Bro</Text>
        } else {
            return this.props.video.results.map((item) => (
                <CusCardView {...this.props}
                    image={item.image}
                    age={item.age_restriction}
                    title={item.title}
                    star={item.imdb_score}
                    imdb={item.imdb_score}
                    key={item.id}
                    id={item.id}
                />
            ))
        }


    }

    render() {
        return (
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <Header style={{ backgroundColor: '#010101' }}>
                        <Left style={{ flex: 1, marginLeft: 5 }}>
                            <Icon name='md-menu' style={{ color: 'white' }} />
                        </Left>
                        <Body style={{ flex: 8, alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                Discovery
                            </Text>
                        </Body>
                        <Right style={{ flex: 1, marginRight: 5 }}>
                            <Icon name='md-search' style={{ color: 'white' }} />
                        </Right>
                    </Header>
                    <Content>
                        <Slide />
                        <View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, color: '#00C0C1' }}>
                                    New Release
                                </Text>

                            </View>
                            <ScrollView horizontal style={{ marginLeft: 20, marginTop: 10 }} showsHorizontalScrollIndicator={false}>
                                {this.ScrollView()}
                            </ScrollView>

                        </View>

                        <View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, color: '#00C0C1' }}>
                                    Best Popular
                                </Text>

                            </View>
                            <ScrollView horizontal style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }} showsHorizontalScrollIndicator={false}>
                                {this.state.Best.map((item, key) => (
                                    <CusCardView {...this.props}
                                        image={item.image}
                                        age={item.age}
                                        title={item.title}
                                        star={item.star}
                                        imdb={item.imdb}
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

const mapStateToProps = (state) => ({
    video: state.videoReducers
})

export default connect(mapStateToProps)(DirectoryScreen)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    }
})