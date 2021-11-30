import React from "react";
import { View, Text } from "react-native";
import { bodyStyles } from "../styles/bodyStyles";
import { boxShadow, greenText, secondaryGreen, xsmall } from "../../../styles/theme";
import ApointmentsHeader from "./AppointmentsHeader";
import AppointmentsLists from "./AppointmentLists";

export default function Apointments(props) {
    return (
        <View style={[bodyStyles.container, boxShadow, { padding: 0, marginBottom: 130 }]} >
            <ApointmentsHeader header={props.header} />
            {console.log(props.data)}
            {props.data.map((item, index) =>
                <AppointmentsLists key={index} name={item.name} requestDate={item.requestDate} />
            )}
            <View style={{
                backgroundColor: secondaryGreen,
                paddingVertical: 5,
                borderBottomLeftRadius: 6,
                borderBottomRightRadius: 6
            }} >
                <Text style={[xsmall, greenText, { textAlign: 'center' }]} >{props.all}</Text>
            </View>
        </View>
    )
}