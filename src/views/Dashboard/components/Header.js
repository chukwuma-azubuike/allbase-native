import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { navStyles } from '../styles/styles';
import * as theme from '../../../styles/theme';

export default function Header(props) {

    const handlePress = () => {
        props.openClose(true)
    }
    return (
        <View style={[theme.boxShadow, navStyles.header, theme.justifyAlign]} >
            <View>
                <TouchableOpacity onPress={handlePress} >
                    <Image
                        style={{ width: 30, height: 30, marginTop: 10 }}
                        source={require('../../../assets/menu.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={[theme.justifyAlign, { width: '50%' }]}>
                <Image style={{ width: 20, height: 20 }} source={require('../../../assets/email.png')} />
                <Image style={{ width: 20, height: 20 }} source={require('../../../assets/bell.png')} />
                <Image style={{ width: 45, height: 45 }} source={require('../../../assets/user.png')} />
            </View>
        </View>
    )
}