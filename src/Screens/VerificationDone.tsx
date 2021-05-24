/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function VerificationDone() {
  return (
    <>
    <View style={styles.container}>
     <Image source={require('../assets/verifing.png')} />
    <View style={styles.welcomeTextArea}>
      <Text style={styles.welcomeText}>We are verifing... </Text>
    </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
container: {
  height: '100%',
   display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
},
backButtonArea: {
  padding: 10,
  marginVertical: 10,
  marginHorizontal: 10
},
welcomeTextArea: {
  padding: 10,
  marginVertical: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 
},
welcomeText: {
  paddingVertical: 10,
  fontSize: 20,
  textAlign: 'center',
},
})