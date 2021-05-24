/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function PhoneScreenOtp() {
  return(
    <>
    <View style={styles.container}>
    <View style={styles.backButtonArea}>
      <Text>Back</Text>
    </View>
    <View style={styles.welcomeTextArea}>
      <Text style={styles.welcomeText}>Phone Verification</Text>
      <Text style={styles.welcomeText}>Enter the 6 digit OTP code</Text>
    </View>
    <View style={styles.optionButtonsArea}>
    </View>
  <View style={styles.nextButtonArea}>
    <TouchableOpacity >
    <Text style={styles.nextButton}>N</Text>
    </TouchableOpacity>
  </View>
  </View>
    </>
  )
};

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
},
optionButtonsArea: {
  marginVertical: 40
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
  width: 70,
  height: 70,
  marginVertical: 10,
  textAlign: 'center',
  borderRadius: 50,
  fontSize: 20,
  paddingTop: 22,
  paddingBottom: 22,
  color: 'white'
},


})