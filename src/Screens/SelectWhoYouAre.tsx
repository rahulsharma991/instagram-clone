/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import FlatButton from '../shared/FlatButton.js';

export default function WhoYouAre() {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.backButtonArea}>
      <Text>Back</Text>
    </View>
    <View style={styles.welcomeTextArea}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.welcomeText}>Please sign up first</Text>
    </View>
    <ScrollView>
    <Text style={{fontSize: 18,textAlign: 'center'}}>Who you are?</Text>
    <View style={styles.optionButtonsArea}>
       <FlatButton text="Source trader" buttonColor="transparent" textColor="black" buttonBorder="#6D757D"/>
       <FlatButton text="source vendor" buttonColor="transparent" textColor="black" buttonBorder="#6D757D"/>
        <FlatButton text="trader" buttonColor="transparent" textColor="black" buttonBorder="#6D757D"/>
       <FlatButton text="vendor" buttonColor="transparent" textColor="black" buttonBorder="#6D757D"/>
    </View>
    </ScrollView>
  <View style={styles.nextButtonArea}>
    <TouchableOpacity >
    <Text style={styles.nextButton}>N</Text>
    </TouchableOpacity>
    <Text style={styles.needHelpText}>Need Help?</Text>
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
  fontSize: 18
},
optionButtonsArea: {
  marginVertical: 40
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

needHelpText: {
  position: 'absolute',
  right: 20,
  fontSize: 18
}
})