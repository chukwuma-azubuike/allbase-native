import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import * as theme from '../../../styles/theme'
import { bodyStyles } from "../styles/bodyStyles"

export default function ApointmentsHeader(props) {
    return (
        <>
            <View style={[bodyStyles.appointmentsHeader, theme.justifyAlign]} >
                <Text style={{ color: theme.primaryGreen }} >{props.header}</Text>
                <TouchableOpacity>
                    <Text style={{ color: theme.primaryGreen }} >View All</Text>
                </TouchableOpacity>
            </View>
            <View style={[theme.justifyAlign, { backgroundColor: theme.primaryGreen, borderRadius: 0, paddingVertical: 10, paddingHorizontal:15 }]} >
                <Text style={{ color: 'white', flex:2 }} >Customer Name</Text>
                <Text style={{ color: 'white', flex:2 }} >Request Date</Text>
            </View>
        </>
    )
}