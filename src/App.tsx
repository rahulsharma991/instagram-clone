/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
// import Signup from './Screens/Username';
// import Password from './Screens/Password';
// import Login from './Screens/Login';
// import PrefferedLanguage from './Screens/SelectPrefferedLanguage';
// import WhoYouAre from './Screens/SelectWhoYouAre';
// import PersonalInformation from './Screens/PersonalInformation';
// import PhoneScreenOtp from './Screens/PhoneScreenOtp';
// import DocumentVerification from './Screens/DocumentVerification';
import VerificationDone from './Screens/VerificationDone';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <VerificationDone />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

 
});

export default App;
