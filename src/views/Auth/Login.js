import React from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/styles";
import * as theme from '../../styles/theme'
// import { withTheme } from 'react-native-paper';

const circuitBg = { uri: '../../assets/circuit-board 1.svg' }

function Login({ navigation }) {

    const handleSumbit = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <View style={styles.authBody} >
            <ImageBackground source={circuitBg} resizeMode='cover' style={styles.bgImage} >
                <View style={[styles.authContainer, styles.shadow]}>
                    <View style={styles.authHeaderContainer} >
                        <Image style={styles.image} source={require('../../assets/padlock.png')} />
                        <View>
                            <Text style={styles.header} >Login to your account</Text>
                            <Text>Login with your email and password</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput id='email' style={styles.textInput} placeholder='Enter your email address' />
                        <View style={styles.justifyBtw}>
                            <Text>Password</Text>
                            <Text onPress={() => { navigation.navigate('Reset password') }} style={{ color: theme.primaryGreen }} >Forgot Password?</Text>
                        </View>
                        <TextInput id='password' style={styles.textInput} placeholder='Enter password' />
                    </View>
                    <TouchableOpacity onPress={handleSumbit} style={[styles.button, styles.shadow]}>
                        <Text style={styles.buttonText}>Login →</Text>
                    </TouchableOpacity>
                    <View style={styles.justifyBtw} >
                        <Text>Don't have an account? </Text>
                        <Text onPress={() => { navigation.navigate('Signup') }} style={{ color: theme.primaryGreen }}>Create an account</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;