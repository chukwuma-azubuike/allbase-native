import { StyleSheet } from "react-native";
import * as theme from '../../../styles/theme'

export const bodyStyles = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingVertical: 15,
        fontSize: 50
    },
    header: {
        fontSize: 20,
        marginVertical: 20
    },
    container: {
        borderRadius: 6,
        padding: 15,
        backgroundColor: 'white',
    },
    greenCircle: {
        backgroundColor: theme.secondaryGreen,
        height: 50,
        width: 50,
        borderRadius: 24
    },
    activitiesHeader: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 15,
    },
    appointmentsHeader: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 15
    },
    mr10: {
        marginRight: 10
    }
})