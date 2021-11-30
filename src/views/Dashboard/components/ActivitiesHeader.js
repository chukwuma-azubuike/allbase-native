import React from "react"
import { Text, View } from "react-native"
import * as theme from '../../../styles/theme'
import { bodyStyles } from "../styles/bodyStyles"

export default function ActivitiesHeader(props) {
    return (
        <View style={[bodyStyles.activitiesHeader, { backgroundColor: theme.primaryGreen }]} >
            <Text style={theme.whiteText} >{props.header}</Text>
            <Text style={theme.whiteText} >{props.desc}</Text>
        </View>
    )
}