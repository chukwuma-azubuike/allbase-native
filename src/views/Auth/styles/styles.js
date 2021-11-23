import { StyleSheet } from 'react-native';
import * as theme from '../../../styles/theme'

const styles = StyleSheet.create({
    authBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center'
    },
    authContainer: {
        width: '90%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        borderTopWidth: 5,
        borderTopColor: theme.primaryGreen,
        paddingVertical: 35,
        paddingHorizontal: 30,
    },
    authHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    header: {
        fontWeight: '700'
    },
    image: {
        marginRight: 15,
        width: 50,
        height: 50
    },
    textInput: {
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 4,
        borderWidth: 1,
        width: 300,
        borderColor: theme.primaryGrey
    },
    textInputSignUp: {
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 4,
        borderWidth: 1,
        width: 300,
        borderColor: theme.primaryGrey
    },
    justifyBtw: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        marginVertical: 20,
        paddingVertical: 15,
        paddingHorizontal: 50,
        backgroundColor: theme.primaryGreen,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: '700'
    },
    shadow: theme.boxShadow
})

export default styles