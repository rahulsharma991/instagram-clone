/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({text , onPress, buttonColor,textColor, buttonBorder}) {
    return (
        <TouchableOpacity
        onPress={onPress}>
        <View style={[styles.button, { backgroundColor: buttonColor}, { borderColor: buttonBorder }]}>
        <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderWidth: 2,
    margin: 10
    },
    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})