/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import FlatButton from '../shared/FlatButton.js';

export default function DocumentVerification() {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.backButtonArea}>
      <Text>Back</Text>
    </View>
    <View style={styles.welcomeTextArea}>
      <Text style={styles.welcomeText}>Document Verification</Text>
    </View>
     <View style={styles.optionButtonsArea}>
     <Image source={require('../assets/upload.png')} />
    </View>
     <FlatButton text="Upload" buttonColor="#6D757D" textColor="white" buttonBorder="#6D757D"/>
      <Text style={styles.docVerifyText}>Please upload Aadhaar Card, PAN Card, Work Permit.</Text>
      <Text style={styles.docVerifyText}>Note: All are mandatory</Text>
      <View style={styles.uploaddocsContainer}>
      <Image source={require('../assets/uploaddocs.png')} />
      <Image source={require('../assets/uploaddocs.png')} />
      <Image source={require('../assets/uploaddocs.png')} />
      </View>
  <View style={styles.nextButtonArea}>
    <TouchableOpacity >
    <Text style={styles.nextButton}>SUBMIT</Text>
    </TouchableOpacity>
  </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
container: {
  height: '100%'
},
backButtonArea: {
  padding: 10,
  marginVertical: 10,
  marginHorizontal: 10
},
welcomeTextArea: {
  padding: 10,
  marginHorizontal: 10,
  marginVertical: 10,
},
welcomeText: {
  paddingVertical: 10,
  fontSize: 18,
  textAlign: 'center'
},
optionButtonsArea: {
  marginVertical: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},

 input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 10,
  },
nextButtonArea: {
  position: 'absolute',
  bottom: 10,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent :'center',
  alignItems: 'center'
 
},
nextButton: {
  backgroundColor: '#6D757D',
  width: 100,
  height: 70,
  marginVertical: 10,
  textAlign: 'center',
  borderRadius: 10,
  fontSize: 20,
  paddingTop: 22,
  paddingBottom: 22,
  color: 'white'
},
docVerifyText: {
  fontSize: 14,
  paddingHorizontal: 15,
},
uploaddocsContainer: {
  display: 'flex',
  flexDirection: 'row',
  marginVertical: 30,
  justifyContent: 'space-evenly'
}

})