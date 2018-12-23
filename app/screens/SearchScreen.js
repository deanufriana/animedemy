import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TextInput, FlatList, SectionList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Content, List, ListItem, Thumbnail } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import { SEARCH } from '../actions/video';
import { connect } from 'react-redux'

class SearchScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    search = (text) => {
        this.setState({ text })
        this.props.dispatch(SEARCH(text))
    }

    searchList = () => {
        if (this.props.video.isLoading) {
            return <ActivityIndicator />
        } else if (this.props.video.isError) {
            return <Text>Data Tidak Ditemukan</Text>
        } else {
            return (
                this.props.video.resultsSearch.map((data) =>
                    (
                        <ListItem avatar key={data.id} onPress={() => this.props.navigation.navigate('Movie', { id: data.id })}>
                            <Left>
                                <Thumbnail source={{ uri: data.image_url }} />
                            </Left>
                            <Body style={{
                                fontSize: 14,
                                fontFamily: 'Roboto-Bold',
                                color: 'white'
                            }}>
                                <Text >{data.title}</Text>
                                <Text note>Episode : {data.episode}</Text>
                            </Body>
                        </ListItem>
                    ))
            )
        }
    }

    render() {
        return (
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <Header style={{ backgroundColor: '#010101' }}>
                        <Left style={{ flex: 1, marginLeft: 5 }}>
                            <Icon onPress={() => this.props.navigation.goBack()} name='md-arrow-back' style={{ color: 'white' }} />
                        </Left>
                        <Body style={{ flex: 8 }}>
                            <TextInput
                                onChangeText={(text) => this.search(text)}
                                style={styles.input}
                                placeholder='Search'
                                placeholderTextColor='grey'
                            />
                        </Body>
                    </Header>
                    <Content style={{ color: 'white', flex: 1 }}>
                        <View>
                            {/* <SectionList
                                sections={this.state.sections}
                                renderItem={({ item }) => <TouchableOpacity><Text style={styles.item}>{item}</Text></TouchableOpacity>}
                                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                                keyExtractor={(item, index) => index}
                            />
                        </View> */}
                            <List style={{ backgroundColor: 'white' }}>
                                {this.state.text != '' ? this.searchList() : <Text>Tidak Ada Data</Text>}
                            </List>



                            {/* <List>
                                {this.state.data.map((item, key) => (
                                    <ListItem key={key}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontFamily: 'Roboto-Bold',
                                            color: 'white'
                                        }}>{this.state.text != '' ? this.searchList() : <Text>Tidak Ada Data</Text>}</Text>
                                    </ListItem>
                                ))}
                            </List> */}


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

export default connect(mapStateToProps)(SearchScreen)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    input: {
        borderRadius: 16,
        width: 300,
        height: 30,
        backgroundColor: 'white',
        padding: 7,
        marginRight: 20

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        color: '#00C0C1',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        backgroundColor: '#1A222E',
    },
    item: {
        padding: 10,
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        height: 44,
        color: 'white'
    }
})