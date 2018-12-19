import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginScreen, RegisterScreen, DirectoryScreen, SplashScreen } from './app/screens'
import Login from './app/screenContoh/Login'


const App = createStackNavigator(
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
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(App)