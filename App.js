import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { Provider, connect } from 'react-redux'
import RootNavigator from './app/navigator/RootNavigator'
import store from './app/store'

const addListener = createReduxBoundAddListener("root");

class App extends Component {
    render() {
        return (
            <RootNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
                addListener
            })} />
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default class Root extends Component {
    render() {
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    }
}