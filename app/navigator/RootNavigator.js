import { createStackNavigator } from 'react-navigation'

import Login from '../screen/Login'

const RootNavigator = createStackNavigator({
    Login: {
        screen: Login
    }
})

export default RootNavigator