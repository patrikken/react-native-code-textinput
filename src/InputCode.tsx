import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';


import AppInput from './AppInput'

interface Props {
    /**
     * Size of the input code
     */
    codeSize: number,

    /**
     * On value the value input
     */
    onValueChange: (val: string) => void,

    /**
     * Custom style of each input
     */
    inputStyle: any,
}

export default class InputCode extends React.Component<Props, any> {
    constructor(props) {
        super(props);

        this.state = {
            inputs: Array.from({ length: this.props.codeSize })
        };
        this.inputsRefs = Array.from({ length: this.props.codeSize })
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.inputsRefs[0].childRef.focus();
    }


    getStringCode(): string {
        let code = '';
        this.state.inputs.map((item) => {
            code += item;
        })
        return code
    }

    async  onKeyPress(event, index, isBackspace = false) {
        //console.log('event -->', event.nativeEvent.key);
        const size = this.props.codeSize;
        const presetKey = event != null ? event.nativeEvent.key : null;
        let nextId = (index % size) + 1;
        if ((presetKey != null && presetKey === 'Backspace') || isBackspace) {
            nextId = (index % size) - 1;
            if (nextId < 0)
                return
            /*  let inputs = this.state.inputs;
             for (var i = index; i > this.state.inputs.length - 1; i++) {
                 alert(i)
                 inputs[i] = '';
             }
             this.setState({ inputs: inputs }) */
        }
        //console.log('key', nextId);
        if (nextId == size) {
            nextId = 0 // as array index start from 0
            //this.inputsRefs[index].childRef.blur();
            return;
        }
        /**
         * enable this code to allow automatical empty of next inputs
         * 
          let tmp = this.state.inputs;
            tmp[nextId] = '';
            this.setState({ inputs: tmp }, () => {
            this.inputsRefs[nextId].childRef.focus();
        })
         */

        this.inputsRefs[nextId].childRef.focus();
    }

    onTextChange = (val, index) => {
        if (Platform.OS == "android") {
            this.onKeyPress(null, index, val.length == 0)
        }
        let tmp = this.state.inputs;
        tmp[index] = val;
        this.setState({ inputs: tmp })
        this.props.onValueChange(this.getStringCode())
    }

    render() {
        return (
            <View style={{ alignItems: 'flex-start', flexDirection: 'row', }}>
                {this.state.inputs.map((item, index) => {
                    return (
                        <AppInput
                            ref={(ref) => this.inputsRefs[index] = ref}
                            maxLength={1}
                            key={index}
                            placeholder=''
                            value={item}
                            onChangeText={(val) => this.onTextChange(val, index)}
                            style={[styles.input_code, this.props.inputStyle]}
                            onKeyPress={(event) => this.onKeyPress(event, index)}
                            keyboardType='numeric'
                            blurOnSubmit={true} />
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input_code: {
        width: 40,
        marginRight: 20,
        textAlign: 'center',
    }
})

/* InputCode.defaultProps = {
    codeSize: 4,
}
InputCode.propTypes = {
    codeSize: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
    inputStyle: PropTypes.object,
}
 */