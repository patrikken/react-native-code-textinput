/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import InputCode from '../src/CodeInput';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#1e353c" }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
            <Text style={styles.name}>[ react-native-code-input ]</Text>
            <Text style={styles.title}>ENTER YOUR CODE</Text>
            <Text style={styles.subtitle}>Please enter the code we sent to your phone</Text>
            <InputCode
              prefilledValue={1234}
              codeSize={4}
              onValueChange={(val) => { }}
              inputStyle={styles.input_style}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", height: 100 }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: "#FFF", padding: 5, borderRadius: 5 }}>
              <Text style={styles.title}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    color: "#FFF",
    fontSize: 15,
    marginBottom: 40,
    //fontWeight: "italic"
  },
  subtitle: {
    color: "#FFF",
    fontSize: 15,
    marginBottom: 40
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold"
  },
  scrollView: {
    //backgroundColor: Colors.lighter,
    flex: 1,
  },
  input_style: {
    backgroundColor: "#182b32",
    height: 40,
    borderRadius: 10,
    color: "#FFF",
    fontSize: 18
  }
});

export default App;
