import React from "react";
import { Text, View } from "react-native";
import { bodyStyles } from "../styles/bodyStyles";
import * as theme from '../../../styles/theme'

export default function DashboardSummary(props) {
    return (
        <View style={[theme.boxShadow, bodyStyles.container, theme.align, { marginBottom: 10 }]} >
            <View style={[bodyStyles.greenCircle, { marginRight: 10 }]} />
            <View>
                <Text style={theme.header} >{props.count}</Text>
                <Text>{props.description}</Text>
            </View>
        </View>
    )
}