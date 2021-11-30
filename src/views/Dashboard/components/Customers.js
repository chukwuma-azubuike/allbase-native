import React from "react"
import { Text, View } from "react-native"
import * as theme from '../../../styles/theme'

export default function Customers(props) {
    return (
        <View style={{
            paddingHorizontal: 15,
            paddingVertical: 10, borderBottomWidth: 1,
            borderBottomColor: theme.primaryGrey,
        }} >
            <View style={[theme.justifyAlign]}>
                <View>
                    <Text>{props.name}</Text>
                    <Text>{props.email}</Text>
                </View>
                <Text style={{ color: theme.primaryGreen }} >{props.phone}</Text>
            </View>
        </View>
    )
}