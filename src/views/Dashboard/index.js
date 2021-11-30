import React, { useState } from "react";
import { View } from "react-native";
import Body from "./Body";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

export default function Dashboard() {

    const [openSideNav, setOpenSideNav] = useState(false)

    return (
        <View>
            <Header openClose={setOpenSideNav} />
            <SideNav close={setOpenSideNav} open={openSideNav} />
            <Body />
        </View>
    )
}