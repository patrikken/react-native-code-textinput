
# react-native-dialog-input
Input code component for React Native on iOS and Android.

## Examples

![React Native Code Input](https://res.cloudinary.com/dehgyoegg/image/upload/v1591652476/Screenshot_2020-06-09_at_00.20.05_ifdxdy.png)
![React Native Code Input Video](https://res.cloudinary.com/dehgyoegg/video/upload/v1591652473/Screen_Recording_2020-06-09_at_00.20.59_rseruc.mov)

## Setup

```bash
npm install --save react-native-code-input
```

## Usage

```javascript
import CodeInput from 'react-native-code-input';
...
<DialogInput 
            codeSize={4} 
            prefilledValue={"1234"}  
            onValueChange={(val) => { }} 
            inputStyle={styles.input_style} >
</DialogInput>
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

## Methods

 name            | description                                        | returns
:--------------  |:-------------------------------------------------- | -------:
 onValueChange() | Event fired when the user fill an input            |  String 