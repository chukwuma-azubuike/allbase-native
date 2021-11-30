import React from "react";
import { ScrollView, Text, View } from "react-native";
import DashboardSummary from "./components/DashboardSummary";
import { bodyStyles } from "./styles/bodyStyles";
import data from '../../data/dashboardSummary.json'
import customers from '../../data/customers.json'
import payments from '../../data/payments.json'
import installed from '../../data/installed.json'
import installations from '../../data/installations.json'
import Activities from "./components/Activities"
import Apointments from "./components/Appointments";

export default function Body() {
    return (
        <ScrollView style={bodyStyles.body} >
            <View>
                <Text style={bodyStyles.header} >Dashboard</Text>
                {data.map((item, index) =>
                    <DashboardSummary key={index} count={item.count} description={item.description} />
                )}
            </View>
            <View>
                <Text style={bodyStyles.header} >Activities</Text>
                <Activities header='Recent Customer' desc='Most Recent List Of Customers' all='All Customers' data={customers} />
                <Activities header='Successful Payments' desc='Most Recent List of Successful Payments' all='All Payments' data={payments} />
                <Activities header='Installed Systems' desc='Most Recent Completed Installations' all='All Details' data={installed} />
            </View>
            <View>
                <Text style={bodyStyles.header} >Upcoming Apointments (5)</Text>
                <Apointments header='Pending Installation Requests' all='All Apointments' data={installations} />
            </View>
        </ScrollView>
    )
}