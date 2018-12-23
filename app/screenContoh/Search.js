import React, { PureComponent } from 'react'
import { TouchableOpacity, ActivityIndicator, Text, View, FlatList } from 'react-native'
import { ALL_VIDEOS, SEARCH } from '../actions/video'
import { connect } from 'react-redux'
import ItemSearch from './ItemSearch'
import { ListItem, Input, Right, Icon, Left } from 'native-base'
class Search extends PureComponent {

    state = {
        refresh: false,
        text: '',
    }

    componentDidMount() {
        this.props.dispatch(SEARCH(this.state.text))
    }

    search = (message) => {
        this.props.dispatch(SEARCH(message))
    }



    refresh = () => {
        this.setState({ refresh: true })
        this.props.dispatch(ALL_VIDEOS())
        this.setState({ refresh: false })
    }

    renderSparator = () => {
        return (
            <View style={{
                height: 1,
                width: '85%'
            }} />
        )
    }

    renderFooter = () => {
        if (!this.props.search.isloading) return null;

        return (
            <ActivityIndicator animating size="large" />
        )
    }

    emptyList = () => {

        if (this.props.search.isLoading) {
            return <ActivityIndicator />
        } else if (this.props.search.isError) {
            return <Text>Terjadi Kesalahan Server</Text>
        } else {
            return (<ListItem>
                <Text>Data Tidak Ditemukan</Text>
            </ListItem>)
        }

    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.search.results}
                    renderItem={({ item }) => (
                        <ItemSearch item={item} />
                    )}
                    keyExtractor={(item, index) => `listItem${index}`}
                    ItemSeparatorComponent={this.renderSparator}
                    ListHeaderComponent={(
                        <Input onChangeText={(text) => this.search(text)} placeholder="Type Here..." />
                    )}
                    ListEmptyComponent={this.emptyList}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refresh}
                    onRefresh={this.refresh}
                    onEndReachedThreshold={0}
                />
            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    search: state.videoReducers,
})

export default connect(mapStateToProps)(Search)
