import { StyleSheet, Dimensions } from "react-native";


let ScreenHeight = Dimensions.get("window").height;

export const navStyles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        fontSize: 50,
    },
    sideNav: {
        flex: 0,
        width: '100%',
        height: ScreenHeight,
        textAlign: 'center',
        position: 'absolute',
        zIndex: 10,
    },
    list: {
        lineHeight: 55,
    },
    underLay: {
        backgroundColor: 'rgba(0, 0, 0, 0.64)',
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    body: {
        paddingHorizontal: 20,
        paddingVertical: 30
    }
})