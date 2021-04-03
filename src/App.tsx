import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import Signup from './Screens/Username';
import Password from './Screens/Password';
import Login from './Screens/Login';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrap}>
        <Login />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f3640",
  },
  contentWrap: {
    padding: 24,
  }
});

export default App;
