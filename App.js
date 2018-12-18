import { createStackNavigator, createAppContainer } from 'react-navigation'

import { Login } from './app/screen'

const App = createStackNavigator({
    Login: {
        screen: Login
    }
})

export default createAppContainer(App)