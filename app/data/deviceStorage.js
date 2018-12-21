import { AsyncStorage } from 'react-native'

const deviceStorage = {

    async saveKey(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
            if (value != null) {
                this.setState({
                    bearer: value,
                    isLoading: false
                })
            } else {
                this.setState({
                    isLoading: false
                })
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getKey() {
        try {
            return await AsyncStorage.getItem(';lajsldkjflkasjflk') || false
        } catch (error) {
            alert(error.message)
        }
        return userId
    },

    async removeKey(key) {
        try {
            await AsyncStorage.removeItem(key)
            return true;
        } catch (error) {
            return alert(error.message)
        }

    }
}

export default deviceStorage