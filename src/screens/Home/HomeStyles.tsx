import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '100%'
    },
    touchable: {
        width: '75%',
        backgroundColor: '#333333',
        borderRadius: 7,
    },
    text: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center'
    },
    formsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '100%',
        margin: 15,
        padding: 12
    },
    button: {
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 12,
        width: '85%',
        paddingVertical: 10,
        borderRadius: 7,
        elevation: 1,
        backgroundColor: '#333333'
    }
});