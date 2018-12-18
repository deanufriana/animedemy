import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import configureStore from './app/store'

class Index extends Component {
    render() {
        return (
            <Provider store={configureStore}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Index)