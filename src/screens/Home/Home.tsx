import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './HomeStyles';
import batmanLogo from '../../../assets/batmanLogo.png';
import { TextInputPhone } from '../../components/TextInputPhone/TextInputPhone';
import { TextInputName } from '../../components/TextInputName/TextInputName';
import { TextInputLocation } from '../../components/TextInputLocation/TextInputLocation';
import { TextInputNotes } from '../../components/TextInputNotes/TextInputNotes';

export function Home() {
    const [ isActivated, setActive ] = useState(false);

    const [ username, setUsername ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ notation, setNotation ] = useState('');

    function handlePressingActiveBatsignal(){
        setActive(true);
    }

    function handleUsername(username: string) {
        setUsername(username);
    }
    function handlePhoneNumber(phoneNumber: string) {
        setPhoneNumber(phoneNumber);
    }
    function handleCurrentLocation(location: string) {
        setLocation(location);
    }
    function handleNotation(notation: string) {
        setNotation(notation);
    }

    return (
        <ScrollView style={ { height: '100%', backgroundColor: '#FFFFFF', marginBottom: 15 } }>
            <View style={[ styles.homeContainer, { display: isActivated ? 'none' : 'flex' } ]}>
                <Image source={batmanLogo} />

                <TouchableOpacity style={ styles.touchable } onPress={ handlePressingActiveBatsignal }>
                    <Text style={ styles.text }>Activate BatSignal</Text>
                </TouchableOpacity>
            </View>
            <View style={[ styles.formsContainer, { display: !isActivated ? 'none' : 'flex' } ]}>
                <Image source={batmanLogo} style={ { height: 100, width: 100, objectFit:'contain' } } />

                <TextInputName username={username} handleUsername={ (username) => handleUsername(username) } />

                <TextInputPhone phone={ phoneNumber } handlePhoneNumber={ (phoneNumber) => handlePhoneNumber(phoneNumber) } />

                <TextInputLocation currentLocation={location} handleCurrentLocation={ (location) => handleCurrentLocation(location) } />

                <TextInputNotes notation={notation} handleNotation={ (notation) => handleNotation(notation) } />

                <Pressable style={ styles.button }>
                    <Text style={ styles.text }>Submit</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}