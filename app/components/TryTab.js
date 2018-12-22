import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import ListEpisode from '../components/ListEpisode'
import CusCardView from '../components/CusCardView'
import { connect } from 'react-redux'


import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { RELATED, SERIES_ID, DETAIL_VIDEO } from '../actions/video';

class TryTab extends Component {

    componentDidMount() {
        this.props.dispatch(RELATED(this.props.category))
        this.props.dispatch(SERIES_ID(this.props.series_id))
    }

    episode = (id) => {
        this.props.dispatch(DETAIL_VIDEO(id))
    }

    constructor(props) {
        super(props)
        this.state = {
            episode: [{
                image: require('../assets/img/anime1.jpg'),
                episode: '80'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '79'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '78'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '77'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '76'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '75'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '74'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '73'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '72'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '71'
            }
            ],
            related: [{
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

            }]

        }


    }

    render() {
        //  alert(JSON.stringify(this.props.related))
        return (
            <ScrollableTabView
                style={{ marginLeft: 10, marginRight: 10 }}
                tabBarBackgroundColor='#1A222E'
                tabBarActiveTextColor='#00C0C1'
                tabBarInactiveTextColor='white'
                tabBarTextStyle={{ fontFamily: 'Roboto-Medium', fontSize: 14 }}
                tabBarUnderlineStyle={{ backgroundColor: '#00C0C1', borderBottomColor: '#1A222E' }}

            >
                <ScrollView tabLabel='Episodes' style={{ backgroundColor: '#1A222E' }}>
                    <View >

                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.props.episode.isLoading ? <ActivityIndicator />
                                : this.props.episode.results.map((item, key) => (
                                    <TouchableOpacity key={item.id} onPress={() => this.episode(item.id)}>
                                        <ListEpisode
                                            image={item.image_url}
                                            episode={item.episode}
                                        />
                                    </TouchableOpacity>
                                ))}
                        </ScrollView>
                    </View>

                </ScrollView>
                <ScrollView tabLabel='Description' style={{ backgroundColor: '#1A222E' }}>
                    <View style={{ height: 380 }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>{this.props.deskripsi.substring(0, 170)}...</Text>

                        </View>
                        <View style={{ flex: 2, borderTopWidth: 3, borderTopColor: '#00C0C1' }}>
                            <View style={{ height: 30, width: 110, backgroundColor: '#1A222E', marginTop: -15 }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, color: '#00C0C1' }}>
                                    Related
                                </Text>
                            </View>
                            <View>
                                <ScrollView horizontal style={{ marginLeft: 20, marginTop: 10 }} showsHorizontalScrollIndicator={false}>
                                    {
                                        this.props.related.isLoading ? <ActivityIndicator /> : this.props.related.results.map((item, key) => (
                                            <TouchableOpacity key={item.id} onPress={() => this.episode(item.id)}>
                                                <CusCardView {...this.props}
                                                    image={item.image_url}
                                                    age={item.age_restriction}
                                                    title={item.title}
                                                    star={item.imdb_score}
                                                    imdb={item.imdb_score}
                                                    id={item.id}
                                                    episode={item.episode}
                                                />
                                            </TouchableOpacity>
                                        ))}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        )
    }
}

const mapStateToProps = state => ({
    related: state.relatedReducers,
    episode: state.seriesReducers,
    detail: state.videoReducers
});

export default connect(mapStateToProps)(TryTab)

const styles = StyleSheet.create({
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});