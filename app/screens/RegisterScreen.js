import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Form, Item, Input, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput'
import CustomTextInputPass from '../components/CustomTextInputPass'

class RegisterScreen extends Component {
    render() {
        return (
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <ScrollView>
                        <View style={{ marginTop: 50, width: 100, borderWidth: 2, borderBottomColor: '#00C0C1' }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 24, color: '#00C0C1' }}>
                                Register
                            </Text>
                        </View>
                        <CustomTextInputPass
                            placeholder='Username' />
                        <CustomTextInputPass
                            placeholder='Email' />
                        <CustomTextInputPass
                            placeholder='Name' />
                        <CustomTextInputPass
                            placeholder='Password' />

                        <Button style={{ backgroundColor: '#00C0C1', width: '100%', height: 50, marginTop: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', color: 'white', fontSize: 18 }}>
                                Register
                            </Text>
                        </Button>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                You Have Account ?
                            </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#00C0C1', marginLeft: 5 }}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </LinearGradient>
            </Container>
        )
    }
}

export default RegisterScreen

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20

    }
})