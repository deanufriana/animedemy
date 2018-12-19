import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginScreen, RegisterScreen, DirectoryScreen, SplashScreen,MovieScreen,SearchScreen,CategoryScreen } from './app/screens'
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
        },
        Movie:{
            screen:MovieScreen,
            navigationOptions:{
                header:null
            }
        },
        Search:{
            screen:SearchScreen,
            navigationOptions:{
                header:null
            }
        },
        Category:{
            screen:CategoryScreen,
            navigationOptions:{
                header:null
            }
        },
    },
    {
        initialRouteName: 'Category'
    }
)

export default createAppContainer(App)