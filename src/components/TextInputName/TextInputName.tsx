import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './TextInputNameStyles';

interface TextInputNameProps {
    username: string,
    handleUsername(username: string): void
}

export function TextInputName(props: TextInputNameProps) {
  return (
    <View style={styles.generalContainer}>
        <Text style={ styles.label }>Name</Text>
        <TextInput value={ props.username } selectTextOnFocus={false} onChangeText={ (username) => props.handleUsername(username) } 
            style={ styles.inputer } maxLength={300} />
    </View>
  );
}