import React, { useRef } from "react";
import { Animated } from "react-native";
import { navStyles } from '../styles/styles';
import * as theme from '../../../styles/theme';

const SlideInView = (props) => {
    const slideAnim = useRef(new Animated.Value(0)).current

    Animated.timing(slideAnim, {
        toValue: props.open ? 0 : -500,
        duration: 300,
        useNativeDriver: false
    }).start()

    return (
        <Animated.View style={[{ left: slideAnim }, theme.boxShadow, navStyles.sideNav]} >
            {props.children}
        </Animated.View>
    )
}

export default SlideInView