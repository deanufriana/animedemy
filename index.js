import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

import React, { Component } from 'react'
import store from './app/store'

class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);