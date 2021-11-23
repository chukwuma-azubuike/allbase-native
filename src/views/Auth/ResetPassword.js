import React from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/styles";
import * as theme from '../../styles/theme'
const circuitBg = { uri: '../../assets/circuit-board 1.svg' }

export default function ResetPassword({ navigation }) {
    return (
        <View style={styles.authBody} >
            <ImageBackground source={circuitBg} resizeMode='cover' style={styles.bgImage} >
                <View style={[styles.authContainer, styles.shadow]}>
                    <View style={styles.authHeaderContainer} >
                        <Image style={styles.image} source={require('../../assets/padlock.png')} />
                        <View>
                            <Text style={styles.header} >Forgot Password</Text>
                            <Text>Enter your email to reset password</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput id='email' style={styles.textInput} placeholder='Enter your email address' />
                    </View>
                    <TouchableOpacity style={[styles.button, styles.shadow]}>
                        <Text style={styles.buttonText}>Reset Password →</Text>
                    </TouchableOpacity>
                    <View style={styles.justifyBtw} >
                        <Text>Already have an account? </Text>
                        <Text onPress={() => { navigation.navigate('Login') }} style={{ color: theme.primaryGreen }}>Login</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}