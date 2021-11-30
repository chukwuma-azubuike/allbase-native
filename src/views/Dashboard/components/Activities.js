import React from "react";
import { View, Text } from "react-native";
import { bodyStyles } from "../styles/bodyStyles";
import ActivitiesHeader from "./ActivitiesHeader";
import Customers from "./Customers";
import { boxShadow, greenText, secondaryGreen, xsmall } from "../../../styles/theme";
import ListItems from "./ListItems";

export default function Activities(props) {
    return (
        <View style={[bodyStyles.container, boxShadow, { padding: 0, marginBottom: 30 }]} >
            <ActivitiesHeader header={props.header} desc={props.desc} />
            {console.log(props.data)}
            {props.data.map((item, index) =>
                props.data[0].email ? <Customers key={index} name={item.name} email={item.email} phone={item.phone} /> :
                    <ListItems key={index} mode={item.mode} date={item.date} paymentId={item.paymentId} amount={item.amount} name={item.name} id={item.id} />
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