import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 12
    },
    label: {
        fontSize: 24
    },
    inputer: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 7,
        minWidth: '90%',
        minHeight: 150,
        height: 'auto',
        textAlignVertical: 'top'
    }
});