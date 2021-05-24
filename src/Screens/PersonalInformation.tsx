/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';

export default function PersonalInformation() {
  const [number, onChangeNumber] = React.useState(null);
  return(
    <>
    <View style={styles.container}>
    <View style={styles.backButtonArea}>
      <Text>Back</Text>
    </View>
    <View style={styles.welcomeTextArea}>
      <Text style={styles.welcomeText}>Personal Information</Text>
      <Text style={styles.welcomeText}>Please select preffered language</Text>
    </View>
    <ScrollView>
    <View style={styles.optionButtonsArea}>
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="First Name"
        keyboardType="default"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Email"
        keyboardType="email-address"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone No."
        keyboardType="phone-pad"
      />
    </View>
    </ScrollView>
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
  textAlign: 'center' 
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