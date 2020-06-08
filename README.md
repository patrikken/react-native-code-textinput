
# react-native-code-textinput
Input code component for React Native on iOS and Android.

## Examples

![React Native Code Input Squared](https://res.cloudinary.com/dehgyoegg/image/upload/v1591659890/screenshots/Screenshot_2020-06-09_at_02.39.41_nf7o8f.png)
![React Native Code Input Rounded](https://res.cloudinary.com/dehgyoegg/image/upload/v1591659890/screenshots/Screenshot_2020-06-09_at_02.41.46_vcta3v.png)
![React Native Code Input with Border](https://res.cloudinary.com/dehgyoegg/image/upload/v1591659890/screenshots/Screenshot_2020-06-09_at_02.42.24_wytihr.png)
![React Native Code Input Video1](https://res.cloudinary.com/dehgyoegg/image/upload/v1591660438/screenshots/Screen-Recording-2020-06-09-at-02.42.40_xtcfbm.gif) 
![React Native Code Input Video2](https://res.cloudinary.com/dehgyoegg/image/upload/v1591660437/screenshots/Screen-Recording-2020-06-09-at-02.40.44_kh0hu4.gif) 
![React Native Code Input Video1](https://res.cloudinary.com/dehgyoegg/image/upload/v1591660437/screenshots/Screen-Recording-2020-06-09-at-02.43.37_vtukut.gif) 

## Setup

```bash
npm install --save react-native-code-textinput
```

## Usage

```javascript
import CodeInput from 'react-native-code-textinput';
...
<CodeInput 
        codeSize={4} 
        prefilledValue={"1234"}  
        onValueChange={(val) => { }} 
        inputStyle={styles.input_style} >
</CodeInput>
...
```
## Properties

 name                  | description                                         | type     
:--------------------- |:--------------------------------------------------- | --------
 codeSize              | Size of the code (Number of TextInput to display)   |   Boolean
 prefilledValue        | Fill the inputs with default value                  |   String (OPTIONAL) 
 keyboardTypeOptions   | Keyboard type of inputs                             |   KeyboardTypeOptions (OPTIONAL)
 initValueTextInput    | Default value for the TextInput                     |   String (OPTIONAL)
 inputStyle            | Custom style of the Textinputs                      |   TextStyle (OPTIONAL) 
 activeStyle           | Custom style of when inputs are active              |   TextStyle (OPTIONAL) 

## Methods

 name            | description                                        | returns
:--------------  |:-------------------------------------------------- | -------:
 onValueChange() | Event fired when the user fill an input            |  String 