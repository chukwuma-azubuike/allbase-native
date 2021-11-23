import React from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/styles";
import * as theme from '../../styles/theme'
const circuitBg = { uri: '../../assets/circuit-board 1.svg' }

export default function Signup({ navigation }) {
    return (
        <View style={styles.authBody} >
            <ImageBackground source={circuitBg} resizeMode='cover' style={styles.bgImage} >
                <View style={[styles.authContainer, styles.shadow]}>
                    <View style={styles.authHeaderContainer} >
                        <Image style={styles.image} source={require('../../assets/padlock.png')} />
                        <View>
                            <Text style={styles.header} >Create an account</Text>
                            <Text>Enter your email and password</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput id='full-name' style={[styles.textInputSignUp, { margin: 0 }]} placeholder='Full Name' />
                        <TextInput id='email' style={styles.textInputSignUp} placeholder='Enter' />
                        <TextInput id='phone-number' style={styles.textInputSignUp} placeholder='Phone Number' />
                        <TextInput id='password' style={styles.textInputSignUp} placeholder='Password' />
                        <TextInput id='confirm-password' style={styles.textInputSignUp} placeholder='Confirm Password' />
                    </View>
                    <TouchableOpacity style={[styles.button, styles.shadow]}>
                        <Text style={styles.buttonText}>Create account →</Text>
                    </TouchableOpacity>
                    <View style={styles.justifyBtw} >
                        <Text>Already have an account? </Text>
                        <Text style={{ color: theme.primaryGreen }} onPress={() => { navigation.navigate('Login') }}>Login</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}