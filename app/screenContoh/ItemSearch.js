import React from 'react'
import { Text } from 'react-native'
import { ListItem, Right, Icon, Left } from 'native-base'

class ItemSearch extends React.Component {
    state = {
        like: false
    }
    render() {
        const { item } = this.props
        return (
            <ListItem onPress={() => this.setState({ like: !this.state.like })
            }>
                <Left>
                    <Text>{item.id} {item.title}</Text>
                </Left>
                <Right><Icon name={'heart'} style={{color: this.state.like ? 'red' : 'black'}} /></Right>
            </ListItem >
        )
    }

}

export default ItemSearch