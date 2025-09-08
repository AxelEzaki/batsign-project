import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './TextInputPhoneStyles';

interface TextInputPhoneProps {
    phone: string,
    handlePhoneNumber(phoneNumber: string): void
}

export function TextInputPhone(props: TextInputPhoneProps) {
    return (
        <View style={styles.generalContainer}>
            <Text style={ styles.label }>Phone</Text>
            <TextInput keyboardType='phone-pad' value={ props.phone } selectTextOnFocus={false} onChangeText={ (phoneNumber) => props.handlePhoneNumber(phoneNumber) } 
                style={ styles.inputer } maxLength={11} />
        </View>
    );
}