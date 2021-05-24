/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FlatButton from '../shared/FlatButton.js';

export default function Login() {
    return (
        <>
        <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/groceriesLogo.png')} />
            </View>
        </View>
        <View style={styles.lowerContainer}>
            <View  style={styles.buttonContainer}>
                <FlatButton text="create account" buttonColor="transparent" textColor="black" buttonBorder="#6D757D"/>
                <FlatButton text="sign in" buttonColor="#6D757D" textColor="white"/>

            </View>
        </View>
        </>
    )
};

const styles = StyleSheet.create({
    upperContainer: {
        height: '50%',
        backgroundColor: '#6D757D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
     lowerContainer: {
        height: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    imageContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    buttonContainer: {
        width: '100%',
    },
})