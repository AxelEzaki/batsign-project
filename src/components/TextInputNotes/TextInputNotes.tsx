import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './TextInputNotesStyles';

interface TextInputNotesProps {
    notation: string,
    handleNotation(notation: string): void
}

export function TextInputNotes(props: TextInputNotesProps) {
    return (
        <View style={styles.generalContainer}>
            <Text style={ styles.label }>Notes</Text>
            <TextInput value={ props.notation } selectTextOnFocus={false} onChangeText={ (location) => props.handleNotation(location) } 
                style={ styles.inputer } multiline={ true } maxLength={ 300 }/>
        </View>
    );
}