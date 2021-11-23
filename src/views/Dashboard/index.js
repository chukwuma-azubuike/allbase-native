import React, { useState } from "react";
import { View } from "react-native";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

export default function Dashboard() {

    const [openSideNav, setOpenSideNav] = useState(false)

    return (
        <View>
            <Header openClose={setOpenSideNav} />
            <SideNav close={setOpenSideNav} open={openSideNav} />
        </View>
    )
}