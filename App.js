import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginScreen, RegisterScreen, DirectoryScreen, SplashScreen, MovieScreen, SearchScreen, CategoryScreen } from './app/screens'
import Login from './app/screenContoh/Login'
import Home from './app/screenContoh/Home'
import CusCardView from './app/components/CusCardView'
import deviceStorage from './app/data/deviceStorage'
import OneSignal from 'react-native-onesignal';

const Appdua = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null
            }
        },
        Directory: {
            screen: DirectoryScreen,
            navigationOptions: {
                header: null
            }
        },
        Splash: {
            screen: SplashScreen, navigationOptions: {
                header: null
            }
        },
        Home: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Contoh: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Movie: {
            screen: MovieScreen,
            navigationOptions: {
                header: null
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                header: null
            }
        },
        Category: {
            screen: CategoryScreen,
            navigationOptions: {
                header: null
            }
        },
        CusView: {
            screen: CusCardView
        }
    },
    {
        // (deviceStorage.getKey ? 'Directory' : 'Login')
        initialRouteName: 'Directory'
    }
)

const Appcontainer = createAppContainer(Appdua)

export default class App extends Component {
    constructor(properties) {
        super(properties);
        OneSignal.init("c234dc31-4823-4573-a30a-8596565b6250");

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onIds(device) {
        console.log('Device info: ', device);
    }

    render() {
        return (
            <Appcontainer />

        )
    }
}