import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';


import AppInput from './AppInput'
import { KeyboardTypeOptions } from 'react-native';

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

    /**
     * Pre-fill the input width a value
     */
    prefilledValue?: string,

    /**
     * Custom keyboardTypeOptions
     */
    keyboardTypeOptions?: KeyboardTypeOptions
}

interface State {
    inputs: string[]
}

export default class CodeInput extends React.Component<Props, State> {
    inputsRefs: AppInput[]
    constructor(props: Props) {
        super(props);
        this.inputsRefs = Array.from({ length: props.codeSize })
        const values: string[] = Array.from({ length: props.codeSize })
        console.log(props);
        if (props.prefilledValue) {
            const prefilledValue = props.prefilledValue + "";
            for (let index = 0; index < prefilledValue.length; index++) {
                if (index < props.codeSize) {
                    values[index] = prefilledValue.charAt(index)
                }
            }
        }

        this.state = {
            inputs: values
        };
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
        const size = this.props.codeSize;
        const presetKey = event != null ? event.nativeEvent.key : null;
        let nextId = (index % size) + 1;
        if ((presetKey != null && presetKey === 'Backspace') || isBackspace) {
            nextId = (index % size) - 1;
            if (nextId < 0)
                return
        }

        if (nextId == size) {
            nextId = 0;
            return;
        }

        this.inputsRefs[nextId].childRef.focus();
    }

    onTextChange = (val: string, index: number) => {
        if (Platform.OS == "android") {
            this.onKeyPress(null, index, val.length == 0)
        }
        let tmp = this.state.inputs;
        if (val.length > 1) {
            tmp[index] = val.charAt(val.length - 1);
        } else {
            tmp[index] = val;
        }
        this.setState({ inputs: tmp });
        this.props.onValueChange(this.getStringCode());
    }

    render() {
        return (
            <View style={{ alignItems: 'flex-start', flexDirection: 'row', }}>
                {this.state.inputs.map((item, index) => {
                    return (
                        <AppInput
                            ref={(ref) => this.inputsRefs[index] = ref}
                            //maxLength={1}
                            key={index}
                            value={item}
                            onChangeText={(val) => this.onTextChange(val, index)}
                            style={[styles.input_code, this.props.inputStyle]}
                            onKeyPress={(event) => this.onKeyPress(event, index)}
                            keyboardType={this.props.keyboardTypeOptions || 'number-pad'}
                            blurOnSubmit={true}
                        />
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