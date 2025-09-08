import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './TextInputLocationStyles';

interface TextInputLocationProps {
    currentLocation: string,
    handleCurrentLocation(location: string): void
}

export function TextInputLocation(props: TextInputLocationProps) {
    return (
        <View style={styles.generalContainer}>
            <Text style={ styles.label }>Current Location</Text>
            <TextInput value={ props.currentLocation } selectTextOnFocus={false} onChangeText={ (location) => props.handleCurrentLocation(location) } 
                style={ styles.inputer } multiline={ true } maxLength={ 300 }/>
        </View>
    );
}