import React from "react"
import { Image, Text, View } from "react-native"
import GreenDot from "../../../components/General/GreenDot"
import * as theme from '../../../styles/theme'
import { bodyStyles } from "../styles/bodyStyles"

export default function ListItems(props) {
    return (
        <View style={{
            paddingHorizontal: 15,
            paddingVertical: 10, borderBottomWidth: 1,
            borderBottomColor: theme.primaryGrey,
        }} >
            <View style={[theme.justifyAlign]}>
                <View style={theme.justifyAlign} >
                    <View style={bodyStyles.mr10} >
                        <GreenDot />
                    </View>
                    <View>
                        <Text style={theme.small}>{props.mode || props.id} {' '} {props.date} </Text>
                        {props.paymentId ? <Text style={theme.small}>Payment ID: {props.paymentId}</Text> :
                            <Text style={theme.small}>{props.name}</Text>
                        }
                        {props.amount && <Text style={{ color: theme.primaryGreen }} >
                            N {props.amount}
                        </Text>}
                    </View>
                </View>

            </View>
        </View>
    )
}