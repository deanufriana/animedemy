import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './app/screen/Login'

const App = createStackNavigator({
    Login
})

export default createAppContainer(App)