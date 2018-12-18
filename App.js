import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginScreen, RegisterScreen, DirectoryScreen, SplashScreen } from './app/screens'

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
        Splash: { screen: SplashScreen, navigationOptions: { header: null } }
    },
    {
        initialRouteName: 'Directory'
    }
)

export default createAppContainer(App)