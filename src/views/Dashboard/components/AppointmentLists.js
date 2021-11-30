import React from "react"
import { Text, View } from "react-native"
import GreenDot from "../../../components/General/GreenDot"
import * as theme from '../../../styles/theme'
import { bodyStyles } from "../styles/bodyStyles"

export default function AppointmentsLists(props) {
    return (
        <View style={{
            paddingHorizontal: 15,
            paddingVertical: 10, borderBottomWidth: 1,
            borderBottomColor: theme.primaryGrey,
        }} >
            <View style={[theme.justifyAlign]}>
                <View style={theme.justifyAlign} >
                    <Text style={{ flex: 2 }}>{props.name}</Text>
                    <Text style={{ flex: 2 }}>{props.requestDate}</Text>
                </View>

            </View>
        </View>
    )
}