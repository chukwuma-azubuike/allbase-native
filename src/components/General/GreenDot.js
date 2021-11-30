import React from "react";
import { View } from "react-native";
import { primaryGreen } from "../../styles/theme";

export default function GreenDot() {
    return (
        <View
            style={{
                height: 3,
                width: 3,
                backgroundColor: primaryGreen,
                borderRadius: 24
            }}
        />
    )
}